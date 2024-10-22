import { PlanIssueDto } from "../api/models/PlanIssueDto";
import {
  ICustomIssue
} from "../../components/modules/pages/planning/components/planningCollapseContent/PlanningCollapseContent.interface";

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
}
