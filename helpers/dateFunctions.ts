import { addLeadingZeroToString, removeMultipleSpacesFromString } from "./stringFunctions";
import i18n from "i18next";
import dayjs, { Dayjs } from "dayjs";

interface IGenerateTimeSpanObject {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;
  totalHours?: number;
  totalMinutes?: number;
  totalSeconds?: number;
  dateObject?: Date;
  dayjsObject?: Dayjs;
}

export function addTimeZoneOffsetToDate(date: Date): Date {
  // const d = date;
  // d.setTime(d.getTime() + d.getTimezoneOffset() * 60 * 1000);
  // return d;
  return dayjs(date)
    .add(date.getTimezoneOffset() / 60, "hour")
    .toDate();
}

export const generateTimeSpan = (o: IGenerateTimeSpanObject): string => {
  const aL0 = addLeadingZeroToString;

  if (o.dateObject != null) {
    const d = o.dateObject;
    return (
      // (d.getDate() != null ? `${d.getDate()}.` : "") +
      [aL0(d.getHours() ?? 0), aL0(d.getMinutes() ?? 0), aL0(d.getSeconds() ?? 0)].join(":")
    );
  }

  return (
    (o.days != null ? `${o.days}.` : "") +
    [aL0(o.hours ?? 0), aL0(o.minutes ?? 0), aL0(o.seconds ?? 0)].join(":") +
    (o.milliseconds != null ? `.${o.milliseconds}` : "")
  );
};

export const convertMinutesToTimeSpan = (minutes: number): string => {
  const days = Math.floor(minutes / (60 * 24));
  const remainingMinutes = minutes % (60 * 24);
  const hh = Math.floor(remainingMinutes / 60);
  const mm = remainingMinutes % 60;

  return `${days.toString().padStart(2, "0")}.${hh.toString().padStart(2, "0")}:${mm.toString().padStart(2, "0")}:00`;
};

export const getObjectFromTimeSpan = (ts: string): IGenerateTimeSpanObject => {
  // TODO: Fix timeZone!!!
  let resObject: IGenerateTimeSpanObject = {
    days: undefined,
    hours: undefined,
    minutes: undefined,
    seconds: undefined,
    milliseconds: undefined,
    totalHours: undefined,
    dateObject: undefined,
    dayjsObject: undefined,
  };
  const dateToReturn = new Date();
  const tokens = ts.split(":");
  const isNegativeNumber = ts.includes("-");
  const tokenWithDaysAndHours = tokens.shift()?.split(".");
  const tokenWithMillisecondsAndSeconds = tokens.pop()?.split(".");
  const timeSpanHasDays = tokenWithDaysAndHours?.length == 2;
  const timeSpanHasMilliseconds = tokenWithMillisecondsAndSeconds?.length == 2;
  // const dotsInTimeSpanCount = ts.match(/\./g)?.length ?? 0;

  if (timeSpanHasDays) {
    resObject = {
      ...resObject,
      days: Number(tokenWithDaysAndHours.shift() ?? 0),
    };
  }

  if (timeSpanHasMilliseconds) {
    resObject = {
      ...resObject,
      milliseconds: Number(tokenWithMillisecondsAndSeconds.pop() ?? 0),
    };
  }

  resObject = {
    ...resObject,
    hours: Number(tokenWithDaysAndHours ?? 0),
    minutes: Number(tokens[0] ?? 0),
    seconds: Number(tokenWithMillisecondsAndSeconds ?? 0),
  };

  dateToReturn.setHours(resObject.hours ?? 0, resObject.minutes ?? 0, resObject.seconds ?? 0);

  const totalHours = Math.abs(resObject.days ?? 0) * 24 + (resObject.hours ?? 0);
  resObject = {
    ...resObject,
    totalHours: (resObject.days ?? 0) < 0 ? -totalHours : totalHours,
  };

  const totalMinutes = Math.abs(resObject.totalHours ?? 0) * 60 + (resObject.minutes ?? 0);

  resObject = {
    ...resObject,
    totalMinutes: ((resObject.totalHours ?? 0) < 0 || (resObject.totalHours === 0 && isNegativeNumber)) ? -totalMinutes : totalMinutes,
  };

  const totalSeconds = Math.abs(resObject.totalMinutes ?? 0) * 60 + (resObject.seconds ?? 0);

  resObject = {
    ...resObject,
    totalSeconds: (resObject.totalMinutes ?? 0) < 0 ? -totalSeconds : totalSeconds,
  };

  resObject = {
    ...resObject,
    dateObject: dateToReturn,
    dayjsObject: dayjs(dateToReturn),
  };

  return resObject;
};

