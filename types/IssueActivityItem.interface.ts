import { IssueActivityDto } from "../api/models/IssueActivityDto";
import { IssueCommentAttachmentDto } from "../api";

export interface IssueActivityItemProps {
  item: IssueActivityDto;
  onEditComment: (comment: string, attachments?: IssueCommentAttachmentDto[]) => Promise<boolean>;
  onIssueHistoryIdChange: (id: number) => void;
  issueHistoryId: number | null;
  onDeleteComment: (id: number) => Promise<boolean>;
}
