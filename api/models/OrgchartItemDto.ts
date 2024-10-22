/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import { MetricDto } from "./MetricDto";

export type OrgchartItemDto = {
    roleId?: number;
    childrenAreHorizontal?: boolean;
    children?: Array<OrgchartItemDto> | null;
    metrics?: MetricDto[];
}
