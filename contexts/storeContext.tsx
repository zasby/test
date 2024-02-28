import React, { createContext, ReactNode } from "react";
import { RootStore } from "../stores/rootStore";

let store: RootStore;

export const StoreContext = createContext<RootStore | undefined>(undefined);

export function RootStoreProvider({ children }: { children: ReactNode }) {
  console.log('RootStoreProvider store', store);
  console.log('RootStoreProvider new RootStore()', new RootStore());
  const root = store ?? new RootStore();
  console.log('RootStoreProvider root', root);
  return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
}
