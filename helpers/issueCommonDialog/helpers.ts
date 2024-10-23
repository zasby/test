import { IssueFormKeys, IssueFormType } from "../../types/IssueCommonDialog.interface";
import { TFunction } from "react-i18next";
import { IssueType } from "../../constants/issueTypeKeys";
import { IssueCustomFieldDto } from "../../api";

interface ICreateDialogConfig {
  dialogWidth: number;
  cancelBtnText: string;
  creteBtnText: string;
  title: string;
}

export interface IUpdateDialogConfig {
  dialogWidth: number;
  dialogHeight: number;
  title: string;
}

export interface IDialogNotifications {
  onCreate: string;
  onCreateMultiple?: string;
  onClose: string;
}

export const resetIdsOfFields = (fields?: IssueCustomFieldDto[] | null): IssueCustomFieldDto[] =>
  (fields ?? []).map((item) => ({
    ...item,
    id: undefined,
  }));

export const getDialogNotifications = (
  type: IssueType,
  t: TFunction<"translation", undefined>,
  isPossibilityMultipleCreated: boolean
): IDialogNotifications => ({
  onCreate: isPossibilityMultipleCreated ? t("notifier:success.task_created") : t("notifier:success.tasks_created"),
  onCreateMultiple: t("notifier:success.tasks_created"),
  onClose: t("ui:title.delete_task"),
});

const getCreateDialogConfig = (type: IssueType, t: TFunction<"translation", undefined>): ICreateDialogConfig => ({
  dialogWidth: 720,
  cancelBtnText: t("ui:button.cancel"),
  creteBtnText: t("ui:button.create_task"),
  title: t("ui:title.create_task"),
});

const getUpdateDialogConfig = (type: IssueType, t: TFunction<"translation", undefined>): IUpdateDialogConfig => ({
  dialogWidth: 1370,
  title: t("ui:title.task"),
  dialogHeight: 846,
});

export const getDialogConfig = (
  t: TFunction<"translation", undefined>,
  formType: IssueFormType,
  issueType: IssueType
): IUpdateDialogConfig | ICreateDialogConfig => {
  switch (formType) {
    case IssueFormKeys.create:
      return getCreateDialogConfig(issueType, t);
    case IssueFormKeys.update:
      return getUpdateDialogConfig(issueType, t);
  }
};
