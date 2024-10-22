/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { NavigationMenuItemDto } from "./NavigationMenuDto";
import { allowsRegulationKeys } from "../../constants/consts";

export type RegulationTreeItemDto =  NavigationMenuItemDto & {
    id?: number;
    title?: string | null;
    type?: number | null;
    key: string;
    parentId?: number;
    isLeaf: boolean;
    children?: RegulationTreeItemDto[];
    isRoot?: boolean;
    withoutATopic?: boolean;
    actions?: allowsRegulationKeys[] | null;
}
