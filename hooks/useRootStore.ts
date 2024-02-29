import { useContext } from "react";
import { RootStoreContext } from "test/contexts";
import { globalStore } from "../stores/globalStore";

export function useRootStore() {
  // const context = useContext(RootStoreContext);
  //
  // if (context === undefined) {
  //   throw new Error("useRootStore must be used within it's context provider");
  // }

  console.log('GlobalStore', globalStore);
  console.log('GlobalStore.getStories', globalStore.getStories);

  return globalStore.getStories ?? useContext(RootStoreContext);
}
