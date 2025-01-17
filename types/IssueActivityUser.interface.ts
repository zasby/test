import { UserShortDto } from "../api";

export interface IIssueActivityUser {
  user: UserShortDto;
  background?: string;
  isLineThrough?: boolean;
}
