
import React from "react";
import { RoleSelectorDto } from "../api/models/RoleSelectorDto";
import { MenuItemClaimType } from "../api/models/NavigationMenuDto";
import { RegulationTreeNode } from "../api/models/RegulationTreeDto";

export interface IGeneratorTreeData {
  list: RoleSelectorDto[];
  parentSelected: boolean;
  orgchartId: number;
  regulationId?: number;
  parentClaimType?: MenuItemClaimType;
}

export interface IUpdateTreeItem {
  list: RegulationTreeNode[];
  key: React.Key;
  isSelected: boolean;
  parentTree: number[];
  parentId?: number;
  includeNestedRoles?: boolean;
  parentBranch?: string;
}

export interface IUpdateTreeItemData {
  list: RegulationTreeNode[];
  key: React.Key;
  isSelected: boolean;
  includeNestedRoles?: boolean;
  isUpdateClaimType?: boolean;
}
