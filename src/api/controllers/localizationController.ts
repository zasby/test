import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";

export class LocalizationController extends ApiControllerGet<{}, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "localization");
  }

  public async getLocales(lang: string, section: string): Promise<{} | null> {
    return await this.process(
      this.get(`${lang}/1/${section}`),
      (s) => s,
      () => null
    );
  }
}
