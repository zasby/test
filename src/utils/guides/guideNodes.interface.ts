import React from "react";

export enum semanticTagKeys {
  p = "p",
  h2 = "h2",
  span = "span",
  img = "img",
  b = "b",

  pUpper = "pUpper",
}

export interface IAnchorNodes {
  id: number;
  anchor: React.MutableRefObject<any>;
}

export interface IBasicNode {
  className?: string;
}

export interface IImgNode extends IBasicNode {
  src?: string;
  alt?: string;
}

export interface ITextNode extends IBasicNode {}

export interface IGuideNodes {
  tag: semanticTagKeys;
  text?: string;
  isItalic?: boolean;
  boldPart?: string | string[];
  italicPart?: string;
  prefix?: IGuideNodes;
  child?: IGuideNodes[] | string;
  anchorId?: number;
  attrs?: ITextNode | IImgNode;
}
