import { createContext } from "react";

export interface IDriverRTCCallsContext {
  requestPhoneNumber: string | null;
  isDialing: boolean;

  updateState: (state: IDriverRTCCallsContext) => void;
  resetState: () => void;
  makeCall: (phoneNumber: string) => void;
}

export const DriverRTCCallsContext = createContext<IDriverRTCCallsContext | null>(null);
