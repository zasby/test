import { useIssueHub } from "../../signalr/hubs/issueHub";
import { useRootStore } from "../useRootStore";
import { useLocation, useNavigate } from "react-router-dom";
import { useNotifier } from "../useNotifier";
import { useTranslation } from "react-i18next";
import { BroadcastChannel } from "broadcast-channel";
import { useEffect, useState } from "react";
import { IssueCustomFieldDto, IssueUpdateMessage } from "../../api";
import {
  checkQueryIssueId,
  removeQueryIssueIdAndIssueType,
  setQueryIssueId
} from "../../helpers/issueUpdateWraper/helpers";
import { useUpdateWithController } from "../useUpdate";
import { api } from "../../services";
import { IssueTypeKeys } from "../../constants/issueTypeKeys";
import { toJS } from "mobx";
import { RealtimeIssuesKeys } from "../../types/communication";

export const useIssueUpdateWrapper = () => {
  const { start, connection, messages } = useIssueHub();
  const { helperStore, authStore } = useRootStore();
  const location = useLocation();
  const notifier = useNotifier();
  const navigate = useNavigate();
  const { t } = useTranslation();
  // const globalAuthorizedContext = useContext(GlobalAuthorizedContext);
  const issueChannel = new BroadcastChannel("issue");
  const tagsChannel = new BroadcastChannel("tags");


  const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [issueType, setIssueType] = useState<IssueType | null>(null); // тип issue
  const [customFields, setCustomFields] = useState<IssueCustomFieldDto[]>([]); // буду прокидовать в просы формы, они там нужны будут

  const issueId = checkQueryIssueId(location.search);
  const updater = useUpdateWithController(api.issue, () => {
    // issueChannel.postMessage({
    //   issueId: issueId,
    //   type: "issueUpdate",
    // });

    // // customEvent.dispatch("reloadIssueHistory", { issueId: Number(issueId) });
    // globalAuthorizedContext?.issue?.reload?.issueHistory && globalAuthorizedContext?.issue?.reload?.issueHistory();
  }, {
    includeIndicators: true,
    includeActions: true,
  });

  const handleClose = () => {
    issueChannel.postMessage({
      issueId: issueId,
      type: "issueUpdate",
    });
    tagsChannel.postMessage({
      type: "reload",
    })
    navigate({ search: removeQueryIssueIdAndIssueType(location.search) });
  };

  const handlerApiError = (notFound?: boolean) => {
    handleClose(); // сбрасываю query если произошла ошибка при загрузке
    notifier.show({
      message: notFound ? t("notifier:error.issue_not_found") : t("notifier:error.something_wrong"),
      theme: "error",
    });
  };

  const handleReopenById = (id: number) => {
    setTimeout(() => {
      navigate({ search: setQueryIssueId(location.search, id) });
    }, 400);
  };

  const handleLoadCustomFields = async () => {
    const fieldsType = IssueTypeKeys.task;
    let fields = toJS(helperStore.getIssueCustomField.find((item) => item.type === fieldsType));
    if (fields && fields.items.length > 0) {
      setCustomFields(fields.items);
    } else {
      setIsLoading(true);
      const request = await api.helper.customField(fieldsType);
      setIsLoading(false);
      if (request == null) return handlerApiError();
      setCustomFields(request as IssueCustomFieldDto[]);
      helperStore.setIssueCustomField({ items: request, type: fieldsType });
    }
  };

  const handleLoadIssue = async () => {
    setIsLoading(true);
    // updater.setInitialState({}); //
    const request = await api.issue.getById(Number(issueId), {
      includeIndicators: true,
      // includeNextStatuses: true,
      includeActions: true,
    });
    setIsLoading(false);
    if (request == null) return handlerApiError(true);
    await api.notification.setIsRead({ issueId: Number(issueId), setRead: true });

    updater.setInitialState(request);
    // setIssueType(IssueTypeKeys.task);
  };

  const handleReloadIssue = async () => {
    if (issueId == null) return;
    api.issue
      .getById(issueId, {
        includeIndicators: true,
        // includeNextStatuses: true,
        includeActions: true,
      })
      .then((res) => {
        if (res !== null) {
          console.log(res);
          updater.setInitialState(res);
          // updater.applyChanges(res);
        }
      });
  };

  const realtimeMessageHandler = (message: IssueUpdateMessage) => {
    // if (
    //   message.type === RealtimeIssuesKeys.HistoryUpdated
    //   // message.byUserId != authStore.getInitialInfo?.identity?.id
    // ) {
    //   console.log("sockets history update");
    //   if (message.issueId === issueId) {
    //     api.issue
    //       .getById(message.issueId, {
    //         includeIndicators: true,
    //         includeNextStatuses: true,
    //         includeActions: true,
    //       })
    //       .then((res) => {
    //         if (res !== null) {
    //           updater.applyChanges(res);
    //         }
    //       });
    //   }
    // }

    if (message.type === RealtimeIssuesKeys.Updated && message.byUserId != authStore.getInitialInfo?.identity?.id) {
      if (message.issueId === issueId) {
        api.issue
          .getById(message.issueId, {
            includeIndicators: true,
            // includeNextStatuses: true,
            includeActions: true,
          })
          .then((res) => res !== null && updater.applyChanges(res));
      }
    }

    if (message.type === RealtimeIssuesKeys.Deleted && message.byUserId != authStore.getInitialInfo?.identity?.id) {
      if (message.issueId === issueId) {
        handleClose();
      }
    }
  };

  // useEffect(() => {
  //   if (!!location?.search.length) {
  //     const queryIssueType = checkIssueType(location.search);
  //     queryIssueType != issueType && setIssueType(queryIssueType);
  //   }
  // }, [location.search]);

  useEffect(() => {
    updater.reset();
    if (issueId) {
      handleLoadCustomFields();
      handleLoadIssue();
    }
  }, [issueId]);

  useEffect(() => {
    if (connection) {
      if (issueId) connection.on("IssueUpdate", realtimeMessageHandler);
      else if (!issueId && connection?.connectionId) connection?.off("IssueUpdate", realtimeMessageHandler);
    } else {
      try {
        start().then(() => messages.setCurrentBoardId(authStore.getCurrentBoardId as number));
      } catch (e) {
        console.log("Real time connection failed");
        // notifier.show({
        //   message: t("notifier:error.real_time_connect_fail"),
        //   theme: "error",
        //   timeout: 0,
        // });
      }
    }
    return () => connection?.off("IssueUpdate", realtimeMessageHandler);
  }, [connection, issueId]);

  // useEffect(() => {
  //   globalAuthorizedContext?.setState({
  //     ...globalAuthorizedContext,
  //     issue: {
  //       ...globalAuthorizedContext?.issue,
  //       reload: { ...globalAuthorizedContext?.issue?.reload, issueData: handleReloadIssue },
  //     },
  //   });
  // }, []);

  const handleIssueChannelMessage = (evt: any) => {
    console.log("reload detected", issueId, evt.issueId);
    if (issueId && evt.issueId == issueId) {
      api.issue
        .getById(evt.issueId, {
          includeIndicators: true,
          // includeNextStatuses: true,
          includeActions: true,
        })
        .then((res) => res !== null && updater.applyChanges(res));
    }
  };

  useEffect(() => {
    issueChannel?.addEventListener("message", handleIssueChannelMessage);

    return () => {
      issueChannel?.removeEventListener("message", handleIssueChannelMessage);
    };
  }, [issueId]);

  return {
    issueId,
    customFields,
    updater,
    isLoading,
    handleClose,
    handleReopenById,
  }
}
