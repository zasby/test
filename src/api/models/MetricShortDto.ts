/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePositionShortDto } from './RolePositionShortDto';
import type { UserShortDto } from './UserShortDto';

export type MetricShortDto = {
    id?: number;
    name?: string | null;
    nameFormatted?: string | null;
    description?: string | null;
    isPause?: boolean;
    isReversed?: boolean;
    isMain?: boolean;
    dateCreated?: string;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    rolePositionId?: number | null;
    rolePosition?: RolePositionShortDto;
}
