/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserShortDto } from './UserShortDto';

export type MetricSource2UserValueDto = {
    id?: number;
    metricSource2UserId?: number;
    value?: number | null;
    date?: string;
    dateCreated?: string;
    user?: UserShortDto;
}
