import { IssueCommentRecipientDto, IssueHistoryReactionDto } from "../api";

export interface IIssueActivityActions {
  issueHistoryId: number;
  reactions: IssueHistoryReactionDto[];
  recipients: IssueCommentRecipientDto[];
  userId: number;
}
