/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePositionDto } from './RolePositionDto';
import type { RoleShortDto } from './RoleShortDto';

export type RegulationUserSelectionRuleDto = {
    regulationId?: number;
    id?: number;
    roleId?: number | null;
    role?: RoleShortDto;
    orgchartId?: number | null;
    rolePositionId?: number | null;
    rolePosition?: RolePositionDto;
    rolePositionType?: number | null;
    isExcluded?: boolean;
}
