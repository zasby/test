/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingOptions } from './PagingOptions';
import type { RolePositionDto } from './RolePositionDto';

export type RolePositionDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<RolePositionDto> | null;
}
