export enum IssueTypeKeys {
  task = "task", // задача
}

export enum IssueQueryKeys {
  issueId = "issueId",
  issueType = "issueType",
  taskCreate = "taskCreate",
  routineCreate = "routineCreate",
}

export type IssueType = IssueTypeKeys.task;
