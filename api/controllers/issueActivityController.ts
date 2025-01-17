import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueActivityDto } from "../models/IssueActivityDto";


export class IssueActivityController
  extends ApiControllerCrud<IssueActivityDto, {}>
{
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "issueActivity");
  }
}
