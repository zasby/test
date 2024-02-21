import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { MetricSource2UserShortDto } from "../models/MetricSource2UserShortDto";

export class MetricSource2UserController extends ApiControllerCrud<MetricSource2UserShortDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "metricSource2User");
  }
}
