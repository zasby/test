import { TFunction } from "react-i18next";
import * as jsonpatch from "fast-json-patch";
import { IssueDto, RoleShortDto, User2RoleDto } from "../../api";
import { IssueType, IssueTypeKeys } from "../../types";

export interface IFormTypeConfig {
  leftColumnHeight: number;
  rightColumnHeight: number;
}

export interface IFormNotification {
  onCreate: string;
  onWithdraw: string;
  onDelete: string;
  onReject: string;
  onArchived: string;
  onUnArchived: string;
}

export const filterRolesByOrgchartId = (
  roles?: User2RoleDto[] | null,
  orgchartId?: number
): RoleShortDto[] | undefined =>
  roles?.filter((item) => item?.role?.orgchartId == orgchartId)?.map((item) => item.role!);

export const getDialogNotifications = (type: IssueType, t: TFunction<"translation", undefined>, taskId?: string): IFormNotification =>
  ({
      onCreate: t("notifier:success.task_created"),
      onWithdraw: t("notifier:success.task_withdraw"),
      onDelete: t("notifier:success.task_delete"),
      onReject: t("notifier:success.task_reject"),
      onArchived: t("notifier:success.task_archived", { taskId }),
      onUnArchived: t("notifier:success.task_un_archived", { taskId }),
    });

export const getUpdateFormConfigByIssueType = (issueType: IssueType): IFormTypeConfig => ({
  leftColumnHeight: 750,
  rightColumnHeight: 725,
});

interface IIssueUpdater {
  update: () => Promise<void>;
  updatePartially: () => Promise<void>;
  setInitialState: (initialState: IssueDto) => void;
  applyChanges: (changes: any) => void;
  currentState: IssueDto | null;
  beforeState: IssueDto | null;
}

const triggerActionsFields = [
  "name",
  "timeFact",
  "timePlan",
  "dateDeadline",
  "dateWorkStart",
  "boardStatusId",
  "awaitedResult",
];

export const isEqualDates = (currentValue: string | undefined, newValue: string | null): boolean => {
  return currentValue == newValue;
  // if (!newValue && !currentValue) return true;
  // if (toGenerateTimeSpan)
  //   return currentValue == (newValue ? (getObjectFromTimeSpan(newValue).dateObject ?? new Date()).toString() : null);
  // else return !newValue || !currentValue ? false : new Date(currentValue).toString() == newValue.toString();
};

export const getDeleteIssueTitle = (type: IssueTypeKeys) => "ui:title.delete_issue";

export const compareForRunAdditionalActions = (updater: any) => {
  const prev = { ...updater.beforeState };
  const current = { ...updater.currentState };
  prev.calculated = undefined;
  current.calculated = undefined;
  // prev.board = undefined;
  prev.createdByUser = undefined;
  prev.executorUser = undefined;
  prev.role = undefined;
  prev.fields = undefined;
  prev.attachments = undefined;
  // prev.type = undefined;
  prev.proof = undefined;
  prev.participants = undefined;
  prev.currentStatus = undefined;
  current.calculated = undefined;
  // current.board = undefined;
  current.createdByUser = undefined;
  current.executorUser = undefined;
  current.role = undefined;
  current.fields = undefined;
  current.attachments = undefined;
  // current.type = undefined;
  current.proof = undefined;
  current.participants = undefined;
  current.currentStatus = undefined;
  return jsonpatch
    .compare(prev, current)
    .map((item) => item.path.split("/").find((item) => item !== ""))
    .some((item) => item && triggerActionsFields.includes(item));
};
