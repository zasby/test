import { MetricReadDto, RolePositionShortDto, RoleShortDto, UserDto, UserShortDto } from "../api";

export interface IMetricDataDialog {
  isOpen?: boolean;
  metric: MetricReadDto;
  metricSource2UserId?: number;
  // onSuccess: () => void;
  onOpen: (isOpen: boolean) => void;
  onSave: (data: MetricReadDto) => void;
}

export interface IMetricDataData {
  metricSource2UserId?: number;
  title?: string;
  tableData: ITableDataEl[];
}

export interface IMetricPrintData {
  metricSource2UserId?: number;
  metricFillerRole?: RoleShortDto;
  metricFillerRolePosition?: RolePositionShortDto;
  metricFillerUsers?: UserShortDto[];
  tableData: IMetricDataData[];
}


export interface ITableDataEl {
  date: string;
  dateISO: string;
  quota: number | null;
  value: number | null;
  filler: UserDto | null;
  fill_date: string;
}
