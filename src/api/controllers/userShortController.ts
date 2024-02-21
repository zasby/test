import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";
import { UserShortDto } from "../models/UserShortDto";

export class UserShortController extends ApiControllerGet<UserShortDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "userShort");
  }
}
