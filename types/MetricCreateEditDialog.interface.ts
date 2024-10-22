import { CompanyIntervalDto, MetricDto, RoleDto } from "../api";

export interface IMetricCreateEditDialog {
  open: boolean;
  toggleDialog: (isOpen: boolean, id?: number, isEdit?: boolean, isDelete?: boolean) => void | undefined;
  editMode: boolean;
  toggleEditMode?: (isEdit: boolean) => void;
  onSuccess?: () => void;
  metricId?: number;
  metrics: MetricDto[];
}

export interface IMetricCreateEditDialogView {
  metric?: MetricDto;
  role?: RoleDto;
  open: boolean;
  editMode: boolean;
  toggleDialog: () => void;
  onCreate: () => void;
  onEdit: () => void;
  onChangeMetric: (metric: MetricDto) => void;
  intervals?: CompanyIntervalDto[];
  isDoubleMetric: boolean;
  onIsDoubleMetricChange: (isDouble: boolean) => void;
  mainMetric?: MetricDto;
  roleId: number | null;
  companyUiType: number | null;
  isLoading?: boolean;
}
