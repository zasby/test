import { AxiosInstance } from "axios";
import { MenuItemDto, RegulationDto } from "..";
import { RegulationFilter } from "../filters/regulationFilter";
import { ApiControllerCrud } from "../helpers";

export class RegulationController extends ApiControllerCrud<RegulationDto, RegulationFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "regulation");
  }

  public async getTabs(): Promise<MenuItemDto[] | null> {
    return await this.process(this.get("tab"));
  }

  public async study(id: number) {
    return await this.process(this.get(`${id}/study`));
  }

  public async unStudy(id: number, userId: number) {
    return await this.process(this.get(`${id}/un-study/${userId}`));
  }

  public async addToSection(sectionId: number, regulationId: number) {
    return await this.process(this.post(`${regulationId}/section/${sectionId}`));
  }

  public async publish(regulationId: number, isLoudly?: boolean) {
    return await this.process(this.post(`${regulationId}/publish/${isLoudly ? "?notifyUsers=true" : ""}`));
  }

  public async reject(regulationId: number) {
    return await this.process(this.post(`${regulationId}/reject`));
  }
}
