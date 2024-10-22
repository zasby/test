import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueHistoryDto, IssueLastCommentDto } from "../models/IssueHistoryDto";
import { ReactionController } from "../../types/ReactionController.interface";

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

  public async fetchLastComment(issueId: number): Promise<IssueLastCommentDto | null> {
    return await this.process(this.get(`${issueId}/last-comment`));
  }

}
