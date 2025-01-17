import { tabKeysType } from "../../constants/regulation/consts";
import { SortOrder } from "antd/lib/table/interface";

export type RegulationFilter = {
  useContext?: boolean;
  withContentId?: number;
  withContextForUserId?: number;
  name?: string;
  currentStatusKey?: number;
  isStudied?: boolean;
  roleId?: number;
  sectionId?: number;
  forApproval?: boolean;
  createdByUserId?: number;
  hasDraftContent?: boolean;
  hasActiveContent?: boolean;
  toStudy?: boolean;
  tab?: tabKeysType;
  orderBy?: string
  order?: SortOrder;
};

