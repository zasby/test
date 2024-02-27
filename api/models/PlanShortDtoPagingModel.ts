/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingOptions } from './PagingOptions';
import type { PlanShortDto } from './PlanShortDto';

export type PlanShortDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<PlanShortDto> | null;
}
