import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { PlanDto } from "../models/PlanDto";
import { PlanStatusTypeDto } from "../models/PlanStatusTypeDto";

export class PlanController extends ApiControllerCrud<PlanDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "plan");
  }

  public async status(): Promise<PlanStatusTypeDto[] | null> {
    return await this.process(
      this.get("status"),
      (s) => s,
      () => null
    );
  }

  public async migrateIssues(fromId: number, toId: number): Promise<PlanDto | null> {
    return await this.process(
      this.get(`${fromId}/migrate/${toId}`),
      (s) => s,
      () => null
    );
  }
}
