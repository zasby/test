import { useTranslation } from "react-i18next";
import { useNotifier } from "../useNotifier";
import { openURL } from "../../helpers/urlFunctions";

export const useCarrotQuestButton = () => {
  const { t } = useTranslation();
  const notifier = useNotifier();

  const handleClick = () => {
    if (window.carrotquest == null || window.carrotquest.open == null) {
      notifier.show({
        theme: "error",
        timeout: 10,
        message: t("parse:support_script_fail.message"),
        description: t("parse:support_script_fail.description"),
        button: {
          text: t("parse:support_script_fail.button"),
          onClick: () => openURL("https://t.me/TonnusSupportBot"),
        },
      });
      return;
    }
    window.carrotquest && window.carrotquest.open && window.carrotquest.open();
  };

  return {
    handleClick,
  }
}
