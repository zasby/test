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
    colorHex?: string | null;
    companyId?: number;
    imageId?: number | null;
    image?: StaticFileDto;
    type?: string | null;
    isEmpty?: boolean | null;
    valuableFinalProduct?: string | null;
}
