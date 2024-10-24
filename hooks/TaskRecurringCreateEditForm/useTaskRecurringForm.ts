import { useRootStore } from "../useRootStore";
import { useTranslation } from "react-i18next";
import { useNotifier } from "../useNotifier";
import { useEffect, useImperativeHandle, useState } from "react";
import { RecurringIssueDto, RecurringIssueExecutorConfigDto, RolePositionDto } from "../../api";
import { useApi } from "../useApi";
import { api } from "../../services";
import { custonFieldsKeys } from "../../../components/modules/forms/types/consts";
import { ITaskRecurringCreateEditForm } from "../../types";

export const useTaskRecurringForm = (props: ITaskRecurringCreateEditForm, ref: any) => {
  const { authStore, helperStore, orgchartStore } = useRootStore();
  const { t } = useTranslation();
  const notifier = useNotifier();
  const [editMode, setEditMode] = useState<boolean>(props.data != null);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  let executorConfig: (RecurringIssueExecutorConfigDto & { idx?: number })[] = [];
  const getRoleAdmin = () => {
    return (props.functionData?.positions ?? [])?.find((p: RolePositionDto) => p.parentPositionId == null)?.id;
  };
  if (props.createOn != null && props.functionData != null) {
    switch (props.createOn) {
      case "admins":
        executorConfig = [
          {
            idx: 1,
            rolePositionId: getRoleAdmin(),
            roleId: props.functionData?.id,
            isExcluded: false,
            orgchartId: orgchartStore.getCurrentOrgchartId,
          },
        ];
        break;
      case "executors":
        executorConfig = [
          {
            idx: 1,
            rolePositionType: 2,
            roleId: props.functionData?.id,
            isExcluded: false,
            orgchartId: orgchartStore.getCurrentOrgchartId,
          },
        ];
        break;
      case "all":
        const [position] = props.functionData.positions ?? []
        executorConfig = [
          {
            idx: 1,
            rolePositionType: null,
            rolePositionId: position?.id ?? undefined,
            roleId: props.functionData?.id,
            isExcluded: false,
            orgchartId: orgchartStore.getCurrentOrgchartId,
          },
        ];
        break;
    }
  }

  const initialState: RecurringIssueDto = {
    id: 0,
    name: "",
    description: "",
    awaitedResult: "",
    boardId: authStore.getCurrentBoardId as number,
    // @ts-ignore
    createdOnRoleId: props?.functionData?.id ?? null,
    issueType: "task",
    executorConfigs: executorConfig as any,
    rules: [],
    fields: [],
    createOnWeekends: true,
    // @ts-ignore
    proofRequirement: null,
    dateDeadlineAfterTime: null,
    senderType: "nearest_admin",
    senderRoleId: null,
    dateCreatedOnTimezoneType: "of_executor",
    attachments: null,
    // oneIssueToOneUser: false,
    createIfNoUsersWithWorkTime: true,
    considerUserSchedule: false,
    timePlan: null,
    senderNotWorkingActionType: 0,
  };

  const addOrgchartIdToData = (data: RecurringIssueDto): RecurringIssueDto => {
    return {
      ...data,
      executorConfigs: [...(data.executorConfigs ?? [])].map((e) => ({
        ...e,
        orgchartId: e.orgchartId ?? orgchartStore.getCurrentOrgchartId,
      })),
    };
  };

  const [data, setData] = useState<RecurringIssueDto>(
    props.data != null ? addOrgchartIdToData(props.data) : initialState
  );
  const allRoles = useApi(() =>
    api.role.autocomplete({ companyId: authStore.getCurrentCompanyId, pageSize: -1, orderBy: "name", order: "asc" })
  );

  useEffect(() => {
    if (props.data != null) {
      setData(props.data);
      // setData({ ...data, ...props.data });
    }
  }, []);

  // console.log(ref);

  useImperativeHandle(ref, () => ({
    saveTask: async () => {
      if (editMode) {
        await emitSave();
      } else {
        await emitCreate();
      }
    },
  }));

  const emitCreate = async () => {
    if (!isCreateSaveButtonAvailable()) {
      // notifier.show({ message: t("notifier:error.mistake_somewhere"), theme: "error" });
      return;
    }
    props.onFormLoadingChange && props.onFormLoadingChange(true);
    setIsLoading(true);
    const r = await api.recurringIssue.create(data);
    if (r !== null) {
      setData(r);
    }
    notifier.showSuccessError(
      t("notifier:success.recurring_issue_create"),
      t("notifier:error.recurring_issue_create"),
      !!r
    );
    props.onFormLoadingChange && props.onFormLoadingChange(false);
    setIsLoading(false);
    if (r == null) {
      return;
    }
    props.onCreate && props.onCreate();
  };

  useEffect(() => {
    // console.log(data, "d");
  }, [data]);

  const emitSave = async () => {
    if (!isCreateSaveButtonAvailable()) {
      // notifier.show({ message: t("notifier:error.mistake_somewhere"), theme: "error" });
      return;
    }
    props.onFormLoadingChange && props.onFormLoadingChange(true);
    setIsLoading(true);
    const r = await api.recurringIssue.edit(data.id as number, data);
    notifier.showSuccessError(
      t("notifier:success.recurring_issue_edit"),
      t("notifier:error.recurring_issue_edit"),
      !!r
    );
    props.onFormLoadingChange && props.onFormLoadingChange(false);
    setIsLoading(false);
    if (r == null) {
      return;
    }
    props.onSave && props.onSave();
  };

  const isFieldEmpty = (data: string | number | null | undefined) => {
    return (
      (data ?? "")
        .toString()
        .replace(/(?:\r\n|\r|\n)/g, " ")
        .trim().length == 0
    );
  };

  const isCreateSaveButtonAvailable = () => {
    let val2return = true;

    if (isFieldEmpty(data.name)) {
      notifier.show({ message: t("parse:notifier.task_no_name"), theme: "error" });
      val2return = false;
    }

    if (data.executorConfigs == null || data.executorConfigs?.length == 0) {
      notifier.show({ message: t("parse:notifier.task_no_performers"), theme: "error" });
      val2return = false;
    }

    if (data.rules == null || data.rules?.length == 0) {
      notifier.show({ message: t("parse:notifier.task_no_periodicity"), theme: "error" });
      val2return = false;
    }

    // if (data.dateDeadlineAfterTime && data.dateDeadlineAfterTime.length == 0) {
    //   val2return = false;
    // }

    if (data.fields?.some((f) => f.key == custonFieldsKeys.strictDeadline && f.valueBool == true)) {
      if (
        data.dateDeadlineUntil == null &&
        (data.dateDeadlineAfterTime == null || data.dateDeadlineAfterTime.length == 0)
      ) {
        notifier.show({ message: t("parse:notifier.task_no_deadline"), theme: "error" });
        val2return = false;
      }
    }

    if ((data.senderType == "executor_of_role" || data.senderType == "admin_of_role") && data.senderRoleId == null) {
      notifier.show({ message: t("parse:notifier.task_no_sender_function"), theme: "error" });
      val2return = false;
    }

    if (
      data.executorConfigs?.some((eC) => (eC.type == "role_executors" || eC.type == "role_admins") && eC.roleId == null)
    ) {
      notifier.show({ message: t("parse:notifier.task_no_performer_function"), theme: "error" });
      val2return = false;
    }

    return val2return;
  };

  return {
    editMode,
    data,
    allRoles,
    isLoading,
    setData,
    emitCreate,
    emitSave,
  }
}
