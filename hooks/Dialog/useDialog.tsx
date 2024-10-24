import React, { ReactNode, useEffect, useState } from "react";
import clsx from "clsx";
import { IDialog } from "../../types";

export const useDialog = (props: IDialog) => {
  const [footer, setFooter] = useState<ReactNode | null>(null);
  // TODO: Добавить подтверждение закрытия (модалку)

  useEffect(() => {
    let dialogActions = null;

    React.Children.map(props.children, (child) => {
      if (React.isValidElement(child) && typeof child.type !== "string") {
        // @ts-ignore
        if (child.type.displayName === "DialogActions" || child.displayName == "DialogActions") {
          dialogActions =
            <div className={clsx("d-flex justify-end", {
            "pt-2": !props.isNewDesign,
          })}>
          {child.props.children}
          </div>;
        }
      }
    });
    setFooter(dialogActions);
  }, [props.children, props.open]);

  return {
    footer,
  }
}
