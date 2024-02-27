/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';

export type BoardColumnDto = {
    id?: number;
    name?: string | null;
    order?: number;
    statuses?: Array<BoardStatusDto> | null;
}
