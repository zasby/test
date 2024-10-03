import React, { ReactNode } from 'react';
import { rootStore } from "../stores/rootStore";
import { RootStoreContext } from "../contexts/rootStoreContext";
import { RootStoreProvider } from "../contexts/storeContext";
import {Component} from "./component";

export const LayoutWrapper = ({ children }: { children: ReactNode }) => (
  <RootStoreContext.Provider value={rootStore}>
    <>
      {console.log('children', children)}
    <RootStoreProvider>
      <>
        <Component/>
      { children }
      </>
    </RootStoreProvider>
      </>
  </RootStoreContext.Provider>
);