import { IssueDto, IssueScheduleDto } from "../api";
import { IssueCommonType } from "../types/issueCommonType";

export const convertIssueDtoToCommonIssueType = (issue: IssueDto): IssueCommonType => {
  return {
    name: issue.name,
    dateCreated: issue.dateCreated,
    dateDeadline: issue.dateDeadline,
  };
};

export const convertIssueScheduleDtoToCommonIssueType = (issueSchedule: IssueScheduleDto): IssueCommonType => {
  return {
    name: issueSchedule.recurringIssue?.name,
    dateCreated: issueSchedule.dateRelease,
    dateDeadline: issueSchedule.dateDeadline,
  };
};
