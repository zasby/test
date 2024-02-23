import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { IssueDto } from "../models/IssueDto";
import { IssueFilter } from "../filters/issueFilter";
import { BoardInfo } from "../models/BoardInfo";
import { PlannedTimeDto } from "../models/PlannedTimeDto";

export class IssueController extends ApiControllerCrud<IssueDto, IssueFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "issue");
  }

  public async boardInfo(opts: { [key: string]: any }): Promise<BoardInfo[] | null> {
    return await this.process(this.get("board-info", { params: opts }));
  }

  public async getPlannedTime(opts: { [key: string]: any }): Promise<PlannedTimeDto | null> {
    return await this.process(this.get("planned-time", { params: opts }));
  }
}
