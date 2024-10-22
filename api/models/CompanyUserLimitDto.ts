export enum User2CompanyAccessLevel {
  Full = "Full",
  Restricted = "Restricted",
  Blocked = "Blocked",
}

export type CompanyUserLimitDto = {
  companyId?: number;
  accessLevel: User2CompanyAccessLevel;
  limit: number | null;
}