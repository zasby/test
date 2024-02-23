import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { UserScheduleDto } from "../models/UserScheduleDto";

export class UserScheduleController extends ApiControllerCrud<UserScheduleDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "userSchedule");
  }

  public async default(params: { dateFrom: string; dateTo: string }): Promise<UserScheduleDto[] | null> {
    return await this.process(this.get("default", { params: params }));
  }
}
