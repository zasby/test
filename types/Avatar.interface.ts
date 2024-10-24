import { AvatarProps } from "antd";

export type TAvatar = "user" | "company";

export interface IAvatar extends AvatarProps {
  type?: TAvatar;
  isOutlined?: boolean;
  color?: string | null;
  text?: string | null | (string | undefined | null)[];
  useFullText?: boolean;
  isNoFlex?: boolean;
}

export interface IAvatarView extends AvatarProps {
  isOutlined?: boolean;
  type?: TAvatar;
  color?: string | null;
  text?: string | null | (string | undefined | null)[];
  useFullText?: boolean;
  isNoFlex?: boolean;
}
