import { RelationsTypes, RelationsKeys,  sortKeys, sortKeyType, IBoardColumnsState, IBoardCollapseContext  } from "../../types";
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

export const BoardFilterContext = createContext<IBoardCollapseContext>(defaultBoardFilterState);
