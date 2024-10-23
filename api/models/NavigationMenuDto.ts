/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { UserRegulationStatsDto } from "./UserRegulationStatsDto";
import type { UserShortDto } from "./UserShortDto";
import { RegulationDto } from "./RegulationDto";
import React from "react";
import { UserSelectionRule } from "../types/userSelectionRule";
import { allowsRegulationKeys } from "../../constants/regulation/consts";

export type BreadcrumbDto = {
    id: number;
    name: string;
}

export type NavigationMenuItemDto = {
    items?: NavigationMenuItemDto[];
    description?: string;
    id: number;
    name: string;
    order: number;
    parentId?: number;
    regulationId?: number;
    regulation?: RegulationDto;
    dateCreated?: string;
    stats?: UserRegulationStatsDto;
    status?: string;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    withoutATopic?: boolean;
    breadcrumbs: BreadcrumbDto[];
    key?: string;
    isFavorite: boolean;
    userSelectionRules?: UserSelectionRule[];
    actions?: allowsRegulationKeys[];
};

export type NavigationMenuDto = {
    breadcrumbs: BreadcrumbDto[];
    items: NavigationMenuItemDto[];
}

export type AddRegulationsToSectionDto = {
    regulationIds?: number[];
    navigationMenuItemIds?: number[];
}

export type AddRegulationToSectionDto = {
    id: number;
    regulationId: number;
    insertAfterItemId?: number;
}


export type RegulationsCountDto = {
    regulationIds: number[];
    navigationMenuItemIds: number[];
}


export type GetRegulationsDto = {
    regulationIds: number[];
    navigationMenuItemIds: number[];
    pageSize: number;
}

export enum MenuItemClaimType {
    Read = "Read", //: Чтение,
    Write = "Write", //: Запись,
    // ReadWrite = "ReadWrite", //: Чтение и запись,
    Assignment = "Assignment", //: Назначение на обучение,
    FullAccess = "FullAccess", //: Полный доступ
}
