// Returns '_1' / '_2' / '_3' depending on the passed value
// 1 - Час / 2 - Часа / 3 - Часов
export const getLocaleStringByNumber = (number: number, localizedStrings?: string[], localeString?: string): string => {
  // localizedStrings = ["апельсинка", "апельсинки", "апельсинок"] // [ 1, 3, 5 ]
  let i18n: string[] = ["_1", "_2", "_3"];

  return localizedStrings == null || localizedStrings.length == 0
    ? (localeString ?? "") +
        i18n[
          number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
        ]
    : localizedStrings[
        number % 100 > 4 && number % 100 < 20 ? 2 : [2, 0, 1, 1, 1, 2][number % 10 < 5 ? Math.abs(number) % 10 : 5]
      ];
};
