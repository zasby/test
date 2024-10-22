/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StaticFileDto } from './StaticFileDto';

export type OrgchartStatsDto = {
    id?: number;
    name?: string | null;
    avatarText?: string[];
    colorHex?: string | null;
    image?: StaticFileDto;
    inWorkIssuesCount?: number;
    pendingIssuesCount?: number;
}
