import { AxiosError, AxiosInstance } from "axios";
import { ApiControllerCrud } from "../helpers";
import { CompanyForAdminDto } from "../models/CompanyForAdminDto";
import { UserSignInTokenDto } from "../models/UserSignInTokenDto";
import { AdminCompanyFilter } from "../filters/adminCompanyFilter";
import { ReportSimpleModel } from "../models/ReportSimpleModel";
import { Report2ValueModel } from "../models/Report2ValueModel";

export class AdminCompanyController extends ApiControllerCrud<CompanyForAdminDto, AdminCompanyFilter> {
  constructor(cl: AxiosInstance, v: string = "v1", controllerName: string = "adminCompany") {
    super(cl, v, controllerName);
  }

  async create(m: CompanyForAdminDto, onError?: (error: AxiosError) => void): Promise<CompanyForAdminDto | null> {
    return await this.process<CompanyForAdminDto>(this.post("", { data: m }), undefined, onError);
  }

  async edit(
    id: number,
    m: CompanyForAdminDto,
    params?: any,
    onError?: (error: AxiosError) => void
  ): Promise<CompanyForAdminDto | null> {
    return await this.process<CompanyForAdminDto>(
      this.put(id.toString(), { data: m, params: params }),
      undefined,
      onError
    );
  }

  public async resetBoard(boardId: number): Promise<boolean | null> {
    return await this.process(
      this.get(boardId + "/reset"),
      (x) => true,
      (x) => false
    );
  }

  public async resetAllBoards(): Promise<boolean | null> {
    return await this.process(
      this.get("all/reset"),
      (x) => true,
      (x) => false
    );
  }

  public async signInAs(userId: number): Promise<UserSignInTokenDto | null> {
    return await this.process(this.get("sign-in-as/" + userId));
  }

  public async recalculateRecurringIssues(issueId: number, date: Date): Promise<boolean | null> {
    return await this.process(
      this.get("recurring-issue/reset/" + issueId, { params: { dateFrom: date.toISOString() } }),
      (x) => true,
      (x) => false
    );
  }

  public async getEmployeeStats(companyId: number, dateFrom: Date, dateTo: Date): Promise<ReportSimpleModel[] | null> {
    return await this.process(
      this.get("" + companyId + "/report/user-count", {
        params: { dateFrom: dateFrom.toISOString(), dateTo: dateTo.toISOString(), pageSize: 1000 },
      })
    );
  }

  public async getCompaniesStats(
    dateFrom: string,
    dateTo: string,
    isPaid: boolean | null,
    isPartiallyPaid: boolean | null,
    isTest: boolean  | null,
    isInactive: boolean | null,
    hasDriver: boolean | null
  ): Promise<Report2ValueModel[] | null> {

    return await this.process(
      this.get("report/count", {
        params: {
          dateFrom,
          dateTo,
          isPaid: isPaid,
          isTest,
          isInactive,
          hasDriver: hasDriver,
          isPartiallyPaid,
          pageSize: 1000,
        },
      })
    );
  }

  public async pause(companyId: number): Promise<boolean | null> {
    return await this.process(
      this.get(companyId + "/pause"),
      (x) => true,
      (x) => false
    );
  }
}
