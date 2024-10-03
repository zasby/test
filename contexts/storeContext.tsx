// import React, { createContext, ReactNode } from "react";
// import { RootStore } from "../stores";
// import { RootStoreContext } from "./rootStoreContext";
// //
// // let store: RootStore;
// //
// // export const StoreContext = createContext<RootStore | undefined>(undefined);
// //
// // export function RootStoreProvider({ children }: { children: ReactNode }) {
// //   console.log('RootStoreProvider store', store);
// //   console.log('RootStoreProvider new RootStore()', new RootStore());
// //   const root = store ?? new RootStore();
// //   console.log('RootStoreProvider root', root);
// //   return <StoreContext.Provider value={root}>{children}</StoreContext.Provider>;
// // }
//
// export const RootStoreProvider = ({ children }: { children: ReactNode }) => {
//   return (
//     <RootStoreContext.Provider
//       value={RootStore}
//     >
//       {children}
//     </RootStoreContext.Provider>
//   );
// }

import React, { createContext, useContext } from 'react';
import { RootStore } from "../stores";

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  return (
    <StoreContext.Provider value={RootStore}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  return useContext(StoreContext);
};