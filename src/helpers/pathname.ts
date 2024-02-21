import {
  regulationContentType,
  regulationContentTypeKeys,
} from "../components/modules/pages/regulation/misc/headerTools";

export const findId = (pathname: string, idPosition: number = 1): number | undefined => {
  const pathnameArr = pathname.split("/").filter((item) => item.length > 0);
  return Number(pathnameArr[pathnameArr.length - idPosition]);
};

export const removeTrailingSlash = (str?: string) => {
  str = str?.toString() ?? "";
  if (str.substr(-1) === "/") return str.substr(0, str.length - 1);
  return str;
};

export const openURL = (target: string) => {
  const win = window.open(target, "_blank");
  if (win != null) {
    win.focus();
  }
};

export const removeId = (str: string) => {
  const splitedString = str.split("/").filter((item) => item);
  // @ts-ignore
  const id = splitedString.find((item) => item === ":id" || !isNaN(item)); // find elem === number or ":id";
  if (!id) return str;
  else return splitedString.filter((item) => item !== id).join("/");
};

export const checkRegulationContentTypeIsDraft = (search: string): boolean => {
  return new URLSearchParams(search).get("contentType") === regulationContentTypeKeys.draft;
};
export const checkRegulationContentTypeIsActive = (search: string): boolean => {
  return new URLSearchParams(search).get("contentType") === regulationContentTypeKeys.approved;
};
export const checkRegulationContentType = (search: string): regulationContentType => {
  return (new URLSearchParams(search).get("contentType") as regulationContentType) ?? null;
};