export const changeTimeInDateObject = (d: Date, { hh, mm, ss }: { hh?: number; mm?: number; ss?: number }): Date => {
  const dd = new Date(d);
  dd.setHours(hh ?? dd.getHours(), mm ?? dd.getMinutes(), ss ?? dd.getSeconds());
  return dd;
};

export const getDaysArrayBetweenTwoDates = function (startDate: Date | string, endDate: Date | string) {
  let arr = [],
    dt = new Date(startDate);
  for (arr = []; dt <= new Date(endDate); dt.setDate(dt.getDate() + 1)) {
    arr.push(new Date(dt));
  }
  return arr;
};

// TODO: Add totalMinutes and totalSeconds
export const convertSecondsToObject = (s: number): IGenerateTimeSpanObject => {
  let _s = s;
  const days = _s / (24 * 3600);

  _s = _s % (24 * 3600);
  const hour = _s / 3600;

  _s %= 3600;
  const minutes = _s / 60;

  _s %= 60;
  const seconds = _s;

  return {
    days: Math.floor(days),
    hours: Math.floor(hour),
    minutes: Math.floor(minutes),
    seconds: Math.floor(seconds),
  };
};

export const generateHumanReadableStringFromObject = (
  o: IGenerateTimeSpanObject,
  keepSpaceBetweenNumberAndLetter = false
): string => {
  const l = i18n.t("parse:no_orgchart");
  const [d, h, m, s, ms] = ["d", "h", "m", "s", "ms"];
  let str2return = "";
  const numbersAndLetterDivider = keepSpaceBetweenNumberAndLetter ? " " : "";

  if (o.days != null && o.days.toString().length > 0) {
    str2return += [o.days, d, " "].join(numbersAndLetterDivider);
  }

  if (o.hours != null && o.hours.toString().length > 0) {
    str2return += [o.hours, h, " "].join(numbersAndLetterDivider);
  }

  if (o.minutes != null && o.minutes.toString().length > 0) {
    str2return += [o.minutes, m, " "].join(numbersAndLetterDivider);
  }

  if (o.seconds != null && o.seconds.toString().length > 0) {
    str2return += [o.seconds, s, " "].join(numbersAndLetterDivider);
  }

  if (o.milliseconds != null && o.milliseconds.toString().length > 0) {
    str2return += [o.milliseconds, ms, " "].join(numbersAndLetterDivider);
  }

  return removeMultipleSpacesFromString(str2return).trim();
};

export const getWeekStartAndEndByDate = (date: Date | Dayjs, weekStart?: number): [Date, Date] => {
  const weekStartCurrent = dayjs().startOf("week").day();
  const weekStartNew = weekStart ?? weekStartCurrent;
  const weekStartDifference = weekStartNew - weekStartCurrent;
  return [
    dayjs(date).add(-weekStartDifference, "day").startOf("week").add(weekStartDifference, "day").toDate(),
    dayjs(date).add(-weekStartDifference, "day").endOf("week").add(weekStartDifference, "day").toDate(),
  ];
};

export const timeSpanOperation = (ts1?: string) => {
  const add = (ts2: string | string[]): string => {
    if (Array.isArray(ts2)) {
      let resSeconds = 0;
      ts2.forEach((t) => {
        const tsObj = getObjectFromTimeSpan(t);
        resSeconds += tsObj.totalSeconds as number;
      });
      return generateTimeSpan(convertSecondsToObject(resSeconds));
    } else {
      const tsObj1 = getObjectFromTimeSpan(ts1 as string);
      const tsObj2 = getObjectFromTimeSpan(ts2);
      const resSeconds = (tsObj1.totalSeconds as number) + (tsObj2.totalSeconds as number);
      return generateTimeSpan(convertSecondsToObject(resSeconds));
    }
  };

  const subtract = (): string => {
    //
    return "x";
  };

  return {
    add,
    subtract,
  };
};

export const convertDateToUTC0 = (d: Date): Date => {
  const _d = new Date(d);
  _d.setUTCHours(0, 0, 0, 0);
  return _d;
};

export const compareISODatesWithoutTZ = (s1: string, s2: string) => s1.substring(0, 19) == s2.substring(0, 19);
