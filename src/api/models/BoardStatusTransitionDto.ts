/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';
import type { BoardStatusTransitionActionDto } from './BoardStatusTransitionActionDto';
import type { BoardStatusTransitionRuleDto } from './BoardStatusTransitionRuleDto';

export type BoardStatusTransitionDto = {
    id?: number;
    name?: string | null;
    description?: string | null;
    boardStatusFrom?: BoardStatusDto;
    boardStatusTo?: BoardStatusDto;
    requiredActions?: Array<BoardStatusTransitionActionDto> | null;
    rules?: Array<BoardStatusTransitionRuleDto> | null;
    issueStatusFromId?: number | null;
    issueStatusFrom?: BoardStatusDto;
    issueStatusToId?: number;
    issueStatusTo?: BoardStatusDto;
    actions?: Array<BoardStatusTransitionActionDto> | null;
}
