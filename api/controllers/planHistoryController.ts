import { AxiosInstance } from "axios";
import { PlanHistoryDto } from "..";
import { ApiControllerCrud } from "../helpers";
import { PlanHistoryFilter } from "../filters/planHistoryFilter";
import { ReactionController } from "../../types/ReactionController.interface";

export class PlanHistoryController
  extends ApiControllerCrud<PlanHistoryDto, PlanHistoryFilter>
  implements ReactionController<PlanHistoryDto, PlanHistoryFilter>
{
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "planHistory");
  }

  public async reaction(historyId: number, model: { value: string }): Promise<PlanHistoryDto | null> {
    return await this.process(this.post(`${historyId}/reaction`, { data: model }));
  }
}
