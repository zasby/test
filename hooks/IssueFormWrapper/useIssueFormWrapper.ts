import { useRootStore } from "../useRootStore";
import { useTranslation } from "react-i18next";
import { Form } from "antd";
import React, {
  createRef,
  ForwardRefRenderFunction,
  MutableRefObject,
  useEffect,
  useImperativeHandle,
  useMemo,
  useRef,
  useState
} from "react";
import {
  IIntermediateData
} from "../../../components/modules/forms/issueCreateEditForms/containers/issueUpdateContainer/IssueUpdateContainer.interface";
import { blockedFieldsKeys, SwitchFieldType } from "../../../components/modules/forms/types/consts";
import { IIssueFormWrapper, IssueFormKeys } from "../../types/IssueForm.interface";
import { IssueCustomFieldDto } from "../../api";
import { IssueFields, WarningsKeys } from "../../utils/keys/warningsKeys";
import { compareForRunAdditionalActions, isEqualDates } from "../../helpers/issueCreateEditForms/helpers";
import { useIssueCommonDialog } from "../IssueCommonDialog/useIssueCommonDialog";
import { ICreateFormRef } from "../../types/IssueCommonDialog.interface";

export const useIssueFormWrapper = (props: IIssueFormWrapper, ref: any) => {
  const { issueInitDataStore } = useRootStore();

  const [form] = Form.useForm();

  const uploadFilesInputRef = createRef();
  const isFileLoaderUploadingCopy = useRef(false);
  const [isFileLoaderUploading, setIsFileLoaderUploading] = useState<boolean>(false);
  const [commonDebounceTrigger, setCommonDebounceTrigger] = useState<boolean>(false);
  const [intermediateData, setIntermediateData] = useState<IIntermediateData | undefined>(undefined);

  const handleCheckToAvailability = (fieldKey: string): boolean => {
    return (
      !!props.updater?.currentState?.calculated?.blockedFields?.includes(fieldKey) ||
      issueInitDataStore.getBlockedFields.includes(fieldKey as blockedFieldsKeys)
    );
  };

  const handleCloseIntermediateDialog = () => {
    setIntermediateData(undefined);
    handleUpdate();
  }

  const isUpdateForm = useMemo(() => props.formType === IssueFormKeys.update, [props.formType]);

  const setIsFileLoaderUploadingSync = (v: boolean) => {
    setIsFileLoaderUploading(v);
    isFileLoaderUploadingCopy.current = v;
  };

  const customFieldsIsChanged = (newFields: IssueCustomFieldDto[]): boolean => {
    let value = false;
    if (newFields.length !== props.updater?.currentState?.fields?.length) return true;
    props.updater?.currentState?.fields?.forEach((lastField) => {
      const newFiledElem = newFields.find((newFiled) => newFiled.key === lastField.key);
      if (newFiledElem?.valueBool !== lastField.valueBool) {
        value = true;
      }
    });
    return value;
  };

  const handleChangeIntermediateData = (data: IIntermediateData) => setIntermediateData(data);

  const handleChangeExecutorDeadline = (data: IIntermediateData) => {
    props.updater.applyChanges({ dateWorkStart: data.nextValue });
    if (!props.updater?.currentState?.dateDeadline) return handleAsyncUpdate();
    if ((data.nextValue as Date) > new Date(props.updater.currentState.dateDeadline)) {
      handleChangeIntermediateData(data);
    }
    else handleAsyncUpdate();
  };

  const handlePreventDefaultField = () => {
    switch (intermediateData?.warningKey) {
      case WarningsKeys.executorDeadline: {
        props.updater.applyChanges({ dateWorkStart: intermediateData?.prevValue });
        break;
      }
    }
    setIntermediateData(undefined);
  };

  const handleAdditionalActions = () => {
    issueInitDataStore.onChangeDefiniteField &&
    compareForRunAdditionalActions(props.updater) &&
    issueInitDataStore.onChangeDefiniteField();
  };

  const handlePickerChange = (fieldKey: IssueFields, newValue: string | null) => {
    props.updater.applyChanges({
      [fieldKey]: newValue,
    });
    props.updater.currentState &&
    !isEqualDates(props.updater.currentState[fieldKey] as string | undefined, newValue) &&
    handleAsyncUpdate();
  };

  const setParticipantsWithUpdater = (ids: number[]) => {
    props.updater.applyChanges({
      participants: ids.map((id) => ({
        userId: Number(id),
        user: { id },
      })),
    });
    if (ids.length < (props.updater.currentState?.participants?.length ?? 0)) {
      handleAsyncUpdate();
    }
  };

  const handleAsyncUpdate = () => setCommonDebounceTrigger(true);

  const handleUpdate = () => {
    if (isUpdateForm) {
      if (props.updater.currentState?.fields?.find((f) => f.key === SwitchFieldType.isManagerApprovalRequired)
        ?.valueBool && !props.updater.currentState?.timePlanForApproval) {
        return false;
      }
      return props.updater.update().then(handleAdditionalActions)
    }
    return false;
  }

  const handleFormSubmit = () => form.submit();

  useEffect(() => {
    console.log("useEffect");
    if (commonDebounceTrigger) {
      handleUpdate();
      setCommonDebounceTrigger(false);
    }
  }, [props.updater?.currentState?.fields, props.updater?.currentState?.participants?.length, commonDebounceTrigger]);

  useImperativeHandle(
    ref,
    () => ({
      saveIssue: () => handleFormSubmit(),
      executorIds: props.executorIds,
    }),
    [props.onCreate]
  );

  return {
    intermediateData,
    form,
    isUpdateForm,
    isFileLoaderUploadingCopy,
    uploadFilesInputRef,
    handlePreventDefaultField,
    handleCloseIntermediateDialog,
    handlePickerChange,
    setParticipantsWithUpdater,
    customFieldsIsChanged,
    handleAsyncUpdate,
    handleCheckToAvailability,
    handleUpdate,
    setIsFileLoaderUploadingSync,
    handleChangeExecutorDeadline,
  }
}
