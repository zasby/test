import { User2CompanyAccessLevel } from "../api/models/CompanyUserLimitDto";
import { useRootStore } from "./useRootStore";

export const useUsersLimits = () => {
  const { authStore } = useRootStore();
  const currentCompany = authStore.getCurrentCompany;
  const { userLimits = [] } = currentCompany ?? {};


  const fullAccessLevel = userLimits.find(({accessLevel}) => accessLevel === User2CompanyAccessLevel.Full)
  const restrictedAccessLevel = userLimits.find(({accessLevel}) => accessLevel === User2CompanyAccessLevel.Restricted)

  const usersLimitFull = fullAccessLevel?.limit ?? "∞";
  const usersLimitRestricted = restrictedAccessLevel?.limit ?? "∞";

  return {
    usersLimitFull,
    usersLimitRestricted,
  }
}