import { IssueDto } from "../../api";

export enum WarningsKeys {
  executorDeadline,
  issuesOverdue,
  changeDeadline,
}

export type IssueFields = keyof IssueDto;
