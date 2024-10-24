import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { useTheme } from "../useTheme";
import { useEffect, useState } from "react";
import { api } from "../../services";
import useLocalStorage from "../useLocalStorage";

export const useThemeSwitcher = () => {
  const { t } = useTranslation();
  const { appStore, devStore, authStore } = useRootStore();
  const { color } = useTheme();
  const appThemesArray = [
    { id: 0, name: t("parse:theme.light") },
    { id: 1, name: t("parse:theme.dark") },
  ];

  const [themeId, setThemeId] = useState<number | null>(appStore.getAppTheme ?? null);
  const [isSuggestionDialogUsed, setIsSuggestionDialogUsed] = useLocalStorage<boolean>(
    "themeSuggestionDialogUsed",
    false
  );
  const [isSuggestionDialogOpen, setIsSuggestionDialogOpen] = useState<boolean>(false);

  const handleThemeChange = (id: number) => {
    appStore.setAppTheme(id);
    // setIsSuggestionDialogUsed(true);
  };

  const handleThemeColorsChange = (themeId: number | null) => {
    window.carrotquest && (window.carrotquest.darkTheme = themeId == 1);
    // const r = document.querySelector<HTMLElement>(":root");
    // console.log(getComputedStyle(r!));
    // r!.style!.setProperty("--color-primary", themeId == 0 ? "red" : "green");
  };

  const handleUserTZChange = async () => {
    if (authStore.getInitialInfo?.identity == null) return;
    await api.user.edit(authStore.getInitialInfo?.identity?.id!, {
      ...authStore.getInitialInfo.identity,
      timeZoneId: authStore.getInitialInfo?.identity?.timeZoneId == "Asia/Chita" ? "America/Los_Angeles" : "Asia/Chita",
    });
    await authStore.refreshInitialInfo();
  };

  // if (window.matchMedia && window.matchMedia("(prefers-color-scheme: dark)").matches) {
  //   console.log("Seems like you prefers dark scheme...");
  // }

  const closeThemeSwitchSuggestionDialog = () => {
    setIsSuggestionDialogOpen(false);
    setIsSuggestionDialogUsed(true);
  }

  const handleDecline = () => {
    appStore.setAppTheme(0);
    setIsSuggestionDialogOpen(false);
    setIsSuggestionDialogUsed(true);
  }

  useEffect(() => {
    if (themeId == null) {
      handleThemeChange(0);
    }
  }, []);

  useEffect(() => {
    if (
      !isSuggestionDialogUsed &&
      // appStore.getAppTheme != 1 &&
      window.matchMedia &&
      window.matchMedia("(prefers-color-scheme: dark)").matches
    ) {
      appStore.setAppTheme(1);
      setIsSuggestionDialogOpen(true);
    }
  }, []);

  useEffect(() => {
    if (themeId != appStore.getAppTheme) {
      setThemeId(appStore.getAppTheme);
    }
    handleThemeColorsChange(appStore.getAppTheme);
  }, [appStore.getAppTheme]);

  useEffect(() => {
    document.documentElement.setAttribute("data-app-theme-id", (themeId ?? 0).toString());
    // for (const cssVarObj of generateCSSVariables({ color }).variables) {
    //   document.documentElement.style.setProperty(cssVarObj.name, cssVarObj.value);
    // }
    // console.log(generateCSSVariables({ color }).strings);
  }, [themeId]);

  return {
    isSuggestionDialogOpen,
    closeThemeSwitchSuggestionDialog,
    handleDecline,
    handleUserTZChange,
    handleThemeChange,
    themeId,
    appThemesArray,
  }
}
