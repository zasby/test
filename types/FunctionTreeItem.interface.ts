import { RolePositionDto } from "../api";
import { positionsKeys } from "./UserSelectionDialog.interface";
import { MenuItemClaimType } from "../api/models/NavigationMenuDto";
import { RegulationTreeNode } from "../api/models/RegulationTreeDto";
import { IUpdateTreeItemData } from "./IGeneratorTreeData.interface";
import { DataNode } from "antd/es/tree";
import { RoleSelectorDto } from "../api/models/RoleSelectorDto";


export interface IFunctionTreeItem {
  id: number;
  title: string;
  includeNestedRoles: boolean;
  orgchartId?: number;
  selectedPositions?: number[];
  positions?: RolePositionDto[];
  positionType?: positionsKeys | null;
  claimType?: MenuItemClaimType;
}

export interface IFunctionTreeItemProps {
  role: RegulationTreeNode;
  treeData: RegulationTreeNode[];
  updateTreeItemData: (data: IUpdateTreeItemData) => DataNode[];
  searchValue?: string;
  claimType?: MenuItemClaimType;
  selectedRoles: IFunctionTreeItem[];
  setSelectedRoles: (list: IFunctionTreeItem[]) => void;
  activeRole?: RoleSelectorDto | null;
  onSelectActiveRole?: (role: RoleSelectorDto) => void;
}
