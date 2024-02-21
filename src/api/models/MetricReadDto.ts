/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { MetricDividerDto } from './MetricDividerDto';
import type { MetricGraphDto } from './MetricGraphDto';
import type { MetricSettingsDto } from './MetricSettingsDto';
import type { MetricSourceDto } from './MetricSourceDto';
import type { RolePositionShortDto } from './RolePositionShortDto';
import type { UserShortDto } from './UserShortDto';

export type MetricReadDto = {
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
    renderType?: number;
    dateRenderFrom?: string;
    dateRenderTo?: string;
    graphs?: Array<MetricGraphDto> | null;
    yDividers?: Array<MetricDividerDto> | null;
    settings?: MetricSettingsDto;
    metric2DashboardId?: number | null;
}
