import { IssueType } from "./issueTypeKeys";

export interface IIssueContext {
  strictDeadline: boolean; // включен ли свитч исполнитель не может менять дедлайн
  senderDeadlineExpired?: boolean; // дедлайн <= new Date()
  isExecutor: boolean;
  isContributor: boolean;
  issueType?: IssueType | null;
}