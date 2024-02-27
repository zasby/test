import { LexicalEditor } from "lexical";
import { $canShowPlaceholder } from "@lexical/text";

export const initialEditorContent =
  '{"root":{"children":[{"children":[],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}';

export const isContentEmpty = (editor: LexicalEditor) => {
  return editor.getEditorState().read(() => {
    return $canShowPlaceholder(editor.isComposing());
    // return $isRootTextContentEmpty(editor.isComposing());
  });
};
 
export const getLexicalTextContentLength = (value: string, textOnly: boolean = false) => {
  const getNodeLength = (node: any) => {
    if (!node) return 0;
    let sum = 0;

    if (node.text) {
      sum += node.text.length;
    }

    if (!textOnly && node.type != null) {
      if (node.type == "image" || node.type == "data") sum += 1;
    }

    if (node.children) {
      for (const child of node.children) {
        sum += getNodeLength(child);
      }
    }

    return sum;
  };
  try {
    const parsedContent: any = JSON.parse(value);
    return getNodeLength(parsedContent?.root);
  } catch (e) {
    return 0;
  }
};

export const getImagesCount = (data: string): number => {
  return data.split(`"type":"image"`).length - 1;
};

export const convertStringToLexicalValue = (str: string) => {
  if (!str.length) return initialEditorContent;
  if (str.includes('{"root":{')) {
    return str
  }
  return `{"root":{"children":[{"children":[{"detail":0,"format":0,"mode":"normal","style":"","text":"${str}","type":"text","version":1}],"direction":null,"format":"","indent":0,"type":"paragraph","version":1}],"direction":null,"format":"","indent":0,"type":"root","version":1}}`

}