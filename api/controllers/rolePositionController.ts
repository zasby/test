import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { RolePositionDto } from "../models/RolePositionDto";

export class RolePositionController extends ApiControllerCrud<RolePositionDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "rolePosition");
  }
}
