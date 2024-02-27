import React, { createContext, useState } from "react";
import { IGlobalAuthorizedContext } from "../types";

export const GlobalAuthorizedContext = createContext<IGlobalAuthorizedContext | null>(null);

export const GlobalAuthorizedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<IGlobalAuthorizedContext | null>({ setState: (_s) => setState(_s) });

  return <GlobalAuthorizedContext.Provider value={state} children={children} />;
};
