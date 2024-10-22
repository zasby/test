import { AxiosInstance } from "axios";
import { ApiControllerBase } from "../helpers";

import { GoogleCalendarAccountDto } from "../models/GoogleCalendarAccountDto";
import { IGoogleCalendar } from "../../types/GoogleCalendar.interface";

export class GoogleCalendarController extends ApiControllerBase {
  constructor(cl: AxiosInstance, v: string = "v1") {
    super(cl, v, "google-calendar");
  }

  async getInoUrl(): Promise<string | null> {
    return await this.process<string>(this.get("info-url"));
  }

  async getInoRedirect(): Promise<any | null> {
    return await this.process<any[]>(this.get("info-redirect"));
  }

  async disconnect(): Promise<any | null> {
    return await this.process<any[]>(this.delete("disconnect"));
  }

  async getIno(): Promise<GoogleCalendarAccountDto | null> {
    return await this.process<GoogleCalendarAccountDto>(this.get("info"));
  }

  async getCalendarIno(): Promise<IGoogleCalendar[] | null> {
    return await this.process<IGoogleCalendar[]>(this.get(""));
  }

  async setCalendarId(calendarId: string): Promise<string | null> {
    return await this.process<string>(this.post("calendar-id", { params: { calendarId }}));
  }

  async disconnectReading(): Promise<boolean | null> {
    return await this.process<boolean>(this.delete("disconnect-reading"));
  }
}
