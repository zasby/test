import { IssueQueryKeys, IssueType, IssueTypeKeys } from "../../constants/issueTypeKeys";

export interface IIssueCommonOption {
  queryParam: IssueQueryKeys;
  issueType: IssueType;
}

export const IssueCommonOptionsArr: IIssueCommonOption[] = [
  {
    queryParam: IssueQueryKeys.taskCreate,
    issueType: IssueTypeKeys.task,
  },
];

export const handleParseIssueTypeToQP = (issueType: IssueTypeKeys): IssueQueryKeys => IssueQueryKeys.taskCreate;

export const checkIsOpenCreateTask = (search: string): boolean =>
  !!new URLSearchParams(search).get(IssueQueryKeys.taskCreate);

export const checkIsOpenCreateRoutine = (search: string): boolean =>
  !!new URLSearchParams(search).get(IssueQueryKeys.routineCreate);

export const removeQueryIssueTask = (search: string): string => {
  const params = new URLSearchParams(search);
  params.delete(IssueQueryKeys.taskCreate);
  return params.toString();
};

export const removeQueryIssueRoutine = (search: string): string => {
  const params = new URLSearchParams(search);
  params.delete(IssueQueryKeys.routineCreate);
  return params.toString();
};
