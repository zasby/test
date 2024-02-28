import { createContext } from "react";
// export { ICollapseContext } from "../../types/Collapse";
interface ICollapseContext {
  draggedIssueId?: number;
  fromColumnId?: number;
  toStatusId?: number;
  possibilityStatuses?: number[];
  isLoadingIssueMove?: boolean;
}

const defaultCollapseState: ICollapseContext = {
  draggedIssueId: undefined,
  fromColumnId: undefined,
  toStatusId: undefined,
  possibilityStatuses: undefined,
  isLoadingIssueMove: undefined,
};

export const CollapseContext = createContext<ICollapseContext>(defaultCollapseState);
