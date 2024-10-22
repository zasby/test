import { WarningsKeys } from "./keys/warningsKeys";

export const getWarningData = (): { title?: string; description?: string; key: WarningsKeys }[] => [
  {
    title: undefined,
    description: "text:date_work_start_expired",
    key: WarningsKeys.executorDeadline,
  },
  {
    title: "",
    description: "text:date_work_issues_overdue",
    key: WarningsKeys.issuesOverdue,
  },
];
