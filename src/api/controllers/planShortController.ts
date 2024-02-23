import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { PlanShortDto } from "../models/PlanShortDto";

export class PlanShortController extends ApiControllerCrud<PlanShortDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "plan/short");
  }
}
