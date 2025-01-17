import { useRootStore } from "../useRootStore";
import { useNavigate } from "react-router-dom";
import ReactGA from "react-ga4";
import { useEffect, useMemo, useState } from "react";
import { removeTrailingSlash } from "../../helpers/pathname";
import { IAuthorizedLayout } from "../../types";
import { useClaims } from "../useClaims";
import { useUserNameFormat } from "../../../functional/hooks/useUserNameFormat";
import { TariffType } from "../../../functional/api/models/CompanyForAdminDto";
import { useTranslation } from "react-i18next";
import { permissionKeys } from "../../utils/permissions";

export const useAuthorized = (props: IAuthorizedLayout) => {
  const claims = useClaims();
  const { t } = useTranslation();
  const { authStore, communicationStore, appStore } = useRootStore();
  const { getFullName } = useUserNameFormat();


  const navigate = useNavigate();

  const currentCompany = authStore.getCurrentCompany;
  const currentUser = authStore.getInitialInfo?.identity;

  const fullName = getFullName(
    currentUser?.lastName ?? "",
    currentUser?.firstName ?? "",
    currentUser?.middleName ?? ""
  );

  const clientName = fullName ?? t("ui:placeholder.new_employee", {id: currentUser?.id ?? 0}) ?? ""

  const [isShowEndAccessTimeDialog, setIsShowEndAccessTimeDialog] = useState<boolean>(false);
  const [isResident, setIsSResident] = useState<boolean>(false);
  const [isResidentEndAccessTime, setIsResidentEndAccessTime] = useState<boolean>(false);


  const getShowEndAccessTimeDialog = () => {
    const { endAccessTime, tariffCode } = currentCompany ?? {};

    if (tariffCode !== TariffType.Demo) {
      const isOwner = currentCompany?.userOwner?.id ===  currentUser?.id;

      if (endAccessTime && (isOwner || claims.has(permissionKeys.user.edit) || claims.has(permissionKeys.orgchart.edit))) {
        setIsShowEndAccessTimeDialog(true);
        setIsResidentEndAccessTime(endAccessTime ? new Date(endAccessTime) <= new Date() : false);
        setIsSResident(true);
      }
    } else {
      setIsShowEndAccessTimeDialog(endAccessTime ? new Date(endAccessTime) <= new Date() : false);
    }
  }

  const handleCloseEndAccessTimeDialog = () => {
    setIsShowEndAccessTimeDialog(false);
    setIsSResident(false);
    setIsResidentEndAccessTime(false);
  }

  useEffect(() => {
    if (authStore.isAuthorized) {
      getShowEndAccessTimeDialog();
    }
  }, [authStore.isAuthorized]);


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
    isShowEndAccessTimeDialog,
    currentCompany,
    currentUser,
    isResident,
    isResidentEndAccessTime,
    clientName,
    handleCloseEndAccessTimeDialog,
  }
}
