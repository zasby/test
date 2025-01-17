import { TagDto } from "../api/models/TagDto";
import { EntityAuditState } from "../api/models/IssueActivityDto";

export interface IIssueActivityTag {
  tag?: TagDto;
  state: EntityAuditState;
}
