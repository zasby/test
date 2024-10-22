import { AxiosInstance } from "axios";
import { MenuItemDto, RegulationDto } from "..";
import { RegulationFilter } from "../filters/regulationFilter";
import { ApiControllerCrud } from "../helpers";
import { RegulationTreeDto } from "../models/RegulationTreeDto";
import { RegulationReviewControllerDTO } from "../models/RegulationDto";
import { RoleSelectorDto } from "../models/RoleSelectorDto";
import { NavigationMenuItemClaimGroupDto } from "../models/NavigationMenuItemClaimGroupDto";

export class RegulationController extends ApiControllerCrud<RegulationDto, RegulationFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "regulation");
  }

  public async getTabs(): Promise<MenuItemDto[] | null> {
    return await this.process(this.get("tab"));
  }

  public async study(id: number, userId?: number) {
    return await this.process(this.get(`${id}/study`, {
      params: {
        userId
      }
    }));
  }

  public async unStudy(id: number, userId: number) {
    return await this.process(this.get(`${id}/un-study/${userId}`));
  }

  public async addToSection(sectionId: number, regulationId: number) {
    return await this.process(this.post(`${regulationId}/section/${sectionId}`));
  }

  public async review(regulationId: number, data: RegulationReviewControllerDTO) {
    return await this.process(this.post(`${regulationId}/review`, { data }));
  }

  public async publish(regulationId: number, notifyUsers?: boolean, resetTestResultsOnPublish?: boolean) {
    // return await this.process(this.post(`${regulationId}/publish/${isLoudly ? "?notifyUsers=true" : ""}`));
    return await this.process(this.post(`${regulationId}/publish/`, {
      params: {
        notifyUsers,
        resetTestResultsOnPublish,
      }
    }));

  }

  public async reject(regulationId: number) {
    return await this.process(this.post(`${regulationId}/reject`));
  }

  public async getTree(): Promise<RegulationTreeDto[] | null> {
    return await this.process(this.get("tree"));
  }

  public async getRoleSelectorsTree(regulationId: number, orgchartId: number, parentRoleId?: number): Promise<RoleSelectorDto[] | null> {
    return await this.process(this.get(`role-selectors-tree`, {
      params: {
        orgchartId,
        regulationId,
      }
    }));
  }

  public async sendForStudy(regulationId: number, data: RoleSelectorDto[]): Promise<boolean | null> {
    return await this.process(this.post(`${regulationId}/role-selectors`, { data }));
  }

  public async getRoleForStudy(regulationId: number): Promise<RoleSelectorDto[] | null> {
    return await this.process(this.get(`${regulationId}/role-selectors`));
  }

  public async addFavorite(regulationId: number): Promise<boolean | null> {
    return await this.process(this.post(`item/${regulationId}/favorite/add`));
  }

  public async removeFavorite(regulationId: number): Promise<boolean | null> {
    return await this.process(this.post(`item/${regulationId}/favorite/remove`));
  }

  public async getClaimGroup(id: number): Promise<NavigationMenuItemClaimGroupDto | null> {
    return await this.process(this.get(`item/${id}/claim-group`));
  }

}