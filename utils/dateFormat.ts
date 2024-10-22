import dayjs, { Dayjs } from "dayjs";

export const parseTimeSpan = (val?: string | null, tz: string = "Africa/Abidjan",): Dayjs | null => {
  if (val == null) return null;
  const [hours, minutes, seconds = 0] = val.split(":").map(Number);
  return dayjs()?.utc(false).tz(tz, false).set({
    hours,
    minutes,
    seconds,
  });
};
