import { UserShortDto } from "../api";
import { EntityAuditState } from "../api/models/IssueActivityDto";

export interface IIssueActivityObserver {
  user?: UserShortDto;
  state: EntityAuditState;
}
