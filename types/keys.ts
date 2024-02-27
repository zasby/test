export enum RelationsKeys {
  My = "my",
  Controlled = "controlled",
  Participated = "participated",
  Any = "any",
}

export enum IndicatorIconsKeys {
  Warning = "icon.warning",
  Message = "icon.message",
  CheckMark = "icon.check_mark",
  Clock = "icon.clock",
  Calendar = "icon.calendar",
}

export enum baseBoardStatusKeys {
  pending = "pending",
  inWork = "in_work",
}

export enum FlowTypeColorSchemeKey {
  Warning = "warning",
  Primary = "primary",
  Success = "success",
  Background = "background"
}

export enum ActionBaseRuleKey {
  AllowToParticipator = "access.allow_to.participator",
  AllowToExecutor = "access.allow_to.executor",
  AllowToCreator = "access.allow_to.creator",
  AllowToInitiator = "access.allow_to.initiator",
  AllowToAny = "access.allow_to.any",
  IfProofIsSet = "if.proof_is_set",
  IfStrictDeadlineIsTrue = "if.strict_deadline_is_true",
  IfStrictDeadlineIsFalse = "if.strict_deadline_is_false",
  IfIsManagerApprovalRequiredIsTrue = "if.is_manager_approval_required_is_true",
  IfIsManagerApprovalRequiredIsFalse = "if.is_manager_approval_required_is_false",
}

export enum CommunicationModeKey {
  Kanban = "kanban",
  CalendarPlanning = "calendar_planning",
}
