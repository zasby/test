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
