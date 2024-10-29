import { UsersCount } from "../../api/models/CompanyForAdminDto";

export type PagingInfo = {
  page: number;
  isLoading: boolean;
  isDone: boolean;
  totalItems?: number;
  usersCount?: UsersCount;
  timePlanTotal?: string;
};
