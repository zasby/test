import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { DriverSaFilter } from "../filters/DriverSaFilter";
import { CompanyGroupDto } from "../models/CompanyGroupDto";

export class CompanyGroupController extends ApiControllerCrud<CompanyGroupDto, DriverSaFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "companyGroup");
  }

  public async deleteCompany(id: number): Promise<boolean | null> {
    return await this.process(this.delete(`?companyId=${id}`, { data: { companyId: id } }));
  }

  public async deleteDriver(id: number): Promise<boolean | null> {
    return await this.process(this.delete(`userType?id=${id}`, { data: { id } }));
  }

  public async addCompanyToGroup(groupId: number, companyId: number) {
    return await this.process(this.post(`${groupId}/${companyId}`, { data: { groupId, companyId } }));
  }

  public async activate(messengerId: number) {
    return await this.process(this.post(`messenger/activate/${messengerId}`));
  }

  public async verificationCode(code: number | string) {
    return await this.process(this.post(`messenger/verificationСode/${code.toString()}`));
  }
}
