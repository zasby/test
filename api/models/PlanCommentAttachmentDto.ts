/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StaticFileDto } from './StaticFileDto';

export type PlanCommentAttachmentDto = {
    id?: number;
    planCommentId?: number;
    fileId?: number;
    file?: StaticFileDto;
    order?: number;
}
