/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalendarEventBorderDto } from './CalendarEventBorderDto';

export type CalendarEventDto = {
    id?: number | null;
    issueId?: number | null;
    name?: string | null;
    description?: string | null;
    dateWorkStart?: string | null;
    timePlan?: string | null;
    timeFact?: string | null;
    userId?: number;
    border?: CalendarEventBorderDto;
    isReadOnly? : boolean | false;
}