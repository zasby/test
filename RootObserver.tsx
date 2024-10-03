import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { RootStoreProvider } from "./contexts/storeContext";
export const RootObserver = observer(({ children }: { children: ReactNode } ) => (
  <RootStoreProvider>
    { children }
  </RootStoreProvider>
));
