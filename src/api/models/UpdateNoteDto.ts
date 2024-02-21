/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UpdateNoteContentDto } from './UpdateNoteContentDto';
import type { UserShortDto } from './UserShortDto';

export type UpdateNoteDto = {
    id?: number;
    isPublished?: boolean;
    version?: number;
    createdByUser?: UserShortDto;
    contents?: Array<UpdateNoteContentDto> | null;
    dateCreated?: string;
    showUpdateModal?: boolean;
}
