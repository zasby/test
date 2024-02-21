/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { Regulation2UserDto } from './Regulation2UserDto';
import type { RegulationContentDto } from './RegulationContentDto';
import type { RegulationUserSelectionRuleDto } from './RegulationUserSelectionRuleDto';
import type { UserShortDto } from './UserShortDto';

export type RegulationDto = {
    id?: number;
    name?: string | null;
    dateCreated?: string;
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
    timeToStudy?: string | null;
    userSelectionRules?: Array<RegulationUserSelectionRuleDto> | null;
    isAllowedToResendRegulation?: boolean;
}
