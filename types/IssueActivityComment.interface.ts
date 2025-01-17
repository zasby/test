import { IssueActivityDto } from "../api/models/IssueActivityDto";
import { IssueCommentAttachmentDto, UserDto } from "../api";

export interface IIssueActivityComment {
  item: IssueActivityDto;
  user?: UserDto;
  onEditComment: (comment: string, attachments?: IssueCommentAttachmentDto[]) => Promise<boolean>;
  onIssueHistoryIdChange: (id: number) => void;
  issueHistoryId: number | null;
  onDeleteComment: (id: number) => Promise<boolean>;
  dateUpdated?: string;
}
