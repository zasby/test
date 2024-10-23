import { projectSectionKeys } from "./routesKeys";

export interface IProjectContext {
  projectId: number | null;
  projectSection: projectSectionKeys | null;
}
