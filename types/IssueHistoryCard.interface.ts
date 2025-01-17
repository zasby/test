import {
  IssueCommentAttachmentDto, IssueCommentRecipientDto,
  IssueHistoryActionDto,
  IssueHistoryDto,
  IssueHistoryLogDto,
  IssueHistoryReactionDto,
  IssueShortDto,
  IssueStatusDto, UserShortDto
} from "../api";

export interface IIssueHistoryCard {
  id?: number | null; // TODO react memo
  issueHistoryItem?: IssueHistoryDto;
  index: number;
  reactions?: IssueHistoryReactionDto[] | null;
  dateCreated?: string;
  dateUpdated?: string | null;
  dateDeleted?: string | null;
  isDeleted?: boolean;
  createdByUser?: IssueShortDto | null;
  comment?: string | null;
  isRead?: boolean | null;
  logs?: IssueHistoryLogDto[] | null; // TODO react memo
  actions?: Array<IssueHistoryActionDto> | null;
  status?: IssueStatusDto | null;
  attachments?: IssueCommentAttachmentDto[];
  onOpenDeleteCommentDialog: (id: number) => void;
  onIssueHistoryIdChange: (id: number) => void;
  onEditComment: (comment: string, attachments?: IssueCommentAttachmentDto[]) => void;
  currentStatusId?: number;
  currentFilter: string;
  editingCommentId: number | null;
  onEditingCommentIdChange: (id: number | null) => void;
  users?: UserShortDto[];
}
