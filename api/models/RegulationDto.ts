/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Regulation2UserDto } from './Regulation2UserDto';
import type { RegulationContentDto } from './RegulationContentDto';
import type { RegulationUserSelectionRuleDto } from './RegulationUserSelectionRuleDto';
import type { UserShortDto } from './UserShortDto';
import { RegulationStatus } from "../../constants/regulationStatus";
import { BreadcrumbDto } from "./NavigationMenuDto";
import { allowsRegulationKeys } from "../../constants/consts";

// const type RegulationBreadcrumbs =  breadcrumbs?: BreadcrumbDto[]

export type RegulationDto = {
    id?: number;
    breadcrumbs?: BreadcrumbDto[][];
    regulationId?: number;
    name?: string | null;
    regulationName?: string | null;
    dateCreated?: string;
    datePublish?: string;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    draftContent?: RegulationContentDto;
    activeContent?: RegulationContentDto;
    isStudied?: boolean | null;
    isStudiedBySpecifiedUser?: boolean | null;
    canBeEdited?: boolean | null;
    usersWhoStudied?: Array<Regulation2UserDto> | null;
    usersToStudy?: Array<UserShortDto> | null;
    allowedActions?: Array<number> | null;
    actions?: allowsRegulationKeys[];
    timeToStudy?: string | null;
    userSelectionRules?: Array<RegulationUserSelectionRuleDto> | null;
    isAllowedToResendRegulation?: boolean;
    state?: RegulationStatus;
    withoutATopic?: boolean;
    isDraft?: boolean;
}

export type RegulationReviewControllerDTO = {
    userPublisherId?: number;
    resetTestResultsOnPublish?: boolean;
    timeToStudy?: string;
}
