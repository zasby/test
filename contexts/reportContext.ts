import { createContext } from "react";
import { UserShortDto } from "../api";

export interface IReportContext {
  reportKey?: string | null;
  users?: UserShortDto[] | null;
  timeInterval?: { from: string; to: string };
}

const defaultReportState: IReportContext = {
  reportKey: undefined,
  users: [],
  timeInterval: undefined,
};

export const ReportContext = createContext<IReportContext>(defaultReportState);
