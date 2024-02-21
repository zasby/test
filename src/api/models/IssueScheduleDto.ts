/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RecurringIssueDto } from './RecurringIssueDto';
import type { RoleShortDto } from './RoleShortDto';

export type IssueScheduleDto = {
    id?: number;
    roleId?: number;
    role?: RoleShortDto;
    recurringIssueId?: number;
    recurringIssue?: RecurringIssueDto;
    dateRelease?: string;
    dateDeadline?: string | null;
}
