/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueForTgResponseItem } from './IssueForTgResponseItem';

export type IssuesForTgResponseItem = {
    id?: string | null;
    firstName?: string | null;
    middleName?: string | null;
    lastName?: string | null;
    utcOffset?: number;
    timeZoneId?: string | null;
    userAvatarUrl?: string | null;
    tasks?: Array<IssueForTgResponseItem> | null;
}
