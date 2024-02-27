/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingOptions } from './PagingOptions';
import type { PlanDto } from './PlanDto';

export type PlanDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<PlanDto> | null;
}
