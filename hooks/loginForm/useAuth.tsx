import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";

import { useLocation, useNavigate } from "react-router-dom";
import { useRequestHandler, useNotifier } from "../index";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const { t } = useTranslation();
  const notifier = useNotifier();
  const navigate = useNavigate();


  const { authStore, globalSettings } = useRootStore();

  const { onError } = useRequestHandler();
  const queryParams = new URLSearchParams(useLocation().search);
  const qToken = queryParams.get("token");
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  const handleLogin = async ({ login, password }: { login: string; password: string }) => {
    setIsLoading(true);
    const authReq = await authStore.authorizeWithCredentials({
      email: login,
      password: password,
    });
    setIsLoading(false);
    console.log('authReq', authReq);
    console.log('handleLogin');
    if (authReq === true) {
      // navigate("/orgchart");
      notifier.show({ message: t("notifier:success.good_login"), theme: "success" });
    } else {
      onError(authReq);
    }
  };
  //
  const handleLoginWithToken = async () => {
    const r = await authStore.authorizeWithToken(qToken ?? "");
    notifier.showSuccessError(t("notifier:success.good_login"), t("notifier:error.bad_login_token"), r);
    if (r) {
      // navigate("/orgchart");
    }
  };
  //
  useEffect(() => {
    if (qToken != null && qToken.trim().length > 0) {
      handleLoginWithToken();
    }
  }, []);


  return {
    handleLogin,
    isLoading,
  }
}