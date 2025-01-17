import { useRootStore } from "../useRootStore";
import { useCallback, useContext, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { GlobalAuthorizedContext, IssueContext } from "../../contexts";
import { IssueDto } from "../../api";
import debounce from "lodash/debounce";
import { useApi } from "../useApi";
import { api } from "../../services";
import { TagDto } from "../../api/models/TagDto";
import { ISelectTagOption } from "../../types/ISelectTags";
import { SwitchFieldType } from "../../../components/modules/forms/types/consts";
import { IIssueFormView } from "../../types/IssueForm.interface";

export const useTaskFormView = (props: IIssueFormView) => {
  const { authStore } = useRootStore();
  const [isValidationErrorExecutor, setIsValidationErrorExecutor] = useState(false);
  const { t } = useTranslation();
  const globalAuthorizedContext = useContext(GlobalAuthorizedContext);
  const currentUserId = authStore.getInitialInfo?.identity?.id;

  const { issueType } = useContext(IssueContext);

  const defaultOrgchartId = useMemo(
    () => props.updater?.currentState?.orgchartId,
    [props.updater?.currentState?.orgchartId]
  );

  const handleFinish = () => !isValidationErrorExecutor && props.onCreate && props.onCreate();

  const isAutoChangeUserRole = useRef<boolean>(false);

  const [currentTask, setCurrentTask] = useState<IssueDto>({
    name: props.updater.currentState?.name ?? undefined,
    description:  props.updater.currentState?.description ?? undefined,
    awaitedResult: props.updater?.currentState?.awaitedResult ?? "",
    tags: props.updater?.currentState?.tags ?? []
  });

  const prevCurrentTask = useRef<IssueDto | null>(null);

  const applyChanges = useCallback((newValue) => {
    setCurrentTask((prev) => ({
      ...prev,
      ...newValue
    }))
  }, []);

  useEffect(() => {
    if (prevCurrentTask.current) {
      props.updater?.applyChanges(currentTask);
      props.onUpdate();
    }
    prevCurrentTask.current = currentTask;
  }, [currentTask]);

  const onChangeDescription = useMemo(() => {
    return debounce((description) => applyChanges({ description }), 1000)
  }, []);


  const onChangeName = useMemo(() => {
    return debounce((event) => {
      !props.isUpdateForm
        ? applyChanges({name: event.target.value})
        : event.target.value.trim()?.length > 0 && applyChanges({name: event.target.value})
    }, 1000)
  }, [])

  const onChangeAwaitedResult = useMemo(() => {
    return debounce((event: any) => {
      applyChanges({ awaitedResult: event.target.value })
    }, 1000);
  }, []);

  const proofAttachmentsList = useMemo(() => {
    return (props.updater.currentState?.proof?.history?.comment?.attachments ?? [])
      .map((item) => item.file!);
  }, [props.updater.currentState?.proof?.history?.comment?.attachments?.length]);

  const tags = useApi(
    () =>
      api.tags.getAll({
        pageSize: -1,
        createByUserId: currentUserId,
      }),
    null,
    () => {},
    {},
    false
  );

  const refetchTags = useCallback(() => {
    return tags.fetch();
  }, []);

  useEffect(() => {
    refetchTags();
  }, []);

  const tagsList = useMemo(() => {
    return tags.value?.items ?? [];
  }, [tags.value?.items]);

  //
  // const [tagsList, setTagsList] = useState<TagDto[]>([]);
  // useEffect(() => {
  //   setTagsList(tags.value?.items ?? []);
  // }, [tags.value?.items]);

  const handleChangeTags = useCallback(async (data: any) => {
    const { addedTags = [],  removedTags = [] } = data;
    const addedTagsList: TagDto[] = addedTags.filter((tag: ISelectTagOption) => tag.id).map((tag: ISelectTagOption) => ({
      id: tag.id,
      name: tag.value,
    }));
    const uniqTags: TagDto[] = [];
    addedTagsList.forEach((tag) => {
      if (!(props.updater.currentState?.tags ?? []).find((item) => item.id === tag.id)) {
        uniqTags.push(tag);
      }
    });

    if (props.isUpdateForm) {
      if (removedTags.length) {
        const removedTagsTagIds = removedTags.join(",");
        const issue = await api.issue.deleteTags({
          id: props.issueId,
          tagIds: removedTagsTagIds,
        });
        if (!uniqTags.length && issue) {
          const { tags = [] } = issue;
          props.updater.applyChanges({
            tags,
            // tagIds,
          })
        }
      }

      if (uniqTags.length) {
        const tagIds = uniqTags.map((tag) => tag.id).join(",");
        const issue = await api.issue.addedTags({
          id: props.issueId,
          tagIds,
        });
        if (issue) {
          const { tags = [] } = issue;
          props.updater.applyChanges({
            tags,
          })
        }
      }
    } else {
      applyChanges({
        tags: addedTagsList.map(({ id, name }) => ({ id, name })),
      })
    }
    // const tagIds = tagIdsArr.join(",");
    // const newTags = addedTags.filter((tag: ISelectTagOption) => !tag.id);
    // console.log("newTags", newTags);
    // const tagIdsArr = addedTags.filter((tag: ISelectTagOption) => tag.id).map((tag: ISelectTagOption) => tag.id);
    // const tagIds = tagIdsArr.join(",");
    // console.log("tagIds", tagIds);
    // const status = await api.issue.addedTags({
    //   id: props.issueId,
    //   tagIds,
    // });
    // console.log("status", status);

  }, [props.issueId, props.updater.currentState?.tags]);

  const isShowsManagerApproval = useMemo(() => {
    return props.updater.currentState?.fields?.find((f) => f.key === SwitchFieldType.isManagerApprovalRequired)
      ?.valueBool
  }, [props.updater.currentState]);

  useEffect(() => {
    if (isShowsManagerApproval && props.isUpdateForm && !props.updater.currentState?.timePlanForApproval) {
      props.form.setFields([
        {
          name: 'timePlanForApproval',
          errors: [t("validation:field_required")],
          value: null,
        },
      ]);
    }
  }, [isShowsManagerApproval, props.updater.currentState?.timePlanForApproval]);

  const handleChangeTimePlanForApproval = (value: string | null) => {
    return props.onPickerChange("timePlanForApproval", value ?? null)
  }

  const isDisabledTimeApproval = useMemo(() => {
    return !(props.updater.currentState?.initiatorUserId === authStore.getInitialInfo?.identity?.id ||
      props.updater.currentState?.createdByUserId === authStore.getInitialInfo?.identity?.id ||
      props.updater.currentState?.executorUserId === authStore.getInitialInfo?.identity?.id)
  }, [
    props.updater.currentState?.initiatorUserId,
    props.updater.currentState?.createdByUserId,
    props.updater.currentState?.executorUserId,
    authStore.getInitialInfo?.identity?.id
  ]);

  return {
    handleFinish,
    currentTask,
    onChangeName,
    onChangeDescription,
    onChangeAwaitedResult,
    proofAttachmentsList,
    issueType,
    isShowsManagerApproval,
    isDisabledTimeApproval,
    tagsList,
    handleChangeTags,
    refetchTags,
    defaultOrgchartId,
    isValidationErrorExecutor,
    isAutoChangeUserRole,
    currentUserId,
    handleChangeTimePlanForApproval,
  }
}
