import { DashboardDto, DayOfWeek, MetricReadDto } from "../../api";
import { PagingModel } from "../../api/types";
import { PagingInfo } from "../../types";

export interface IDashboardContent {
  dashboard?: DashboardDto;
  onRestartLoad?: () => void;
  onMetricRestart?: () => void;
  metrics: {
    items: MetricReadDto[];
    info: PagingInfo;
    lastResult: PagingModel<MetricReadDto> | null;
    setData: (data: MetricReadDto[]) => void;
    loadNext: () => Promise<any>;
    reset: () => void;
    restart: (withoutStateReset?: boolean | undefined) => Promise<any>;
  };
  dashboardColumnsAmount: number;
  weekReportStart?: DayOfWeek;
  onDashboardRestart?: () => void;
}
export interface IDashboardContentView extends IDashboardContent {
  deleteMetric: (metricSource2UserId: number) => void;
}
