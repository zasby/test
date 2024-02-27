import { createContext } from "react";
import { IDriverRTCCallsContext } from "../types";

export const DriverRTCCallsContext = createContext<IDriverRTCCallsContext | null>(null);
