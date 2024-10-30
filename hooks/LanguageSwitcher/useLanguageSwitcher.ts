import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { APP_LANGUAGES_ARRAY } from "../../constants/appLanguagesArray";
import { IssueTypeKeys } from "../../constants/issueTypeKeys";
import { api } from "../../services";
import { IssueCustomFieldDto } from "../../api";
import { useEffect } from "react";

export const useLanguageSwitcher = () => {
  const {  i18n } = useTranslation();
  const { authStore, appStore, helperStore } = useRootStore();

  const currentLanguageId = APP_LANGUAGES_ARRAY.find((lng) => lng.short == i18n.language.substr(0, 2))?.id ?? 0;

  const handleLoadCustomFields = () => {
    const customFieldsTypes = [IssueTypeKeys.task];
    const promisesArr = customFieldsTypes.map((item) => api.helper.customField(item));
    Promise.all(promisesArr).then((res) => {
      customFieldsTypes.forEach(
        (fieldsType, index) =>
          res[index] &&
          helperStore.setIssueCustomField({
            items: res[index] as IssueCustomFieldDto[],
            type: fieldsType,
          })
      );
    });
  };

  const handleLanguageChange = async (lngId: number) => {
    const newLanguage: string = APP_LANGUAGES_ARRAY.find((lng) => lng.id == lngId)?.short ?? "en";
    await i18n.changeLanguage(newLanguage);
    appStore.setAppLocale(newLanguage);
    document.body.setAttribute("lang", newLanguage);
    await authStore.authorizeWithRefreshToken();
    handleLoadCustomFields();
  };

  useEffect(() => {
    if (appStore.getAppLocale == null) {
      handleLanguageChange(currentLanguageId);
    }
  }, []);

  return {
    currentLanguageId,
    handleLanguageChange,
  }
}
