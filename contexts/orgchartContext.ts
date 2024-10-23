import { createContext } from "react";
import { MetricDto, OrgchartTemplateDto } from "../api";

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
  handleEditMetric: (metric: MetricDto) => void;
}

export const OrgchartContext = createContext<IOrgchartContext | null>(null);
