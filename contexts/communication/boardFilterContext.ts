import { RelationsTypes, RelationsKeys,  sortKeys, sortKeyType, IBoardColumnsState, ICollapseContext  } from "../../types";
import { createContext } from "react";
import { BoardDto } from "../../api";

const defaultBoardFilterState: ICollapseContext = {
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

export const BoardFilterContext = createContext<ICollapseContext>(defaultBoardFilterState);
