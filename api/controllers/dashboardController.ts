import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { DashboardDto } from "../models/DashboardDto";
import { DashboardFilter } from "../filters/dashboardFilter";

export class DashboardController extends ApiControllerCrud<DashboardDto, DashboardFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "dashboard");
  }

  public async deleteMetricFromDashboard(dashboardId: number, metric2DashboardId: number): Promise<boolean | null> {
    return await this.process(
      this.delete(`${dashboardId}/graph/${metric2DashboardId}`),
      (s) => true,
      () => false
    );
  }
}
