import { useNotifier } from "../useNotifier";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { useState } from "react";
import { api } from "../../services";

export const useRestorePasswordForm = () => {
  const notifier = useNotifier();
  const navigate = useNavigate();
  const { t } = useTranslation();
  const { authStore } = useRootStore();

  const [step, setStep] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

  const handleSendCode = async ({ email }: { email: string }) => {
    const r = await api.auth.resetPasswordSendCode({ email });
    if (!r) {
      notifier.show({ message: t("notifier:error.bad_password_reset_email"), theme: "error" });
      return;
    }
    setStep(1);
  };

  const handleReset = async ({ email, code, password }: { email: string; code: string; password: string }) => {
    const r = await api.auth.resetPassword({ confirmationCode: code, newPassword: password });
    notifier.showSuccessError(
      t("notifier:success.good_password_reset"),
      t("notifier:error.bad_password_reset"),
      r != null
    );
    const l = await authStore.authorizeWithCredentials({
      email,
      password,
    });
    if (l) {
      navigate("/orgchart");
    }
  };

  return {
    step,
    isLoading,
    setStep,
    handleReset,
    handleSendCode,
  }
}
