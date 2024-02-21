import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";
import { EducationItemDto } from "..";

export class EducationController extends ApiControllerGet<EducationItemDto, any> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "education");
  }

  public async getEducationItems(opts?: { key: string }): Promise<EducationItemDto[] | null> {
    return await this.process(this.get("", { params: opts }));
  }

  public async getEducationItem(opts?: { key: string; lang: string }): Promise<EducationItemDto[] | null> {
    // /api/v1/education?key=ed.b.i&lang=ru”
    return await this.process(this.get("", { params: opts }));
  }

  public async saveEducationProgress(eductionKey: string): Promise<any> {
    return await this.process(this.post("", { data: { key: eductionKey } }));
  }
}
