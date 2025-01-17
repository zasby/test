import { UserShortDto } from "./UserShortDto";
import { TagDto } from "./TagDto";
import { IssueCommentDto } from "./IssueCommentDto";
import { RoleSelectorDto } from "./RoleSelectorDto";
import { BoardStatusDto } from "./BoardStatusDto";
import { IssueHistoryReactionDto } from "./IssueHistoryReactionDto";
import { RoleShortDto } from "./RoleShortDto";
import { StaticFileDto } from "./StaticFileDto";
import { IssuePriorityDto } from "./IssuePriorityDto";
import { OrgchartDto } from "./OrgchartDto";


export enum EntityAuditState {
  Added = "Added",
  Modified = "Modified",
  Removed = "Removed",
}

export type IssueActivityDto = {
  issueId: number;
  entityType: string;
  propertyName: string;
  value: string;
  previousValue: string;
  // diff?: string;
  relatedEntityId?: number;
  relatedEntityUsers?: UserShortDto[];
  relatedEntityTags?: TagDto[];
  createdByUserId: number;
  createdByUser: UserShortDto;
  dateCreated: string;
  state?: EntityAuditState;
  comment?: IssueCommentDto;
  executor?: UserShortDto;
  previousExecutor?: UserShortDto;
  initiator?: UserShortDto;
  previousInitiator?: UserShortDto;
  observer?: UserShortDto;
  tag?: TagDto;
  role?: RoleShortDto;
  previousRole?: RoleShortDto;
  previousBoardStatus?: BoardStatusDto;
  boardStatus?: BoardStatusDto;
  reactions?: IssueHistoryReactionDto[];
  file?: StaticFileDto;
  previousPriority?: IssuePriorityDto;
  priority?: IssuePriorityDto;
  orgchart?: OrgchartDto;
  previousOrgchart?: OrgchartDto;
}
