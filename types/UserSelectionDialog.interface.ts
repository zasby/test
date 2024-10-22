
import { RadioChangeEvent } from "antd/lib/radio/interface";
import React from "react";
import { DataNode } from "antd/es/tree";
import { UserSelectionRule } from "../api/types/userSelectionRule";
import { AutocompleteModel, RoleDto, RolePositionDto } from "../api";
import { IFunctionTreeItem } from "./FunctionTreeItem.interface";
import { RoleSelectorDto } from "../api/models/RoleSelectorDto";
import { RegulationTreeNode } from "../api/models/RegulationTreeDto";
import { IUpdateTreeItemData } from "./IGeneratorTreeData.interface";


export enum positionsKeys {
  allManagers = "Admins",
  allPerformers = "Executors",
}

export type PositionsType = number | null | positionsKeys.allPerformers | positionsKeys.allManagers;

export interface IUserSelectionDialog {
  open: boolean;
  orgchartsForBlockAllAll?: number[];
  onClose: () => void;
  isExcludedType?: boolean;
  disabledRules?: UserSelectionRule[];
  onSave?: (userSelectionRule: UserSelectionRule, role?: RoleDto | AutocompleteModel) => void;
  onAddRoles?: (roles: IFunctionTreeItem[]) => void;
  propsRoles?: RoleDto[];
  selectedRolesList?: RoleSelectorDto[];
  itemId?: number;
  isRegular?: boolean;
}

export interface IUserSelectionDialogView {
  open: boolean;
  orgchartsForBlockAllAll?: number[];
  orgchartId: number | null;
  onClose: () => void;
  // rolesIsDone: boolean;
  // roles: RoleDto[];
  // rolesAutocomplete: AutocompleteModel[];
  isLoading: boolean;
  searchRoleValue: string;
  onChangeSearchRoleValue: (newValue: string) => void;
  onSelectActiveRole: (role: RoleSelectorDto | null) => void;
  onChangeRolePositionId: (event: RadioChangeEvent) => void;
  onChangeOrgchartId: (id: string | number) => void;
  rolePositionId: PositionsType;
  activeRole: RoleSelectorDto | null;
  disabledRules?: UserSelectionRule[];
  currentPositions?: RolePositionDto[];
  // loadNextRoles: () => void;
  onSave: () => void;
  treeData: RegulationTreeNode[];
  expandedKeys: React.Key[];
  onExpand: (key: React.Key[]) => void;
  selectedRoles: IFunctionTreeItem[];
  setSelectedRoles: any;
  // onLoadData: (data: any) => Promise<any>;
  updateTreeItemData: (data: IUpdateTreeItemData) => DataNode[];
  updateRolePosition: (
    list: RegulationTreeNode[],
    key: React.Key,
    selectedPositions: number[],
    positionType?: positionsKeys | null,
  ) => RegulationTreeNode[];
}

type roleLabelType = { id: number; name: string };

export interface IRoleSelectionBox {
  // labels: roleLabelType[];
  isSupportOldUi?: boolean;
  // rolesIsDone: boolean;
  // activeLabelId: number | null;
  orgchartId: number | null;
  onChangeOrgchartId: (id: string | number) => void;
  activeRole: RoleSelectorDto | null;
  onSelectActiveRole: (role: RoleSelectorDto) => void;
  searchRoleValue: string;
  // loadNextRoles: () => void;
  onChangeSearchRoleValue: (newValue: string) => void;
  treeData: RegulationTreeNode[];
  expandedKeys: React.Key[];
  onExpand: (key: React.Key[]) => void;
  selectedRoles: IFunctionTreeItem[];
  setSelectedRoles: any;
  // onLoadData: (data: any) => Promise<any>;
  updateTreeItemData: (data: IUpdateTreeItemData) => DataNode[]
}

export interface IPositionSelectionBox {
  orgchartId: number | null;
  setDisabledFromDown: React.Dispatch<React.SetStateAction<boolean>>;
  positions?: RolePositionDto[];
  disabledAllAll?: boolean;
  disabledRules?: UserSelectionRule[];
  rolePositionId: PositionsType;
  role: RoleSelectorDto | null;
  onChangeRolePositionId: (event: RadioChangeEvent) => void;
  updateRolePosition: (
    list: RegulationTreeNode[],
    key: React.Key,
    selectedPositions: number[],
    positionType?: positionsKeys | null | undefined,
  ) => RegulationTreeNode[];
  treeData: RegulationTreeNode[];
}
