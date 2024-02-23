import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { ControlSessionHistoryDto } from "../models/ControlSessionHistoryDto";
import { ControlSessionHistoryControllerFilter } from "../filters/controlSessionHistoryControllerFilter";

export class ControlSessionHistoryController extends ApiControllerCrud<
  ControlSessionHistoryDto,
  ControlSessionHistoryControllerFilter
> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "controlSessionHistory");
  }
}
