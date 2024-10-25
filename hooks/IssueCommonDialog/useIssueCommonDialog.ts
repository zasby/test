import { useRootStore } from "../useRootStore";
import { useTranslation } from "react-i18next";
import { useNotifier } from "../useNotifier";
import { useNavigate } from "react-router-dom";
import { BroadcastChannel } from "broadcast-channel";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { BoardFilterContext } from "../../contexts";
import { IssueCustomFieldDto, IssueDto } from "../../api";
import { ICreateFormRef, IIssueCommonDialog, IssueFormKeys } from "../../types/IssueCommonDialog.interface";
import { IssueQueryKeys, IssueType, IssueTypeKeys } from "../../constants/issueTypeKeys";
import { getDialogNotifications, resetIdsOfFields } from "../../helpers/issueCommonDialog/helpers";
import { useUpdate } from "../useUpdate";
import { api } from "../../services";
import { RelationsKeys } from "../../../components/modules/pages/communications/constants/keys";
import { sleep } from "../../helpers/timingFunctions";
import { truncateString } from "../../helpers/stringFunctions";
import { toJS } from "mobx";

export const useIssueCommonDialog = (props: IIssueCommonDialog) => {
  const { helperStore, authStore, issueInitDataStore, orgchartStore } = useRootStore();
  const { t } = useTranslation();
  const notifier = useNotifier();
  const navigate = useNavigate();
  const issueChannel = new BroadcastChannel("issue");

  const { onChangeUserRelation } = useContext(BoardFilterContext);

  const boardId = authStore.getCurrentBoardId;
  const createFormRef = useRef<ICreateFormRef>();

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [createBtnIsLoading, setCreateBtnIsLoading] = useState<boolean>(false);
  const [customFields, setCustomFields] = useState<IssueCustomFieldDto[]>([]);
  const [isOpenConfirmDialog, setIsOpenConfirmDialog] = useState<boolean>(false);

  const currentUserId = authStore.getInitialInfo?.identity?.id;

  const isCreateDialog = useMemo(() => {
    return props.formType == IssueFormKeys.create;
  }, [props.formType]);

  const isMultipleCreated = useMemo(
    () => props.issueType === IssueTypeKeys.task && (createFormRef.current?.executorIds?.length ?? 0) > 1,
    [props.issueType, createFormRef.current?.executorIds?.length]
  );

  const dialogNotifications = useMemo(
    () => getDialogNotifications(props.issueType!, t, isMultipleCreated),
    [props.issueType, createFormRef.current?.executorIds?.length]
  );

  const handlerApiError = () => {
    notifier.show({
      message: t("notifier:error.something_wrong"),
      theme: "error",
    });
  };

  const handleOpenConfirmDialog = () => setIsOpenConfirmDialog(true);

  // const db = new TextEditorContentDB();

  const handleForceCloseDialog = () => {
    // db.del("issue-history-editor");
    if (props.formType === IssueFormKeys.create) {
      localStorage.removeItem("issue-history-sender-block-" + props.issueId);
      localStorage.removeItem("issue-form-description-editor" + props.issueId);
    }
    issueInitDataStore.reset();
    props.onClose();
  };

  const handleCloseDialog = useCallback(() => {
    console.log("handleCloseDialog");
    props.formType === IssueFormKeys.create ? handleOpenConfirmDialog() : handleForceCloseDialog();
  }, [props.formType]);

  const postUpdater = useUpdate<IssueDto>(
    async (issue) => await api.issue.create(issue),
    async () => null,
    (r) =>
      r == null
        ? handlerApiError()
        : () => {
          issueChannel.postMessage({
            issueId: props.issueId,
            type: "issueBody",
          })
        }
  );

  const currentUpdater = useMemo(() => {
    return isCreateDialog ? postUpdater : props.updater!
  }, [isCreateDialog, props.updater, postUpdater]);

  useEffect(() => {
    if (isCreateDialog) {
      return () => {
        issueInitDataStore.setRelatedTaskLink = "";
      }
    }
  }, []);

  const handleSuccessCreateIssue = async (r?: IssueDto[] | null) => {
    if (!r || r == null) return handlerApiError();

    const getTabIdentifierByRelationType = (userRelationKey: string | null | undefined, executorId: number) => {
      if (userRelationKey == RelationsKeys.Participated) return RelationsKeys.Participated;
      if (userRelationKey == RelationsKeys.My) return RelationsKeys.My;
      if (userRelationKey == RelationsKeys.Controlled) return RelationsKeys.Controlled;
      return authStore.getInitialInfo?.identity?.id == executorId ? RelationsKeys.My : RelationsKeys.Controlled;
    };

    const handleConfigBoardContext = (executorId: number, userRelationKey?: string | null) => {
      // TODO: Проверить, почему табы не переключаются
      onChangeUserRelation &&
      onChangeUserRelation(
        userRelationKey != null
          ? getTabIdentifierByRelationType(userRelationKey, executorId)
          : authStore.getInitialInfo?.identity?.id == executorId
            ? RelationsKeys.My
            : RelationsKeys.Controlled
      );
    };

    const handleRedirect = (id: number, type?: string) =>
      navigate({
        search: `?${IssueQueryKeys.issueId}=${id}`,
      });

    const handleClick = (id: number, type: string, executorId: number, userRelationKey?: string | null) => {
      handleConfigBoardContext(executorId, userRelationKey);
      handleRedirect(id, type);
      notifier.destroy();
    };

    // if (r.length == 1) {
    //   await sleep(500);
    //   notifier.show({
    //     message: dialogNotifications.onCreate,
    //     theme: "success",
    //     timeout: 5,
    //   });
    //   handleRedirect(r[0]?.id!, r[0]?.type!);
    // } else {

    const getDialogSuccessNotificationButton = (type: IssueType) => "parse:go_to.task";

    const notificationButtonString = getDialogSuccessNotificationButton(props.issueType);
    for await (const issue of r) {
      if (issue.error) {
        handlerApiError();
      }
      if (issue == null || issue.error) continue;
      await sleep(50);
      notifier.show({
        message: t(
          issue.calculated?.userRelation?.name?.trim()?.length ? "parse:issue_created_on_tab" : "parse:issue_created",
          {
            taskId: issue.subId,
            taskName: truncateString(`${issue.name}`, 32, "end", true),
            // tabName: getTabNameByRelationType(issue.primaryUserRelation),
            tabName: issue.calculated?.userRelation?.name,
          }
        ),
        theme: "success",
        button: {
          text: t(notificationButtonString),
          onClick: () =>
            handleClick(issue.id!, IssueTypeKeys.task, issue.executorUserId!, issue.calculated?.userRelation?.key),
        },
        timeout: 5,
        key: String(issue.id!),
      });
      await issueChannel.postMessage({
        issueId: issue.id,
        type: "issueBody",
      });
    }
    // }
    issueInitDataStore.getOnCreate && issueInitDataStore.getOnCreate(r);
    // customEvent.dispatch("reloadIssueBoard", { boardId: boardId });
    // customEvent.dispatch("reloadIssueData");
    // customEvent.dispatch("reloadIssueHistory", { issueId: props.issueId });
    // customEvent.dispatch("reloadIssueStatuses");

    handleForceCloseDialog();
  };

  const handleCreateTasks = async () => {
    try {
      const resp = await api.issue.issuesCreateWithListExecutor(postUpdater.currentState
        ? {
          ...postUpdater.currentState,
          executorUser: undefined,
          boardId: boardId!,
          executorUserId: createFormRef.current?.executorIds,
          fields: resetIdsOfFields(postUpdater.currentState.fields),
        }
        : {}
      );
      handleSuccessCreateIssue(resp);
    } catch (err) {
      console.error(err);
      handlerApiError();
    }

    // const arrPromises = createFormRef.current?.executorIds?.map((executorId) =>
    //   api.issue.create(
    //     postUpdater.currentState
    //       ? {
    //           ...postUpdater.currentState,
    //           boardId: boardId!,
    //           executorUserId: executorId,
    //           fields: resetIdsOfFields(postUpdater.currentState.fields),
    //         }
    //       : {}
    //   )
    // );

    // Promise.all(arrPromises!).then(handleSuccessCreateIssue).catch(handlerApiError);
  };

  const handleIssueUpdate = async () => {
    //
  };

  const handleCreateMessageOrDecision = async () => {
    const r = await api.issue.create(
      postUpdater.currentState
        ? {
          ...postUpdater.currentState,
          boardId: boardId!,
          fields: resetIdsOfFields(postUpdater.currentState.fields),
        }
        : {}
    );
    if (r == null) handlerApiError();
    else handleSuccessCreateIssue([r]);
  };

  const handleCreate = () => {
    if (isCreateDialog) {
      setCreateBtnIsLoading(true);
      if (props.issueType === IssueTypeKeys.task) handleCreateTasks();
      else handleCreateMessageOrDecision();
    }
  };

  const handleLoadCustomFields = async () => {
    let fields = toJS(helperStore.getIssueCustomField.find((item) => item.type === props.issueType));
    if (fields && fields.items.length > 0) {
      setCustomFields(fields.items);
      return fields.items;
    } else {
      setIsLoading(true);
      const request = await api.helper.customField(props.issueType);
      setIsLoading(false);
      if (request == null) return handlerApiError();
      setCustomFields(request as IssueCustomFieldDto[]);
      helperStore.setIssueCustomField({ items: request as IssueCustomFieldDto[], type: props.issueType });
      return request;
    }
  };

  const handleClickCreate = () => createFormRef.current?.saveIssue && createFormRef.current?.saveIssue();

  const initializationForm = async () => {
    if (!isCreateDialog) return;
    const currentOrgchartId = orgchartStore.getCurrentOrgchartId ?? orgchartStore.getOrgchartsList[0]?.id ?? undefined;
    const fields = await handleLoadCustomFields();
    const description = issueInitDataStore.getRelatedTaskLink ?? undefined;

    postUpdater.setInitialState({
      // type: props.issueType,
      fields: (fields ?? []).map((item) => ({ ...item, valueBool: false })),
      createdByUserId: currentUserId,
      initiatorUserId: currentUserId,
      createdByUser: authStore.getInitialInfo?.identity,
      executorUserId: currentUserId,
      executorUser: authStore.getInitialInfo?.identity,
      orgchartId: currentOrgchartId,
      description,
      initiatorUser: {
        ...authStore.getInitialInfo?.identity,
      },
      ...issueInitDataStore.getIssueData,
    });
  };


  useEffect(() => {
    initializationForm();
  }, [props.formType]);

  // useEffect(() => {
  //   console.log(currentUpdater?.currentState?.timePlanForApproval);
  // }, [currentUpdater?.currentState?.timePlanForApproval]);
  return {
    isOpenConfirmDialog,
    setIsOpenConfirmDialog,
    handleForceCloseDialog,
    dialogNotifications,
    createFormRef,
    createBtnIsLoading,
    handleCreate,
    handleClickCreate,
    currentUpdater,
    customFields,
    handleCloseDialog,
    isLoading,
  }
}
