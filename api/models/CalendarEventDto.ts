/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalendarEventBorderDto } from './CalendarEventBorderDto';
import { TagDto } from "./TagDto";
import type { IssueCalculatedDto } from "./IssueCalculatedDto";

export type GoogleCalendarDTO = {
    url?: string;
    creatorEmail: string;
    responseStatus: string;
    internalGoogleEventStatus?: InternalGoogleEventStatus;
}

export enum InternalGoogleEventStatus {
    Declined = "Declined", //Пользователь отказался от участия в данном событии,
    Unfinished =  "Unfinished", //Событие еще не завершилось и пользователь не отказался от участия,
    Finished = "Finished", //Событие завершено и пользователь не отказался от участия
}

export type CalendarEventDto = {
    id?: number | null;
    issueId?: number | null;
    name?: string | null;
    description?: string | null;
    dateWorkStart?: string | null;
    timePlan?: string | null;
    timeFact?: string | null;
    estimatedEndDate?: string | null;
    dateDeadline?: string | null;
    userId?: number;
    calculated?: IssueCalculatedDto;
    border?: CalendarEventBorderDto;
    isReadOnly? : boolean | false;
    googleCalendarData?: GoogleCalendarDTO;
    isStrictDeadline?: boolean;
    issueStatus?: string;
    recurringIssueId?: number | null;
    isManual?: boolean;
    tags?: TagDto[];
    internalGoogleEventStatus?: InternalGoogleEventStatus;
}