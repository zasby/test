import { ReactionsStrategy } from "../strategies/ReactionsStrategy";
import { GeneralEmojisKeys } from "../constants/generalEmojis";
import { TooltipPlacement } from "antd/lib/tooltip";

export type EmojiPickerThemeType = "light" | "dark";

export interface IReactionChip {
  emoji: string;
  usersCount: number;
  userNames: string[];
}

export interface IReactions<T> {
  historyId: number;
  reactions: T[];
  strategy: ReactionsStrategy<T>;
  isShowFullEmoji?: boolean;
  isNewStyle?: boolean;
  isBorder?: boolean;
}

export interface IUserReactionCard {
  disabled: boolean;
  reactionChip: IReactionChip;
  onClickByReaction: (value: string) => void;
  isNewStyle?: boolean;
}

export interface IAddReactionButton {
  onClick: () => void;
  disabled: boolean;
  iconSize?: number;
  isNewStyle?: boolean;
  isBorder?: boolean;
}

export interface IUserReactionsList {
  disabled: boolean;
  reactions: IReactionChip[];
  onClickReaction: (value: string) => void;
  isNewStyle?: boolean;
}

export interface IUsersTooltip {
  users: string[];
  children: JSX.Element;
}

export interface IEmojiPicker {
  onReact: (emoji: string) => void;
  onClose: () => void;
}

export interface IReactionDropdown {
  isDisabled: boolean;
  onReact: (emoji: string) => void;
  onClose: () => void;
  hideGeneralEmoji?: boolean;
  placement?: TooltipPlacement;
  iconSize?: number;
  isShowFullEmoji?: boolean;
  isNewStyle?: boolean;
}

export interface ReactionChip {
  emoji: GeneralEmojisKeys;
  usersCount: number;
  userNames: string[];
}

export interface IListGeneralEmoji {
  isDisabled: boolean;
  onClose: () => void;
  onReact: (reaction: GeneralEmojisKeys) => void;
  onOpenPicker: () => void;
  onClosePicker: () => void;
  hideGeneralEmoji?: boolean;
  iconSize?: number;
  isNewStyle?: boolean;
}

export interface IGeneralEmoji {
  isDisabled: boolean;
  emoji: GeneralEmojisKeys;
  onReact: (reaction: GeneralEmojisKeys) => void;
}
