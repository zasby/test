/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { RolePositionForMapping } from './RolePositionForMapping';

export type RoleForMapping = {
    name?: string | null;
    description?: string | null;
    order?: number;
    awaitedResult?: string | null;
    childrenAreHorizontal?: boolean;
    colorHex?: string | null;
    positions?: Array<RolePositionForMapping> | null;
    children?: Array<RoleForMapping> | null;
}
