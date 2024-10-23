export const trimNumberIfGreater = (
  num: number,
  numToCompare?: number,
  postfix: string | null = "+"
): string | number => {
  if (numToCompare == null) return num;
  if (num > numToCompare) {
    if (postfix == null) return num;
    else return num + postfix;
  }
  return num;
};

export const defaultAbbreviationSymbols = ["", "k", "M", "G", "T", "P", "E"];
export const symbolPow = (index = 0) => Math.pow(10, index * 3);

interface AbbreviateOptions {
  padding?: boolean;
  symbols?: string[];
}

const defaultOptions = {
  padding: true,
  symbols: defaultAbbreviationSymbols,
};

export const abbreviateNumber = (
  num: number,
  digit = 1,
  options?: AbbreviateOptions | AbbreviateOptions["symbols"]
): string => {
  // Previous options style
  if (Array.isArray(options)) {
    options = { symbols: options };
  }

  const { symbols, padding } = Object.assign({}, defaultOptions, options);

  // handle negatives
  const sign = Math.sign(num) >= 0;
  num = Math.abs(num);

  // what tier? (determines SI symbol)
  const tier = (Math.log10(num) / 3) | 0;

  // if zero, we don't need a suffix
  if (tier == 0) return (!sign ? "-" : "") + num.toString();

  // get suffix and determine scale
  const suffix = symbols[tier];
  if (!suffix) throw new RangeError();

  const scale = Math.pow(10, tier * 3);

  // scale the number
  const scaled = num / scale;

  let rounded = scaled.toFixed(digit);
  if (!padding) {
    rounded = String(Number(rounded));
  }

  // format number and add suffix
  return (!sign ? "-" : "") + rounded + suffix;
};

const unAbbreviateNumber = () => {
  //
};

export const splitNumberWithSeparator = (num: number, sep?: string): string => {
  return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, sep ?? " ");
};

export const isNumberInScientificNotation = (num: number) => {
  return num.toString().includes("e");
};
