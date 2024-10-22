import React from "react";
import { RegulationTreeNode } from "../api/models/RegulationTreeDto";
import { IFunctionTreeItem } from "./FunctionTreeItem.interface";
import { IUpdateTreeItemData } from "./IGeneratorTreeData.interface";
import { positionsKeys } from "./UserSelectionDialog.interface";


export interface ISettingUpAccessDialogContext {
  isLoading: boolean;
  fetchOrgchartData: (orgchartId: number, isRegular: boolean, id?: number) => void;
  treeData: RegulationTreeNode[];
  expandedKeys: React.Key[];
  setExpandedKeys: React.Dispatch<React.SetStateAction<React.Key[]>>;
  selectedRoles: IFunctionTreeItem[];
  setSelectedRoles: React.Dispatch<React.SetStateAction<IFunctionTreeItem[]>>;
  updateTreeItemData: (data: IUpdateTreeItemData) => RegulationTreeNode[];
  updateRolePosition: (list: RegulationTreeNode[], key: React.Key, selectedPositions: number[], positionType?: positionsKeys | null | undefined) => RegulationTreeNode[];
}
