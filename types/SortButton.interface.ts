// import { IDropdownItem } from "../../uiKit/navigation/dropdown/Dropdown";

export interface IDropdownItem {
  key?: string | number;
  text?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  isDivider?: boolean;
  onClick?: (event?: any) => void;
}


export type valueType = { id: number; key: string | number; text: string };

export interface ISortMenu {
  value: valueType;
  // onChange : (newValue : valueType) => void;
  sortMenuValues: IDropdownItem[];
}
