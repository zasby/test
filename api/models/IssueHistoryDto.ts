/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueCommentDto } from './IssueCommentDto';
import type { IssueHistoryActionDto } from './IssueHistoryActionDto';
import type { IssueHistoryLogDto } from './IssueHistoryLogDto';
import type { IssueHistoryReactionDto } from './IssueHistoryReactionDto';
import type { IssueProofDto } from './IssueProofDto';
import type { IssueStatusDto } from './IssueStatusDto';
import type { UserShortDto } from './UserShortDto';

export type IssueHistoryDto = {
    id?: number;
    dateCreated?: string;
    dateUpdated?: string | null;
    dateDeletedAt?: string | null;
    isDeleted?: boolean;
    issueId?: number;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    deletedByUserId?: number | null;
    deletedByUser?: UserShortDto;
    status?: IssueStatusDto;
    proof?: IssueProofDto;
    isRead?: boolean | null;
    comment?: IssueCommentDto;
    actions?: Array<IssueHistoryActionDto> | null;
    logs?: Array<IssueHistoryLogDto> | null;
    reactions?: Array<IssueHistoryReactionDto> | null;
}
