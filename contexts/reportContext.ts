import { createContext } from "react";
import { IReportContext } from "../type";



const defaultReportState: IReportContext = {
  reportKey: undefined,
  users: [],
  timeInterval: undefined,
};

export const ReportContext = createContext<IReportContext>(defaultReportState);
