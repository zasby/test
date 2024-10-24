import { ITaskRecurringCreateEditFormView } from "../../types";
import { useTranslation } from "react-i18next";
import { useClaims } from "../useClaims";
import { useRootStore } from "../useRootStore";
import { createRef } from "react";
import { RecurringIssueExecutorConfigDto } from "../../api";
import { UserSelectionRule } from "../../api/types/userSelectionRule";
import { getRoutineIssueTooltip } from "../../utils/tooltip";
import { LocalesKeys } from "../../constants/localesKeys";

export const useTaskRecurringFormView = (props: ITaskRecurringCreateEditFormView) => {
  const claims = useClaims();
  const { helperStore, appStore, orgchartStore, authStore } = useRootStore();
  const uploadFilesInputRef = createRef();

  const converseRecurringConfigToSelectionRule = (
    value: RecurringIssueExecutorConfigDto & { idx?: number }
  ): UserSelectionRule & { idx?: number } => {
    const newValue: UserSelectionRule & { idx?: number } = {
      id: value?.id,
      roleId: value?.roleId,
      rolePositionId: value?.rolePositionId ?? undefined,
      rolePositionType: value?.rolePositionType as any,
      orgchartId: value?.orgchartId ?? undefined,
      isExcluded: value?.isExcluded as boolean,
      idx: value?.idx,
    };
    return newValue;
  };

  const converseSelectionRuleToRecurringConfig = (
    value: UserSelectionRule & { idx?: number }
  ): RecurringIssueExecutorConfigDto & { idx?: number } => {
    const newValue: RecurringIssueExecutorConfigDto & { idx?: number } = {
      id: value?.id,
      roleId: value?.roleId,
      recurringIssueId: props.data?.id,
      rolePositionId: value?.rolePositionId ?? undefined,
      rolePositionType: value?.rolePositionType as any,
      isExcluded: value?.isExcluded as boolean,
      orgchartId: value.orgchartId,
      idx: value?.idx,
    };
    return newValue;
  };

  const getTooltip = getRoutineIssueTooltip(appStore.getAppLocale as LocalesKeys);

  const handleChangeExecutorSelect = (data: (UserSelectionRule & { idx?: number })[]) => {
    props.setData({
      ...props.data,
      executorConfigs: [...(data ?? [])?.map((i) => converseSelectionRuleToRecurringConfig(i))],
    })
  };

  const companyUiType = authStore.getCurrentCompanyUiType;
  const orgchartResultName = orgchartStore.getCurrentOrgchartResultName;

  return {
    claims,
    companyUiType,
    getTooltip,
    orgchartResultName,
    uploadFilesInputRef,
    converseRecurringConfigToSelectionRule,
    handleChangeExecutorSelect,
  }
}
