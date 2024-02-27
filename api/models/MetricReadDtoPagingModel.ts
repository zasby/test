/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricReadDto } from './MetricReadDto';
import type { PagingOptions } from './PagingOptions';

export type MetricReadDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<MetricReadDto> | null;
}
