/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricSource2UserQuotaDto } from './MetricSource2UserQuotaDto';
import type { MetricSource2UserValueDto } from './MetricSource2UserValueDto';
import type { User2RoleDto } from './User2RoleDto';

export type MetricSource2UserDto = {
    id?: number;
    metricSourceId?: number;
    user2RoleId?: number | null;
    user2Role?: User2RoleDto;
    values?: Array<MetricSource2UserValueDto> | null;
    quotas?: Array<MetricSource2UserQuotaDto> | null;
    canBeEdited?: boolean | null;
    order?: number;
}
