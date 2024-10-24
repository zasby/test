import { ModalProps } from "antd";
import React from "react";

export type TDialogScrollStrategy = "dialogBody" | "documentBody" | undefined;

export interface IDialog extends ModalProps {
  open?: boolean;
  onClose?: (e: React.MouseEvent<HTMLElement>) => void;
  scrollStrategy?: TDialogScrollStrategy;
  isNewDesign?: boolean;
  closeConfirmationDialog?: {
    title?: string;
    body?: React.ReactNode;
    cancelButton?: string;
    closeButton?: string;
  };
}

export interface IDialogView extends ModalProps {
  warning?: boolean;
  scrollStrategy?: TDialogScrollStrategy;
  isNewDesign?: boolean;
}
