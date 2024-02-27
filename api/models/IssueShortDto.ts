/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';
import type { IssueCalculatedShortDto } from './IssueCalculatedShortDto';
import type { RoleShortDto } from './RoleShortDto';
import type { StaticFileDto } from './StaticFileDto';
import type { UserShortDto } from './UserShortDto';

export type IssueShortDto = {
    id?: number;
    subId?: string | null;
    name?: string | null;
    description?: string | null;
    awaitedResult?: string | null;
    type?: string | null;
    boardId?: number;
    userRelations?: Array<number> | null;
    primaryUserRelation?: number | null;
    projectId?: number | null;
    roleId?: number | null;
    role?: RoleShortDto;
    executorUserId?: number;
    executorUser?: UserShortDto;
    initiatorUserId?: number | null;
    initiatorUser?: UserShortDto;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    priority?: number | null;
    dateDeadline?: string | null;
    timePlan?: string | null;
    timeFact?: string | null;
    timePlanForApproval?: string | null;
    dateDeadlineCalculated?: string | null;
    orgchartId?: number;
    dateArchivedAt?: string | null;
    status?: BoardStatusDto;
    calculated?: IssueCalculatedShortDto;
    flowTypeColorScheme?: string | null;
    orgchartName?: string | null;
    orgchartImage?: StaticFileDto;
}
