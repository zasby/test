/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricSource2UserShortDto } from './MetricSource2UserShortDto';
import type { PagingOptions } from './PagingOptions';

export type MetricSource2UserShortDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<MetricSource2UserShortDto> | null;
}
