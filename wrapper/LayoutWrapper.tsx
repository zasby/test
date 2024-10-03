import React, { ReactNode } from 'react';
import { rootStore } from "../stores/rootStore";
import { RootStoreContext } from "../contexts/rootStoreContext";
import { RootStoreProvider } from "../contexts/storeContext";

export const LayoutWrapper = ({ children }: { children: ReactNode }) => (
  <RootStoreContext.Provider value={rootStore}>
    <>
      {console.log('children', children)}
    <RootStoreProvider>
      { children }
    </RootStoreProvider>
      </>
  </RootStoreContext.Provider>
);