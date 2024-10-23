export interface ITimeSpanObject {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
  milliseconds?: number;

  totalHours?: number;
  totalMinutes?: number;
  totalSeconds?: number;

  dateObject?: Date;
}

export const timeSpan = (ts?: string) => {
  //
  const parseFromString = (ts: string): ITimeSpanObject => {
    //
    return {
      //
    };
  };

  const generateFromObject = (obj: ITimeSpanObject): string => {
    return "";
  };

  const add = (ts2add: string | string[]): string => {
    const arr2add: string[] = typeof ts2add === "string" ? [ts2add] : ts2add;
    return "";
  };

  return {
    parseFromString,
    generateFromObject,
    add,
  };
};
