import { useContext } from "react";
import { RootStoreContext } from "../contexts";
import { globalStore } from "../stores/globalStore";

export function useRootStore() {
  // const context = useContext(RootStoreContext);
  //
  // if (context === undefined) {
  //   throw new Error("useRootStore must be used within it's context provider");
  // }

  const context = useContext(RootStoreContext);
  console.log('context=======================', context);
  // return globalStore.getStories ?? useContext(RootStoreContext);
  return context
}

// import { useContext } from "react";
// import { RootStoreContext } from "../contexts/rootStoreContext";
//
// export function useRootStore() {
//   const context = useContext(RootStoreContext);
//   console.log('useRootStore context', context);
//   if (context === undefined) {
//     throw new Error("useRootStore must be used within it's context provider");
//   }
//
//   return context;
// }
