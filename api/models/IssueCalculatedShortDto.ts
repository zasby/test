/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';
import type { IssueBorderDto } from './IssueBorderDto';
import type { IssueIndicatorDto } from './IssueIndicatorDto';

export type IssueCalculatedShortDto = {
    indicators?: Array<IssueIndicatorDto> | null;
    nextStatuses?: Array<BoardStatusDto> | null;
    border?: IssueBorderDto;
}
