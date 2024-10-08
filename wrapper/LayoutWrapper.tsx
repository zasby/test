import React, { ReactNode } from 'react';
import { rootStore } from "../stores/rootStore";
import { RootStoreContext } from "../contexts/rootStoreContext";
import { RootStoreProvider } from "../contexts/storeContext";
import {Component} from "./component";
import {Component1} from "./component1";

export const LayoutWrapper = ({ children }: { children: ReactNode }) => (
  <RootStoreContext.Provider value={rootStore}>
    <>
      {console.log('LayoutWrapper children', children)}
    <RootStoreProvider>
      <>
        <Component/>
        <Component1/>
      { children }
      </>
    </RootStoreProvider>
      </>
  </RootStoreContext.Provider>
);