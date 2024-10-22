import {
  HistoryDto,
  HistoryReactionDto,
  StaticFileDto,
  UserDto,
  UserShortDto,
} from "../api";

import { historySortKeys, historySortKeysType } from "../../components/modules/pages/regulation/misc/consts";

export interface IRegulationCommentCard {
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

export interface IRegulationHistory {
  regulationId: number;
  regulationContentId: number;
}

export interface IRegulationHistoryHeader {
  sortValue: historySortKeys;
  onChangeSortValue: (newValue: historySortKeysType) => void;
}

export interface IRegulationHistoryListCards {
  historyItems: HistoryDto[];
  loadNext: () => void;
  isDone: boolean;
  handleUpdateComment: (id: number, data: HistoryDto) => void;
  handleRemoveComment: (id: number) => Promise<boolean>;
}


export interface IRegulationHistorySendBlock {
  user: UserDto | UserShortDto | undefined;
  regulationId: number;
  regulationHistory: any;
  regulationContentId: number;
}
