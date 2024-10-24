import { useRootStore } from "../useRootStore";
import { theme } from "antd";
import { useEffect, useMemo, useRef } from "react";
import { UserDto } from "../../api";
import { Locale } from "antd/es/locale";
import en_US from "antd/lib/locale/en_US";
import dayjs from "dayjs";
import ru_RU from "antd/lib/locale/ru_RU";
import uk_UA from "antd/lib/locale/uk_UA";
import zh_TW from "antd/lib/locale/zh_TW";
import {
  carrotAdditionalSettingsEn,
  carrotAdditionalSettingsRu, carrotAdditionalSettingsUk,
  carrotQuestLocaleEn,
  carrotQuestLocaleRu,
  carrotQuestLocaleUk
} from "../../locales/service/carrot-quest";
import { toJS } from "mobx";
import useLocalStorage from "../useLocalStorage";

export const useApp = () => {
  const { appStore, authStore } = useRootStore();
  const { defaultAlgorithm, darkAlgorithm } = theme;

  const identityFallback = useRef<UserDto | null>(null);
  const isCarrotQuestInitialized = useRef<boolean>(false);
  const antDLocale = useRef<Locale>(en_US);

  const appSetLocaleDayjsAntd = (localeCode: string) => {
    // dayjs.tz.setDefault("America/New_York");
    dayjs.locale(localeCode == "zh" ? "zh-tw" : localeCode);
    if (localeCode == "ru") antDLocale.current = ru_RU;
    if (localeCode == "en") antDLocale.current = en_US;
    if (localeCode == "uk") antDLocale.current = uk_UA;
    if (localeCode == "zh") antDLocale.current = zh_TW;
    document.body.setAttribute("lang", localeCode);
    dayjsSetStartOfWeek(localeCode);
  };

  const dayjsSetStartOfWeek = (localeCode?: string) => {
    const weekStart = authStore.getInitialInfo?.identity?.companies?.find(
      (u2c) => u2c.companyId == authStore.getCurrentCompanyId
    )?.company?.weekStart;
    weekStart != null &&
    dayjs.updateLocale((localeCode == "zh" ? "zh-tw" : localeCode) ?? dayjs.locale(), {
      weekStart: weekStart,
    });
  };

  const carrotQuestSetLocale = (localeCode: string, isInitialized: boolean) => {
    if (!isInitialized) return;
    window.carrotquest && window.carrotquest.removeChat && window.carrotquest.removeChat();
    const _locFile =
      localeCode == "ru" ? carrotQuestLocaleRu : localeCode == "uk" ? carrotQuestLocaleUk : carrotQuestLocaleEn;
    const _locFileAdditional =
      localeCode == "ru"
        ? carrotAdditionalSettingsRu
        : localeCode == "uk"
          ? carrotAdditionalSettingsUk
          : carrotAdditionalSettingsEn;

    window.carrotquest.i18n = _locFile;
    window.carrotquest.data.app.settings = {
      ...window.carrotquest.data.app.settings,
      ..._locFileAdditional,
    };
  };

  const carrotQuestInit = () => {
    const identity = toJS(authStore.getInitialInfo)?.identity;
    if (identity != null && identity != identityFallback.current) {
      const userName = ((identity?.name ?? "").trim().length > 0 ? identity.name : identity.nameFallback) ?? "";
      const userEmail = identity.email ?? "";
      const userPhoneNumber = identity.phoneNumber ?? "";
      const currentCompanyName =
        ((identity.companies?.find((ic) => ic.companyId == identity.currentCompanyId)?.company?.name ?? "").trim()
          .length > 0
          ? identity.companies?.find((ic) => ic.companyId == identity.currentCompanyId)?.company?.name ?? ""
          : identity.companies?.find((ic) => ic.companyId == identity.currentCompanyId)?.company?.nameFallback) ?? "";

      window.carrotquest &&
      window.carrotquest.identify({
        $name: userName + " (" + currentCompanyName + ")",
        $email: userEmail,
        $phone: userPhoneNumber,
      });

      identityFallback.current = identity;
    }
  };

  useEffect(() => {
    if (appStore.getAppLocale == null || appStore.getAppLocale.trim().length == 0) return;
    appSetLocaleDayjsAntd(appStore.getAppLocale.trim());
    carrotQuestSetLocale(appStore.getAppLocale.trim(), isCarrotQuestInitialized.current);
  }, [appStore.getAppLocale]);

  useEffect(() => {
    dayjs.tz.setDefault(authStore.getInitialInfo?.identity?.timeZoneId ?? undefined);
  }, [authStore.getInitialInfo?.identity?.timeZoneId]);

  useEffect(() => {
    carrotQuestInit();
    dayjsSetStartOfWeek();
  }, [authStore.getInitialInfo]);

  useEffect(() => {
    if (window.opener?.handleCloseGoogleAuthModal) {
      window.opener.handleCloseGoogleAuthModal();
      window.close();
    }
    // @ts-ignore
    window.carrotquest.onReady(() => {
      isCarrotQuestInitialized.current = true;
      appStore.getAppLocale != null &&
      appStore.getAppLocale.trim().length > 0 &&
      carrotQuestSetLocale(appStore.getAppLocale.trim(), isCarrotQuestInitialized.current);
    });

  }, []);

  // Initialize Google Analytics
  // try {
  //   setTimeout((_) => {
  //     const ga4react = new GA4React("G-P9WJMQHY48");
  //     ga4react.initialize().catch((err) => console.error(err));
  //   }, 500);
  // } catch (err) {
  //   console.error(err);
  // }

  const [passwordTestingServer, setPasswordTestingServer] = useLocalStorage<string>("passwordTestingServer","")

  const passwordVerificationTestingServer = () => {
    const password = prompt("Введите пароль", "");
    if (password !== '13leet37') {
      passwordVerificationTestingServer();
    } else {
      setPasswordTestingServer(password);
    }
  }


  useEffect(() => {
    const isDev =
      window.location?.hostname === "dev.bbooster.io" ||
      window.location.hostname === "staging.bbooster.io";
    if (!passwordTestingServer && isDev) {
      passwordVerificationTestingServer();
    }
  }, []);

  const themeAlgorithm = useMemo(() => {
    return appStore.getAppTheme == 1 ? darkAlgorithm : defaultAlgorithm
  }, [appStore.getAppTheme]);

  return {
    antDLocale,
    themeAlgorithm,
  }
}
