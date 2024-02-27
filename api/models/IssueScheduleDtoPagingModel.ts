/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { IssueScheduleDto } from './IssueScheduleDto';
import type { PagingOptions } from './PagingOptions';

export type IssueScheduleDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<IssueScheduleDto> | null;
}
