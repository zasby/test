import { valueType } from "./SortButton.interface";

export enum RealtimeIssuesKeys {
  Added = "issue.added",
  Updated = "issue.updated",
  Deleted = "issue.deleted",
  HistoryUpdated = "issue.history.updated",
  HistoryDeleted = "issue.history.deleted",
}

export enum sortKeys {
  date = "status.update",
  date_deadline = "date_deadline",
  date_deadline_is_null = "date_deadline.is_null",
  date_reverse = "date_reverse",
  high_priority = "high_priority",
  low_priority = "low_priority",
  in_approval_first = "in_approval_first",
}

export enum reqSortFiltersKeys {
  asc = "asc",
  desc = "desc",
  priority = "priority",
  hasPriority = "has_priority",
}

export type sortKeyType =
  | sortKeys.date
  | sortKeys.date_deadline
  | sortKeys.date_deadline_is_null
  | sortKeys.date_reverse
  | sortKeys.high_priority
  | sortKeys.low_priority
  | sortKeys.in_approval_first;

export const sortValues: valueType[] = [
  { id: 1, key: sortKeys.date, text: "common:misc.sort_items.ones_first" },
  { id: 2, key: sortKeys.date_reverse, text: "common:misc.sort_items.old_ones" },
  { id: 3, key: sortKeys.date_deadline, text: "common:misc.sort_items.close_deadline" },
  { id: 4, key: sortKeys.high_priority, text: "common:misc.sort_items.high_priority" },
  { id: 5, key: sortKeys.low_priority, text: "common:misc.sort_items.low_priority" },
  // {id : 4, key : sortKeys.date_deadline_is_null, text : "common:misc.sort_items.indefinite"}
];
