/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { OrgchartDto } from './OrgchartDto';
import type { PagingOptions } from './PagingOptions';

export type OrgchartDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<OrgchartDto> | null;
}
