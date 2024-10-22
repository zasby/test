import { PlanIssueDto } from "../api/models/PlanIssueDto";
import { PatchData } from "./PlanningCollapseContentTable.interface";
import { DayOfWeek, PlanDto, RoleShortDto } from "../api";
import { PlaningFilterType } from "../../constants/PlaningFilterType";


export interface IPlanningCollapseContent {
  issues?: PlanIssueDto[];
  // scheduleIssues?: IssueScheduleDto[];
  onLoadRestart?: () => void;
  onIssueEdit: (issueId: number, issue: PlanIssueDto, updateData: PatchData) => void;
  plan?: PlanDto;
  onIssueToPlanCreate: () => void;
  issuesRestart?: (withoutStateReset?: boolean | undefined) => void;
  weekReportStart?: DayOfWeek;
  userId?: number;
  groupingType?: PlaningFilterType;
}

export interface IPlanningCollapseContentView extends IPlanningCollapseContent {
  issuesByCustomType?: ICustomIssue[];
  onIncrementGroupId: () => any;
  onIssueDelete: (issue: PlanIssueDto) => void;
  loadingTaskId: number | undefined;
  isOpen: boolean;
  isOpenChange: (isOpen: boolean) => void;
  planStatus?: number;
  planDateFrom?: string;
  issueGroupTitle: (value: number | undefined) => string | undefined;
  groupingType?: PlaningFilterType;
}

export interface ICustomIssue {
  issue: PlanIssueDto;
  dateDeadline?: string;
  type?: number;
  role?: RoleShortDto;
  isDeleted?: boolean;
  isDone?: boolean;
  isExcludedFromPlan?: boolean | null;
  roleId?: number | null;
  tagsId?: number[] | null;
  isSchedule?: boolean;
  dateRelease?: string;
  orgchartId?: number;
}

export interface IGroupingList {
  name: string;
  list: ICustomIssue[];
}
