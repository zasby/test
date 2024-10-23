export const mergeArrayWithObjectById = (arr: Array<any>, obj: any) => {
  if (arr.some((a) => a.id == obj.id)) {
    return arr && arr.map((t) => (t.id === obj.id ? obj : t));
  } else {
    return [...arr, obj];
  }
};

export const compareArraysOfNumbers = (arr1: number[], arr2: number[]): boolean => {
  if (arr1.length !== arr2.length) return false;
  return arr1.sort().join(",") === arr2.sort().join(",");
};

export const areArraysEqual = function (array: any[], compareArray: any[]) {
  if (array.length !== compareArray.length) return false;
  array.sort();
  compareArray.sort();
  return array.every((val, i) => val === compareArray[i]);
};

export const cloneObject = (obj?: { [key: string]: any }) => {
  return ({} = Object.assign({}, obj));
};

export const areObjectsEqual = (obj1: { [key: string]: any }, obj2?: { [key: string]: any }) => {
  if (obj1 == null && obj2 == null) return true;
  // if(Object.keys(obj1).length === Object.keys(obj2!).length) return true;
  return JSON.stringify(obj1) === JSON.stringify(obj2);
};

export const groupArrayOfObjectsByKey = (array: any[], key: string) => {
  const _getVal = function (o: any, key: string) {
    let v = o;
    let k = key.split(".");
    for (let i in k) {
      v = v[k[i]];
    }
    return v;
  };
  return array.reduce((result, currentValue) => {
    const currentVal = _getVal(currentValue, key);
    (result[currentVal] = result[currentVal] || []).push(currentValue);
    return result;
  }, {});
};

export const getIntersectionBetweenTwoArrays = (arr1: Array<any>, arr2: Array<any>) => {
  return [...arr1.filter((x) => arr2.includes(x))];
};

export const getDifferenceBetweenTwoArrays = (arr1: Array<any>, arr2: Array<any>) => {
  return [...arr1.filter((x) => !arr2.includes(x)).concat(arr2.filter((x) => !arr1.includes(x)))];
};

// export const removeDuplicatesFromArrayByKey = <T>(arr: T[], key: string) => {
//   // @ts-ignore
//   return [...new Map(arr.map((item) => [item[key], item])).values()];
// };

export const removeDuplicatesFromArrayByKey = <T>(arr: T[], keys: string | string[]) => {
  if (typeof keys === "string") {
    keys = [keys];
  }
  const uniqueItems = new Map<string, T>();
  arr.forEach((item) => {
    const keyString = (keys as []).map((key) => item[key]).join("-");
    if (!uniqueItems.has(keyString)) {
      uniqueItems.set(keyString, item);
    }
  });
  return [...uniqueItems.values()];
};

export const generateCSSVariables = (
  cssObject: { [key: string]: any },
  cssType: string = "",
  prefixes: string[] = []
): { strings: string[]; variables: { name: string; value: any }[] } => {
  const cssStrings: string[] = [];
  const cssVariables: { name: string; value: any }[] = [];

  for (const key in cssObject) {
    const value = cssObject[key];
    const prefix = prefixes.length > 0 ? `${prefixes.join("-")}-` : "";

    const stringKey = `${cssType}${prefix}${key}`;
    const variableName = `--${stringKey}`;

    if (typeof value === "object") {
      const { strings, variables } = generateCSSVariables(value, cssType, [...prefixes, key]);
      cssStrings.push(...strings);
      cssVariables.push(...variables);
    } else {
      cssStrings.push(`${variableName}: ${value}`);
      cssVariables.push({ name: variableName, value });
    }
  }

  return { strings: cssStrings, variables: cssVariables };
};

export const getArrayMaxIdX = (arr: any[]) => {
  // Get max idX of the array
  return Math.max(...arr.map((o) => o?.idx ?? 0), 0);
};

export const removeDuplicatesFromArray = <T>(arr: T[]): T[] => {
  return [...new Set(arr)];
};

/**
 * Returns the index of the last element in the array where predicate is true, and -1
 * otherwise.
 * @param array The source array to search in
 * @param predicate find calls predicate once for each element of the array, in descending
 * order, until it finds one where predicate returns true. If such an element is found,
 * findLastIndex immediately returns that element index. Otherwise, findLastIndex returns -1.
 */
export function findLastIndex<T>(array: Array<T>, predicate: (value: T, index: number, obj: T[]) => boolean): number {
  let l = array.length;
  while (l--) {
    if (predicate(array[l], l, array)) return l;
  }
  return -1;
}

export function generateRangeOfNumbers(size: number, startAt: number = 1) {
  return Array.from(Array(size).keys()).map((i) => i + startAt);
}
