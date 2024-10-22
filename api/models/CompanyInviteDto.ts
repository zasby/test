/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyInvite2RoleDto } from './CompanyInvite2RoleDto';

export enum AccessTypeEnum  {
    Full = "Full",
    Restricted = "Restricted",
    Blocked = "Blocked"
}

export type CompanyInviteDto = {
    id?: number;
    companyId?: number;
    email?: string | null;
    isReusable?: boolean;
    url?: string | null;
    accessLevel?: AccessTypeEnum;
    roles?: Array<CompanyInvite2RoleDto> | null;
    isUsed?: boolean;
    code?: string | null;
    isValid?: boolean;
}
