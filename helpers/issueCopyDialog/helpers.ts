import { TFunction } from "react-i18next";
import { IssueType, IssueTypeKeys } from "../../constants/issueTypeKeys";

export const getDialogConfig = (t: TFunction<"translation", undefined>, issueType: IssueType): { title: string } => {
  try {
    switch (issueType) {
      case IssueTypeKeys.task:
        return { title: t("ui:title.copy_task") };
    }
  } catch (e) {
    return { title: t("ui:title.reject_task") };
  }
};
