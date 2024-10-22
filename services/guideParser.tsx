import { IGuideNodes, semanticTagKeys } from "../utils/guides";
import React from "react";
import { IAnchorNodes } from "../utils/guides/guideNodes.interface";

enum highlightedPartKeys {
  italic = "italic",
  bold = "bold",
}

type highlightedPartType = highlightedPartKeys.italic | highlightedPartKeys.bold;

export class GuideParser {
  private nodes: IGuideNodes[] = [];
  private anchors?: IAnchorNodes[];

  constructor(nodes: IGuideNodes[], anchors?: IAnchorNodes[], scrollAnchorId?: number) {
    this.nodes = nodes;
    this.anchors = anchors;
  }

  public scrollTo(anchorId: number) {
    const currentAnchorRef = this.anchors?.find((item) => item.id === anchorId);
    currentAnchorRef &&
      setTimeout(() => {
        // @ts-ignore
        currentAnchorRef?.anchor?.current?.scrollIntoView({ block: "center", behavior: "smooth" });
      }, 200);
  }

  private generateStyles(node: IGuideNodes): React.CSSProperties {
    return { fontStyle: node?.isItalic ? "italic" : "normal" };
  }

  private handlerPrefixAndChild(node: IGuideNodes) {
    return (
      <>
        {node.prefix && this.handlerNode(node.prefix)}
        {node.child && typeof node.child === "object" ? node.child?.map((item) => this.handlerNode(item)) : node.child}
      </>
    );
  }

  private handlerBoldAndItalicPart(node: IGuideNodes): string | JSX.Element {
    if (node.boldPart && typeof node.boldPart === "string" && node.text?.includes(node.boldPart)) {
      const boldWordStart = node.text?.indexOf(node.boldPart);
      const boldWordEnd = boldWordStart + node.boldPart.length + 1;
      return (
        <>
          {node.text?.slice(0, boldWordStart)}
          <b>{node.text?.slice(boldWordStart, boldWordEnd)}</b>
          {node.text?.slice(boldWordEnd, node.text?.length)}
        </>
      );
    } else if (node.italicPart && node.text?.includes(node.italicPart)) {
      const italicWordStart = node.text?.indexOf(node.italicPart);
      const italicWordEnd = italicWordStart + node.italicPart.length + 1;
      return (
        <>
          {node.text?.slice(0, italicWordStart)}
          <i>{node.text?.slice(italicWordStart, italicWordEnd)}</i>
          {node.text?.slice(italicWordEnd, node.text?.length)}
        </>
      );
    } else return node.text ?? "";
  }

  private handlerRef(node: IGuideNodes) {
    return { ref: node.anchorId ? this.anchors?.find((item) => item.id == node.anchorId)?.anchor : undefined };
  }

  private handlerNode(node: IGuideNodes) {
    switch (node.tag) {
      case semanticTagKeys.h2:
        return (
          <h2 style={this.generateStyles(node)} {...this.handlerRef(node)} {...node.attrs}>
            {node.text}
          </h2>
        );
      case semanticTagKeys.p:
        return (
          <p style={this.generateStyles(node)} {...this.handlerRef(node)} {...node.attrs}>
            {this.handlerPrefixAndChild(node)}
            {this.handlerBoldAndItalicPart(node)}
          </p>
        );
      case semanticTagKeys.span:
        return (
          <span {...this.handlerRef(node)} {...node.attrs}>
            {node.text}
          </span>
        );
      case semanticTagKeys.pUpper:
        return (
          <p {...this.handlerRef(node)} {...node.attrs}>
            {this.handlerPrefixAndChild(node)}
            {node.text?.toUpperCase()}
          </p>
        );
      case semanticTagKeys.b:
        return (
          <b {...this.handlerRef(node)} {...node.attrs}>
            {this.handlerPrefixAndChild(node)}
            {node.text}
          </b>
        );
      case semanticTagKeys.img:
        return <img {...this.handlerRef(node)} {...node.attrs} />;
    }
  }

  public renderGuide(): React.ReactNode {
    return <>{this.nodes.map((node) => this.handlerNode(node))}</>;
  }
}
