import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { MetricDto } from "../models/MetricDto";
import { MetricFilter } from "../filters/metricFilter";
import { MetricValueDto } from "../models/MetricValueDto";
import { MetricSettingsDto } from "../models/MetricSettingsDto";

export class MetricController extends ApiControllerCrud<MetricDto, MetricFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "metric");
  }

  public async updateValueOrQuota(model: MetricValueDto[]): Promise<boolean | null> {
    // Type: 1 - value, 2 - quota
    return await this.process(
      this.post("value", { data: model }),
      (x) => x,
      () => null
    );
  }

  public async updateYAxisValues(model: MetricSettingsDto): Promise<boolean | null> {
    return await this.process(
      this.post("settings", { data: model }),
      (x) => x,
      () => null
    );
  }
}
