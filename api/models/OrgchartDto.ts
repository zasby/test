/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

import type { StaticFileDto } from './StaticFileDto';

export type OrgchartDto = {
    id?: number;
    dateCreated?: string;
    name?: string | null;
    description?: string | null;
    resultName?: string | null;
    avatarText?: string[];
    colorHex?: string | null;
    companyId?: number;
    imageId?: number | null;
    image?: StaticFileDto;
    type?: string | null;
    isEmpty?: boolean | null;
    valuableFinalProduct?: string | null;
    file?: File;
}
export type OrgchartFromFileDto = {
    data: OrgchartDto;
    isSuccess?: boolean;
    error?: string;
}

export type OperationDto = {
    value: any;
    path: string;
    op: string;
    from?: string;
}