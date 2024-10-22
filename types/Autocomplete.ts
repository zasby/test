import { SelectProps } from "antd";
import { AutocompleteModel, UserAvatarDto } from "../api";

export type TAutocompleteAsync =
  | "user"
  | "company"
  | "adminCompany"
  | "role"
  | "rolePosition"
  | "metricSource2User"
  | "metricSource"
  | "metric"
  | "plan";

export interface IAutocompleteAsync extends SelectProps {
  type: TAutocompleteAsync;
  requestOptions?: { [key: string]: any };
  searchParamKey?: string;
  additionalItems?: (AutocompleteModel & {
    avatar?: UserAvatarDto;
    color?: string;
    avatarText?: string | null | (string | undefined | null)[];
    disabled?: boolean;
  })[];
  idsToFilter?: number[] | string[];
  minOptionsCount?: number;
  isSelectedDisabled?: boolean;
  onRequestCallback?: (id: any) => void | undefined;
  queryUri?: string | null;
  withoutUserId?: number;
  isNewDesign?: boolean;
  isNoBorder?: boolean;
  isBigSize?: boolean;
}
