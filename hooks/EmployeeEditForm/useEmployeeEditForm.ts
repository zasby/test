import { useRootStore } from "../useRootStore";
import { useNotifier } from "../useNotifier";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import { api } from "../../services";
import { useApi } from "../useApi";
import { useUpdateWithController } from "../useUpdate";
import { UserDto } from "../../api";
import { IEmployeeEditForm } from "../../types";

export const useEmployeeEditForm = (props: IEmployeeEditForm) => {
  const { authStore, helperStore } = useRootStore();
  const notifier = useNotifier();
  const { t } = useTranslation();
  const userId = props?.userId ?? authStore.getInitialInfo?.identity?.id;
  const currentUserId = authStore.getInitialInfo?.identity?.id;
  const navigate = useNavigate();
  const [checkEmailCode, setCheckEmailCode] = useState<string>("");
  const [codeSendTimer, setCodeSendTimer] = useState(0);

  const [isFirstRender, setisFirstRender] = useState<boolean>(true);
  const [isUserTypeEditAvailable, setIsUserTypeEditAvailable] = useState<boolean>(false);
  const localTimeZoneId = useRef(Intl.DateTimeFormat().resolvedOptions().timeZone);

  const [canShowError, setCanShowError] = useState({
    lastName: false,
    firstName: false,
    phoneNumber: false,
  });

  const generateUserLimitation = async () => {
    const currentUsersCount =
      (
        await api.user.autocomplete({
          containsCompanyId: authStore.getInitialInfo?.identity?.currentCompanyId,
          companyId: authStore.getCurrentCompanyId,
          accessType: 0,
        })
      )?.totalItems ?? 0;
    const usersLimit =
      authStore.getInitialInfo?.identity?.companies?.find(
        (c) => c.companyId == authStore.getInitialInfo?.identity?.currentCompanyId
      )?.company?.userLimit ?? "∞";
    setIsUserTypeEditAvailable(usersLimit == "∞" || currentUsersCount < usersLimit);
  };

  const employeeData = useApi(
    () => api.user.getById(userId as number),
    () => {},
    (x) => {
      if (props.userId != null && x == null) {
        navigate("/employee");
        return;
      }
      updater.setInitialState(x!);
    }
  );

  const handleProfileSave = async () => {
    if (userId == currentUserId && !props.firstLaunch) {
      await authStore.refreshInitialInfo();
    }
    await generateUserLimitation();
  };

  const updater = useUpdateWithController(api.user, handleProfileSave);

  const handleConfirmEmail = async () => {
    const r = await api.confirmation.confirmCode({
      code: checkEmailCode,
      type: "email_confirmation",
    });
    notifier.showSuccessError(
      t("notifier:success.email_confirmation"),
      t("notifier:error.email_confirmation"),
      r != null
    );
    if (r != null) {
      await employeeData.fetch();
    }
  };

  const sendConfirmationCodeAgain = async () => {
    const r = await api.confirmation.resetPasswordSendCode();
    notifier.showSuccessError(t("parse:confirm_code_resend"), t("notifier:error.email_confirmation"), r != null);
    if (r != null) {
      // await employeeData.fetch();
      // startCodeTimer();
    }
  };

  const startCodeTimer = () => {
    setCodeSendTimer(45);
    setTimeout(() => reduceCodeTimer(), 1000);
    // if (codeSendTimer > 0) {
    //   setCodeSendTimer(codeSendTimer - 1);
    //   console.log(codeSendTimer, "cs");
    // }
    // setTimeout(() => {
    // reduceCodeTimer();
    // }, 1000);
  };

  const reduceCodeTimer = () => {
    if (codeSendTimer > 0) {
      setCodeSendTimer(codeSendTimer - 1);
    } else return;
    const i = setTimeout(() => {
      reduceCodeTimer();
    }, 1000);
  };

  const handleAvatarChange = async (id: number) => {
    const userData: UserDto = updater.currentState ?? {};

    const r = await api.user.edit(
      userId as number,
      {
        ...userData,
        avatar: { ...userData.avatar, imageId: id },
      }
      // userData
    );
    if (!!r) {
      updater.setInitialState(r);
      await authStore.refreshInitialInfo();
    }
  };

  // timeZoneFromUtc

  const handleAvatarDelete = async () => {
    const userData: UserDto = { ...updater.currentState } ?? {};

    const r = await api.user.editPartially(
      userId as number,
      {
        ...userData,
        avatar: { ...userData.avatar, imageId: null },
      },
      userData
    );
    if (!!r) {
      updater.setInitialState(r);
      await authStore.refreshInitialInfo();
    }
  };

  // useEffect(handleCheckTimeZone, [updater.currentState?.timeZoneId, helperStore.getTimezones, props.firstLaunch]);

  useEffect(() => {
    generateUserLimitation();
  }, []);

  return {
    employeeData,
    userId,
    isUserTypeEditAvailable,
    canShowError,
    updater,
    codeSendTimer,
    checkEmailCode,
    currentUserId,

    setCheckEmailCode,
    setCanShowError,
    handleConfirmEmail,
    handleAvatarChange,
    handleAvatarDelete,
    sendConfirmationCodeAgain,
  }
}
