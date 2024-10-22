import { User2CompanyAccessLevel } from "../api/models/CompanyUserLimitDto";

export const USER_LIMITS = [
  {
    accessLevel: User2CompanyAccessLevel.Full,
    limit: null,
  },
  {
    accessLevel: User2CompanyAccessLevel.Restricted,
    limit: null,
  },
  {
    accessLevel: User2CompanyAccessLevel.Blocked,
    limit: null,
  }
]