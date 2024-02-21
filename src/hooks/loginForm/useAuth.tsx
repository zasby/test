import { useTranslation } from "react-i18next";
import { useRootStore } from "../../index";

import { useLocation } from "react-router-dom";
// import { useRequestHandler } from "../../hooks/useRequestHandler";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const { t } = useTranslation();
  // const notifier = useNotifier();

  const { authStore, globalSettings } = useRootStore();

  // const { onError } = useRequestHandler();
  const queryParams = new URLSearchParams(useLocation().search);
  const qToken = queryParams.get("token");
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  const handleLogin = async ({ login, password }: { login: string; password: string }) => {
    console.log('login', login);
    setIsLoading(true);
    const authReq = await authStore.authorizeWithCredentials({
      email: login,
      password: password,
    });
    if (authReq === true) {
      console.log(222);
      const navigate = globalSettings.getNavigate;
      console.log('navigate111', navigate);
      navigate("/orgchart");
      console.log(t("notifier:success.good_login"))
      // notifier.show({ message: t("notifier:success.good_login"), theme: "success" });
    } else {
      setIsLoading(false);
      console.log('authReq', authReq);
      // onError(authReq);
    }
  };
  //
  const handleLoginWithToken = async () => {
    console.log('handleLoginWithToken1111');
    // const r = await authStore.authorizeWithToken(qToken ?? "");
    // console.log('r', r);
    // notifier.showSuccessError(t("notifier:success.good_login"), t("notifier:error.bad_login_token"), r);
    // if (r) {
    //   navigate("/orgchart");
    // }
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