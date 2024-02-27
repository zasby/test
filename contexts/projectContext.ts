import { createContext } from "react";
import { projectSectionKeys } from "../components/modules/pages/projects/misc/constants/routesKeys";

export interface IProjectContext {
  projectId: number | null;
  projectSection: projectSectionKeys | null;
}

const defaultProjectState: IProjectContext = {
  projectId: null,
  projectSection: null,
};

export const ProjectContext = createContext<IProjectContext>(defaultProjectState);
