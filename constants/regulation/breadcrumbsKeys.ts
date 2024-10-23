export interface BreadcrumbToken {
  id: number;
  url: string;
  pathName: string;
  key: string;
  nesting: boolean;
  isMainPage?: boolean;
}

export type nestingUrlsType = {
  breadcrumbTokenId: number;
  url: string;
  key: string;
  hasId: boolean;
};

export const initialPathname = "/policy";

export enum breadcrumbKeys {
  createRegulation = "create-r",
  createSection = "create-s",
  sectionView = "section-v",
  regulationView = "regulation-v",
  regulationTest = "regulation-t",
  statsOverall = "stats",
  statsUser = "stats-u",
  tabForApproval = "tab-for-approval",
  tabToLearn = "tab-to-learn",
  tabMy = "tab-my",
  tabAll = "tab-all",
  tabTopics = "tab-topics",
  tabUnDone = "tab-undone",
  page404 = "page-404",
}

export const nestingUrls: nestingUrlsType[] = [
  { breadcrumbTokenId: 3, url: "policy/topics/:id", key: breadcrumbKeys.createRegulation, hasId: true },
  { breadcrumbTokenId: 15, url: "policy/topics/:id/create-topic", key: breadcrumbKeys.createSection, hasId: true },
  { breadcrumbTokenId: 16, url: "policy/topics/:id/policy/create-policy", key: breadcrumbKeys.createRegulation, hasId: true },
  { breadcrumbTokenId: 4, url: "policy/all/:id", key: breadcrumbKeys.regulationView, hasId: true },
  { breadcrumbTokenId: 17, url: "policy/topics/:id/policy/:childrenId", key: breadcrumbKeys.regulationView, hasId: true },

  { breadcrumbTokenId: 6, url: "policy/stats/:id", key: breadcrumbKeys.statsUser, hasId: true },
  { breadcrumbTokenId: 7, url: "policy/all/:id/study", key: breadcrumbKeys.regulationTest, hasId: true },
];

export const breadcrumbTokensArr: BreadcrumbToken[] = [
  {
    id: 1,
    url: "/policy/create-policy",
    pathName: "common:breadcrumbs.create_regulation",
    key: breadcrumbKeys.createRegulation,
    nesting: false,
    isMainPage: false,
  },
  {
    id: 2,
    url: "/policy/create-topic",
    pathName: "common:breadcrumbs.create_section",
    key: breadcrumbKeys.createSection,
    nesting: false,
    isMainPage: false,
  },
  {
    id: 3,
    url: "/policy/topics/",
    pathName: "common:breadcrumbs.section_view",
    key: breadcrumbKeys.sectionView,
    nesting: true,
    isMainPage: false,
  },
  {
    id: 4,
    url: "/policy/all/",
    pathName: "common:breadcrumbs.regulation_view",
    key: breadcrumbKeys.regulationView,
    nesting: true,
    isMainPage: true,
  },
  {
    id: 5,
    url: "/policy/stats",
    pathName: "common:breadcrumbs.stats",
    key: breadcrumbKeys.statsOverall,
    nesting: true,
    isMainPage: false,
  },
  {
    id: 6,
    url: "/policy/stats",
    pathName: "common:breadcrumbs.stats",
    key: breadcrumbKeys.statsUser,
    nesting: false,
    isMainPage: false,
  },
  {
    id: 7,
    url: "/policy/all/:id/study",
    pathName: "common:breadcrumbs.regulation_view",
    key: breadcrumbKeys.regulationTest,
    nesting: false,
    isMainPage: true,
  },
  {
    id: 8,
    url: "/policy/for-approval",
    pathName: "common:tab.policy.for_approval",
    key: breadcrumbKeys.tabForApproval,
    nesting: false,
    isMainPage: true,
  },
  {
    id: 9,
    url: "/policy/to-learn",
    pathName: "common:tab.policy.to_learn",
    key: breadcrumbKeys.tabToLearn,
    nesting: false,
    isMainPage: true,
  },
  {
    id: 10,
    url: "/policy/my",
    pathName: "common:tab.policy.my",
    key: breadcrumbKeys.tabMy,
    nesting: false,
    isMainPage: true,
  },
  {
    id: 11,
    url: "/policy/all",
    pathName: "common:breadcrumbs.regulation_view",
    key: breadcrumbKeys.tabAll,
    nesting: true,
    isMainPage: true,
  },
  {
    id: 12,
    url: "/policy/topics",
    pathName: "common:breadcrumbs.section_view",
    key: breadcrumbKeys.sectionView,
    nesting: false,
    isMainPage: true,
  },
  {
    id: 13,
    url: "/policy/undone",
    pathName: "common:tab.policy.undone",
    key: breadcrumbKeys.tabUnDone,
    nesting: false,
    isMainPage: true,
  },
  {
    id: 14,
    url: "policy*",
    pathName: "common:page_title.page_404",
    key: breadcrumbKeys.page404,
    nesting: true,
    isMainPage: false,
  },
  {
    id: 15,
    url: "/policy/topics/:id",
    pathName: "common:breadcrumbs.section_view",
    key: breadcrumbKeys.createSection,
    nesting: true,
    isMainPage: false,
  },
  {
    id: 16,
    url: "/policy/topics/:id/policy/create-policy",
    pathName: "common:breadcrumbs.section_view",
    key: breadcrumbKeys.createRegulation,
    nesting: true,
    isMainPage: false,
  },
  {
    id: 17,
    url: "/policy/topics/:id/policy/:childrenId",
    pathName: "common:breadcrumbs.section_view",
    key: breadcrumbKeys.regulationView,
    nesting: true,
    isMainPage: false,
  },
];