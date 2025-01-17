import { UserShortDto } from "./UserShortDto";
import { RoleShortDto } from "./RoleShortDto";
import { RolePositionShortDto } from "./RolePositionShortDto";

export enum ApproximationInterval  {
  Day = "Day",
  Week = "Week",
  Month = "Month",
  Year = "Year",
}

export enum ApproximationType {
  Sum = "Sum",
  Average = "Average",
  Max = "Max",
  Min = "Min",
  Last = "Last",
}


export type MetricDataEntryDto = {
  metricSource2UserId: number;
  date: string;
  dateCreated: string;
  approximationInterval: ApproximationInterval;
  approximationType: ApproximationType;
  value: number | null;
  quota: number | null;
  userId?: number;
}

export type MetricSourceData = {
  metricFillerRole: RoleShortDto;
  metricFillerRolePosition: RolePositionShortDto;
  metricFillerUsers: UserShortDto[];
  data: MetricDataEntryDto[];
  users: UserShortDto[];
  label: string;
}


export type MetricDataDto = {
  metricId: number;
  metricName: string;
  metricDescription?: string;
  sources: MetricSourceData[];

}
