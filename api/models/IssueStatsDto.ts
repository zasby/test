/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { UserShortDto } from "./UserShortDto";

export type IssueStatsDto = {
    user: UserShortDto;
    inWorkIssuesCount: number;
    pendingIssuesCount: number;
}