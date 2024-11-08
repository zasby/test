import React from "react";
import { guideContentType, guideKeys } from "../stores/hintStore";
import {
  LucideAlertOctagon,
  LucideAlertTriangle,
  LucideCalendar,
  LucideCalendarRange,
  LucideClipboard,
  LucideColumns,
  LucideGitPullRequest,
  LucideGraduationCap,
  LucideKey,
  LucideLayers,
  LucideRepeat,
  LucideSettings,
  LucideSliders,
  LucideTrendingUp,
  LucideUsers,
} from "lucide-react";

export type AppMenuLinkType = {
  id: number;
  link: string;
  key: string;
  strictMatch?: boolean;
  softMatch?: boolean;
  icon: React.ReactNode;
  guideKey?: guideContentType;
};

export type AppPageTabType = {
  id: number;
  link: string;
  key: string;
  name?: string;
};

export type AppTabType = {
  id: number;
  name: string;
  link?: string;
  key?: string;
  element?: any;
  hidden?: boolean;
};

export const AppMainMenuLinks: AppMenuLinkType[] = [
  // { id: 0, link: "/orgchart", key: "orgchart", icon: <FiGitPullRequest />, guideKey: guideKeys.orgchart },
  { id: 0, link: "/orgchart", key: "orgchart", icon: <LucideGitPullRequest size={15} />, guideKey: guideKeys.orgchart },
  // { id: 1, link: "/chart", key: "chart", icon: <FiColumns /> },
  { id: 1, link: "/chart", key: "chart", icon: <LucideColumns size={15} /> },
  // { id: 2, link: "/employee", key: "employee", icon: <FiUsers />, guideKey: guideKeys.inviteEmployee },
  { id: 2, link: "/employee", key: "employee", icon: <LucideUsers size={15} />, guideKey: guideKeys.inviteEmployee },
  { id: 3, link: "", key: "common", icon: null },
  // { id: 5, link: "/settings", key: "settings", icon: <FiSettings /> },
  { id: 5, link: "/settings", key: "settings", icon: <LucideSettings size={15} /> },
  { id: 6, link: "/settings", key: "settings.common", icon: null },
  { id: 7, link: "/settings/company", key: "settings.company", icon: null },
  { id: 8, link: "/settings/profile", key: "settings.user", icon: null },
  { id: 15, link: "/report/driver", key: "report.driver", icon: null, strictMatch: true },
  // { id: 17, link: "/driver/super-admin", key: "driver.sa", icon: <FiKey />, strictMatch: true },
  { id: 17, link: "/driver/super-admin", key: "driver.sa", icon: <LucideKey size={15} />, strictMatch: true },
  // { id: 11, link: "/driver/admin/statistics", key: "driver.admin", icon: <FiAlertOctagon />, strictMatch: true },
  {
    id: 11,
    link: "/driver/admin/statistics",
    key: "driver.admin",
    icon: <LucideAlertOctagon size={15} />,
    strictMatch: true,
  },
  // { id: 9, link: "/driver", key: "driver", icon: <FiAlertTriangle />, strictMatch: true },
  { id: 9, link: "/driver", key: "driver", icon: <LucideAlertTriangle size={15} />, strictMatch: true },
  // { id: 10, link: "/manage-companies", key: "admin.companies_management", icon: <FiSliders /> },
  { id: 10, link: "/manage-companies", key: "admin.companies_management", icon: <LucideSliders size={15} /> },
  { id: 13, link: "/education", key: "edu", icon: <LucideGraduationCap size={15} /> },
  { id: 14, link: "/report/communication", key: "report.communication", icon: null, strictMatch: true },
  // { id: 4, link: "/communication", key: "communication", icon: <FiRepeat />, guideKey: guideKeys.communications },
  {
    id: 4,
    link: "/communication",
    key: "communication",
    icon: <LucideRepeat size={15} />,
    guideKey: guideKeys.communications,
  },
  // { id: 12, link: "/report", key: "report", icon: <FiLayers /> },
  { id: 12, link: "/report", key: "report", icon: <LucideLayers size={15} /> },
  // { id: 16, link: "/schedule", key: "schedule", icon: <FiCalendar />, guideKey: guideKeys.schedule },
  { id: 16, link: "/schedule", key: "schedule", icon: <LucideCalendar size={15} />, guideKey: guideKeys.schedule },
  // { id: 17, link: "/policy", key: "regulation", icon: <FiClipboard />, guideKey: guideKeys.policies },
  { id: 17, link: "/policy", key: "regulation", icon: <LucideClipboard size={15} />, guideKey: guideKeys.policies },
  // { id: 18, link: "/dashboard", key: "dashboard", icon: <FiTrendingUp />, guideKey: guideKeys.dashboard },
  { id: 18, link: "/dashboard", key: "dashboard", icon: <LucideTrendingUp size={15} />, guideKey: guideKeys.dashboard },
  // { id: 19, link: "/update-note", key: "admin.update_notes", icon: <IoRefresh /> },
  // { id: 20, link: "/planning", key: "planning", icon: <HiOutlineCalendar />, guideKey: guideKeys.planning },
  { id: 20, link: "/planning", key: "planning", icon: <LucideCalendarRange size={15} />, guideKey: guideKeys.planning },
  { id: 21, link: "/settings/modules", key: "settings.modules", icon: null },
  // { id: 19, link: "/policy", key: "regulation", icon: <FiList /> },
];

