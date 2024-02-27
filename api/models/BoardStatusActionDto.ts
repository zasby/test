/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusActionBaseDto } from './BoardStatusActionBaseDto';
import type { BoardStatusActionRuleDto } from './BoardStatusActionRuleDto';
import type { BoardStatusDto } from './BoardStatusDto';

export type BoardStatusActionDto = {
    id?: number;
    destinationStatus?: BoardStatusDto;
    baseAction?: BoardStatusActionBaseDto;
    rules?: Array<BoardStatusActionRuleDto> | null;
}
