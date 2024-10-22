import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { OrgchartDto } from "../models/OrgchartDto";
import { RolesWithOrgchartDto } from "../models/RolesWithOrgchartDto";
import { OrgchartItemDto } from "../models/OrgchartItemDto";
import { OrgchartTemplateDto } from "../models/OrgchartTemplateDto";
import { OrgchartTemplateTypeEnum } from "../models/OrgchartTemplateTypeDto";
import { OrgchartStatsDto } from "../models/OrgchartStatsDto";

export class OrgchartController extends ApiControllerCrud<OrgchartDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "orgchart");
  }

  public async getTree(orgchartId: number): Promise<OrgchartItemDto[] | null> {
    return await this.process(this.get(orgchartId + "/tree"));
  }

  public async getTreeWithRoles(orgchartId: number, params?: any): Promise<RolesWithOrgchartDto | null> {
    return await this.process(this.get(orgchartId + "/tree/with-roles", {
      params,
    }));
  }

  public async getOrgchartsWithStats(model: { userRelation: string }): Promise<OrgchartStatsDto[] | null> {
    return await this.process(this.get("with-stats", { params: model }));
  }

  public async getClassicalTemplates(): Promise<OrgchartTemplateDto[] | null> {
    return await this.process(this.get("template/c"));
  }

  public async getSimplifiedTemplates(): Promise<OrgchartTemplateDto[] | null> {
    return await this.process(this.get("template/s"));
  }

  public async getTemplates(type: OrgchartTemplateTypeEnum): Promise<OrgchartTemplateDto[] | null> {
    return await this.process(this.get(`template/${type}`));
  }

  public async duplicateOrgchart(orgchartId: number): Promise<OrgchartDto | null> {
    return await this.process(this.post(`${orgchartId}/duplicate`, { data : { orgchartId } }));
  }

  public async applyTemplate(orgchartId: number, templateKey: string): Promise<boolean | null> {
    return await this.process(
      this.post(orgchartId + "/template/" + templateKey),
      () => true,
      () => false
    );
  }

  public async saveTemplate(templateKey: string | null, data: any): Promise<boolean | null> {
    return await this.process(
      this.put((`template/${templateKey}`), {data}),
      () => true,
      () => false
    );
  }



  public async del(orgchartId: number): Promise<boolean | null> {
    return await this.process(
      this.delete(orgchartId + ""),
      () => true,
      () => false
    );
  }

  public async changeOrgchartOrder(orgchartId: number, order: number): Promise<boolean | null> {
    return await this.process(
      this.post((`${orgchartId}/order/${order}`)),
      () => true,
      () => false
    );
  }

  public async getSubordinates(orgchartId: number): Promise<OrgchartTemplateDto[] | null> {
    return await this.process(this.get(`${orgchartId}/subordinates`));
  }

}
