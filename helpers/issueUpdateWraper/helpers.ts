import { IssueQueryKeys, IssueType } from "../../constants/issueTypeKeys";

export const checkIssueType = (search: string): IssueType | null =>
  (new URLSearchParams(search).get(IssueQueryKeys.issueType) as IssueType) ?? null;
export const checkQueryIssueId = (search: string): number | null => {
  const idFromLocation = new URLSearchParams(search).get(IssueQueryKeys.issueId) ?? null;
  return idFromLocation ? +idFromLocation : null;
};
export const removeQueryIssueIdAndIssueType = (search: string): string => {
  const params = new URLSearchParams(search);
  params.delete(IssueQueryKeys.issueId);
  params.delete(IssueQueryKeys.issueType);
  return params.toString();
};

export const setQueryIssueId = (search: string, id: number): string => {
  const params = new URLSearchParams(search);
  params.set(IssueQueryKeys.issueId, id.toString());
  return params.toString();
};
