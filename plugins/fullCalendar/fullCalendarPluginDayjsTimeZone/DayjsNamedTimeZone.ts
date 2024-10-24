import { NamedTimeZoneImpl } from "@fullcalendar/core/internal";
import dayjs, { ConfigType } from "dayjs";

export class DayjsNamedTimeZone extends NamedTimeZoneImpl {
  offsetForArray(a: number[]): number {
    return dayjs.tz(a as ConfigType, this.timeZoneName).utcOffset();
  }

  timestampToArray(ms: number): number[] {
    return dayjs.tz(ms, this.timeZoneName).toArray();
  }
}
