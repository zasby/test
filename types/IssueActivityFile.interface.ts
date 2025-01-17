import { StaticFileDto } from "../api";
import { EntityAuditState } from "../api/models/IssueActivityDto";

export interface IIssueActivityFile {
  file?: StaticFileDto;
  state: EntityAuditState;
}
