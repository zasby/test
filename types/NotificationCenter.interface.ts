import { NotificationDto } from "../api";

export type TNotificationData = {
  [key in TNotificationCenterTabKey]: TNotificationDataItem;
};

export type TNotificationDataItem = {
  items: NotificationDto[];
  itemsTotalLength: number | undefined;
  isLoading: boolean;
  isDone: boolean;
};

export interface INotificationCenterViewProps {
  currentTab: TNotificationCenterTabKey;
  isOpen: boolean;
  isUnreadOnly: boolean;
  unreadNotificationsCount: INotificationCenterUnreadCount;
  notificationData: TNotificationData;
  notificationsWithInvertedReadStatusIds: number[];
  loadingNotificationsIds: number[];
  isMarkAllAsReadLoading: boolean;
  isNewNotificationTooltipOpen: boolean;

  onCurrentTabChange: (newTab: TNotificationCenterTabKey) => void;
  onUnreadOnlyChange: (isUnreadOnly: boolean) => void;
  onOpenChange: (isOpen: boolean) => void;
  onNotificationClick: (notificationId: number, entityType?: string | null, entityId?: number | null) => void;
  onMarkAllAsReadClick: (tabKey: TNotificationCenterTabKey) => void;
  onMarkAsReadUnreadClick: (notificationId: number, initialIsReadStatus: boolean) => void;
  onLoadMore: (tabKey: TNotificationCenterTabKey) => void;
}

export type INotificationCenterUnreadCount = {
  [key in TNotificationCenterTabKey]: number;
};

export type TNotificationCenterTabKey = "all" | "needActions" | "inObservation";

export interface INotificationCenterPopoverProps {
  currentTab: TNotificationCenterTabKey;
  isUnreadOnly: boolean;
  unreadMessagesCount: INotificationCenterUnreadCount;
  notificationData: TNotificationData;
  notificationsWithInvertedReadStatusIds: number[];
  loadingNotificationsIds: number[];
  isMarkAllAsReadLoading: boolean;

  onCurrentTabChange: (newTab: TNotificationCenterTabKey) => void;
  onUnreadOnlyChange: (isUnreadOnly: boolean) => void;
  onNotificationClick: (notificationId: number, entityType?: string | null, entityId?: number | null) => void;
  onMarkAllAsReadClick: (tabKey: TNotificationCenterTabKey) => void;
  onMarkAsReadUnreadClick: (notificationId: number, initialIsReadStatus: boolean) => void;
  onLoadMore: (tabKey: TNotificationCenterTabKey) => void;
}

export interface INotificationCenterTabProps {
  notificationData: TNotificationDataItem;
  tabKey: TNotificationCenterTabKey;
  unreadMessagesCount: number;
  notificationsWithInvertedReadStatusIds: number[];
  loadingNotificationsIds: number[];
  isMarkAllAsReadLoading: boolean;

  onNotificationClick: (notificationId: number, entityType?: string | null, entityId?: number | null) => void;
  onMarkAllAsReadClick: () => void;
  onMarkAsReadUnreadClick: (notificationId: number, initialIsReadStatus: boolean) => void;
  onLoadMore: () => void;
}

export interface INotificationCenterCardProps {
  data: NotificationDto;
  isIsReadStatusInverted: boolean;
  isLoading: boolean;

  onNotificationClick: () => void;
  onMarkAsReadUnreadClick: () => void;
}
