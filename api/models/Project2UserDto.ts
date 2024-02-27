/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserShortDto } from './UserShortDto';

export type Project2UserDto = {
    id?: number;
    projectId?: number;
    userId?: number;
    user?: UserShortDto;
    isManager?: boolean;
}
