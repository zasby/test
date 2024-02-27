/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanCommentDto } from './PlanCommentDto';
import type { PlanHistoryReactionDto } from './PlanHistoryReactionDto';
import type { UserShortDto } from './UserShortDto';

export type PlanHistoryDto = {
    id?: number;
    planId?: number;
    dateCreated?: string;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    comment?: PlanCommentDto;
    reactions?: Array<PlanHistoryReactionDto> | null;
}
