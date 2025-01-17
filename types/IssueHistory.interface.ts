import { IssueIndicatorDto } from "../api";
import { IssueHistoryConst } from "../../components/modules/forms/types/consts";

export type TypeIssueHistory = IssueHistoryConst.Message | IssueHistoryConst.Comment;

export interface IIssueHistoryModule {
  issueId: number;
  indicators?: Array<IssueIndicatorDto> | null;
  allowedToSendCommentTypes?: Array<string> | null;
  createdByUserId?: number | null;
  executorUserId?: number | null;
  isExecutor: boolean;
  currentStatusId?: number;
  isOldHistory: boolean;
}
