import { addLeadingZeroToString } from "./stringFunctions";

const parseColorStringToHex = (colString: string): string => {
  let str2return = colString;
  // Parse raw CSS variable: --color-example
  if (str2return.startsWith("--")) {
    str2return = getComputedStyle(document.documentElement).getPropertyValue(str2return);
  }
  // Parse CSS variable: var(--color-example)
  if (str2return.startsWith("var(")) {
    const regExp = /\(([^)]+)\)/;
    str2return = regExp.exec(str2return)?.[1] ?? "";
    str2return = getComputedStyle(document.documentElement).getPropertyValue(str2return);
  }
  // Transform RGB(A) into HEX(A)
  return str2return;
};

// "#" + rgba.replace(/^rgba?\(|\s+|\)$/g, '') // Get's rgba / rgb string values
//   .split(',') // splits them at ","
//   .filter((string, index) => !forceRemoveAlpha || index !== 3)
//   .map(string => parseFloat(string)) // Converts them to numbers
//   .map((number, index) => index === 3 ? Math.round(number * 255) : number) // Converts alpha to 255 number
//   .map(number => number.toString(16)) // Converts numbers to hex
//   .map(string => string.length === 1 ? "0" + string : string) // Adds 0 when length of one number is 1
//   .join("") // Puts the array to togehter to a string

export const invertColor = (hex: string, bw: boolean = true) => {
  // TODO: Add RGB support
  if (hex.startsWith("--")) {
    hex = getComputedStyle(document.documentElement).getPropertyValue(hex);
  }
  if (hex.startsWith("var(")) {
    const regExp = /\(([^)]+)\)/;
    hex = regExp.exec(hex)?.[1] ?? "";
    hex = getComputedStyle(document.documentElement).getPropertyValue(hex);
  }
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  // convert 3-digit hex to 6-digits.
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    hex = hex.substring(0, 6);
    // return hex;
    // throw new Error("Invalid HEX color.");
  }
  let r: string | number = parseInt(hex.slice(0, 2), 16),
    g: string | number = parseInt(hex.slice(2, 4), 16),
    b: string | number = parseInt(hex.slice(4, 6), 16);
  if (bw) {
    // https://stackoverflow.com/a/3943023/112731
    return r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "#000000" : "#FFFFFF";
  }
  // invert color components
  r = (255 - r).toString(16);
  g = (255 - g).toString(16);
  b = (255 - b).toString(16);

  return "#" + addLeadingZeroToString(r, 2) + addLeadingZeroToString(g, 2) + addLeadingZeroToString(b, 2);
};

export const hexToRgb = (hex: string) => {
  let result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
};

export const addAlphaToHex = (hex: string, opacity: number) => {
  if (hex.indexOf("#") === 0) {
    hex = hex.slice(1);
  }
  if (hex.length === 3) {
    hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
  }
  if (hex.length !== 6) {
    return hex;
  }
  let _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return "#" + hex + _opacity.toString(16).toUpperCase();
};
