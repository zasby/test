// import { useTranslation } from "react-i18next";
// import { useNotifier, useRootStore } from "../../hooks";
// import { useLocation, useNavigate } from "react-router-dom";
// import { useRequestHandler } from "../../hooks/useRequestHandler";
import { useState } from "react";

export const useAuth = () => {
  // const { t } = useTranslation();
  // const notifier = useNotifier();
  // const navigate = useNavigate();
  // const { authStore } = useRootStore();
  // const { onError } = useRequestHandler();
  // const queryParams = new URLSearchParams(useLocation().search);
  // const qToken = queryParams.get("token");
  //
  // const [isLoading, setIsLoading] = useState<boolean>(false);
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
  // const handleLoginWithToken = async () => {
  //   const r = await authStore.authorizeWithToken(qToken ?? "");
  //   notifier.showSuccessError(t("notifier:success.good_login"), t("notifier:error.bad_login_token"), r);
  //   if (r) {
  //     navigate("/orgchart");
  //   }
  // };
  //
  // useEffect(() => {
  //   if (qToken != null && qToken.trim().length > 0) {
  //     handleLoginWithToken();
  //   }
  // }, []);

  const [isLoading, setIsLoading] = useState<boolean>(false);

  const handleLogin = async ({ login, password }: { login: string; password: string }) => {
    console.log({login, password});
    setIsLoading(true);
  }

  return {
    handleLogin,
    isLoading,
  }
}