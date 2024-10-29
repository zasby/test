import { useRootStore } from "../useRootStore";
import { useNotifier } from "../useNotifier";
import { useTranslation } from "react-i18next";
import { useState } from "react";
import { useApi } from "../useApi";
import { api } from "../../services";
import { useUpdateWithController } from "../useUpdate";
import { CompanyDto, CompanyScheduleDto } from "../../api";
import { ICompanyEditForm, ScheduleFormTypes } from "../../types";

export const useCompanyEditForm = (props: ICompanyEditForm) => {
  const { authStore, helperStore } = useRootStore();
  const notifier = useNotifier();
  const { t } = useTranslation();
  const companyId = props?.companyId ?? authStore.getCurrentCompanyId;
  const [scheduleData, setScheduleData] = useState<ScheduleFormTypes>({
    scheduleIsSameOnWeekdays: false,
    schedule: [],
  });
  const [canShowError, setCanShowError] = useState({
    name: false,
  });
  const timeZones = helperStore.getTimezones;
  // TODO: Передаём расписание в форму, при сохранении передаём сюда изменённую модель, отправляем
  //  на сервер и передаём в форму полученный результат через промис
  const companyData = useApi(
    () => api.company.getById(companyId as number),
    () => {},
    async (x) => {
      updater.setInitialState(x!);
      setScheduleData({
        scheduleIsSameOnWeekdays: x?.scheduleIsSameOnWeekdays ?? false,
        schedule: x?.schedule ?? [],
      });
      props.setLoading(false);
    }
  );

  const handleRefresh = async () => {
    if (!props.firstLaunch) {
      await authStore.refreshInitialInfo();
    }
  };

  const updater = useUpdateWithController(api.company, () => handleRefresh());

  const handleScheduleSave = async (data: CompanyScheduleDto[]): Promise<ScheduleFormTypes> => {
    const r = await api.company.edit(companyId as number, {
      ...updater.currentState,
      schedule: data,
    });
    if (!r) {
      return scheduleData;
    } else {
      const dataToReturn: ScheduleFormTypes = {
        scheduleIsSameOnWeekdays: r.scheduleIsSameOnWeekdays ?? false,
        schedule: r.schedule ?? [],
      };
      notifier.show({ message: t("notifier:success.saved"), theme: "success" });
      return dataToReturn;
    }
  };

  const handleAvatarChange = async (id: number) => {
    const companyData: CompanyDto = updater.currentState ?? {};

    const r = await api.company.editPartially(
      companyId as number,
      {
        ...companyData,
        imageId: id,
      },
      companyData
    );
    if (!!r) {
      updater.setInitialState(r);
      await authStore.refreshInitialInfo();
    }
  };

  const handleAvatarDelete = async () => {
    const companyData: CompanyDto = updater.currentState ?? {};

    const r = await api.company.editPartially(
      companyId as number,
      {
        ...companyData,
        imageId: null,
      },
      companyData
    );
    if (!!r) {
      updater.setInitialState(r);
      await authStore.refreshInitialInfo();
    }
  };

  return {
    companyData,
    updater,
    timeZones,
    canShowError,
    scheduleData,
    setCanShowError,
    handleScheduleSave,
    handleAvatarChange,
    handleAvatarDelete,
  }
}
