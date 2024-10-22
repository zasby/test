/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';
import type { BoardStatusTransitionActionRuleDto } from './BoardStatusTransitionActionRuleDto';

export type BoardStatusTransitionActionDto = {
    id?: number;
    issueStatusId?: number;
    issueStatus?: BoardStatusDto;
    baseTransitionActionKey?: string | null;
    rules?: Array<BoardStatusTransitionActionRuleDto> | null;
    actionKey?: string;
}
