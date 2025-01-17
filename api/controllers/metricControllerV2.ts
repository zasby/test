import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { MetricDto } from "../models/MetricDto";
import { MetricFilter } from "../filters/metricFilter";
import { MetricDataDto } from "../models/MetricDataDto";

export class MetricControllerV2 extends ApiControllerCrud<MetricDto, MetricFilter> {
  constructor(cl: AxiosInstance, v: string = "v2") {
    super(cl, v, "metric");
  }

  public async getMetricsData(data: any): Promise<MetricDataDto[] | null> {
    return await this.process(
      this.get("getMetricsData", { params: data }),
      (x) => x,
      () => null
    );
  }
}
