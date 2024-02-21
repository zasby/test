/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { BoardColumnDto } from './BoardColumnDto';
import type { BoardStatusDto } from './BoardStatusDto';
import type { CompanyDto } from './CompanyDto';
import type { IssuePriorityDto } from './IssuePriorityDto';

export type BoardDto = {
    id?: number;
    companyId?: number;
    company?: CompanyDto;
    schemeResetTimes?: number;
    dateUpdated?: string | null;
    name?: string | null;
    description?: string | null;
    statuses?: Array<BoardStatusDto> | null;
    columns?: Array<BoardColumnDto> | null;
    priorities?: Array<IssuePriorityDto> | null;
}
