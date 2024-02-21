/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricDividerDto } from './MetricDividerDto';
import type { MetricGraphPeriodDto } from './MetricGraphPeriodDto';
import type { MetricSettingsDto } from './MetricSettingsDto';
import type { User2RoleDto } from './User2RoleDto';

export type MetricGraphDto = {
    id?: number;
    name?: string | null;
    metricSource2UserId?: number;
    metricSourceId?: number;
    user2RoleId?: number | null;
    user2Role?: User2RoleDto;
    periods?: Array<MetricGraphPeriodDto> | null;
    canBeEdited?: boolean | null;
    order?: number;
    settings?: MetricSettingsDto;
    yDividers?: Array<MetricDividerDto> | null;
}
