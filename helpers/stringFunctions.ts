import { StringContentType } from "../enums/stringContentType";

export const getUserShortFullName = (
  lastName: string | null | undefined,
  firstName: string | null | undefined,
  middleName?: string | null
): string => {
  return [
    lastName ?? "",
    (firstName ?? "").trim().length > 0 ? ([...(firstName ?? "").trim()]?.[0] ?? "") + "." : "",
    (middleName ?? "").trim().length > 0 ? ([...(middleName ?? "").trim()]?.[0] ?? "") + "." : "",
  ].join(" ");
  // let str2return: string;
  // str2return = (lastName ?? "") + " " + ([...(firstName ?? "")]?.[0] ?? "") + ".";
  // if (middleName != null && middleName.trim().length > 0) {
  //   str2return += " " + ([...(middleName ?? "")]?.[0] ?? "") + ".";
  // }
  // return str2return;
};

export const getUserLastNameAndFirstName = (
  lastName: string | null | undefined,
  firstName: string | null | undefined
): string => {
  let str2return: string;
  str2return = ((lastName ?? "") + " " + (firstName ?? "")).trim();
  return str2return;
};

export const getStringWithoutLeadingAndTrailingSlashes = (str: string) => {
  return str.replace(/^\/|\/$/g, "");
};

export const getStringOrFallbackIfEmpty = (str: string | null, fallback: string): string => {
  return str && str.trim().length > 0 ? str : fallback;
};

export const truncateString = (
  str: string,
  maxLength: number,
  truncatePosition: "middle" | "end" = "end",
  preserveWordsIntegrity: boolean = false,
  concatenationSymbol: string = "…"
): string => {
  if (str.length <= maxLength) {
    return str;
  }

  // Preserve words integrity
  if (preserveWordsIntegrity) {
    if (truncatePosition == "end") {
      const lastWordBoundary = str.lastIndexOf(" ", maxLength);
      return lastWordBoundary === -1
        ? str.substring(0, maxLength) + concatenationSymbol
        : str.substring(0, lastWordBoundary) + concatenationSymbol;
    } else {
      let truncatedString = truncateString(str, maxLength, "middle", false);
      const strMidPos = Math.floor(truncatedString.length / 2);
      const firstWordBoundary = truncatedString.lastIndexOf(" ", strMidPos - 1);
      const lastWordBoundary = truncatedString.indexOf(" ", strMidPos + 1);
      if (firstWordBoundary == -1 && lastWordBoundary == -1) {
        return truncatedString;
      }
      return (
        truncatedString.substring(0, firstWordBoundary == -1 ? strMidPos : firstWordBoundary) +
        concatenationSymbol +
        truncatedString.substring(lastWordBoundary == -1 ? strMidPos : lastWordBoundary + 1)
      );
    }
    // Don't preserve words integrity
  } else {
    return truncatePosition == "end"
      ? str.substring(0, maxLength) + concatenationSymbol
      : str.substring(0, Math.ceil(maxLength / 2)) +
          concatenationSymbol +
          str.substring(str.length - Math.floor(maxLength / 2));
  }
};

export const removeEmojiFromString = (str: string): string => {
  return str.replace(
    /([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g,
    ""
  );
};

export const addLeadingZeroToString = (str: string | number, resultStringLength?: number) => {
  return (new Array(15).join("0") + str).slice(-(resultStringLength ?? 2));
};

export const removeLeadingZerosFromString = (str: string | number) => {
  return Number((str + "").replace(/^0+/, ""));
};

export const removeMultipleSpacesFromString = (str: string): string => {
  return str.replace(/\s\s+/g, " ");
};

export const getStringContentType = (str: string): StringContentType => {
  const trimmedStr = (str ?? "").trim();
  return trimmedStr.startsWith("[{") || trimmedStr.startsWith('{"')
    ? StringContentType.textEditorContent
    : StringContentType.text;
};

// Спецсимволы нужно экранировать: "\\+" (Смотреть использование функции в коде)
export const removeAllOccurrencesExceptFirstOne = (input: string, character: string): string => {
  let firstIndex = input.indexOf(character);
  return firstIndex === -1
    ? input
    : input.slice(0, firstIndex + 1) + input.slice(firstIndex + 1).replace(new RegExp(character, "g"), "");
};

export const removeSpecialCharactersFromString = (str: string | null): string | null => {
  if (str == null) return null;
  const filteredStr = str.replace(/[^\p{L}0-9.'()\s-]/gimu, "");
  return removeMultipleSpacesFromString(filteredStr);
};

export function hash(str: string): string {
  str = str.replace(/\r/g, "");
  let hash = 5381;
  let i = str.length;

  while (i--) hash = ((hash << 5) - hash) ^ str.charCodeAt(i);
  return (hash >>> 0).toString(36);
}
