export enum cardKeys {
  regulation = "regulation",
  section = "section",
  multiple = "multiple",
}

export enum regulationHistoryKeys {
  draft = 1,
  onApproval = 2,
  approved = 3,
  reject = 4,
}

export enum POLICIES_TAB_KEYS {
  forApproval = "OnApproval",
  toLearn = "ToStudy",
  my = "My",
  all = "All",
  topics = "Topics",
  undone = "Undone",
}

export type tabKeysType =
  | POLICIES_TAB_KEYS.forApproval
  | POLICIES_TAB_KEYS.toLearn
  | POLICIES_TAB_KEYS.my
  | POLICIES_TAB_KEYS.all
  | POLICIES_TAB_KEYS.topics
  | POLICIES_TAB_KEYS.undone;

export type cardKeysType = cardKeys.regulation | cardKeys.section | cardKeys.multiple;

export enum historySortKeys {
  onesFirst = "ones_first",
  oldOnes = "old_ones",
}

export type historySortKeysType = historySortKeys.onesFirst | historySortKeys.oldOnes;

export enum urlKeys {
  my = "/policy/my",
  toStudy = "/policy/to-learn",
  onApproval = "/policy/for-approval",
  allRegulation = "/policy/all",
  allSection = "/policy/topics",
  undone = "/policy/undone",
}
export enum toolsConst {
  search = "searchRegulations",
  addRegulation = "addRegulation",
  addSections = "addSections",
  addSectionsAndRegulations = "addSectionsAndRegulations",
  stats = "stats",
  filter = "filter",
  sort = "sort",
}
export enum allowsRegulationKeys {
  edit = "Edit",
  delete = "Delete",
  requestPublication = "RequestPublication",
  publish = "Publish",
  reject = "DeclinePublication",
  assignment = "Assignment"
}

export enum progressUsersKeys {
  whoStudied = "whoStudied",
  toStudy = "toStudy",
}
