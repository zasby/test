import { ApiControllerGet } from "../helpers";
import { MetricFilter } from "../filters/metricFilter";
import { AxiosInstance } from "axios";
import { MetricReadDto } from "../models/MetricReadDto";

export class MetricReadController extends ApiControllerGet<MetricReadDto, MetricFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "metricRead");
  }
}
