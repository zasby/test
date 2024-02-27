export interface ICollapseContext {
  draggedIssueId?: number;
  fromColumnId?: number;
  toStatusId?: number;
  possibilityStatuses?: number[];
  isLoadingIssueMove?: boolean;
}