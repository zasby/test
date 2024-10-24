import { useRootStore } from "../useRootStore";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect, useMemo } from "react";
import { removeTrailingSlash } from "../../helpers/pathname";
import { IAuthorizedLayout } from "../../types";

export const useAuthorized = (props: IAuthorizedLayout) => {
  const { authStore, communicationStore } = useRootStore();
  const navigate = useNavigate();
  // const isAdBlockDetected = useDetectAdBlock();

  const setUserGAData = () => {
    if (
      window.location?.hostname == "localhost" ||
      window.location?.hostname == "beta.tonnus.io" ||
      window.location?.hostname == "rc.tonnus.io"
    ) {
      return;
    }
    ReactGA.set({
      user_properties: {
        companyId: authStore.getCurrentCompanyId,
        companyName: authStore.getCurrentCompany?.name?.trim()?.length
          ? authStore.getCurrentCompany?.name?.trim()
          : undefined,
        // userId: authStore.getInitialInfo?.identity?.id,
      },
    });
    ReactGA.event("login");
  };

  useEffect(() => {
    setUserGAData();
  }, []);

  useEffect(() => {
    if (
      authStore.getInviteCode != null &&
      authStore.getInviteCode.length > 0 &&
      !removeTrailingSlash(window.location.pathname).includes("settings/profile")
    ) {
      navigate("/settings/profile");
    }
  }, []);

  const isShowBetaAlert = useMemo(() => {
    const currentPage =
      authStore?.getInitialInfo?.menuItems?.find((i) => i.key == props.pageKey);

    return currentPage?.versionType != null && currentPage?.versionType == "alpha"
      || currentPage?.versionType == "beta"
  }, [authStore?.getInitialInfo?.menuItems, communicationStore.getMode, props.pageKey])

  return {
    isShowBetaAlert,
  }
}
