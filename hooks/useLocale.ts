import pickLocaleRu from "antd/es/date-picker/locale/ru_RU";
import pickLocaleEn from "antd/es/date-picker/locale/en_US";
import pickLocaleUk from "antd/es/date-picker/locale/uk_UA";
import localeEn from "antd/lib/locale/en_US";
import localeUk from "antd/lib/locale/uk_UA";
import localeRu from "antd/lib/locale/ru_RU";
// import { Locale } from "antd/lib/locale-provider/";
import { PickerLocale } from "antd/lib/date-picker/generatePicker";
import { useRootStore } from "./useRootStore";

export enum localesKeys {
  ru = "ru",
  en = "en",
  uk = "uk",
}

export type LocaleType = localesKeys.ru | localesKeys.en | localesKeys.uk;

export const useLocale = () => {
  const { appStore } = useRootStore();

  const getPickerLocale = (): PickerLocale => {
    const currentLang = appStore.getAppLocale;
    switch (currentLang) {
      case localesKeys.en: {
        return pickLocaleEn;
      }
      case localesKeys.ru: {
        return pickLocaleRu;
      }
      case localesKeys.uk: {
        return pickLocaleUk;
      }
      default:
        return pickLocaleEn;
    }
  };

  const getLocale = (): any => {
    const currentLang = appStore.getAppLocale;
    switch (currentLang) {
      case localesKeys.en: {
        return localeEn;
      }
      case localesKeys.ru: {
        return localeRu;
      }
      case localesKeys.uk: {
        return localeUk;
      }
      default:
        return localeEn;
    }
  };

  return {
    getLocale,
    getPickerLocale,
  };
};
