import {
  cardKeys,
  cardKeysType,
  POLICIES_TAB_KEYS,
  tabKeysType,
  toolsConst,
  urlKeys
} from "./regulation/consts";

export enum regulationContentTypeKeys {
  draft = "draft",
  approved = "approved",
  unknown = "unknown",
}
export type regulationContentUnknownKeyType = "unknown";

export type regulationContentType =
  | regulationContentTypeKeys.draft
  | regulationContentTypeKeys.approved
  | regulationContentTypeKeys.unknown
  | null;

export interface IToolsToken {
  key: string;
  urlKey: string;
}

export interface IRegulationTab {
  tabKey: tabKeysType;
  contentType: regulationContentType;
}

export interface IRouteTools {
  urlKey: string;
  breadcrumbs: boolean;
  cardKey: cardKeysType;
  tab: IRegulationTab;
  availableTools: IToolsToken[];
}

export const routeToolsArr: IRouteTools[] = [
  {
    urlKey: urlKeys.my,
    breadcrumbs: false,
    cardKey: cardKeys.regulation,
    tab: {
      tabKey: POLICIES_TAB_KEYS.my,
      contentType: regulationContentTypeKeys.unknown,
    },
    availableTools: [
      { key: toolsConst.search, urlKey: urlKeys.my },
      { key: toolsConst.addRegulation, urlKey: urlKeys.my },
    ],
  },
  {
    urlKey: urlKeys.onApproval,
    breadcrumbs: false,
    cardKey: cardKeys.regulation,
    tab: {
      tabKey: POLICIES_TAB_KEYS.forApproval,
      contentType: regulationContentTypeKeys.draft,
    },
    availableTools: [
      { key: toolsConst.search, urlKey: urlKeys.onApproval },
      { key: toolsConst.addRegulation, urlKey: urlKeys.onApproval },
    ],
  },
  {
    urlKey: urlKeys.toStudy,
    breadcrumbs: false,
    cardKey: cardKeys.multiple,
    tab: {
      tabKey: POLICIES_TAB_KEYS.toLearn,
      contentType: regulationContentTypeKeys.approved,
    },
    availableTools: [
      { key: toolsConst.search, urlKey: urlKeys.toStudy },
      { key: toolsConst.addSectionsAndRegulations, urlKey: urlKeys.toStudy },
    ],
  },
  {
    urlKey: urlKeys.allRegulation,
    breadcrumbs: false,
    cardKey: cardKeys.regulation,
    tab: {
      tabKey: POLICIES_TAB_KEYS.all,
      contentType: regulationContentTypeKeys.approved,
    },
    availableTools: [
      { key: toolsConst.search, urlKey: urlKeys.allRegulation },
      { key: toolsConst.filter, urlKey: urlKeys.allRegulation },
      { key: toolsConst.stats, urlKey: urlKeys.allRegulation },
      { key: toolsConst.sort, urlKey: urlKeys.allRegulation },
      { key: toolsConst.addRegulation, urlKey: urlKeys.allRegulation },
    ],
  },
  {
    urlKey: urlKeys.allSection,
    breadcrumbs: false,
    cardKey: cardKeys.section,
    tab: {
      tabKey: POLICIES_TAB_KEYS.topics,
      contentType: null,
    },
    availableTools: [
      { key: toolsConst.search, urlKey: urlKeys.allSection },
      { key: toolsConst.filter, urlKey: urlKeys.allSection },
      { key: toolsConst.stats, urlKey: urlKeys.allSection },
      { key: toolsConst.sort, urlKey: urlKeys.allSection },
      { key: toolsConst.addSections, urlKey: urlKeys.allSection },
    ],
  },
  {
    urlKey: urlKeys.undone,
    breadcrumbs: false,
    cardKey: cardKeys.regulation,
    tab: {
      tabKey: POLICIES_TAB_KEYS.undone,
      contentType: regulationContentTypeKeys.unknown,
    },
    availableTools: [
      { key: toolsConst.search, urlKey: urlKeys.allSection },
      { key: toolsConst.filter, urlKey: urlKeys.allSection },
      { key: toolsConst.stats, urlKey: urlKeys.allSection },
      { key: toolsConst.sort, urlKey: urlKeys.allSection },
      { key: toolsConst.addSections, urlKey: urlKeys.allSection },
    ],
  },
];
