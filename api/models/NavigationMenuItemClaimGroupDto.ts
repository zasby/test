/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */


import { MenuItemClaimType } from "./NavigationMenuDto";
import { RoleShortDto } from "./RoleShortDto";
import { PositionDto } from "./RoleSelectorDto";

export type NavigationMenuItemUserSelectionRuleClaimDto = {
  navigationMenuItemId: number;
  claimType: 	MenuItemClaimType;
  isAllowed: boolean;
  id: number;
  roleId: number;
  role: RoleShortDto;
  orgchartId: number;
  rolePositionId: number;
  rolePosition: PositionDto;
  rolePositionType: number;
  isExcluded: boolean;
  includeNestedRoles: boolean;
}

// {
//   roleId: number;
//   roleName: string;
//   selectedPositions?: number[];
//   includeNestedRoles: boolean;
//   nestedCount?: number;
//   isSelected: boolean;
//   isRoot?: boolean;
//   hasItems?: boolean;
//   orgchartId?: number;
//   regulationId?: number;
//   isAllowed?: boolean;
//   items: RoleSelectorDto[];
//   positions: RolePositionDto[];
//   positionType?: positionsKeys | null;
//   claimType?: MenuItemClaimType
// }

// enum MenuItemClaimType {
//   Read = "Read", //: Чтение,
//   Write = "Write", //: Запись,
//   ReadWrite = "ReadWrite", //: Чтение и запись,
//   Assignment = "Assignment", //: Назначение на обучение,
//   FullAccess = "FullAccess", //: Полный доступ
// }

export type NavigationMenuItemClaimGroupDto = {
  [MenuItemClaimType.Read]?: NavigationMenuItemUserSelectionRuleClaimDto[];
  [MenuItemClaimType.Write]?: NavigationMenuItemUserSelectionRuleClaimDto[];
  // [MenuItemClaimType.ReadWrite]?: NavigationMenuItemUserSelectionRuleClaimDto[];
  [MenuItemClaimType.Assignment]?: NavigationMenuItemUserSelectionRuleClaimDto[];
  [MenuItemClaimType.FullAccess]?: NavigationMenuItemUserSelectionRuleClaimDto[];
  // showOnOrgStructure: boolean;
}