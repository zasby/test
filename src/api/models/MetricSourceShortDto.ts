/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyIntervalDto } from './CompanyIntervalDto';
import type { MetricShortDto } from './MetricShortDto';
import type { RolePositionShortDto } from './RolePositionShortDto';

export type MetricSourceShortDto = {
    id?: number;
    label?: string | null;
    metricId?: number;
    metric?: MetricShortDto;
    fillerRolePosition?: RolePositionShortDto;
    companyIntervalId?: number | null;
    companyInterval?: CompanyIntervalDto;
    order?: number;
}
