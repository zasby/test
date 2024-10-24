import { useRootStore } from "../useRootStore";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useCompanySwitcher = () => {
  const { authStore } = useRootStore();
  const navigate = useNavigate();
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMenuOpen = Boolean(menuAnchorEl);

  const handleMenuButtonClick = (event: any) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  async function handleMenuItemClick(companyId: number): Promise<void> {
    handleMenuClose();
    const r = await authStore.reauthorizeWithNewCompanyId(companyId);
    if (r) {
      // window.location.reload();
    }
  }

  const handleCompanyManageClick = () => {
    // setIsAddCompanyDialogOpen(true);
    navigate("/settings/profile");
    handleMenuClose();
  };

  return {
    isMenuOpen,
    menuAnchorEl,
    getCurrentCompanyId: authStore.getCurrentCompanyId,
    companiesList: authStore.getInitialInfo?.identity?.companies ?? [],
    handleMenuButtonClick,
    handleMenuClose,
    handleMenuItemClick,
    handleCompanyManageClick,
  }
}
