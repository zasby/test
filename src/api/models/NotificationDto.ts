/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { CompanyShortDto } from './CompanyShortDto';
import type { NotificationAdditionalParamsDto } from './NotificationAdditionalParamsDto';
import type { NotificationContentDto } from './NotificationContentDto';
import type { UserShortDto } from './UserShortDto';

export type NotificationDto = {
    id?: number;
    sender?: UserShortDto;
    contentDto?: NotificationContentDto;
    isRead?: boolean;
    additionalParams?: NotificationAdditionalParamsDto;
    company?: CompanyShortDto;
    dateCreated?: string;
    baseType?: number;
    type?: number;
}
