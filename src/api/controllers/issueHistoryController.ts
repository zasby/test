import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueHistoryDto } from "../models/IssueHistoryDto";
import { ReactionController } from "../../components/elements/emojiPicker/interfaces/ReactionController.interface";

export class IssueHistoryController
  extends ApiControllerCrud<IssueHistoryDto, {}>
  implements ReactionController<IssueHistoryDto, {}>
{
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "issueHistory");
  }

  public async reaction(historyId: number, model: { value: string }): Promise<IssueHistoryDto | null> {
    return await this.process(this.post(`${historyId}/reaction`, { data: model }));
  }

  public async setIsReadStatus(historyId: number, model: { value: boolean }): Promise<IssueHistoryDto | null> {
    return await this.process(this.post(`${historyId}/read`, { data: model }));
  }
}
