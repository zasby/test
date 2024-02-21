/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricSourceDto } from './MetricSourceDto';
import type { PagingOptions } from './PagingOptions';

export type MetricSourceDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<MetricSourceDto> | null;
}
