/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { DashboardUserSelectionRuleDto } from './DashboardUserSelectionRuleDto';
import type { Metric2DashboardDto } from './Metric2DashboardDto';
import type { UserShortDto } from './UserShortDto';

export type DashboardDto = {
    id?: number;
    name?: string | null;
    description?: string | null;
    dateCreated?: string;
    columnCount?: number;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    metrics?: Array<Metric2DashboardDto> | null;
    userSelectionRules?: Array<DashboardUserSelectionRuleDto> | null;
}
