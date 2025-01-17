import { tagHexToVariables } from "../utils/hexToVariables";
import { useMemo } from "react";

export const useTagsColor = (tag: string, isSelected?: boolean) => {
  const tagColor = useMemo(() => {
    const color = tagHexToVariables(tag);
    return color;
  }, [tag]);

  const background = useMemo(() => {
    return isSelected ? `var(--color-tag-txt-${tagColor})` : `var(--color-tag-bg-${tagColor})`;
  }, [tagColor, isSelected]);

  const borderColor = useMemo(() => {
    return isSelected ? `var(--color-tag-txt-${tagColor})` : `var(--color-tag-brdr-${tagColor})`;
  }, [tagColor, isSelected]);

  const color = useMemo(() => {
    if (isSelected) {
      return "white"
    }
    return `var(--color-tag-txt-${tagColor})`;
  }, [tagColor, isSelected]);
  return {
    borderColor,
    background,
    color,
  }
};

