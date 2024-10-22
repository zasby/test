import { AxiosInstance } from "axios";
import { HistoryDto } from "..";
import { ApiControllerCrud } from "../helpers";
import { RegulationHistoryFilter } from "../filters/regulationHistoryFilter";
import { ReactionController } from "../../types/ReactionController.interface";

export class RegulationHistoryController
  extends ApiControllerCrud<HistoryDto, RegulationHistoryFilter>
  implements ReactionController<HistoryDto, RegulationHistoryFilter>
{
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "regulationHistory");
  }

  public async reaction(historyId: number, model: { value: string }): Promise<HistoryDto | null> {
    return await this.process(this.post(`${historyId}/reaction`, { data: model }));
  }
}
