import { createContext } from "react";
import { projectSectionKeys } from "../types";



const defaultProjectState: IProjectContext = {
  projectId: null,
  projectSection: null,
};

export const ProjectContext = createContext<IProjectContext>(defaultProjectState);
