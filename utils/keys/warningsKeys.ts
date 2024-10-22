import { IssueDto } from "../../../../../../functional/api";

export enum WarningsKeys {
  executorDeadline,
  issuesOverdue,
  changeDeadline,
}

export type IssueFields = keyof IssueDto;
