import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { RoleDto } from "../models/RoleDto";
import { RolesWithOrgchartDto } from "../models/RolesWithOrgchartDto";
import { RoleOrderModel } from "../models/RoleOrderModel";
import { RoleCalculatedDto } from "../models/RoleCalculatedDto";

export class RoleController extends ApiControllerCrud<RoleDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "role");
  }

  public async orgchartWithRoles(): Promise<RolesWithOrgchartDto | null> {
    return await this.process(this.get("orgchart/with-roles"));
    // { params: { includeActions: true, nestedLevel: 50 }
  }

  public async calculated(
    id: number,
    includeActions: boolean = true,
    includeClaims: boolean = false
  ): Promise<RoleCalculatedDto | null> {
    return await this.process(
      this.get(id + "/calculated", { params: { includeActions: includeActions, includeClaims: includeClaims } })
    );
  }

  public async reorderChildren(parentId: number, model: RoleOrderModel[]): Promise<boolean | null> {
    return await this.process(
      this.post(parentId + "/order", { data: model }),
      (x) => true,
      (x) => false
    );
  }
}
