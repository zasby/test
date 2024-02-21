import { ItervalConsts, ItervaTypes } from "./types/consts";

export const addMinutes = (date: Date, minutes: number): Date => {
  return new Date(date.getTime() + minutes * 60000);
};
export const getNearestDateMultipleOf5 = (date: Date) => {
  const currnetMinutes = date.getMinutes();
  if (currnetMinutes % 5 === 0) {
    return addMinutes(date, 5);
  } else {
    return addMinutes(date, 5 + (5 - (currnetMinutes % 5)));
  }
};

export const isToday = (comparedDate: Date) => {
  return comparedDate.toLocaleDateString() === new Date().toLocaleDateString();
};
export const isIntervalLess = (compareDate: Date, typeInterval: ItervaTypes, interval: number): boolean => {
  const newDate = new Date();
  if (typeInterval === ItervalConsts.Hours) {
    if (compareDate > newDate && compareDate.getHours() - newDate.getHours() <= interval) {
      return true;
    } else {
      return false;
    }
  }
  if (typeInterval === ItervalConsts.Minutes) {
    if (compareDate > newDate && compareDate.getMinutes() - newDate.getMinutes() <= interval) {
      return true;
    } else {
      return false;
    }
  }
  return false;
};
export const isEqualDate = (firstDate: Date, secondDate: Date, andHours: boolean, andMinutes: boolean): boolean => {
  if (firstDate.getUTCFullYear() === secondDate.getUTCFullYear()) {
    if (andHours && andMinutes) {
      return (
        firstDate.getDate() === secondDate.getDate() &&
        firstDate.getHours() === secondDate.getHours() &&
        firstDate.getMinutes() === secondDate.getMinutes()
      );
    }
    if (andHours) {
      return firstDate.getDate() === secondDate.getDate() && firstDate.getHours() === secondDate.getHours();
    }
    if (andMinutes) {
      return firstDate.getDate() === secondDate.getDate() && firstDate.getMinutes() === secondDate.getMinutes();
    }
    return firstDate.getDate() === secondDate.getDate();
  } else {
    return false;
  }
};
export const getBiggerDate = (firstDate: Date, secondDate: Date): Date | null => {
  if (firstDate.getUTCFullYear() !== secondDate.getUTCFullYear()) {
    return firstDate > secondDate ? firstDate : secondDate;
  } else {
    if (firstDate.getMonth() !== secondDate.getMonth()) {
      return firstDate > secondDate ? firstDate : secondDate;
    } else {
      if (firstDate.getDate() !== secondDate.getDate()) {
        return firstDate > secondDate ? firstDate : secondDate;
      } else {
        if (firstDate.getHours() !== secondDate.getHours()) {
          return firstDate > secondDate ? firstDate : secondDate;
        } else {
          if (firstDate.getMinutes() !== secondDate.getMinutes()) {
            return firstDate > secondDate ? firstDate : secondDate;
          } else {
            if (firstDate.getMinutes() === secondDate.getMinutes()) {
              return null;
            } else {
              return firstDate > secondDate ? firstDate : secondDate;
            }
          }
        }
      }
    }
  }
};
