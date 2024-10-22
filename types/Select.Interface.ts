import React from "react";
import { SelectProps } from "antd";

export interface ISelectItem {
  id?: number;
  value: number | string;
  icon?: React.ReactNode;
  text?: string;
  disabled?: boolean;
  additionalProps?: ISelectItemAdditionalProps;
}

export interface ISelectItemAdditionalProps {
  [key: string]: any;
}

export interface ISelectView extends SelectProps {
  items?: ISelectItem[];
  readOnly?: boolean;
  variant?: "default" | "filled";
  fullWidth?: boolean;
  isSelectedDisabled?: boolean;
  isNewDesign?: boolean;
  isNoBorder?: boolean;
  isBigSize?: boolean;
}
