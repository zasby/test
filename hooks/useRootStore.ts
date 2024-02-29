import { useContext } from "react";
import { RootStoreContext } from "test/contexts";
import {GlobalStore} from "../stores/globalStore";

export function useRootStore() {
  // const context = useContext(RootStoreContext);
  //
  // if (context === undefined) {
  //   throw new Error("useRootStore must be used within it's context provider");
  // }

  console.log('GlobalStore', GlobalStore);
  console.log('GlobalStore.getStories', GlobalStore.getStories);

  return GlobalStore.getStories;
}
