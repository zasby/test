import { ApiControllerBase } from "../helpers";
import { AxiosInstance } from "axios";
import { DriverStatsDtoPagingModel } from "../models/DriverStatsDtoPagingModel";
import { PagingOptions } from "../models/PagingOptions";
import { DriverStatsOverall } from "../models/DriverStatsOverall";

// import { UserWithViolationsDtoPagingModel } from "../models/UserWithViolationsDtoPagingModel";

export class DriverAdminController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "driverAdmin");
  }

  public async stats(
    params: PagingOptions & { dateFrom: string; dateTo: string; companyGroupId?: number }
  ): Promise<DriverStatsDtoPagingModel | null> {
    return await this.process(this.get("stats", { params: params }));
  }

  public async overall(
    params: PagingOptions & { dateFrom: string; dateTo: string; companyGroupId?: number }
  ): Promise<DriverStatsOverall | null> {
    return await this.process(this.get("stats/overall", { params: params }));
  }

  // public async usersWithViolations(params: any): Promise<UserWithViolationsDtoPagingModel | null> {
  //   return await this.process(this.get("users-with-violations", { params: params }));
  // }
}
