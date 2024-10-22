import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueDto, IssueWithListExecutorDto } from "../models/IssueDto";
import { IssueFilter } from "../filters/issueFilter";
import { BoardInfo } from "../models/BoardInfo";
import { PlannedTimeDto } from "../models/PlannedTimeDto";
import { TagDtoPagingModel } from "../models/TagDto";
import { IssueStatsDto } from "../models/IssueStatsDto";

export class IssueController extends ApiControllerCrud<IssueDto, IssueFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "issue");
  }

  public async boardInfo(opts: { [key: string]: any }): Promise<BoardInfo[] | null> {
    return await this.process(this.get("board-info", { params: opts }));
  }

  public async withStatsByUsers(opts: { [key: string]: any }): Promise<IssueStatsDto[] | null> {
    return await this.process(this.get("with-stats", { params: opts }));
  }

  public async getPlannedTime(opts: { [key: string]: any }): Promise<PlannedTimeDto | null> {
    return await this.process(this.get("planned-time", { params: opts }));
  }

  public async issuesCreateWithListExecutor(data: IssueWithListExecutorDto): Promise<IssueDto[] | null> {
    return await this.process(this.post("postIssuesWithListExecutor", { data }));
  }

  public async addedTags(data: any): Promise<IssueDto | null> {
    return await this.process(this.post(`${data.id}/tag/${data.tagIds}`, { data }));
  }

  public async deleteTags(data: any): Promise<IssueDto | null> {
    return await this.process(this.delete(`${data.id}/tag/${data.tagIds}`, { data }));
  }

  public async getTags(data: any): Promise<TagDtoPagingModel | null> {
    return await this.process(this.get(`tags`, { params: data  }));
  }
}
