/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { UserShortDto } from './UserShortDto';

export type Regulation2UserDto = {
    id?: number;
    regulationId?: number;
    dateCreated?: string;
    userId?: number;
    user?: UserShortDto;
}
