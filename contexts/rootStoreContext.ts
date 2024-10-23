import { createContext } from "react";
import { RootStore } from "../stores";

export const RootStoreContext = createContext<RootStore>(new RootStore());
