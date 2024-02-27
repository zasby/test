import { ApiControllerBase } from "../helpers";
import { AxiosInstance } from "axios";
import { InitialInfoDto } from "../models/InitialInfoDto";

export class AuthorizedController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1", controllerName: string = "authorized") {
    super(cl, v, controllerName);
  }

  public async getInitialInfo(): Promise<InitialInfoDto | null> {
    return await this.process(this.get(""));
  }

  public async getSSOToken(): Promise<string | null> {
    return await this.process(this.get("canny/sso-token"));
  }
}
