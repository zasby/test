/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardDto } from './BoardDto';
import type { CompanyInviteDto } from './CompanyInviteDto';
import type { CompanyModuleDto } from './CompanyModuleDto';
import type { DayOfWeek } from './DayOfWeek';
import type { StaticFileDto } from './StaticFileDto';
import type { UserShortDto } from './UserShortDto';
import { CompanyUserLimitDto } from "./CompanyUserLimitDto";

//
// Bb1Economy: Эконом BB1,
// Bb1Business: Бизнес BB1,
// Bb1Premium: Премиум BB1,
// Bb2Economy: Эконом BB2,
// Bb2Business: Бизнес BB2,
// Bb2Premium: Премиум BB2,
// Resident: Резидент,
// Vip: VIP,
// Demo: Демо,
// PlatinumResident: Платиновый резидент,
// Custom: Индивидуальные условия
export enum TariffType {
    Bb1Economy = "Bb1Economy",
    Bb1Business  = "Bb1Business ",
    Bb1Premium = "Bb1Premium",
    Bb2Economy = "Bb2Economy",
    Bb2Business = "Bb2Business",
    Bb2Premium  = "Bb2Premium ",
    Resident = "Resident",
    Vip = "Vip",
    Demo = "Demo",
    PlatinumResident = "PlatinumResident",
    Custom  = "Custom ",
}

export type CompanyForAdminDto = {
    id?: number;
    name?: string | null;
    nameFallback?: string | null;
    description?: string | null;
    userLimit?: number | null;
    userLimits?: CompanyUserLimitDto[];
    inviteForOwner?: CompanyInviteDto;
    color?: string | null;
    boards?: Array<BoardDto> | null;
    dateCreated?: string;
    uiType?: number;
    usersCount?: number;
    isPaid?: boolean;
    isPartiallyPaid?: boolean;
    isInactive?: boolean;
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
    tariffCode?: TariffType | null;
}