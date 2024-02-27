export enum guideKeys {
  orgchart = "orgchart",
  communications = "communications",
  recurringIssues = "recurringIssues",
  inviteEmployee = "inviteEmployee",
  permissions = "permissions",
  schedule = "schedule",
  dashboard = "dashboard",
  multiaccount = "multiaccount",
  decision = "decision",
  message = "message",
  planning = "planning",
  policies = "policies",
  none = "",
}

export type guideContentType =
  | guideKeys.orgchart
  | guideKeys.communications
  | guideKeys.recurringIssues
  | guideKeys.inviteEmployee
  | guideKeys.permissions
  | guideKeys.schedule
  | guideKeys.dashboard
  | guideKeys.planning
  | guideKeys.multiaccount
  | guideKeys.message
  | guideKeys.decision
  | guideKeys.policies
  | guideKeys.none;
