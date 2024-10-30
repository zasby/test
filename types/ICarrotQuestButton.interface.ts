import { IButton } from "../../components/uiKit/general/button/Button";

export interface ICarrotQuestButton {
  buttonProps?: IButton;
}

export interface ICarrotQuestButtonView {
  buttonProps?: IButton;

  onClick: () => void;
}
