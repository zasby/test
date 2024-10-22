/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyGlossaryItemDto } from './CompanyGlossaryItemDto';
import type { CompanyIntervalDto } from './CompanyIntervalDto';
import type { CompanyScheduleDto } from './CompanyScheduleDto';
import type { CompanySettingsDto } from './CompanySettingsDto';
import type { DayOfWeek } from './DayOfWeek';
import type { OrgchartDto } from './OrgchartDto';
import type { RoleDto } from './RoleDto';
import type { StaticFileDto } from './StaticFileDto';
import type { UserShortDto } from './UserShortDto';

export type CompanyDto = {
    id?: number;
    name?: string | null;
    nameFallback?: string | null;
    description?: string | null;
    userLimit?: number | null;
    imageId?: number | null;
    image?: StaticFileDto;
    dateCreated?: string;
    dateUpdated?: string | null;
    uiType?: number;
    contactName?: string | null;
    contactPhoneNumber?: string | null;
    timeZoneFromUtc?: number;
    color?: string | null;
    userOwnerId?: number | null;
    userOwner?: UserShortDto;
    orgchartType?: string | null;
    externalId?: string | null;
    weekStart?: DayOfWeek;
    weekReportStart?: DayOfWeek;
    scheduleIsSameOnWeekdays?: boolean;
    timeZoneId?: string | null;
    schedule?: Array<CompanyScheduleDto> | null;
    roles?: Array<RoleDto> | null;
    glossary?: Array<CompanyGlossaryItemDto> | null;
    orgcharts?: Array<OrgchartDto> | null;
    intervals?: Array<CompanyIntervalDto> | null;
    companySettings?: CompanySettingsDto;
    tariffCode?: string | null;
}
