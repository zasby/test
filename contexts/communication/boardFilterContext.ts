import {
  sortKeys,
  sortKeyType,
} from "../../types/communication";
import {
  RelationsTypes,
  RelationsKeys,
  IBoardColumnsState,
  IBoardCollapseContext,
} from "../../types";
import { createContext } from "react";
import { BoardDto } from "../../api";




const defaultBoardFilterState: IBoardCollapseContext = {
  userRelation: RelationsKeys.My,
  sortValue: sortKeys.date,
  boardId: undefined,
  executorId: [],
  senderId: [],
  hasViolation: false,
  flowType: undefined,
  boardColumnsState: [],
  isGroupingByOrgcharts: true,
  isGroupingByTags: false,
  isGroupingByUsers: false,
  isDeadlineToday: false,
  scheduledToday: false,
  tags: [],
  tagsList: [],
  allTagsList: [],
  refetchTags: () => undefined,
  zoom: 1,
  userId: [],
};


export const BoardFilterContext = createContext<IBoardCollapseContext>(defaultBoardFilterState);
