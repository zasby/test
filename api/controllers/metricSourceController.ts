import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { MetricSourceDto } from "../models/MetricSourceDto";

export class MetricSourceController extends ApiControllerCrud<MetricSourceDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "metricSource");
  }
}
