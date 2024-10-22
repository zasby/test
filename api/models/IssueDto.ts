/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardStatusDto } from './BoardStatusDto';
import type { IssueAttachmentDto } from './IssueAttachmentDto';
import type { IssueCalculatedDto } from './IssueCalculatedDto';
import type { IssueCustomFieldDto } from './IssueCustomFieldDto';
import type { IssueParticipantDto } from './IssueParticipantDto';
import type { IssueProofDto } from './IssueProofDto';
import type { IssueProofRequirementDto } from './IssueProofRequirementDto';
import type { OrgchartDto } from './OrgchartDto';
import type { ProjectDto } from './ProjectDto';
import type { RoleShortDto } from './RoleShortDto';
import type { UserShortDto } from './UserShortDto';
import type { StaticFileDto } from "./StaticFileDto";
import { TagDto } from "./TagDto";

export type IssueDto = {
    id?: number;
    subId?: string | null;
    companyId?: number | null;
    boardId?: number | null;
    type?: string | null;
    name?: string | null;
    description?: string | null;
    awaitedResult?: string | null;
    userRelations?: Array<number> | null;
    primaryUserRelation?: number | null;
    projectId?: number | null;
    project?: ProjectDto;
    currentIssueStatusId?: number | null;
    dateLastStatusUpdate?: string | null;
    orgchartId?: number;
    orgchart?: OrgchartDto;
    dateArchivedAt?: string | null;
    timePlan?: string | null;
    timePlanAsSeconds?: number | null;
    timeFact?: string | null;
    timeFactAsSeconds?: number | null;
    timePlanForApproval?: string | null;
    timePlanForApprovalAsSeconds?: number | null;
    timeFactForApproval?: string | null;
    timeFactForApprovalAsSeconds?: number | null;
    dateDeadlineCalculated?: string | null;
    timePlanFromDateDeadline?: string | null;
    initiatorUserId?: number | null;
    initiatorUser?: UserShortDto;
    createdByUserId?: number | null;
    createdByUser?: UserShortDto;
    proofRequirementId?: number | null;
    proofRequirement?: IssueProofRequirementDto;
    proof?: IssueProofDto;
    executorUserId?: number;
    executorUser?: UserShortDto;
    roleId?: number | null;
    role?: RoleShortDto;
    priority?: number | null;
    dateCreated?: string;
    dateDeadline?: string | null;
    dateWorkStart?: string | null;
    dateWorkStartForApproval?: string | null;
    fields?: Array<IssueCustomFieldDto> | null;
    attachments?: Array<IssueAttachmentDto> | null;
    participants?: Array<IssueParticipantDto> | null;
    status?: BoardStatusDto;
    calculated?: IssueCalculatedDto;
    flowTypeColorScheme?: string | null;
    orgchartName?: string | null;
    orgchartImage?: StaticFileDto;
    error?: string;
    isStrictDeadline?: boolean;
    tags?: TagDto[];
    // tagIds?: number[];
}

export type IssueWithListExecutorDto = Omit<IssueDto, 'executorUserId'> & {
    executorUserId?: number[];
};