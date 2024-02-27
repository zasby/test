import { ApiControllerGet } from "../helpers";
import { AxiosInstance } from "axios";
import { UserWithRegulationStatsDto } from "..";

export class UserWithRegulationStatsController extends ApiControllerGet<UserWithRegulationStatsDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "userWithRegulationStats");
  }
}
