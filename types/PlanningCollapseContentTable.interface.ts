import { ICustomIssue } from "../../components/modules/pages/planning/components/planningCollapseContent/PlanningCollapseContent.interface";
import { PlanIssueDto } from "../api/models/PlanIssueDto";
export type PatchData = {
  path: string,
  value: any,
}

export interface IPlanningCollapseContentTable {
  title: string;
  issues?: ICustomIssue[] | null | undefined;
  onIssueDelete: (issue: PlanIssueDto) => void;
  loadingTaskId: number | undefined;
  onIssueEdit: (issueId: number, issue: PlanIssueDto, updateData: PatchData) => void;
  onLoadRestart?: () => void;
  isOpenChange: (isOpen: boolean) => void;
  planStatus?: number;
  issuesRestart?: (withoutStateReset?: boolean | undefined) => void;
  isGoogle?: boolean;
  className?: string;
  userId?: number;
  userPublisherId?: number | null;
}
