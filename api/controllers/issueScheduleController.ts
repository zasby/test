import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueScheduleDto } from "../models/IssueScheduleDto";

export class IssueScheduleController extends ApiControllerCrud<IssueScheduleDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "issueSchedule");
  }
}
