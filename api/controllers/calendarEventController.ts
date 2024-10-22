import { ApiControllerCrud } from "../helpers";
import { AxiosInstance } from "axios";
import { CalendarEventDto } from "../models/CalendarEventDto";
import { CalendarEventFilter } from "../filters/calendarEventFilter";

export class CalendarEventController extends ApiControllerCrud<CalendarEventDto, CalendarEventFilter> {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "calendarEvent");
  }

  async getCalendarEvents(opts?: any, signal?: AbortSignal): Promise<CalendarEventDto[] | null> {
    return await this.process<CalendarEventDto[]>(this.get("", { params: opts, signal }));
  }

  async getSchedule(opts?: any, signal?: AbortSignal): Promise<any | null> {
    return await this.process<any>(this.get("schedule", { params: opts, signal }));
  }

  async getStatistic(opts?: any): Promise<any | null> {
    return await this.process<any>(this.get("statistic", { params: opts }));
  }

  async getReport(opts?: any): Promise<any | null> {
    return await this.process<any>(this.get("report", {  responseType: 'blob', params: opts }));
  }
}
