/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type CalendarScheduleDto = {
    type: number;
    dateFrom: Date;
    dateTo: Date;
    timeFrom?: string | null;
    timeTo?: string | null;
    freeTime?: string | null;
    doneIssuesCount?: number | null;
    plannedIssuesCount?: number | null;
    timeFact?: string | null;
    timePlan?: string | null;
}