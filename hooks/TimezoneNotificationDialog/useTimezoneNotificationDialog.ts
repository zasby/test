import { useRootStore } from "../useRootStore";
import { useClaims } from "../useClaims";
import { useCallback, useEffect, useRef, useState } from "react";
import { api } from "../../services";
import { UserDto } from "../../api";
import {
  TTimezoneNotificationDialogTimeZoneValue
} from "../../../components/modules/dialogs/timezoneNotificationDialog/TimezoneNotificationDialog";
import useLocalStorage from "../useLocalStorage";

export const useTimezoneNotificationDialog = () => {
  const { authStore, helperStore } = useRootStore();
  const claims = useClaims();
  const localTimeZoneId = useRef<string>(Intl.DateTimeFormat().resolvedOptions().timeZone ?? "");
  const [isLoadingCanonical, setIsLoadingCanonical] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [timeZoneValue, setTimeZoneValue] = useState<TTimezoneNotificationDialogTimeZoneValue>({
    user: null,
    company: authStore.getCurrentCompany?.timeZoneId ?? null,
  });

  const handleChangeTimeZone = useCallback((value) => {
    setTimeZoneValue((prev) => ({ ...prev, ...value }));
  }, []);

  const [skipTimeZone, setSkipTimeZone] = useLocalStorage<string | null | undefined>("skipTimeZone", '');

  const handleCloseModal = () => {
    setSkipTimeZone(timeZoneValue.user);
    setIsOpen(false);
  };

  const getCanonicalTimeZoneBasedOnLocalTZ = async () => {
    // if (helperStore.getTimezones.length == 0 || timeZoneValue.user != null || isLoadingCanonical) return;
    const tz = helperStore.getTimezones.find((tz) => tz.id == localTimeZoneId.current)?.id;
    if (tz != null) {
      return setTimeZoneValue((prev) => ({
        ...prev,
        user: tz ?? null,
      }));
    }
    setIsLoadingCanonical(true);
    const r = await api.helper.timezoneCanonical(localTimeZoneId.current);
    setTimeZoneValue((prev) => ({
      ...prev,
      user: r?.timeZoneId ?? null,
    }));
    setIsLoadingCanonical(false);
    if (skipTimeZone !== r?.timeZoneId) {
      setIsOpen(r?.timeZoneId !== authStore.getInitialInfo?.identity?.timeZoneId);
    }
  };

  const handleSave = async () => {
    if (authStore.getInitialInfo?.identity == null) return;
    setIsLoading(true);
    if (authStore.getInitialInfo?.identity?.timeZoneId != timeZoneValue.user) {
      const userData: UserDto = { ...authStore.getInitialInfo?.identity };
      await api.user.editPartially(
        authStore.getInitialInfo?.identity?.id!,
        {
          ...userData,
          timeZoneId: timeZoneValue.user,
        },
        userData
      );
    }
    setIsOpen(false);
    setIsLoading(false);
    await authStore.refreshInitialInfo();
  };

  useEffect(() => {
    getCanonicalTimeZoneBasedOnLocalTZ();
  }, [helperStore.getTimezones]);

  return {
    isOpen,
    timeZoneValue,
    isLoading,
    isLoadingCanonical,
    timeZones: helperStore.getTimezones,
    isSetTimeZone: authStore.getInitialInfo?.identity?.timeZoneId == null,
    handleSave,
    handleCloseModal,
    handleChangeTimeZone,
  }
}
