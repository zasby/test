import {
  HistoryDto,
  HistoryReactionDto,
  StaticFileDto,
  UserDto,
  UserShortDto,
} from "../api";
import { ReactionController } from "./ReactionController.interface";
//
// import { historySortKeys, historySortKeysType } from "../../misc/consts";
////
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
  editCommentId?: number | null;
  handleEditClick?: (id: number) => void;
  item: HistoryDto;
  handleSaveClick?: (id: number, data: HistoryDto) => Promise<boolean>;
  handleRemoveComment?: (id: number) => Promise<boolean>;
  isHiddenUser?: boolean;
  reactionsStrategyController: ReactionController<HistoryDto, {}>,
  isHiddenReactions?: boolean;
  isSimplifiedToolbar?: boolean;
  isShowBorder?: boolean;
  editedInfo?: string;
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
  reactionsStrategyController: ReactionController<HistoryDto, {}>,
}
//
//
// export interface IRegulationHistorySendBlock {
//   user: UserDto | UserShortDto | undefined;
//   regulationId: number;
//   regulationHistory: any;
//   regulationContentId: number;
// }
