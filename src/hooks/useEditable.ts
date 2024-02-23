import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useLayoutEffect, useState } from "react";

export function useEditable() {
  const [editor] = useLexicalComposerContext();
  const [editable, setEditable] = useState<boolean>(() => editor.isEditable());

  useLayoutEffect(() => {
    const currentValue = editor.isEditable();

    if (editable !== currentValue) {
      setEditable(currentValue);
    }
    return editor.registerEditableListener(setEditable);
  }, []);

  return editable;
}
