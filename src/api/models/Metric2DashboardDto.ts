/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricShortDto } from './MetricShortDto';
import type { MetricSource2UserShortDto } from './MetricSource2UserShortDto';

export type Metric2DashboardDto = {
    id?: number;
    dashboardId?: number;
    order?: number;
    metricId?: number;
    metric?: MetricShortDto;
    metricSource2UserId?: number | null;
    metricSource2User?: MetricSource2UserShortDto;
}
