import { AutocompleteModel, RecurringIssueDto, RoleDto } from "../api";

export interface ITaskRecurringCreateEditForm {
  functionData?: RoleDto;
  data?: RecurringIssueDto;
  createOn?: "admins" | "executors" | "all";
  ref?: any;
  hideSaveButton?: boolean;

  onFormLoadingChange?: (val: boolean) => void;
  onCreate?: () => void;
  onSave?: () => void;
}

export interface ITaskRecurringCreateEditFormView {
  data: RecurringIssueDto;
  editMode?: boolean;
  allRoles: AutocompleteModel[];
  hideSaveButton?: boolean;
  isLoading: boolean;

  onCreate(): void;

  onSave(): void;

  setData(data: RecurringIssueDto): void;
}
