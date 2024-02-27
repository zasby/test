import { createContext } from "react";
import { IssueType, IIssueContext } from "../../types";

const defaultIssueState: IIssueContext = {
  strictDeadline: false,
  senderDeadlineExpired: false,
  isExecutor: false,
  isContributor: false,
  issueType: undefined,
};

export const IssueContext = createContext<IIssueContext>(defaultIssueState);
