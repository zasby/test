import { RegulationUserSelectionRuleDto } from "../api";
import { UserSelectionRule } from "../api/types/userSelectionRule";

export const mapSectionUserRulesToCustomRules = (rulesArr: RegulationUserSelectionRuleDto[]): UserSelectionRule[] => {
  return rulesArr.map((item) => ({
    id: item.id,
    rolePositionId: item.rolePositionId ?? undefined,
    roleId: item.roleId ?? undefined,
    orgchartId: item.orgchartId ?? undefined,
    rolePositionType: (item.rolePositionType as 1 | 2) ?? undefined,
    isExcluded: item.isExcluded!,
  }));
};
