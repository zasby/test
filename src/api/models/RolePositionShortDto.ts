/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RoleShortDto } from './RoleShortDto';

export type RolePositionShortDto = {
    id?: number;
    name?: string | null;
    description?: string | null;
    roleId?: number;
    role?: RoleShortDto;
}
