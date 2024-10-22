import { createContext } from "react";
import { IAccessControlDialogContext } from "../types/IAccessControlDialogContext";

// @ts-ignore
export const AccessControlDialogContext = createContext<IAccessControlDialogContext>(null);
