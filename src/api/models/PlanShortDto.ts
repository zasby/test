/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessLevels } from './AccessLevels';

export type PlanShortDto = {
    id?: number;
    dateCreated?: string;
    accessLevel?: AccessLevels;
    dateFrom?: string;
    dateTo?: string;
    userId?: number;
    userPublisherId?: number | null;
    status?: number;
    dateApprovedAt?: string | null;
    isCurrent?: boolean;
}
