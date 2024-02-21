/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardDto } from './BoardDto';
import type { CompanyInviteDto } from './CompanyInviteDto';
import type { CompanyModuleDto } from './CompanyModuleDto';
import type { DayOfWeek } from './DayOfWeek';
import type { StaticFileDto } from './StaticFileDto';
import type { UserShortDto } from './UserShortDto';

export type CompanyForAdminDto = {
    id?: number;
    name?: string | null;
    nameFallback?: string | null;
    description?: string | null;
    userLimit?: number | null;
    inviteForOwner?: CompanyInviteDto;
    color?: string | null;
    boards?: Array<BoardDto> | null;
    dateCreated?: string;
    uiType?: number;
    usersCount?: number;
    isPaid?: boolean;
    isTest?: boolean;
    contactName?: string | null;
    contactPhoneNumber?: string | null;
    orgchartType?: string | null;
    imageId?: number | null;
    image?: StaticFileDto;
    timeZoneFromUtc?: number;
    weekStart?: DayOfWeek;
    userOwnerId?: number | null;
    userOwner?: UserShortDto;
    modules?: Array<CompanyModuleDto> | null;
    externalId?: string | null;
    timeZoneId?: string | null;
}
