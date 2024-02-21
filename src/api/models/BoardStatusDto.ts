/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusTransitionActionDto } from './BoardStatusTransitionActionDto';
import type { BoardStatusTransitionDto } from './BoardStatusTransitionDto';

export type BoardStatusDto = {
    id?: number;
    name?: string | null;
    order?: number;
    key?: string | null;
    boardId?: number;
    baseStatusKey?: string | null;
    colorSchemeKey?: string | null;
    requiredActions?: Array<BoardStatusTransitionActionDto> | null;
    transitionsTo?: Array<BoardStatusTransitionDto> | null;
    transitionsFrom?: Array<BoardStatusTransitionDto> | null;
}
