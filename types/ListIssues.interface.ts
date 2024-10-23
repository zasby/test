import { BoardColumnDto, BoardStatusDto, IssueShortDto } from "../api";
import { IBoardColumnsState } from "./Board";
import { RealtimeIssuesKeys } from "./communication";

export interface IListIssues {
  orgchartId: number;
  tagId?: number;
  isGroupingByTags?: boolean;
  isOpen?: boolean;
  onChangeBoardColumnsState: (newValue: IBoardColumnsState) => void;
  column?: BoardColumnDto;
  currentStatusFromBoard?: BoardStatusDto;
  status?: BoardStatusDto;
  userId?: number;
  isGroupingByUsers?: boolean;
  draggingIssueId?: number;
}

export interface IListIssuesView {
  issues: IssueShortDto[];
  isLoading: boolean;
  isDone: boolean;
  column?: BoardColumnDto;
  loadNext: () => void;
  totalItems?: number;
  currentStatusFromBoard?: BoardStatusDto;
  status?: BoardStatusDto;
  draggingIssueId?: number;
}

export interface ISocketMessage {
  boardId?: number;
  updatedBoardStatusIds?: number[];
  issueId?: number;
  byUserId?: number;
  type: RealtimeIssuesKeys;
}
