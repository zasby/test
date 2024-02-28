import {
  RelationsTypes,
  RelationsKeys,
  sortKeys,
  sortKeyType,
  IBoardColumnsState,
  IBoardCollapseContext
} from "../../types/communication";
import { createContext } from "react";
import { BoardDto } from "../../api";

const defaultBoardFilterState: IBoardCollapseContext = {
  userRelation: RelationsKeys.My,
  sortValue: sortKeys.date,
  boardId: undefined,
  executorId: undefined,
  senderId: undefined,
  hasViolation: false,
  flowType: undefined,
  boardColumnsState: [],
  isGroupingByOrgcharts: true,
  isDeadlineToday: false,
};

export const z = createContext<IBoardCollapseContext>(defaultBoardFilterState);
