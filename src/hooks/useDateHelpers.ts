import { rootStore } from "../stores/rootStore";
import dayjs from "dayjs";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

type TDateFormatInput = string | number | Date | dayjs.Dayjs | null | undefined;
type TTimeSpanInput = string | null | undefined;

interface IDateFormatOptions {
  showYearWhenIsCurrent?: boolean;
  returnNullIfDateIsNull?: boolean;
  doNotUsePredefinedOptions?: boolean;
  timeZoneId?: string;
  formatString?: string; // https://day.js.org/docs/en/display/format
  formatObject?: IDateFormatOptionsFormatObject;
}

interface ITimeSpanFormatOptions {
  returnNullIfDateIsNull?: boolean;
  doNotUsePredefinedOptions?: boolean;
  doNotUseCustomTranslation?: boolean;
  returnAs?: "fractional" | "split";
  formatObject?: ITimeSpanFormatOptionsFormatObject;
  formatWithoutDays?: boolean;
}

interface IDateFormatOptionsFormatObject extends Intl.DateTimeFormatOptions {
  //
}

interface ITimeSpanFormatOptionsFormatObject extends Intl.NumberFormatOptions {
  //
}

export function useDateHelpers() {
  const { t } = useTranslation();
  const appLocale = rootStore.appStore?.getAppLocale ?? "en";
  const currentYear = useRef<number>(new Date().getFullYear());

  const defaultFormatDateOptions = useRef<IDateFormatOptions>({
    returnNullIfDateIsNull: false,
    showYearWhenIsCurrent: false,
    doNotUsePredefinedOptions: false,
    formatObject: {
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    },
  });

  const defaultFormatTimeSpanOptions = useRef<ITimeSpanFormatOptions>({
    returnNullIfDateIsNull: false,
    formatObject: {
      style: "unit",
      unit: "hour",
      unitDisplay: "narrow",
    },
  });

  const getPreProcessedDateFormatOptions = (date: Date, options?: IDateFormatOptions): Intl.DateTimeFormatOptions => {
    const timeZone: string = Boolean((dayjs().tz(undefined, false) as any)["$x"]["$timezone"])
      ? (dayjs().tz(undefined, false) as any)["$x"]["$timezone"]
      : rootStore.authStore.getInitialInfo?.identity?.timeZoneId;

    return {
      timeZone: timeZone, // options?.doNotUsePredefinedOptions ?
      year: !options?.showYearWhenIsCurrent && date.getFullYear() == currentYear.current ? undefined : "numeric",
      ...(options?.doNotUsePredefinedOptions ? {} : defaultFormatDateOptions.current.formatObject),
      ...options?.formatObject,
    };
  };

  const getPostProcessedFormatDateString = (dateString: string): string => {
    let str = dateString;
    if (["ru"].includes(appLocale.toLowerCase())) {
      str = str.replaceAll(",", "");
    }
    return str;
  };

  const getPreProcessedTimeSpanFormatOptions = (
    totalMinutes: number,
    options?: ITimeSpanFormatOptions
  ): Intl.NumberFormatOptions => {
    return {
      ...(options?.doNotUsePredefinedOptions ? {} : { minimumFractionDigits: totalMinutes % 1 === 0 ? 0 : 1 }),
      ...(options?.doNotUsePredefinedOptions ? {} : defaultFormatTimeSpanOptions.current.formatObject),
      ...options?.formatObject,
    };
  };

  function formatDate<T extends TDateFormatInput, R = T extends null | undefined ? null : string>(
    date: T,
    options?: IDateFormatOptions
  ): R {
    if (date == null) return (options?.returnNullIfDateIsNull ? null : "") as R;
    const dayJsObj = dayjs(date).tz(
      (options?.timeZoneId ?? "")?.trim().length > 0 ? options?.timeZoneId?.trim() : undefined,
      false
    );

    if (Boolean(options?.formatString?.trim())) return dayJsObj.format(options?.formatString) as R;

    const dayJsStr = dayJsObj
      .utc(false)
      .toDate()
      .toLocaleDateString(appLocale, { ...getPreProcessedDateFormatOptions(dayJsObj.utc(false).toDate(), options) });

    return getPostProcessedFormatDateString(dayJsStr) as R;
  }

  const formatTimeSpan = <T extends TTimeSpanInput, R = T extends null | undefined ? null : string>(
    timeSpan: T,
    options?: ITimeSpanFormatOptions
  ): R => {
    if (timeSpan == null) return (options?.returnNullIfDateIsNull ? null : "") as R;
    const isNegativeNumber = timeSpan.includes("-");
    const [daysStr, timeStr] = timeSpan.split(".");
    const days = daysStr && timeStr != null ? parseInt(daysStr, 10) : 0;
    const [hours, minutes, seconds] = (timeStr == null ? daysStr : timeStr).split(":").map(Number);
    if (!options?.doNotUseCustomTranslation) {
      const hoursValue = !days && isNegativeNumber && hours > 0 ? -hours : hours
      const isNegativeValue = hoursValue < 0 || days < 0;
      const totalHoursAbs = options?.formatWithoutDays
        ? Math.abs(days) * 24 + Math.abs(hoursValue)
        : hoursValue;
      const totalHours = isNegativeValue ? `-${totalHoursAbs}` : totalHoursAbs;
      const minutesValue = !days && !hours && isNegativeNumber && minutes > 0 ? -minutes : minutes
      return [
        days && !options?.formatWithoutDays ? days + t("parse:date_helper.day") : "",
        hours ? totalHours + t("parse:date_helper.hour") : "",
        minutes ? minutesValue + t("parse:date_helper.minute") : "",
      ]
        .filter(Boolean)
        .join(" ") as R;
    }
    if (options?.returnAs == "split") {
      const dayFormat = new Intl.NumberFormat(appLocale, {
        ...getPreProcessedTimeSpanFormatOptions(days, {
          ...options,
          formatObject: { ...options?.formatObject, unit: "day" },
        }),
      });
      const hourFormat = new Intl.NumberFormat(appLocale, {
        ...getPreProcessedTimeSpanFormatOptions(hours, {
          ...options,
          formatObject: { ...options?.formatObject, unit: "hour" },
        }),
      });
      const minuteFormat = new Intl.NumberFormat(appLocale, {
        ...getPreProcessedTimeSpanFormatOptions(minutes, {
          ...options,
          formatObject: { ...options?.formatObject, unit: "minute" },
        }),
      });

      return [
        days ? dayFormat.format(days) : "",
        hours ? hourFormat.format(hours) : "",
        minutes ? minuteFormat.format(minutes) : "",
      ]
        .filter(Boolean)
        .join(" ") as R;
    }

    const totalHours = days * 24 + hours + minutes / 60 + seconds / 3600;
    const numberFormat = new Intl.NumberFormat(appLocale, {
      ...getPreProcessedTimeSpanFormatOptions(totalHours, options),
    });
    return numberFormat.format(totalHours) as R;
  };

  return {
    formatDate,
    formatTimeSpan,
  };
}
