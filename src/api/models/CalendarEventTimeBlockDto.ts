/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalendarEventBorderDto } from './CalendarEventBorderDto';

export type CalendarEventTimeBlockDto = {
    id?: number | null;
    name?: string | null;
    description?: string | null;
    dateWorkStart?: any;
    dateWorkEnd?:  Date | string | null;
    timePlan?: string | null;
    userId?: number;
    border?: CalendarEventBorderDto;
    isFullDay?: boolean
    isReadOnly?: boolean;
    isStrictDeadline?: boolean;
    recurringIssueId?: number;
}