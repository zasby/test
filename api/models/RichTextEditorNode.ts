/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */

export type RichTextEditorNode = {
    id?: number | null;
    text?: string | null;
    type?: string | null;
    lineHeight?: string | null;
    url?: string | null;
    fontSize?: string | null;
    fontFamily?: string | null;
    bold?: string | null;
    italic?: string | null;
    underline?: string | null;
    align?: string | null;
    anchorId?: string | null;
    backgroundColor?: string | null;
    color?: string | null;
    src?: string | null;
    children?: Array<RichTextEditorNode> | null;
}
