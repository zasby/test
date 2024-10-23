import { UserShortDto, UserTypeForAdminDto } from "../../api";

export enum driverTypeKeys {
  driver = "driver",
  admin = "driver_admin",
}

export type driverType = driverTypeKeys.driver | driverTypeKeys.admin;

export const getAdminDrivers = (staff: UserTypeForAdminDto[] | undefined): UserShortDto[] =>
  staff?.filter((item) => item.type === driverTypeKeys.admin)?.map((item) => item?.user!) ?? [];

export const getDrivers = (staff: UserTypeForAdminDto[] | undefined): UserShortDto[] =>
  staff?.filter((item) => item.type === driverTypeKeys.driver)?.map((item) => item.user!) ?? [];

export const getUserTypeIdByUserId = (
  userId: number,
  employeeType: driverType,
  staff: UserTypeForAdminDto[] | undefined
): number | undefined =>
  staff?.filter((item) => item.type === employeeType).find((item) => item?.user?.id === userId)?.id;

export const validateName = (prevName: string, newName: string): boolean => !(prevName.trim() === newName.trim());
