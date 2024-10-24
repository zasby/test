import { RecurringIssueDto, RoleDto } from "../api";

export interface IRecurringIssueCreateEditDialog {
  open: boolean;
  functionData?: RoleDto;
  data?: RecurringIssueDto;
  createOn?: "admins" | "executors" | "all";

  onCreate?: () => void;
  onSave?: () => void;
  onClose(): void;
}
