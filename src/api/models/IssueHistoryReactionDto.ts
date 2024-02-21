/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserShortDto } from './UserShortDto';

export type IssueHistoryReactionDto = {
    id?: number;
    historyId?: number;
    value?: string | null;
    userId?: number;
    user?: UserShortDto;
}
