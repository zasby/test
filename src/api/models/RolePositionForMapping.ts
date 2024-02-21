/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RolePositionForMapping = {
    name?: string | null;
    description?: string | null;
    childrenPositions?: Array<RolePositionForMapping> | null;
}
