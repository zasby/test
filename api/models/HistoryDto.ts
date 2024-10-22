/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RegulationCommentDto } from './RegulationCommentDto';
import type { HistoryReactionDto } from './HistoryReactionDto';
import type { UserShortDto } from './UserShortDto';
import { PlanCommentDto } from "./PlanCommentDto";

export type HistoryDto = {
    id?: number;
    regulationContentId?: number;
    dateCreated?: string;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    comment?: RegulationCommentDto | PlanCommentDto;
    reactions?: Array<HistoryReactionDto> | null;
}
