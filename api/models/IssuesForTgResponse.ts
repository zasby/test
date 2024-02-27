/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssuesForTgResponseItem } from './IssuesForTgResponseItem';

export type IssuesForTgResponse = {
    items?: Array<IssuesForTgResponseItem> | null;
    succeed?: boolean;
    message?: string | null;
}
