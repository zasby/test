import { useTranslation } from "react-i18next";
import { useNotifier } from "../useNotifier";
import { useEffect, useRef } from "react";
import { api } from "../../services";

export const useConnectionChecker = () => {
  const { t } = useTranslation();
  const notifier = useNotifier();
  const previousIsConnected = useRef<boolean>(true);

  const checkConnectionToBackend = async () => {
    const r = await api.helper.info();
    return !!r;
  };

  const handleConnectionStatus = async () => {
    const r = await checkConnectionToBackend();
    if (r) {
      // Связь с сервером есть
      handleConnectionsStatusChange(true);
    } else {
      // Связи с сервером нет
      handleConnectionsStatusChange(false);
    }
  };

  const handleConnectionsStatusChange = (isConnected: boolean) => {
    if (isConnected == previousIsConnected.current) return;
    if (isConnected && !previousIsConnected.current) {
      // Подключение после отсутствия соединения
      notifier.show({
        message: t("parse:connection_restored_title"),
        theme: "success",
        timeout: 5,
        key: "connectionCheckerNotification",
      });
    } else if (!isConnected && previousIsConnected.current) {
      // Разрыв соединения
      notifier.show({
        message: t("parse:connection_lost_title"),
        description: t("parse:connection_lost_text"),
        theme: "error",
        timeout: 30,
        key: "connectionCheckerNotification",
      });
    }
    previousIsConnected.current = isConnected;
  };

  useEffect(() => {
    window.addEventListener("online", handleConnectionStatus);
    window.addEventListener("offline", handleConnectionStatus);

    return () => {
      window.removeEventListener("online", handleConnectionStatus);
      window.removeEventListener("offline", handleConnectionStatus);
    };
  }, []);
}
