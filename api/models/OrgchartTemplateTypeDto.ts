/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export enum OrgchartTemplateTypeEnum {
    ORGCHART_DEFAULT_TYPE = 'd',
    ORGCHART_CLASSIC_TYPE = 'c',
    ORGCHART_SIMPLIFIED_TYPE = 's'
}

export type OrgchartTemplateTypeDto = {
    type: OrgchartTemplateTypeEnum;
    title: string;
}
