import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { CompanyDto } from "../models/CompanyDto";
import { CompanyUserPermissionDto } from "../models/CompanyUserPermissionDto";
import type { CompanySettingsDto } from "../models/CompanySettingsDto";

export class CompanyController extends ApiControllerCrud<CompanyDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "company");
  }

  public async applyOrgchartTemplate(key: "d" | "c"): Promise<boolean | null> {
    return await this.process(
      this.post("template/" + key),
      () => true,
      () => false
    );
  }

  public async deleteOrgchart(): Promise<boolean | null> {
    return await this.process(
      this.delete("orgchart"),
      (x) => true,
      (x) => false
    );
  }

  public async getUsersWithPermission(permission: string): Promise<CompanyUserPermissionDto | null> {
    return await this.process(this.get(`user-permission/${permission}`));
  }

  public async setUsersWithPermission(permissionModel: CompanyUserPermissionDto): Promise<boolean | null> {
    return await this.process(
      this.post(`user-permission`, { data: permissionModel }),
      (x) => true,
      (x) => false
    );
  }

  public async getCompanySettings(): Promise<CompanySettingsDto | null> {
    return await this.process(this.get(`settings`));
  }

}
