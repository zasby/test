/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { AccessLevels } from './AccessLevels';
import type { OrgchartDto } from './OrgchartDto';
import type { Project2UserDto } from './Project2UserDto';

export type ProjectDto = {
    id?: number;
    dateCreated?: string;
    name?: string | null;
    description?: string | null;
    orgchartId?: number;
    orgchart?: OrgchartDto;
    budget?: number;
    currency?: string | null;
    dateFrom?: string | null;
    dateTo?: string | null;
    timePlan?: string | null;
    timeFact?: string | null;
    users?: Array<Project2UserDto> | null;
    status?: number;
    statusName?: string | null;
    statusColorScheme?: string | null;
    allowedStatuses?: Array<number> | null;
    accessLevel?: AccessLevels;
}
