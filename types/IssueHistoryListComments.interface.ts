import { ControlSessionHistoryDto, IssueCommentAttachmentDto, IssueHistoryDto } from "../api";
import { FilterIssueHistoryKeys } from "../../components/modules/forms/types/consts";
import { IssueActivityDto } from "../api/models/IssueActivityDto";

export interface IFilterItem {
  id: number;
  value: FilterIssueHistoryKeys;
  text: string;
}

export interface IIssueHistoryListComments {
  issueId: number;
  onOpenDeleteCommentDialog: (id: number) => void;
  onIssueHistoryIdChange: (id: number) => void;
  onEditComment: (comment: string, attachments?: IssueCommentAttachmentDto[]) => Promise<boolean>;
  onDeleteComment: (id: number) => Promise<boolean>;
  currentStatusId?: number;
  issueHistoryId: number | null;
  isOldHistory: boolean;
}

export interface IIssueHistoryListCommentsView {
  filterItems: IFilterItem[];
  currentFilter: FilterIssueHistoryKeys;
  onChangeFilter: (value: FilterIssueHistoryKeys) => void;
  historyItems: IssueHistoryDto[];
  issueActivityItems: IssueActivityDto[];
  isDone: boolean;
  isLoading: boolean;
  handleLoadNext: () => void;
  onOpenDeleteCommentDialog: (id: number) => void;
  onIssueHistoryIdChange: (id: number) => void;
  onEditComment: (comment: string) => Promise<boolean>;
  currentStatusId?: number;
  editingCommentId: number | null;
  onEditingCommentIdChange: (id: number | null) => void;
  issueHistoryId: number | null;
  onDeleteComment: (id: number) => Promise<boolean>;
  isOldHistory: boolean;
}
