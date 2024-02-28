import { UserShortDto } from "../api";

export interface IReportContext {
  reportKey?: string | null;
  users?: UserShortDto[] | null;
  timeInterval?: { from: string; to: string };
}