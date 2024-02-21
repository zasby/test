import { AxiosInstance } from "axios";
import { RegulationHistoryDto } from "..";
import { ApiControllerCrud } from "../helpers";
import { RegulationHistoryFilter } from "../filters/regulationHistoryFilter";
import { ReactionController } from "../../components/elements/emojiPicker/interfaces/ReactionController.interface";

export class RegulationHistoryController
  extends ApiControllerCrud<RegulationHistoryDto, RegulationHistoryFilter>
  implements ReactionController<RegulationHistoryDto, RegulationHistoryFilter>
{
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "regulationHistory");
  }

  public async reaction(historyId: number, model: { value: string }): Promise<RegulationHistoryDto | null> {
    return await this.process(this.post(`${historyId}/reaction`, { data: model }));
  }
}
