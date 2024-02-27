import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueShortDto } from "../models/IssueShortDto";

export class IssueShortController extends ApiControllerGet<IssueShortDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "issueShort");
  }
}
