import React, { createContext, useState } from "react";

export interface IGlobalAuthorizedContext {
  audio?: {
    currentActivePlayerId?: string | number | null;
  };
  regulation?: {
    isSidebarOpen?: boolean;
    onSidebarOpenChange?: () => void;
    reloadSidebarData?: () => void;
  };
  issue?: {
    reloadIssue?: () => void;
    reloadIssueHistory?: () => void;
    reloadIssueBoard?: (() => void)[];
    reloadIssueBoardCounters?: () => void;
  };
  setState: (state: IGlobalAuthorizedContext) => void;
}

export const GlobalAuthorizedContext = createContext<IGlobalAuthorizedContext | null>(null);

export const GlobalAuthorizedContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, setState] = useState<IGlobalAuthorizedContext | null>({ setState: (_s) => setState(_s) });

  return <GlobalAuthorizedContext.Provider value={state} children={children} />;
};
