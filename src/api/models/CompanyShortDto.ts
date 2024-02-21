/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyGlossaryItemDto } from './CompanyGlossaryItemDto';
import type { DayOfWeek } from './DayOfWeek';
import type { StaticFileDto } from './StaticFileDto';
import type { CompanyScheduleDto } from "./CompanyScheduleDto";

export type CompanyShortDto = {
    id?: number;
    name?: string | null;
    nameFallback?: string | null;
    description?: string | null;
    timeZoneFromUtc?: number;
    uiType?: number;
    userLimit?: number | null;
    color?: string | null;
    orgchartType?: string | null;
    glossary?: Array<CompanyGlossaryItemDto> | null;
    imageId?: number | null;
    image?: StaticFileDto;
    weekStart?: DayOfWeek;
    weekReportStart?: DayOfWeek;
    timeZoneId?: string | null;
    schedule?: Array<CompanyScheduleDto> | null;
}