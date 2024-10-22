import {
  PlanCommentAttachmentDto,
  HistoryDto,
  StaticFileDto,
  UserDto,
  UserShortDto
} from "../api";
import { ReactionsStrategy } from "../strategies/ReactionsStrategy";

export interface ICommentCard<T> {
  creator?: UserDto | UserShortDto;
  creatorId: number;
  dateCreated: string;
  reactionStrategy: ReactionsStrategy<T>;
  reactions: T[];
  commentContent?: string;
  historyId: number;
  commentAttachments?: StaticFileDto[];
  index: number;
  isNewStyle?: boolean;
  isEditing?: boolean;
  editCommentId?: number;
  handleEditClick?: (id: number) => void;
  item?: HistoryDto;
  handleSaveClick?: (id: number, data: HistoryDto) => Promise<boolean>;
  handleRemoveComment?: (id: number) => Promise<boolean>;
  format?: string;
}

export interface ICommentCardView {
  creator?: UserDto | UserShortDto;
  dateSented: string;
  commentContent?: string;
  historyId: number;
  reactions: any;
  strategy: any;
  commentAttachments?: PlanCommentAttachmentDto[];
  index: number;
  isNewStyle?: boolean;
  isEditing?: boolean;
  editCommentId?: number;
  handleEditClick?: (id: number) => void;
  item?: HistoryDto;
  handleSaveClick?: (id: number, data: HistoryDto) => Promise<boolean>;
  handleRemoveComment?: (id: number) => Promise<boolean>;
}
