/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessLevels } from './AccessLevels';
import type { Plan2IssueDto } from './Plan2IssueDto';
import type { UserDto } from './UserDto';
import type { UserShortDto } from './UserShortDto';

export type PlanDto = {
    id?: number;
    accessLevel?: AccessLevels;
    dateFrom?: string;
    dateTo?: string;
    userId?: number;
    user?: UserDto;
    userPublisherId?: number | null;
    userPublisher?: UserShortDto;
    status?: number;
    dateApprovedAt?: string | null;
    issuesOverall?: number | null;
    issuesDone?: number | null;
    timePlanOverall?: string | null;
    timePlanOverallTotalMinutes?: number | null;
    timeFactOverall?: string | null;
    statusName?: string | null;
    statusColorScheme?: string | null;
    allowedStatuses?: Array<number> | null;
    isCurrent?: boolean;
    issues?: Array<Plan2IssueDto> | null;
    canBeMigratedFromPlanId?: number | null;
}
