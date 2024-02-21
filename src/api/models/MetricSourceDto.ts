/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyIntervalDto } from './CompanyIntervalDto';
import type { MetricShortDto } from './MetricShortDto';
import type { MetricSource2UserDto } from './MetricSource2UserDto';
import type { RolePositionShortDto } from './RolePositionShortDto';

export type MetricSourceDto = {
    id?: number;
    label?: string | null;
    metricId?: number;
    metric?: MetricShortDto;
    fillerRolePositionId?: number | null;
    fillerRolePosition?: RolePositionShortDto;
    companyIntervalId?: number | null;
    companyInterval?: CompanyIntervalDto;
    isCreateForEachFiller?: boolean;
    source2Users?: Array<MetricSource2UserDto> | null;
    existingSourceId?: number | null;
    existingSource?: MetricSourceDto;
    order?: number;
}
