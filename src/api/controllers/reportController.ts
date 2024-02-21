import { ApiControllerBase } from "../helpers";
import { AxiosInstance } from "axios";
import { DriverReport, IssueReportDto } from "..";

export class ReportController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "report");
  }

  public async customRule(params: { dateFrom: string; dateTo: string }): Promise<IssueReportDto | null> {
    return await this.process(this.get("custom-rule", { params: params }));
  }

  public async violation(params: { dateFrom: string; dateTo: string }): Promise<IssueReportDto | null> {
    return await this.process(this.get("violation", { params: params }));
  }

  public async driver(params: { dateFrom: string; dateTo: string }): Promise<DriverReport | null> {
    return await this.process(this.get("driver", { params: params }));
  }
}
