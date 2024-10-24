import { HubConnection, HubConnectionBuilder, HubConnectionState, LogLevel } from "@microsoft/signalr";
import { useNotifier, useRootStore } from "../../hooks";
import { useRef } from "react";
import { useTranslation } from "react-i18next";

export let notificationHubConnection: HubConnection;

export function initNotificationHubConnection(accessToken: string) {
  const isDev =
    window.location?.hostname == "localhost" ||
    window.location?.hostname == "beta.tonnus.io" ||
    window.location.hostname == "dev.bbooster.io";
  const newConnection = new HubConnectionBuilder()
    .withUrl(process.env.REACT_APP_API_BASE_URL + "api/v1/hub/notification", {
      accessTokenFactory: () => accessToken,
    })
    .withAutomaticReconnect([0, 1000, 2000, 4000, 8000])
    .configureLogging(isDev ? LogLevel.Debug : LogLevel.Critical)
    .build();
  notificationHubConnection = newConnection;
  notificationHubConnection.onclose((err) => {
    // console.log("sockets err: ", err);
  });
}

export function checkDisconnection(): boolean {
  return notificationHubConnection?.state === HubConnectionState.Disconnected;
}

export const useNotificationHub = () => {
  const { authStore, appStore } = useRootStore();
  const isRestarting = useRef<boolean>(false);
  const restartCounter = useRef<number>(0);
  const usedAccessToken = useRef<string>(authStore.getAccessToken ?? "");
  const notifier = useNotifier();
  const { t } = useTranslation();

  async function start() {
    if (notificationHubConnection != null && notificationHubConnection?.state === HubConnectionState.Connected) return;

    const token = authStore.getAccessToken;
    if (token == null) throw new Error("AccessToken should not be null");
    usedAccessToken.current = token;

    initNotificationHubConnection(token);
    await notificationHubConnection?.start();

    notificationHubConnection?.onclose(async (error) => {
      // console.error("error", error);
      if (error == null || isRestarting.current) return;
      await restart();
    });
  }

  async function restart() {
    if (isRestarting.current) return;
    isRestarting.current = true;
    if (restartCounter.current >= 5) {
      console.error(
        "Error: The maximum reconnect attempts have been reached. Reconnection is no longer possible, real-time connection is disabled."
      );
      // notifier.show({
      //   key: "notifier-error-ws",
      //   message: t("notifier:error.real_time_disconnect"),
      //   theme: "error",
      //   timeout: 0,
      // });
      return;
    }
    if (usedAccessToken.current == authStore.getAccessToken) {
      console.warn("The access token has expired, trying to get a new one.");
      await authStore.refreshAccessTokenWithRefreshToken();
      // await authStore.authorizeWithRefreshToken();
    }
    restartCounter.current += 1;
    // notificationHubConnection = null;
    console.warn("An error occurred while connecting, we are trying to reconnect.");
    await start();
    isRestarting.current = false;
  }

  function stop() {
    notificationHubConnection?.stop();
  }

  return {
    connection: notificationHubConnection,
    checkDisconnection,
    start,
    stop,
    messages: {
      //
    },
  };
};
