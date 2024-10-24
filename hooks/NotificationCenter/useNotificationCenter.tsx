import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { useNotificationHub } from "../../signalr/hubs/notificationHub";
import { useNotifier } from "../useNotifier";
import { useNavigate, useSearchParams } from "react-router-dom";
import { useDateHelpers } from "../useDateHelpers";
import { useIsFirstRender } from "../useIsFirstRender";
import { useSound } from "../useSound";
import notificationSound from "../../../assets/sounds/notification.wav";
import { useEffect, useMemo, useRef, useState } from "react";
import { INotificationCenterUnreadCount, TNotificationCenterTabKey } from "../../types";
import Visibility from "visibilityjs";
import { usePagingWithController } from "../usePaging";
import { NotificationDto } from "../../api";
import { api } from "../../services";
import { removeEmojiFromString } from "../../helpers/stringFunctions";
import {
  NotificationCenterNotification
} from "../../../components/service/notificationCenter/notificationCenterNotification/NotificationCenterNotification";
import { LucideBell } from "lucide-react";
import { clearInterval as wtClearInterval, setInterval as wtSetInterval } from "worker-timers";
import useLocalStorage from "../useLocalStorage";

export const useNotificationCenter = () => {
  const { t } = useTranslation();
  const { authStore, appStore } = useRootStore();

  const notificationHub = useNotificationHub();
  const notifier = useNotifier();
  const navigate = useNavigate();
  const dateHelpers = useDateHelpers();
  const isFirstRender = useIsFirstRender();

  const [playNotificationSound] = useSound(notificationSound, { volume: 0.4, interrupt: true });
  const [searchParams, setSearchParams] = useSearchParams();
  const playNotificationSoundRef = useRef<any>(null);
  const titleBlinkIntervalRef = useRef<any>(null);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [currentTab, setCurrentTab] = useState<TNotificationCenterTabKey>("needActions");
  const [isUnreadOnly, setIsUnreadOnly] = useLocalStorage<boolean>("ncUnreadOnly", true);
  const [isFaviconAndTitleBlinking, setIsFaviconAndTitleBlinking] = useState<boolean>(false);
  const [isNewNotificationTooltipOpen, setIsNewNotificationTooltipOpen] = useState<boolean>(false);
  const [unreadMessagesCount, setUnreadMessagesCount] = useState<INotificationCenterUnreadCount>({
    all: 0,
    inObservation: 0,
    needActions: 0,
  });
  const [notificationsWithInvertedReadStatusIds, setNotificationsWithInvertedReadStatusIds] = useState<number[]>([]);
  const [loadingNotificationsIds, setLoadingNotificationsIds] = useState<number[]>([]);
  const [isMarkAllAsReadLoading, setIsMarkAllAsReadLoading] = useState(false);

  const documentTitles = useRef({
    default: document.title,
    hasNotifications: t("parse:new_notification"),
  });

  const visibilityChangeListener = Visibility.change(function (e, state) {
    if (!Visibility.hidden()) {
      setIsFaviconAndTitleBlinking(false);
    }
  });

  const notificationsAll = usePagingWithController<NotificationDto, any>(
    api.notification,
    { isRead: isUnreadOnly ? false : null, thenOrderBy: "date_created", thenOrder: "desc" },
    { orderBy: "is_read", order: "asc", pageSize: 15 }
  );

  const notificationsNeedActions = usePagingWithController<NotificationDto, any>(
    api.notification,
    { isRead: isUnreadOnly ? false : null, baseType: 1, thenOrderBy: "date_created", thenOrder: "desc" },
    { orderBy: "is_read", order: "asc", pageSize: 15 }
  );

  const notificationsInObservation = usePagingWithController<NotificationDto, any>(
    api.notification,
    { isRead: isUnreadOnly ? false : null, baseType: 2, thenOrderBy: "date_created", thenOrder: "desc" },
    { orderBy: "is_read", order: "asc", pageSize: 15 }
  );

  const loadUnreadMessagesCount = async () => {
    const r1 = await api.notification.autocomplete({ isRead: false, pageSize: 0, baseType: 1 });
    const r2 = await api.notification.autocomplete({ isRead: false, pageSize: 0, baseType: 2 });
    const r3 = await api.notification.autocomplete({ isRead: false, pageSize: 0 });
    setUnreadMessagesCount({
      // all: (r1?.totalItems ?? 0) + (r2?.totalItems ?? 0),
      needActions: r1?.totalItems ?? 0,
      inObservation: r2?.totalItems ?? 0,
      all: r3?.totalItems ?? 0,
    });
  };

  const reloadTab = async (tabKey?: TNotificationCenterTabKey, withReset?: boolean) => {
    setNotificationsWithInvertedReadStatusIds([]);
    if (tabKey == "all" || tabKey == null) {
      if (withReset) notificationsAll.reset();
      await notificationsAll.restart();
    }
    if (tabKey == "inObservation" || tabKey == null) {
      if (withReset) notificationsInObservation.reset();
      await notificationsInObservation.restart();
    }
    if (tabKey == "needActions" || tabKey == null) {
      if (withReset) notificationsNeedActions.reset();
      await notificationsNeedActions.restart();
    }
  };

  const resetAllTabs = () => {
    notificationsAll.reset();
    notificationsNeedActions.reset();
    notificationsInObservation.reset();
  };

  const handleCurrentTabChange = (newTab: TNotificationCenterTabKey) => {
    setCurrentTab(newTab);
    setNotificationsWithInvertedReadStatusIds([]);
    reloadTab(newTab, true);
  };

  const handleUnreadOnlyChange = async (isChecked: boolean) => {
    setNotificationsWithInvertedReadStatusIds([]);
    setIsUnreadOnly(isChecked);
  };

  const handleLoadMore = async (tabKey: TNotificationCenterTabKey) => {
    if (tabKey == "all") await notificationsAll.loadNext();
    if (tabKey == "inObservation") await notificationsInObservation.loadNext();
    if (tabKey == "needActions") await notificationsNeedActions.loadNext();
  };

  const handleNotificationClick = async (
    notificationId: number,
    entityType?: string | null,
    entityId?: number | null
  ) => {
    if (entityType == null || entityId == null || notificationId == null) return;
    notifier.close(notificationId.toString());
    api.notification.setIsRead({ id: notificationId, setRead: true }).finally(() => {
      loadUnreadMessagesCount();
    });
    handleOpenChange(false);
    if (entityType == "issue") {
      searchParams.set("issueId", entityId?.toString());
      setSearchParams(searchParams);
    }
    if (entityType == "regulation") {
      navigate(`/policy/all/${entityId}/`);
    }
    if (entityType == "section") {
      navigate(`/policy/topics/${entityId}/`);
    }
  };

  const handleMarkAllAsReadClick = async (tabKey: TNotificationCenterTabKey) => {
    setIsMarkAllAsReadLoading(true);
    const r = await api.notification.setIsRead({
      baseType: tabKey == "needActions" ? 1 : tabKey == "inObservation" ? 2 : undefined,
      setRead: true,
    });
    if (r == null) {
      notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });
      return;
    }
    await loadUnreadMessagesCount();
    setIsMarkAllAsReadLoading(false);
    setNotificationsWithInvertedReadStatusIds([]);
    await reloadTab(currentTab, true);
  };

  const handleMarkAsReadUnreadClick = async (notificationId: number, initialIsReadStatus: boolean) => {
    if (notificationId == null) return;
    const isNotificationIsReadStatusInverted = notificationsWithInvertedReadStatusIds.includes(notificationId);
    setLoadingNotificationsIds((prev) => [...prev, notificationId]);
    const r =
      initialIsReadStatus !== isNotificationIsReadStatusInverted
        ? await api.notification.setIsRead({ id: notificationId, setRead: false })
        : await api.notification.setIsRead({ id: notificationId, setRead: true });
    setLoadingNotificationsIds((prev) => prev.filter((id) => id != notificationId));
    if (r == null) {
      notifier.show({ message: t("notifier:error.something_wrong"), theme: "error" });
      return;
    }
    isNotificationIsReadStatusInverted
      ? setNotificationsWithInvertedReadStatusIds(
        notificationsWithInvertedReadStatusIds.filter((id) => id != notificationId)
      )
      : setNotificationsWithInvertedReadStatusIds((prev) => [...prev, notificationId]);
    await loadUnreadMessagesCount();
  };

  const handleGetNotificationDataById = async (notificationId: number): Promise<NotificationDto | null> => {
    const r = await api.notification.getById(notificationId);
    return r ?? null;
  };

  const playNotificationSoundWrapper = () => {
    if (appStore.getNotificationsVisibilitySettingsState.notificationsCenter == "off") return;
    if (appStore.getAudioSettingsState.notifications == "inactiveOnly") {
      if (Visibility.isSupported() && !Visibility.hidden()) return;
    }
    if (appStore.getAudioSettingsState.notifications == "off") return;
    playNotificationSoundRef.current && playNotificationSoundRef.current();
  };

  const blinkFaviconAndTitleWrapper = () => {
    if (appStore.getNotificationsVisibilitySettingsState.notificationsCenter == "off") return;
    if (Visibility.isSupported() && Visibility.hidden()) {
      setIsFaviconAndTitleBlinking(true);
    }
  };

  const showNotificationNotifier = async (notificationId: number) => {
    if (appStore.getNotificationsVisibilitySettingsState.notificationsCenter == "tooltipOnly") {
      playNotificationSoundWrapper();
      blinkFaviconAndTitleWrapper();
      return setIsNewNotificationTooltipOpen(true);
    }
    if (appStore.getNotificationsVisibilitySettingsState.notificationsCenter != "on") {
      return;
    }
    const notificationData = await handleGetNotificationDataById(notificationId);
    if (notificationData == null) return;
    const isNotificationForCurrentCompany = notificationData.company?.id == authStore.getCurrentCompanyId;
    playNotificationSoundWrapper();
    blinkFaviconAndTitleWrapper();
    notifier.show({
      message: removeEmojiFromString(notificationData.contentDto?.name ?? ""),
      description: <NotificationCenterNotification notification={notificationData} />,
      theme: "info",
        key: notificationId.toString(),
        icon: (
        <div
          style={{ width: "24px", height: "24px" }}
      children={<LucideBell size={24} color="var(--color-primary-base)" />}
      />
  ),
    timeout: Visibility.isSupported() && Visibility.hidden() ? 0 : 10,
      button: isNotificationForCurrentCompany
      ? {
        text: t("parse:open"),
        onClick: () =>
          handleNotificationClick(
            notificationData.id!,
            notificationData.additionalParams?.entity,
            notificationData.additionalParams?.id
          ),
      }
      : undefined,
  });
  };
  const handleOpenChange = (value: boolean) => {
    setIsOpen(value);
    setIsNewNotificationTooltipOpen(false);
    if (value) {
      notificationsNeedActions.restart();
      loadUnreadMessagesCount();
    } else {
      // Close
      resetAllTabs();
      setCurrentTab("needActions");
      // setIsUnreadOnly(false);
      setLoadingNotificationsIds([]);
      setNotificationsWithInvertedReadStatusIds([]);
    }
  };

  useEffect(() => {
    playNotificationSoundRef.current = playNotificationSound;
  }, [playNotificationSound]);

  useEffect(() => {
    if (isFaviconAndTitleBlinking) {
      // Turn on
      titleBlinkIntervalRef.current = wtSetInterval(() => {
        document.title =
          document.title == documentTitles.current.default
            ? documentTitles.current.hasNotifications
            : documentTitles.current.default;
      }, 1500);
    } else {
      // Turn off
      document.title = documentTitles.current.default;
      titleBlinkIntervalRef.current != null && wtClearInterval(titleBlinkIntervalRef.current);
      // TODO: Add clear on unmount
    }
  }, [isFaviconAndTitleBlinking]);

  useEffect(() => {
    if (isFirstRender) return;
    reloadTab(currentTab, true);
  }, [isUnreadOnly]);

  useEffect(() => {
    if (isNewNotificationTooltipOpen) {
      setTimeout(() => {
        setIsNewNotificationTooltipOpen(false);
      }, 5000);
    }
  }, [isNewNotificationTooltipOpen]);

  useEffect(() => {
    if (notificationHub.connection) {
      notificationHub.connection.on("notification", async (message) => {
        await loadUnreadMessagesCount();
        await showNotificationNotifier(message);
        // handleOpenChange(false);
      });
      notificationHub.connection.on("updateCounter", async () => {
        await loadUnreadMessagesCount();
      });
    }
  }, [notificationHub.connection]);

  useEffect(() => {
    return () => {
      if (typeof visibilityChangeListener === "number") {
        Visibility.unbind(visibilityChangeListener);
      }
    };
  }, []);

  useEffect(() => {
    try {
      notificationHub.start().then(() => {
        //
      });
    } catch (err) {
      console.error("Notifications Center: Realtime connection failed");
    }
    return () => {
      notificationHub.stop();
    };
  }, []);

  useEffect(() => {
    loadUnreadMessagesCount();
  }, []);

  const notificationData = useMemo(() => (
    {
      all: {
        items: notificationsAll.items,
        isLoading: notificationsAll.info.isLoading,
        isDone: notificationsAll.info.isDone,
        itemsTotalLength: notificationsAll.info.totalItems,
      },
      needActions: {
        items: notificationsNeedActions.items,
        isLoading: notificationsNeedActions.info.isLoading,
        isDone: notificationsNeedActions.info.isDone,
        itemsTotalLength: notificationsNeedActions.info.totalItems,
      },
      inObservation: {
        items: notificationsInObservation.items,
        isLoading: notificationsInObservation.info.isLoading,
        isDone: notificationsInObservation.info.isDone,
        itemsTotalLength: notificationsInObservation.info.totalItems,
      },
    }
  ), [notificationsAll]);

  return {
    currentTab,
    isOpen,
    isUnreadOnly,
    notificationData,
    unreadMessagesCount,
    notificationsWithInvertedReadStatusIds,
    loadingNotificationsIds,
    isMarkAllAsReadLoading,
    isNewNotificationTooltipOpen,
    handleCurrentTabChange,
    handleUnreadOnlyChange,
    handleOpenChange,
    handleNotificationClick,
    handleMarkAllAsReadClick,
    handleMarkAsReadUnreadClick,
    handleLoadMore,
  }
}
