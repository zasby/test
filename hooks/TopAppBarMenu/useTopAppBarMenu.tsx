import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { LocalStorageHelpers } from "../localStorageHelpers";
import { Icon } from "../../../components/uiKit";
import { FiCpu, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import { LucideCookie, LucideRotateCcw } from "lucide-react";

export const useTopAppBarMenu = () => {
  const { t } = useTranslation();
  const { authStore } = useRootStore();
  const navigate = useNavigate();

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const [isPNCDialogOpen, setIsPNCDialogOpen] = useState(false);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuButtonClick = (event: any) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const handleGoToCanny = () => {
    // const win = window.open("https://tonnus.canny.io/", "_blank");
    // win?.focus();
    handleMenuClose();
    navigate("/feedback");
  };

  const handleGoToProfile = async () => {
    handleMenuClose();
    navigate("/employee/" + authStore.getInitialInfo?.identity?.id);
  };

  const handleGoToPrivacyCookiePage = async () => {
    handleMenuClose();
    navigate("/info/privacy-and-cookie");
  };

  const handleGoToSettings = async () => {
    handleMenuClose();
    navigate("/settings/profile");
  };

  const handleGoToSandbox = async () => {
    handleMenuClose();
    const link = ((LocalStorageHelpers.get("sandboxLink") as string) ?? "").trim();
    navigate(link.length > 0 ? link : "/sandbox");
  };

  const handleGoToUpdateNoteListPage = async () => {
    handleMenuClose();
    navigate("/update-note");
  };

  const handleLogout = async () => {
    handleMenuClose();
    await authStore.unauthorize();
    navigate("/login");
  };

  let menuItems = [
    {
      id: 1,
      title: t("common:menu.top_bar_profile.profile_page"),
      action: handleGoToProfile,
      icon: <Icon component={() => <FiUser fontSize={16} stroke="var(--color-text-weakest)" />} />,
    },
    // { id: 4, title: t("common:menu.top_bar_profile.feedback"), action: handleGoToCanny },
    {
      id: 2,
      title: t("common:menu.top_bar_profile.profile_settings"),
      action: handleGoToSettings,
      icon: <Icon component={() => <FiSettings fontSize={16} stroke="var(--color-text-weakest)" />} />,
    },
    {
      id: 3,
        title: t("common:menu.top_bar_profile.update_note"),
      action: handleGoToUpdateNoteListPage,
      icon: <Icon component={() => <LucideRotateCcw size={16} stroke="var(--color-text-weakest)" />} />,
    },
    {
      id: 4,
        title: t("common:menu.top_bar_profile.cookie"),
      action: handleGoToPrivacyCookiePage,
      icon: <Icon component={() => <LucideCookie size={16} stroke="var(--color-text-weakest)" />} />,
    },
    {
      id: 5,
        title: t("common:menu.top_bar_profile.logout"),
      action: handleLogout,
      icon: <Icon component={() => <FiLogOut fontSize={16} stroke="var(--color-text-weakest)" />} />,
    },
  ];

  if (
    window.location?.hostname == "localhost" ||
    window.location?.hostname == "beta.tonnus.io" ||
    window.location.hostname == "dev.bbooster.io"
  ) {
    menuItems = [
      {
        id: 0,
        title: t("common:page_title.sandbox"),
        action: handleGoToSandbox,
        icon: <Icon component={() => <FiCpu fontSize={16} stroke="var(--color-success-weaker)" />} />,
  },
  ...menuItems,
  ];
  }

  const userData = authStore.getInitialInfo?.identity ?? null;

  return {
    menuItems,
    isMenuOpen,
    menuAnchorEl,
    userData,
    handleMenuButtonClick,
    handleMenuClose,
  }
}
