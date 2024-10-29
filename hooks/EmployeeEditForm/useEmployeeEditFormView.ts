import { useTranslation } from "react-i18next";
import { useRootStore } from "../useRootStore";
import { useClaims } from "../useClaims";
import { useEffect, useMemo, useRef, useState } from "react";
import { permissionKeys } from "../../utils/permissions";
import { PersonalInfoDto } from "../../api/models/UserDto";
import { isEqual } from "lodash";
import { IEmployeeEditFormView } from "../../types";
import { theme } from "antd";

export const useEmployeeEditFormView = (props: IEmployeeEditFormView) => {
  const { t } = useTranslation();
  const { helperStore, authStore } = useRootStore();

  const { useToken } = theme;
  const { token } = useToken();

  const claims = useClaims();

  const isHasEditPermission = useMemo(() => {
    return claims.has(permissionKeys.user.edit);
  }, []);

  const timeZones = helperStore.getTimezones;
  const accessTypes = [
    { id: 0, value: 0, text: t("parse:full_access") },
    { id: 1, value: 1, text: t("parse:limited_access") },
  ];
  const parseRegex = require("regex-parser");

  function matchExact(r: RegExp, str: string) {
    const match = str?.match(r);
    return match && str === match[0];
  }

  const [isOpenChangePasswordDialog, setIsOpenChangePasswordDialog] = useState(false);
  const handleClickChangePassword = () => {
    setIsOpenChangePasswordDialog(true);
  }
  const closeChangePasswordDialog = () => {
    setIsOpenChangePasswordDialog(false);
  }

  const [isShowConfirmDialog, setIsShowConfirmDialog] = useState<boolean>(false);
  const handleCloseConfirmDialog = () => {
    setIsShowConfirmDialog(false);
  }
  const showConfirmDialog = () => {
    setIsShowConfirmDialog(true);
  }
  // const personalInfo = useMemo(() => {
  // return props.updater?.currentState?.personalInfo;
  // }, [props.updater?.currentState?.personalInfo]);

  const personalInfo = useMemo(() => {
    return props.updater?.currentState?.personalInfo;
  }, [props.updater?.currentState?.personalInfo]);

  const prevPersonalInfo = useRef<PersonalInfoDto>(personalInfo);


  useEffect(() => {
    if (personalInfo && !isEqual(personalInfo, prevPersonalInfo.current)) {
      props.updater.updatePartially();
    }
    prevPersonalInfo.current = personalInfo;
  }, [personalInfo]);

  return {
    timeZones,
    helperStore,
    isHasEditPermission,
    accessTypes,
    isOpenChangePasswordDialog,
    isShowConfirmDialog,
    personalInfo,
    token,
    closeChangePasswordDialog,
    showConfirmDialog,
    handleCloseConfirmDialog,
    handleClickChangePassword,
  }
}
