import { DayOfWeek, IssueDto, IssueScheduleDto, PlanDto, PlanShortDto } from "../api";

import { PatchData } from "./PlanningCollapseContentTable.interface";
import { PlanIssueDto } from "../api/models/PlanIssueDto";

export enum PlanUpdateStatus {
  approved= 3,
  rejected = 4,
}

export interface IPlanningPageMainContent {
  onOpenCreateIssueDialog?: () => void;
  plan?: PlanDto;
  issues: PlanIssueDto[];
  // scheduleIssues: IssueScheduleDto[];
  fetchPlans?: () => void;
  issuesFromCommunicationsRestart?: () => void;
  // issuesRestart?: (withoutStateReset?: boolean | undefined) => void;
  approvalPlan?: PlanDto;
  fetchApprovalPlans?: () => void;
  onPlanIdChange?: (id: number) => void;
  isLoading?: boolean;
  isSidebarOpen?: boolean;
  onSidebarOpenChange?: () => void;
  isLoadingIssue?: boolean;
  userId?: number;
  plansShort?: PlanShortDto[];
  currentPlanId?: number;
  onAddIssueToPlan: (issueId: number) => Promise<boolean>;
  isApproval?: boolean;
}

export interface IPlanningPageMainContentView extends Omit<IPlanningPageMainContent, "onAddIssueToPlan"> {
  // onPlanStatusEdit: (plan: PlanDto, message: string) => void;
  onApproverSuccess: (approverId: number | null) => void;
  onIssueEdit: (issueId: number, issue: PlanIssueDto, updateData: PatchData) => void;
  isOpen: boolean;
  onIsOpenChange: (value: boolean) => void;
  onLoadRestart: () => void;
  isLoadingButton: boolean;
  onIssueToPlanCreate: () => void;
  onMigrateIssuesToPlan: () => void;
  isOpenApproverDialog: boolean;
  isOpenApproverDialogChange: (value: boolean) => void;
  // disabledDate: (date: Dayjs) => boolean;
  // customWeekStartEndFormat: () => string;
  weekReportStart?: DayOfWeek;
  onUpdatePlanStatus: (status: PlanUpdateStatus) => void;
  isApproved?: boolean;
}
