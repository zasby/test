import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import { resources as enResources } from "./en/index";
import { resources as ruResources } from "./ru/index";
import { resources as ukResources } from "./uk/index";
import { resources as zhResources } from "./zh/index";
import { resources as esResources } from "./es/index";
import { resources as uzLatnResources } from "./uzLatan/index";
import { resources as uzCyrlResources } from "./uzCyrl/index";
// import { i18nextPlugin } from "translation-check";
import LanguageDetector from "i18next-browser-languagedetector";

export const resources = {
  en: enResources,
  ru: ruResources,
  uk: ukResources,
  zh: zhResources,
  es: esResources,
  "uz-latn": uzLatnResources,
  "uz-cyrl": uzCyrlResources,
};


i18n
  .use(LanguageDetector)
  // .use(i18nextPlugin)
  .use(initReactI18next)
  .init({
    interpolation: {
      escapeValue: false,
    },
    // lng: "ru",
    supportedLngs: ["en", "ru", "uk", "zh", "es", "uz-latn", "uz-cyrl", "uz"],
    // debug: false,
    // debug: window.location?.hostname == "localhost",
    cleanCode: true,
    lowerCaseLng: true,
    nonExplicitSupportedLngs: true,
    // load: ["en", "ru", "uk", "zh"],
    // preload: ["en", "ru", "uk", "zh"],
    preload: true,
    pluralSeparator: "-",
    // load: "languageOnly",
    resources,
    // parseMissingKeyHandler: (key) => {
    //   console.warn(`react-i18next key "${key}" not found.`);
    //   return key;
    // },
  });
