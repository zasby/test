import { ApiControllerCrud } from "../helpers";
import { AxiosError, AxiosInstance } from "axios";
import { SectionFilter } from "../filters/sectionFilter";
import {
  AddRegulationsToSectionDto,
  AddRegulationToSectionDto,
  GetRegulationsDto,
  NavigationMenuDto, NavigationMenuItemDto,
  RegulationsCountDto
} from "../models/NavigationMenuDto";
import { RegulationDtoPagingModel } from "../models/RegulationDtoPagingModel";
import { RoleSelectorDto } from "../models/RoleSelectorDto";
import {
  NavigationMenuItemClaimGroupDto,
  NavigationMenuItemUserSelectionRuleClaimDto
} from "../models/NavigationMenuItemClaimGroupDto";

export class NavigationMenuController extends ApiControllerCrud<NavigationMenuItemDto, SectionFilter>  {
  constructor(cl: AxiosInstance, v: string = "v1", controllerName: string = "navigationMenu") {
    super(cl, v, controllerName);
  }

  public async getTree(id?: number, isRegulation?: boolean, hasRegulationId?: boolean): Promise<NavigationMenuDto | null> {
    return await this.process(this.get("", {
      params: {
        parentId: !isRegulation ? id : undefined,
        regulationId: isRegulation ? id : undefined,
        hasRegulationId,
        pageSize: -1,
        orderBy: "order",
      }}));
  }

  public async getItemById(id: number, onError?: (e: AxiosError) => void): Promise<NavigationMenuItemDto | null> {
    return await this.process(
      this.get(`item/${id}`),
      undefined,
      onError
    );
  }

  public async create(data: any): Promise<any | null> {
    return await this.process(this.post(`item`, {data}));
  }

  async editNavigationItem(id: number, name: string): Promise<any | null> {
    return await this.process(this.put(`item/${id}`,{params: { name } }));
  }


  public async deleteItem(id: number): Promise<any | null> {
    return await this.process(this.delete(`item/${id}`));
  }

  public async move(data: any): Promise<any> {
    return await this.process(this.post("move", { data }));
  }

  public async getRegulations(data: GetRegulationsDto): Promise<RegulationDtoPagingModel | null> {
    return await this.process(this.post("items/regulations", {data}));
  }

  public async getRegulationsCount(data: RegulationsCountDto): Promise<number | null> {
    return await this.process(this.post("items/regulations/count", { data }));
  }


  public async addRegulationsToSection(id: number, data: AddRegulationsToSectionDto): Promise<any | null>{
    return await this.process(this.post(`item/${id}/regulations`, { data }));
  }

  public async addRegulationToSection({id, regulationId, insertAfterItemId }: AddRegulationToSectionDto): Promise<any | null>{
    return await this.process(this.post(`item/${id}/regulation/${regulationId}`, insertAfterItemId ? {
      data: {
        insertAfterItemId,
      }
    } : undefined));
  }

  public async addFavorite(id: number): Promise<boolean | null> {
    return await this.process(this.post(`item/${id}/favorite/add`));
  }

  public async removeFavorite(id: number): Promise<boolean | null> {
    return await this.process(this.post(`item/${id}/favorite/remove`));
  }

  public async sendForStudy(id: number, data: RoleSelectorDto[]): Promise<boolean | null> {
    return await this.process(this.post(`${id}/role-selectors`, { data }));
  }

  public async getRoleForStudy(id: number): Promise<RoleSelectorDto[] | null> {
    return await this.process(this.get(`${id}/role-selectors`));
  }

  public async getRoleSelectorsTree(id: number, orgchartId: number, parentRoleId?: number): Promise<RoleSelectorDto[] | null> {
    return await this.process(this.get(`role-selectors-tree`, {
      params: {
        orgchartId,
        id,
      }
    }));
  }

  public async getRoleSelectorsClaimTree(id: number, orgchartId: number): Promise<RoleSelectorDto[] | null> {
    return await this.process(this.get(`role-selectors-claim-tree`, {
      params: {
        orgchartId,
        id,
      }
    }));
  }

  public async getClaimGroup(id: number): Promise<NavigationMenuItemClaimGroupDto | null> {
    return await this.process(this.get(`item/${id}/claim-group`));
  }

  public async setRoleSelectorsClaim(id: number, orgchartId: number, data: NavigationMenuItemUserSelectionRuleClaimDto[]): Promise<NavigationMenuItemClaimGroupDto | null> {
    return await this.process(this.post(`item/role-selectors-claim`, { data, params: {
        id,
        orgchartId,
      } }));
  }
}
