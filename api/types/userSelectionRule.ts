import { RoleDto } from "../models/RoleDto";
import { positionsKeys } from "../../types/UserSelectionDialog.interface";

export type UserSelectionRule = {
  id?: number;
  roleId?: number | null;
  rolePositionId?: number;
  rolePositionType?: 1 | 2;
  positionType?: positionsKeys | null;
  isExcluded: boolean;
  orgchartId?: number;
  role?: RoleDto;
  isSelected?: boolean;
  includeNestedRoles?: boolean;
};
