import { createContext } from "react";
import { OrgchartTemplateDto } from "../api";
import { IOrgchartContext } from "../types";

export const OrgchartContext = createContext<IOrgchartContext | null>(null);
