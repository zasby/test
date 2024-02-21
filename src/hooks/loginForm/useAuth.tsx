// import { useTranslation } from "react-i18next";
// import { useNotifier, useRootStore } from "../index";
// import { useRootStore } from "../index";

import { useLocation, useNavigate } from "react-router-dom";
// import { useRequestHandler } from "../../hooks/useRequestHandler";
import { useState, useEffect } from "react";

export const useAuth = () => {
  const { t } = useTranslation();
  // const notifier = useNotifier();
  // const navigate = useNavigate();
  // const { authStore } = useRootStore();
  // const { onError } = useRequestHandler();
  const queryParams = new URLSearchParams(useLocation().search);
  const qToken = queryParams.get("token");
  //
  const [isLoading, setIsLoading] = useState<boolean>(false);
  //
  // const handleLogin = async ({ login, password }: { login: string; password: string }) => {
  //   // setIsLoading(true);
  //   // const authReq = await authStore.authorizeWithCredentials({
  //   //   email: login,
  //   //   password: password,
  //   // });
  //   // if (authReq === true) {
  //   //   navigate("/orgchart");
  //   //   notifier.show({ message: t("notifier:success.good_login"), theme: "success" });
  //   // } else {
  //   //   setIsLoading(false);
  //   //   onError(authReq);
  //   // }
  // };
  //
  const handleLoginWithToken = async () => {
    console.log('handleLoginWithToken');
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

  const handleLogin = async ({ login, password }: { login: string; password: string }) => {
    console.log('test handleLogin3', login, password)
    // console.log({login, password});
    console.log(111, t("notifier:success.good_login"));
    setIsLoading(true);
  }

  return {
    handleLogin,
    isLoading,
  }
}