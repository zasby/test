import { AxiosInstance } from "axios";
import { SectionDto } from "..";
import { SectionFilter } from "../filters/sectionFilter";
import { ApiControllerCrud } from "../helpers";

export class SectionController extends ApiControllerCrud<SectionDto, SectionFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "section");
  }

  public async unStudy(id: number, userId: number) {
    return await this.process(this.get(`${id}/un-study/${userId}`));
  }
}
