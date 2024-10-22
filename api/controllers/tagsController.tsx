import { AxiosInstance } from "axios";
import { ApiControllerBase, ApiControllerCrud } from "../helpers";
import { CreateTagDto, TagDto } from "../models/TagDto";
import { OrgchartStatsDto } from "../models/OrgchartStatsDto";


export class TagsController extends ApiControllerCrud<TagDto, {}> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "tag");
  }

  async createTag(tag: CreateTagDto, onError?: any): Promise<TagDto | null> {
    return await this.process<TagDto | null>(this.post("", { data: tag }), undefined, onError);
  }

  async editTag(id: number, tag: TagDto, onError?: any): Promise<TagDto | null> {
    return await this.process<TagDto | null>(this.put(`${id}`, { data: tag }), undefined, onError);
  }

  public async getTagsWithStats(model: {
    userRelation: string,
    tags?: number[]
  }): Promise<OrgchartStatsDto[] | null> {
    return await this.process(this.get("with-stats", { params: model }));
  }


  //
  // async fetchTags(): Promise<TagDto[]> {
  //   return await this.process<TagDto | null>(this.get("", { data: tag }));
  // }
  //
  // async getInoUrl(): Promise<string | null> {
  //   return await this.process<string>(this.get("info-url"));
  // }
  //
  // async getInoRedirect(): Promise<any | null> {
  //   return await this.process<any[]>(this.get("info-redirect"));
  // }
  //
  // async disconnect(): Promise<any | null> {
  //   return await this.process<any[]>(this.delete("disconnect"));
  // }
  //
  // async getIno(): Promise<GoogleCalendarAccountDto | null> {
  //   return await this.process<GoogleCalendarAccountDto>(this.get("info"));
  // }
  //
  // async getCalendarIno(): Promise<IGoogleCalendar[] | null> {
  //   return await this.process<IGoogleCalendar[]>(this.get(""));
  // }
  //
  // async setCalendarId(calendarId: string): Promise<string | null> {
  //   return await this.process<string>(this.post("calendar-id", { params: { calendarId }}));
  // }
  //
  // async disconnectReading(): Promise<boolean | null> {
  //   return await this.process<boolean>(this.delete("disconnect-reading"));
  // }
}
