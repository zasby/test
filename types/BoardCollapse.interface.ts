import {
  AutocompleteModelPagingModel,
  BoardDto,
  BoardInfo,
  OrgchartDto,
  OrgchartStatsDto,
} from "../api";
import { IBoardColumnsState } from "./Board";

export interface IBoardCollapse {
  onChangeBoardColumnsState: (newValue: IBoardColumnsState) => void;
}

export interface IBoardCollapseView {
  openBoardIds: number[];
  board?: BoardDto;
  onChangeOpenBoards: (openIds: number[]) => void;
  // boardsByOrgcharts: OrgchartDto[] | null | undefined;
  boardsByWithStats: OrgchartStatsDto[] | null | undefined;
  onChangeBoardColumnsState: (newValue: IBoardColumnsState) => void;
  //autocompleteIssues: ICollapseShortData;
  boardInfo: BoardInfo[] | null;
  isGroupingByTags: boolean;
  isGroupingByUsers: boolean;
}

export interface IOrgchartAvatar {
  orgchart: OrgchartDto;
}

export interface IOrgchartIssues {
  orgchartId?: number;
  data: AutocompleteModelPagingModel | null;
}

export interface ICollapseShortData {
  pendingIssues: IOrgchartIssues[];
  inWorkIssues: IOrgchartIssues[];
}

export interface IDragAndDropContainer {
  board?: BoardDto;
  orgchartId?: number;
  tagId?: number;
  openBoardIds?: number[];
  onChangeBoardColumnsState: (newValue: IBoardColumnsState) => void;
  isGroupingByTags?: boolean;
  userId?: number;
  isGroupingByUsers?: boolean;
}