export const AppPagesTabs: AppPageTabType[] = [
  { id: 0, link: "/settings", key: "settings.common" },
  { id: 1, link: "/settings/company", key: "settings.company" },
  { id: 2, link: "/settings/profile", key: "settings.user" },
  { id: 3, link: "/report/communication-violation", key: "report.communication" },
  { id: 4, link: "/report/communication-customRule", key: "report.driver" },
  { id: 5, link: "/settings/modules", key: "settings.modules" },
];

export const AppTabsByPage: { [name: string]: AppPageTabType[] } = {
  report: [
    { id: 0, link: "/report/communication", key: "report.communication", name: "По коммуникациям" },
    { id: 1, link: "/report/driver", key: "report.driver", name: "По драйверам" },
  ],
  supportCenter: [
    { id: 0, link: "/education", key: "support_center.education", name: "Обучение" },
    { id: 1, link: "/feedback", key: "support_center.feedback", name: "Обратная связь" },
  ],
  driver: [
    { id: 0, link: "/driver/admin/statistics", key: "driver.admin.statistics", name: "parse:tab.statistics" },
    { id: 1, link: "/driver/admin/history", key: "driver.admin.history", name: "parse:tab.history" },
  ],
  regulation: [
    { id: 0, link: "/policy/my", key: "my", name: "common:tab.policy.my" },
    { id: 1, link: "/policy/to-learn", key: "to_study", name: "common:tab.policy.to_learn" },
    { id: 2, link: "/policy/for-approval", key: "on_approval", name: "common:tab.policy.for_approval" },
    { id: 3, link: "/policy/all", key: "all_regulations", name: "common:tab.policy.all" },
    { id: 4, link: "/policy/topics", key: "all_sections", name: "common:tab.policy.topics" },
    { id: 5, link: "/policy/undone", key: "undone", name: "common:tab.policy.undone" },
  ],
  planning: [
    { id: 0, link: "/communication/my-plan", key: "planning", name: "common:tab.planning.my_plan" },
    {
      id: 1,
      link: "/communication/work-plans",
      key: "work_plans",
      name: "common:tab.planning.work_plans",
    },
    {
      id: 2,
      link: "/communication/require-approval",
      key: "require_approval",
      name: "common:tab.planning.require_approval",
    },
  ],
  project: [
    { id: 0, link: "/project/description", key: "project", name: "common:tab.project.description" },
    { id: 1, link: "/project/issues", key: "project", name: "common:tab.project.issues" },
    { id: 2, link: "/project/recurring-issues", key: "project", name: "common:tab.project.recurring_issues" },
    { id: 3, link: "/project/gantt-chart", key: "project", name: "common:tab.project.gantt_chart" },
  ],
};
