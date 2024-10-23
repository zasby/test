import React, { memo } from "react";
import { IDashboardContentView } from "./DashboardContent.interface";
import { Metrics } from "../../../components/modules/pages/dashboards/components/Metrics/Metrics";

export const DashboardContentView = memo((props: IDashboardContentView) => {
  return (
    <div
      style={{ overflowY: !props.metrics.items.length ? "hidden" : "scroll" }}
      className={`flex-grow-1 ${!props.metrics.items.length ? "d-flex align-center justify-center" : ""}`}
    >
      <Metrics
        metrics={props.metrics.items ?? []}
        isLoading={props.metrics.info.isLoading}
        isDone={props.metrics.info.isDone}
        loadNext={props.metrics.loadNext}
        weekReportStart={props.weekReportStart}
        dashboardColumnsAmount={props.dashboardColumnsAmount}
        deleteMetric={props.deleteMetric}
        restart={props.onRestartLoad}
      />
    </div>
  );
});
