import React, { memo, useCallback } from "react";
import { DashboardContentView } from "./DashboardContentView";
import { IDashboardContent } from "./DashboardContent.interface";
import { api } from "../../services";
import { useNotifier } from "../../hooks";
import { useTranslation } from "react-i18next";

export const DashboardContent = memo((props: IDashboardContent) => {
  const notifier = useNotifier();
  const { t } = useTranslation();

  // const handleGetFilteredMetrics = useCallback(
  //   (id: number) => {
  //     if (props.dashboard) {
  //       const ms2u = props.dashboard.metrics?.find((m) => m.metricSource2UserId == id);
  //       const metric = props.dashboard.metrics?.find((m) => m.metricId == id);
  //       return props.dashboard.metrics?.filter((m) =>
  //         ms2u ? m.metricSource2UserId != ms2u.metricSource2UserId : m.metricId != metric?.metricId
  //       );
  //     }
  //   },
  //   [props.dashboard]
  // );

  const handleDeleteMetricFromDashboard = useCallback(
    async (id: number) => {
      // const dashboardWithFilteredMetrics = {
      //   ...props.dashboard,
      //   metrics: handleGetFilteredMetrics(id),
      // };
      // const r = await api.dashboard.edit(props.dashboard?.id!, dashboardWithFilteredMetrics);
      const r = await api.dashboard.deleteMetricFromDashboard(props.dashboard?.id!, id);
      if (r) {
        notifier.show({
          message: t("notifier:success.metric_delete"),
          theme: "success",
        });
        props.onMetricRestart?.();
        props.onDashboardRestart?.();
      } else {
        notifier.show({
          message: t("notifier:error.something_wrong"),
          theme: "error",
        });
      }
    },
    [notifier, props, t]
  );

  const handleRestartMyDashboardsAndMetrics = useCallback(() => {
    props.onRestartLoad?.();
    props.onMetricRestart?.();
  }, [props]);

  return (
    <DashboardContentView
      dashboardColumnsAmount={props.dashboardColumnsAmount}
      dashboard={props.dashboard}
      metrics={props.metrics}
      weekReportStart={props.weekReportStart}
      deleteMetric={handleDeleteMetricFromDashboard}
      onRestartLoad={handleRestartMyDashboardsAndMetrics}
    />
  );
});
