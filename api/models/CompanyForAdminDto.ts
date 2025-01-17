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

export enum TariffType {
    Bb1Economy = "Bb1Economy",
    Bb1Business  = "Bb1Business ",
    Bb1Premium = "Bb1Premium",
    Bb2Economy = "Bb2Economy",
    Bb2Business = "Bb2Business",
    Bb2Premium  = "Bb2Premium ",
    BbUsaYearly = "BbUsaYearly",
    Graduate = "Graduate",
    Graduate50 = " Graduate50",
    Resident = "Resident",
    Vip = "Vip",
    Demo = "Demo",
    PlatinumResident = "PlatinumResident",
    OrgchartLifetime = "OrgchartLifetime",
    OfficialRefusal = "OfficialRefusal",
    WasPaid = "WasPaid",
    Custom  = "Custom ",
}

export type UsersCount = {
    Full?: number;
    Restricted?: number;
    Blocked?: number;
}

export enum Feature {
    OrganizationalStructure = "OrganizationalStructure",
    Communications = "Communications",
    ReportsAnalytics = "ReportsAnalytics",
    EmployeeSchedules = "EmployeeSchedules",
    EmployeeManagement = "EmployeeManagement",
    TrainingDevelopment = "TrainingDevelopment",
    KnowledgeBase = "KnowledgeBase",
    DashboardsVisualization = "DashboardsVisualization",
    SystemSettings = "SystemSettings",
    PlanningForecasting = "PlanningForecasting",
    CalendarTasksPlanning = "CalendarTasksPlanning",
    ManageCompanies = "ManageCompanies",
}

export type CompanyFeatureDto = {
    key: Feature;
    isEnable: boolean;
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
    usersCount?: UsersCount;
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
    endAccessTime?: string | null;
    availableFeatures?: CompanyFeatureDto[];
    academyClientStatus?: {
        value1: string;
        value2: string;
        value3: string;
    }
}
