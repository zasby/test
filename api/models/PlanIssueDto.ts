/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';
import type { IssueCalculatedDto } from './IssueCalculatedDto';
import type { OrgchartDto } from './OrgchartDto';
import type { RoleShortDto } from './RoleShortDto';
import { TagDto } from "./TagDto";


export type PlanIssueDto = {
    id: number;
    name: string;
    subId?: string | null;
    orgchartId?: number;
    orgchart?: OrgchartDto;
    timePlan?: string | null;
    timeFact?: string | null;
    roleId?: number | null;
    role?: RoleShortDto;
    calculated: IssueCalculatedDto;
    dateWorkStart?: string | null;
    dateDeadline?: string | null;
    isStrictDeadline?: boolean | null;
    isManagerApprovalRequired?: boolean | null;
    status: BoardStatusDto;
    tags: TagDto[];
    awaitedResult?: string | null;
    isDeleted?: boolean | null;
    isExcludedFromPlan?: boolean | null;
    isApproved?: boolean | null;
    isIncomplete?: boolean | null;
    isFromRecurringIssue?: boolean | null;
    canBeMigratedFromPlanId?: number | null;
    isDone?: boolean;
}