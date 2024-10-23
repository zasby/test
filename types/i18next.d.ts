import "i18next";
import { resources } from "../../locales/i18nconfig";

declare module "i18next" {
  interface CustomTypeOptions {
    // defaultNS: typeof defaultNS;
    resources: typeof resources["en"];
  }
}
