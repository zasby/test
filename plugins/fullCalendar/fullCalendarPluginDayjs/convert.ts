import { CalendarApi, Duration as FCDuration } from "@fullcalendar/core";
import dayjs, { ConfigType, Dayjs } from "dayjs";
import { Duration as DayjsDuration } from "dayjs/plugin/duration";
import { CalendarImpl } from "@fullcalendar/core/internal";

export function toDayjs(date: Date, calendar: CalendarApi): Dayjs {
  if (!(calendar instanceof CalendarImpl)) {
    throw new Error("must supply a CalendarApi instance");
  }

  let { dateEnv } = calendar.getCurrentData();

  return convertToDayjs(date, dateEnv.timeZone, null, dateEnv.locale.codes[0]);
}

export function toDayjsDuration(fcDuration: FCDuration): DayjsDuration {
  return dayjs.duration(fcDuration);
}

// Internal Utils

export function convertToDayjs(
  input: ConfigType,
  timeZone: string,
  timeZoneOffset: number | null,
  locale: string
): Dayjs {
  let djs: Dayjs;

  if (timeZone === "local") {
    djs = dayjs(input);
  } else if (timeZone === "UTC") {
    djs = dayjs.utc(input);
  } else if ((dayjs as any).tz) {
    djs = dayjs.tz(input, timeZone);
  } else {
    djs = dayjs.utc(input);

    if (timeZoneOffset != null) {
      djs.utcOffset(timeZoneOffset);
    }
  }

  return djs;
}
