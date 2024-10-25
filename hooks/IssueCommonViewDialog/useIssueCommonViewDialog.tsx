import { useRootStore } from "../useRootStore";
import { useTranslation } from "react-i18next";
import { getDialogConfig } from "../../helpers/issueCommonDialog/helpers";
import React, { useCallback, useMemo } from "react";
import { IIssueCommonViewDialog, IssueFormKeys } from "../../types/IssueCommonDialog.interface";
import { FlowTypeColorSchemeKey } from "../../../components/modules/pages/communications/constants/keys";
import { Text } from "../../../components/uiKit";
import { SwitchFieldType } from "../../../components/modules/forms/types/consts";

export const useIssueCommonViewDialog = (props: IIssueCommonViewDialog) => {
  const { authStore } = useRootStore();

  const { t } = useTranslation();
  const dialogConfig = getDialogConfig(t, props.formType, props.issueType);
  const isCreateMod = useMemo(() => props.formType === IssueFormKeys.create, [props.formType]);

  const handleGetTitle = useCallback(() => {
    switch (true) {
      case isCreateMod:
        return (
          <div className="d-flex align-center">
            {dialogConfig.title} <span className="px-1" />
    </div>
  );
  case !!props.updater.currentState?.calculated?.border?.name:
    const color =
      props.updater.currentState?.calculated?.border?.colorSchemeKey === FlowTypeColorSchemeKey.Background
        ? "var(--color-calendar-text-base)"
        : "var(--color-white)";
    return (
      <Text
        weight={400}
    children={props.updater.currentState?.calculated?.border?.name}
    style={{ color }}
    />
  );
  default:
    return undefined;
  }
  }, [
    dialogConfig.title,
    isCreateMod,
    props.formType,
    props.issueType,
    props.updater.currentState?.calculated?.border?.name,
  ]);

  const handleClose = useCallback(() => {
    console.log("handleClose");
    if ((props.updater.currentState?.initiatorUserId === authStore.getInitialInfo?.identity?.id ||
        props.updater.currentState?.createdByUserId === authStore.getInitialInfo?.identity?.id ||
        props.updater.currentState?.executorUserId === authStore.getInitialInfo?.identity?.id) && props.formType === IssueFormKeys.update &&
      props.updater.currentState?.fields?.find((f) => f.key === SwitchFieldType.isManagerApprovalRequired)?.valueBool &&
      !props.updater.currentState?.timePlanForApproval
    ) {
      return false;
    }
    return props.onClose();
  }, [
    props.updater.currentState?.fields,
    props.updater.currentState?.timePlanForApproval,
    props.updater.currentState?.initiatorUserId,
    props.updater.currentState?.createdByUserId,
    props.updater.currentState?.executorUserId,
  ]);

  return {
    handleClose,
    // dialogConfig,
    isCreateMod,
    handleGetTitle,
  }
}
