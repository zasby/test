export interface ITranslateToken {
  nameKey: string;
  translateKey: string;
}

export const regulationTranslateTokens: ITranslateToken[] = [
  { nameKey: "policy", translateKey: "common:breadcrumbs.policies" },
  { nameKey: "create-policy", translateKey: "common:breadcrumbs.create_policy" },
  { nameKey: "create-topic", translateKey: "common:breadcrumbs.create_topic" },
  { nameKey: "topics", translateKey: "common:breadcrumbs.topics" },
  { nameKey: "all", translateKey: "common:breadcrumbs.policy" },
  { nameKey: "stats", translateKey: "common:breadcrumbs.stats" },
];

export const planningTranslateTokens: ITranslateToken[] = [
  { nameKey: "planning", translateKey: "common:breadcrumbs.planning" },
  { nameKey: "work-plans", translateKey: "common:breadcrumbs.work_plans" },
];

export const projectTranslateTokens: ITranslateToken[] = [];
