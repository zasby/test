import { AxiosError } from "axios";
import { useTranslation } from "react-i18next";
import { useNotifier } from "../hooks";

export const useRequestHandler = () => {
  const notifier = useNotifier();
  const { t } = useTranslation();

  const showResult = (message: string, timeout?: number) => {
    notifier.show({ message: message ?? t("notifier:error.something_wrong"), theme: "error", timeout });
  };

  const onError = (error: AxiosError, notificationTimeout?: number) => {
    if (error?.response?.status === 500) {
      showResult(t("notifier:error.security_certificate_error"), notificationTimeout);
    }
    showResult((error?.response?.data.message ?? error.response?.data?.Message) as string, notificationTimeout);
  };

  return {
    onError,
    showResult,
  };
};
