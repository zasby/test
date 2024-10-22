export enum SwitchesConsts {
  IsStickDeadline = "is_strict_deadline",
  ManagerApproval = "is_manager_approval_required",
}

export enum FilterIssueHistoryKeys {
  all = "any",
  comment = "comment",
  action = "action",
  log = "log",
}

export type filterIssueHistoryType =
  | FilterIssueHistoryKeys.all
  | FilterIssueHistoryKeys.comment
  | FilterIssueHistoryKeys.action;

export enum FilterIssueHistoryNames {
  all = "ui:select.all",
  comment = "ui:select.comments",
  action = "ui:select.actions",
}

export enum TypesProofConsts {
  noRequired = "noRequired",
  text = "text",
  images = "images",
}

export enum ProofsRulesConsts {
  textMinLength = "require.text_min_length",
  imagesMinCount = "require.images_min_count",
}

export enum IssueHistoryConst {
  Comment = "comment",
  Message = "message",
}

export enum blockedFieldsKeys {
  name = "Name",
  description = "Description",
  awaitedResult = "AwaitedResult",
  attachments = "Attachments",
  proofRequirement = "ProofRequirement",
  executorUserId = "ExecutorUserId",
  roleId = "RoleId",
  participants = "Participants",
  dateDeadline = "DateDeadline",
  orgchart = "OrgchartId",
  dateWorkStart = "DateWorkStart",
  isStrictDeadline = "is_strict_deadline",
  isManagerApprovalRequired = "is_manager_approval_required",
  timePlan = "TimePlan",
  timeFact = "TimeFact",
  createdByUserId = "CreatedByUserId",
  initiatorUserId = "InitiatorUserId",
  priority = "Priority",
}

export enum SwitchFieldType {
  isStrictDeadline = "is_strict_deadline",
  isManagerApprovalRequired = "is_manager_approval_required",
}

export enum IssueActionConsts {
  complete = "complete",
  delete = "delete",
  withdraw = "withdraw",
  copy = "copy",
  reject = "rj",
  inWork = "in-work",
  sendAgain = "send-again",
  doByMyself = "do-by-myself",
  accept = "accept",
  sendForReview = "send-for-review",
  sendForArchive = "send-for-archive",
  archive = "archive",
  unArchive = "un-archive",
}

export enum IssueIndicatorsKeysConst {
  HasMessage = "issue.hint.has_message",
}

export enum defaultValuesConst {
  pageSize = 15,
  reserveDeadline = 5,
  DeadlineHours = 23,
  DeadlineMinutes = 55,
}

export enum selectedItemsTypeConst {
  users = "users",
  roles = "roles",
}

export const IssueAceptHistoryLocalesConst = {
  Ru: { locale: "ru", message: "Сообщение принято" },
  En: { locale: "en", message: "Message accepted" },
};

export enum custonFieldsKeys {
  strictDeadline = "is_strict_deadline",
  managerApproval = "is_manager_approval_required",
}

export enum actionsKeysConst {
  addProof = "add_proof",
  setDateWorkStart = "set_date_work_start",
  setDeadline = "set_deadline",
  changeDeadline = "change_deadline",
  attachComment = "attach_comment",
  attachMessage = "attach_message",
}

export enum perrmissionsToSendCommentKeys {
  comment = "comment",
  message = "message",
}

export enum commentIconKeys {
  check = "icon.check_mark",
  cross = "icon.cross_mark",
}
