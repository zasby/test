import dayjs from "dayjs";

const localizedFormat = require("dayjs/plugin/localizedFormat");
const utc = require("dayjs/plugin/utc");
dayjs.extend(localizedFormat);
dayjs.extend(utc);

export const formatDateToDateString = (date: Date, customTemplate?: string): string => {
  return dayjs(date).format(customTemplate ?? "L");
};

interface IFormatTimeToHHMMSSMSParams {
  hours?: boolean;
  minutes?: boolean;
  seconds?: boolean;
  milliseconds?: boolean;
  msPerSecond?: number;
}

export function formatTimeToHHMMSSMS(totalSeconds: number, params?: IFormatTimeToHHMMSSMSParams): string {
  const msPerSecond = params?.msPerSecond ?? 100;
  const msPerMinute = msPerSecond * 60;
  const msPerHour = msPerMinute * 60;

  const hh = Math.floor((totalSeconds * msPerSecond) / msPerHour);
  const mm = Math.floor(((totalSeconds * msPerSecond) % msPerHour) / msPerMinute);
  const ss = Math.floor(((totalSeconds * msPerSecond) % msPerMinute) / msPerSecond);
  const ms = Math.floor((totalSeconds * msPerSecond) % msPerSecond);

  const hoursStr = hh.toString().padStart(2, "0");
  const minutesStr = mm.toString().padStart(2, "0");
  const secondsStr = ss.toString().padStart(2, "0");
  const millisecondsStr = ms.toString().padStart(msPerSecond.toString().length, "0");

  const noMsPart = [
    params?.hours == true || hoursStr != "00" ? hoursStr : null,
    params?.minutes !== false ? minutesStr : null,
    params?.seconds !== false ? secondsStr : null,
  ]
    .filter((v) => v != null)
    .join(":");

  return noMsPart + (params?.milliseconds == true ? `.${millisecondsStr}` : "");
}
