import { createContext } from "react";
import { OrgchartTemplateDto } from "../api";

export type OrgchartContextDialogTypes =
  | "move"
  | "add"
  | "edit"
  | "sort"
  | "delete"
  | "openFunction"
  | "openDrawer/recurringTasks"
  | null;

export interface IOrgchartContext {
  openedDialog: OrgchartContextDialogTypes;
  blockId: number | null;
  updateState: (state: IOrgchartContext) => any;
  resetState: () => void;
  refreshState: (softReload?: boolean) => void;
  orgchartTemplates: any;
}

export const OrgchartContext = createContext<IOrgchartContext | null>(null);
