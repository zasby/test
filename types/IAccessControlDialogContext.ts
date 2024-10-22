import React from "react";
import { RegulationTreeNode } from "../api/models/RegulationTreeDto";
import { IFunctionTreeItem } from "./FunctionTreeItem.interface";
import { IUpdateTreeItemData } from "./IGeneratorTreeData.interface";
import {
  NavigationMenuItemClaimGroupDto,
  NavigationMenuItemUserSelectionRuleClaimDto
} from "../api/models/NavigationMenuItemClaimGroupDto";
import { MenuItemClaimType } from "../api/models/NavigationMenuDto";

export interface IAccessControlDialogContext {
  isLoading: boolean;
  fetchRoleSelectorsClaimTreeData: (orgchartId: number, id?: number) => void;
  treeData: RegulationTreeNode[];
  expandedKeys: React.Key[];
  setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[]>>;
  selectedRoles: IFunctionTreeItem[];
  setSelectedRoles: React.Dispatch<React.SetStateAction<IFunctionTreeItem[]>>;
  updateTreeItemData: (data: IUpdateTreeItemData) => RegulationTreeNode[];
  claimGroup: NavigationMenuItemClaimGroupDto;
  setClaimGroup: React.Dispatch<React.SetStateAction<NavigationMenuItemClaimGroupDto>>;
  handleDeleteClaim: (item: NavigationMenuItemUserSelectionRuleClaimDto) => void;
  claimType: MenuItemClaimType;
  setClaimType: React.Dispatch<React.SetStateAction<MenuItemClaimType>>;
}
