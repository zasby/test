/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardDto } from './BoardDto';
import type { MenuItemDto } from './MenuItemDto';
import type { MenuItemWithChildrenDto } from './MenuItemWithChildrenDto';
import type { OrgchartDto } from './OrgchartDto';
import type { UserDto } from './UserDto';
import { CompanyModulesDto } from "./CompanyModulesDto";

export type InitialInfoDto = {
    identity?: UserDto;
    menuItems?: Array<MenuItemWithChildrenDto> | null;
    settingsTabs?: Array<MenuItemDto> | null;
    boards?: Array<BoardDto> | null;
    permissions?: Array<string> | null;
    orgcharts?: Array<OrgchartDto> | null;
    companyModules?: Array<CompanyModulesDto> | null
}
