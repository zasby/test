/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusActionDto } from './BoardStatusActionDto';
import type { BoardStatusDto } from './BoardStatusDto';
import type { BoardUserToIssueRelationDto } from './BoardUserToIssueRelationDto';
import type { IssueBorderDto } from './IssueBorderDto';
import type { IssueIndicatorDto } from './IssueIndicatorDto';

export type IssueCalculatedDto = {
    updateLevel?: string | null;
    actions?: Array<BoardStatusActionDto> | null;
    nextStatuses?: Array<BoardStatusDto> | null;
    indicators?: Array<IssueIndicatorDto> | null;
    blockedFields?: Array<string> | null;
    dateWorkStartTo?: string | null;
    allowedToSendCommentTypes?: Array<string> | null;
    border?: IssueBorderDto;
    userRelation?: BoardUserToIssueRelationDto;
}
