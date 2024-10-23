/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { RegulationTreeItemDto } from "./RegulationTreeItemDto";
import { MenuItemClaimType, NavigationMenuItemDto } from "./NavigationMenuDto";
import { PositionDto } from "./RoleSelectorDto";
import { DataNode } from "antd/es/tree";
import { b } from "@fullcalendar/core/internal-common";
import { positionsKeys } from "../../types/UserSelectionDialog.interface";
import { allowsRegulationKeys } from "../../constants/regulation/consts";

export type RegulationTreeDto = NavigationMenuItemDto & {
    children?: RegulationTreeItemDto[] | null;
    items?: NavigationMenuItemDto[] | null;
    name?: string | null;
    isRoot?: boolean;
}

export type RegulationTreeNode = {
    title: string;
    id: number;
    key: string;
    style?: any;
    className?: string;
    isLeaf: boolean;
    icon?: React.ReactNode;
    children?: RegulationTreeNode[];
    navigationItem?: NavigationMenuItemDto,
    disableCheckbox?: boolean;
    draggable?: boolean;
    isSelected?: boolean;
    includeNestedRoles?: boolean;
    orgchartId?: number;
    positions?: PositionDto[];
    selectedPositions?: number[];
    positionType?: positionsKeys | null;
    parentName?: string;
    claimType?: MenuItemClaimType;
    actions?: allowsRegulationKeys[] | null;
    parentActions?: allowsRegulationKeys[] | null;
}

export type RegulationTreeItemNode = DataNode & {
    id: number;
    draggable: boolean;
    title: string;
    parentName?: string;
    navigationItem?: NavigationMenuItemDto;
    actions?: allowsRegulationKeys[] | null;
    parentActions?: allowsRegulationKeys[] | null;
}
