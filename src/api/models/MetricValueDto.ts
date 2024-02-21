/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserShortDto } from './UserShortDto';

export type MetricValueDto = {
    metricSource2UserId?: number;
    value?: number | null;
    date?: string;
    type?: number;
    user?: UserShortDto;
}
