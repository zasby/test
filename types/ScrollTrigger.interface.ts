import React from "react";

export interface IScrollTrigger {
  options?: IntersectionObserverInit;
  disabled?: boolean;
  hidden?: boolean;
  className?: string;
  marginTop?: boolean;
  debugMode?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onClick?: () => void;
  onIntersection: () => void;
}

export interface IScrollTriggerView {
  triggerRef: any;
  marginTop?: boolean;
  className?: string;
  disabled?: boolean;
  hidden?: boolean;
  debugMode?: boolean;
  fullWidth?: boolean;
  style?: React.CSSProperties;
  onClick: () => void;
}
