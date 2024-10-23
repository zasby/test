import { createContext } from "react";
import { IssueType } from "../../types";

export interface IIssueContext {
  strictDeadline: boolean; // включен ли свитч исполнитель не может менять дедлайн
  senderDeadlineExpired?: boolean; // дедлайн <= new Date()
  isExecutor: boolean;
  isContributor: boolean;
  issueType?: IssueType | null;
}

const defaultIssueState: IIssueContext = {
  strictDeadline: false,
  senderDeadlineExpired: false,
  isExecutor: false,
  isContributor: false,
  issueType: undefined,
};

export const IssueContext = createContext<IIssueContext>(defaultIssueState);
