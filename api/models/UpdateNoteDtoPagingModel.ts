/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PagingOptions } from './PagingOptions';
import type { UpdateNoteDto } from './UpdateNoteDto';

export type UpdateNoteDtoPagingModel = {
    pagingOptions?: PagingOptions;
    totalItems?: number;
    readonly totalPages?: number;
    items?: Array<UpdateNoteDto> | null;
}
