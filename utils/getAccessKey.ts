import { allowsRegulationKeys } from "../constants/consts";
import { MenuItemClaimType } from "../api/models/NavigationMenuDto";

export const getAccessKey = (actions: allowsRegulationKeys[]) => {
  if (actions.includes(allowsRegulationKeys.edit) && actions.includes(allowsRegulationKeys.assignment)) {
    return MenuItemClaimType.FullAccess;
  }
  if (actions.includes(allowsRegulationKeys.edit)) {
    return MenuItemClaimType.Write;
  }
  if (actions.includes(allowsRegulationKeys.assignment)) {
    return MenuItemClaimType.Assignment;
  }
  return MenuItemClaimType.Read;
}
