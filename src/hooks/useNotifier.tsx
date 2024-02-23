// import { notification } from "../helpers/notifyHelpers";
// import { Button } from "../components/uiKit";
import { ButtonProps } from "antd/lib/button";
import React from "react";
import { App } from "antd";
import { useTranslation } from "react-i18next";
import { NotificationType } from "../helpers/types";

function NotifierButton(text: string, onClick: () => void, props?: ButtonProps) {
  return (
    <button>{text}</button>
    // <Button
    //   {...props}
    //   onClick={(event) => {
    //     onClick();
    //   }}
    // >
    //   {text}
    // </Button>
  );
}

export const useNotifier = () => {
  const { notification } = App.useApp();
  const { t } = useTranslation();
  // notification.info({ message: "Good", btn: <Button>Click</Button> });
  const openNotification = (
    type: NotificationType,
    message: React.ReactNode,
    description?: React.ReactNode,
    timeout?: number,
    icon?: React.ReactNode,
    key?: string,
    button?: {
      text: string;
      onClick: () => void;
      props?: ButtonProps;
    }
  ) => {
    notification[type]({
      message: message,
      duration: timeout,
      placement: "bottomRight",
      description: description,
      key: key,
      btn: button != null ? NotifierButton(button.text, button.onClick, button.props) : undefined,
      icon,
      // description: ''
    });
  };

  const show = ({
    message,
    description,
    theme,
    timeout,
    icon,
    key,
    button,
  }: {
    message: React.ReactNode;
    description?: React.ReactNode;
    theme?: NotificationType;
    timeout?: number;
    key?: string;
    icon?: React.ReactNode;
    button?: {
      text: string;
      onClick: () => void;
    };
  }) => {
    openNotification(theme ?? "info", message, description, timeout, icon, key, button);
  };

  const showSuccessError = (successMessage: string, errorMessage: string, value: boolean, timeout?: number) => {
    value
      ? openNotification("success", successMessage, undefined, timeout)
      : openNotification("error", errorMessage, undefined, timeout);
  };

  const close = (key: string) => {
    notification.destroy(key);
  };

  const destroy = () => {
    notification.destroy();
  };

  return {
    show,
    showSuccessError,
    close,
    destroy,
  };
};
