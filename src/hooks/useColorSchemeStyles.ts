import { ColorScheme, colorSchemeType, FaintColorScheme, IColorScheme } from "../utils/colorScheme";

export const useColorSchemeStyles = () => {
  const handleSearchColor = (schemes: IColorScheme[], key: colorSchemeType) => {
    const targetScheme = schemes.find((item) => item.status === key)!;
    return {
      backgroundColor: targetScheme?.backgroundColor ?? undefined,
      textColor: targetScheme?.color ?? undefined,
      textColorAccent: targetScheme?.colorAccent ?? undefined,
    };
  };

  const findColorByKey = (key: colorSchemeType) => handleSearchColor(ColorScheme, key);

  const findFaintColorByKey = (key: colorSchemeType) => handleSearchColor(FaintColorScheme, key);

  return {
    findColorByKey,
    findFaintColorByKey,
  };
};
