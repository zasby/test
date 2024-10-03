import React, { ReactNode } from "react";
import { observer } from "mobx-react-lite";
import { StoreProvider } from "./contexts/storeContext";
export const RootObserver = observer(({ children }: { children: ReactNode } ) => (
  <StoreProvider>
    { children }
  </StoreProvider>
));
