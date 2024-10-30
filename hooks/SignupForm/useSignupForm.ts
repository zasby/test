import { useNotifier } from "../useNotifier";
import { useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { useRequestHandler } from "../useRequestHandler";
import { useEffect, useState } from "react";
import { CompanyShortDto } from "../../api";
import { api } from "../../services";

export const useSignupForm = () => {
  const notifier = useNotifier();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { authStore, appStore } = useRootStore();
  const { onError } = useRequestHandler();
  const queryParams = new URLSearchParams(useLocation().search);
  const qCode = queryParams.get("code");
  const externalId = queryParams.get("UserId");

  const [step, setStep] = useState(0);
  const [companyData, setCompanyData] = useState<CompanyShortDto>({});
  const [isLoading, setIsLoading] = useState<boolean>(false);

  useEffect(() => {
    return () => {
      if ((authStore.getInitialInfo?.identity?.name ?? "").trim().length > 0) {
        if (authStore.isAuthorized && (qCode ?? "").length > 0) {
          authStore.setInviteCode(qCode);
        }
        if ((externalId ?? "").length > 0) {
          authStore.setExternalId(externalId);
        }
      }
    };
  }, []);

  const autoGenerate = async () => {
    for await (const x of Array.from(Array(10).keys())) {
      const r = await api.auth.signUpWithCompanyInvite({
        email: `user-${x + 20}@example.com`,
        password: "123456",
        companyInviteKey: "",
      });
    }
  };

  useEffect(() => {
    // autoGenerate();
  }, []);

  const handleCodeCheck = async ({ code }: { code: string }) => {
    setIsLoading(true);
    await api.auth.signUpWithCompanyInviteValidateCode(
      code,
      (req) => {
        setCompanyData(req);
        setStep(1);
      },
      (error) => {
        notifier.show({ message: t("notifier:error.bad_invite_code"), theme: "error" });
      }
    );
    setIsLoading(false);
  };

  const handleSignup = async ({ code, email, password }: { code: string; email: string; password: string }) => {
    setIsLoading(true);
    const externalId = new URLSearchParams(window.location.search).get("UserId") ?? "";
    await api.auth.signUpWithCompanyInvite(
      {
        email,
        password,
        companyInviteKey: code,
        externalId,
      },
      async (res) => {
        notifier.show({ message: t("notifier:success.good_signup"), theme: "success" });
        const authReq = await authStore.authorizeWithCredentials({
          email,
          password,
        });
        if (authReq == true) {
          navigate("/orgchart");
          notifier.show({ message: t("notifier:success.good_login"), theme: "success" });
        } else {
          setIsLoading(false);
          onError(authReq);
        }
      },
      (error) => {
        setIsLoading(false);
        onError(error);
      }
    );
  };

  return {
    isLoading,
    step,
    companyData,
    setStep,
    handleSignup,
    handleCodeCheck,
  }
}
