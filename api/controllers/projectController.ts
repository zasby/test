import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { ProjectDto } from "../models/ProjectDto";

export class ProjectController extends ApiControllerCrud<ProjectDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "project");
  }
}
