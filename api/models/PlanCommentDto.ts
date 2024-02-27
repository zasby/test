/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { PlanCommentAttachmentDto } from './PlanCommentAttachmentDto';

export type PlanCommentDto = {
    id?: number;
    planHistoryId?: number;
    content?: string | null;
    attachments?: Array<PlanCommentAttachmentDto> | null;
}
