/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserShortDto } from './UserShortDto';

export type MetricSource2UserQuotaDto = {
    id?: number;
    metricSource2UserId?: number;
    quota?: number | null;
    date?: string;
    dateCreated?: string;
    user?: UserShortDto;
}
