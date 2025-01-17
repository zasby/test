import { MetricReadDto } from "../api";
import { IMetricDataData } from "./MetricDataDialog.interface";

export interface IPrintMetricTable {
  metric: MetricReadDto;
  metricSource2UserId?: number;
  data: IMetricDataData[];
  index: number;
}
