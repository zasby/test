export type IssueFilter = {
  boardId?: number;
  boardStatusId?: number;
  name?: string;
  recurringIssueId?: number;
  userRelation?: string;
  executorUserId?: number;
  iniciatorByUserId?: number;
  includeActions?: boolean;
  includeNextStatuses?: boolean;
  includeIndicators?: boolean;
};
