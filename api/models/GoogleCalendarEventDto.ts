/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CalendarEventBorderDto } from './CalendarEventBorderDto';
import { Dayjs } from "dayjs";

export interface IReminders {
    method: string,
    minutes: number,
}

export interface IGuest {
    email: string,
    responseStatus?: string;
}

export type GoogleCalendarEventDto = {
    id: number;
    name: string;
    description: string | null;
    dateWorkStart: Dayjs;
    dateWorkEnd: Dayjs;
    timePlan: string;
    userId?: number;
    border?: CalendarEventBorderDto;
    isManual: boolean
    isStrictDeadline?: boolean;
    creatorEmail: string;
    reminders: IReminders[];
    responseStatus: string;
    url: string;
    htmlLink?: string;
    status: string | null;
    eventTime: string;
    guests: IGuest[];
}