import { BoardDto } from "../api";
import { RelationsTypes } from "./BoardRelationSwitch.interface";
import { sortKeyType } from "./communication";
import { TagDto } from "../api/models/TagDto";

export interface IBoardColumnsState {
  boardColumnId?: number;
  isLoading: boolean;
}

export interface IBoardCollapseContext {
  boardId?: number | null;
  userRelation: RelationsTypes;
  sortValue: sortKeyType;
  executorId?: number[];
  senderId?: number[];
  hasViolation: boolean;
  board?: BoardDto;
  flowType?: number;
  boardColumnsState: IBoardColumnsState[];
  onChangeUserRelation?: (relation: RelationsTypes) => void;
  isGroupingByOrgcharts: boolean;
  isGroupingByTags: boolean;
  isGroupingByUsers: boolean;
  isDeadlineToday: boolean;
  scheduledToday: boolean;
  calendarRoleId?: number | undefined;
  tags: number[];
  tagsList: TagDto[];
  allTagsList: TagDto[];
  refetchTags: () => void;
  zoom: number;
  userId: number[];
}
