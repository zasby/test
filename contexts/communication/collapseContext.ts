import { createContext } from "react";
export { ICollapseContext } from "../../types/Collapse";

const defaultCollapseState: ICollapseContext = {
  draggedIssueId: undefined,
  fromColumnId: undefined,
  toStatusId: undefined,
  possibilityStatuses: undefined,
  isLoadingIssueMove: undefined,
};

export const CollapseContext = createContext<ICollapseContext>(defaultCollapseState);
