/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { RolePositionDto } from "./RolePositionDto";
import { MenuItemClaimType } from "./NavigationMenuDto";
import { positionsKeys } from "../../types/UserSelectionDialog.interface";

export type PositionDto = {
  id: number;
  name: string;
}

export type RoleSelectorDto = {
  roleId: number;
  roleName: string;
  selectedPositions?: number[];
  includeNestedRoles: boolean;
  nestedCount?: number;
  isSelected: boolean;
  isRoot?: boolean;
  hasItems?: boolean;
  orgchartId?: number;
  regulationId?: number;
  isAllowed?: boolean;
  items: RoleSelectorDto[];
  positions: RolePositionDto[];
  positionType?: positionsKeys | null;
  claimType?: MenuItemClaimType;
}
