/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardInfoItem } from './BoardInfoItem';

export type BoardInfo = {
    id?: number;
    orgchartId?: number;
    items?: Array<BoardInfoItem> | null;
}
