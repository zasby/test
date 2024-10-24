import { invertColor } from "../../helpers/colorFunctions";
import React from "react";
import { IAvatarView, TAvatar } from "../../types";
import { TeamOutlined, UserOutlined } from "@ant-design/icons";

export const useAvatar = ( { text, useFullText }: IAvatarView) => {
  const getAvatarIconByType = (
    type: TAvatar | undefined,
    text?: string | null | (string | undefined | null)[]
  ): React.ReactNode => {
    if (typeof text === "string" && (text ?? "").trim().length > 0) return undefined;
    if (Array.isArray(text) && text.filter((c) => c != null && c.trim().length > 0).length > 0) return undefined;
    if (type == "user") return <UserOutlined />;
    // if (type == "user") return <Icon component={() => <UserOutlined />} />;
    if (type == "company") return <TeamOutlined />;
    return <UserOutlined />;
  };

  const getAvatarColor = (col: string | undefined): string | undefined => {
    if (col != null && typeof col === "string" && col.length == 7) return invertColor(col);
    return undefined;
  };

  const getAvatarText = (t: string | null | undefined | (string | undefined | null)[], c: React.ReactNode) => {
    // (text ?? "").trim().length > 0 ? (useFullText == true ? text : text?.charAt(0)) : children
    if (typeof text === "string" && (text ?? "").trim().length > 0)
      return useFullText == true ? text?.trim() : [...(text?.trim() ?? "")]?.[0];
    // return useFullText == true ? text?.trim() : text?.trim()?.charAt(0);
    if (Array.isArray(text) && text.filter((c) => c != null && c.trim().length > 0).length > 0)
      return useFullText
        ? text.join(" ")
        : text
          .filter((c) => c != null && c.trim().length > 0)
          .map((t) => [...(t?.trim() ?? "")]?.[0])
          .join("");
    return c;
  };

  return {
    getAvatarColor,
    getAvatarText,
    getAvatarIconByType,
  }
}
