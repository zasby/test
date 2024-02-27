/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingOptions } from './PagingOptions';
import type { ProjectDto } from './ProjectDto';

export type ProjectDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<ProjectDto> | null;
}
