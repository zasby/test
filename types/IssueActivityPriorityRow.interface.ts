import { IssuePriorityDto } from "../api";

export interface IIssueActivityPriorityRow {
  prevValue?: string;
  value?: string;
  priority?: IssuePriorityDto;
  previousPriority?: IssuePriorityDto;
}
