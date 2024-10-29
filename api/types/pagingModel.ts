import { PagingOptions } from "./pagingOptions";
import { UsersCount } from "../models/CompanyForAdminDto";

export type PagingModel<T> = {
  pagingOptions: PagingOptions;
  totalItems: number;
  totalPages: number;
  items: T[];
  usersCount?: UsersCount;
  timePlanTotal?: string;
};
