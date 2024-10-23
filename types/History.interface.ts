import {
  HistoryDto,
  HistoryReactionDto,
  StaticFileDto,
  UserDto,
  UserShortDto,
} from "../api";
//
// import { historySortKeys, historySortKeysType } from "../../misc/consts";
//
export interface ICommentCard {
  creator?: UserDto | UserShortDto;
  creatorId: number;
  dateCreated: string;
  reactions: HistoryReactionDto[];
  commentContent?: string;
  historyId: number;
  commentAttachments?: StaticFileDto[];
  index: number;
  isEditing?: boolean;
  editCommentId?: number;
  handleEditClick?: (id: number) => void;
  item: HistoryDto;
  handleSaveClick?: (id: number, data: HistoryDto) => Promise<boolean>;
  handleRemoveComment?: (id: number) => Promise<boolean>;
}
//
//
// export interface IRegulationHistoryHeader {
//   sortValue: historySortKeys;
//   onChangeSortValue: (newValue: historySortKeysType) => void;
// }
//
export interface IHistoryListCards {
  historyItems: HistoryDto[];
  loadNext: () => void;
  isDone: boolean;
  handleUpdateComment: (id: number, data: HistoryDto) => Promise<boolean>;
  handleRemoveComment: (id: number) => Promise<boolean>;
}
//
//
// export interface IRegulationHistorySendBlock {
//   user: UserDto | UserShortDto | undefined;
//   regulationId: number;
//   regulationHistory: any;
//   regulationContentId: number;
// }
