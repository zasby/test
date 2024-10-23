import { LexicalEditor } from "lexical";

export interface IFormatSelect {
  blockType?: BlockFormatType | null;
  alignType?: AlignFormatType;
  insertType?: InsertFormatType;
  listType?: ListFormatType | null;
  textFormatType?: TextFormatType;
  editor: LexicalEditor;
  disabled?: boolean;
  formatType: SelectFormatType;
  isSimplifiedToolbar?: boolean;
  isUnderline?: boolean;
  isCode?: boolean;
  isStrikethrough?: boolean;
  isSubscript?: boolean;
  isSuperscript?: boolean;
  onClearFormatting?: () => void;
  onOpenVideoDialog?: () => void;
  isNewStyle?: boolean;
}

export enum SelectFormatType {
  BLOCK = "block",
  ALIGN = "align",
  INSERT = "insert",
  TEXT_FORMAT = "text_format",
  LIST = "list",
}

export enum InsertFormatType {
  VIDEO = "video",
  HR = "hr",
  CODE = "code",
}

export enum TextFormatType {
  UNDERLINE = "underline",
  SUPERSCRIPT = "superscript",
  SUBSCRIPT = "subscript",
  STRIKETHROUGH = "strikethrough",
  CLEAR = "clear",
}

export enum ListFormatType {
  NUMBER = "number",
  BULLET = "bullet",
  CHECK = "check",
  QUOTE = "quote",
}

export enum BlockFormatType {
  PARAGRAPH = "paragraph",
  H1 = "h1",
  H2 = "h2",
  H3 = "h3",
}

export enum AlignFormatType {
  LEFT = "left",
  RIGHT = "right",
  CENTER = "center",
  JUSTIFY = "justify",
  OUTDENT = "outdent",
  INDENT = "indent",
}
