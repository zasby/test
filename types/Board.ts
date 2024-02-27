import { BoardDto } from "../api";

export interface IBoardColumnsState {
  boardColumnId?: number;
  isLoading: boolean;
}

export interface IBoardCollapseContext {
  boardId?: number | null;
  userRelation: RelationsTypes;
  sortValue: sortKeyType;
  executorId?: number;
  senderId?: number;
  hasViolation: boolean;
  board?: BoardDto;
  flowType?: number;
  boardColumnsState: IBoardColumnsState[];
  onChangeUserRelation?: (relation: RelationsTypes) => void;
  isGroupingByOrgcharts: boolean;
  isDeadlineToday: boolean;
}