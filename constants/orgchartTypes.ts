import { OrgchartTemplateTypeDto, OrgchartTemplateTypeEnum } from "../api/models/OrgchartTemplateTypeDto";

export const ORGCHART_DEFAULT_TYPE = 'd' as OrgchartTemplateTypeEnum;
export const ORGCHART_CLASSIC_TYPE = 'c' as OrgchartTemplateTypeEnum;
export const ORGCHART_SIMPLIFIED_TYPE ='s'  as OrgchartTemplateTypeEnum

export const ORGCHART_TYPES: OrgchartTemplateTypeDto[] = [
  {
    type: ORGCHART_DEFAULT_TYPE,
    title: 'parse:orgchart_type.default',
  },
  {
    type: ORGCHART_CLASSIC_TYPE,
    title: 'parse:orgchart_type.classic',
  },
  {
    type: ORGCHART_SIMPLIFIED_TYPE,
    title: 'parse:orgchart_type.simplified',
  }
]