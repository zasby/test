/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricSource2UserDto } from './MetricSource2UserDto';
import type { MetricSourceDto } from './MetricSourceDto';
import type { RolePositionShortDto } from './RolePositionShortDto';
import type { UserShortDto } from './UserShortDto';

export type MetricDto = {
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
    sources?: Array<MetricSourceDto> | null;
    isOneCanvas?: boolean | null;
    children?: Array<MetricSource2UserDto> | null;
}
