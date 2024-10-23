import { IDropdownItem } from "../../../components/uiKit/navigation/dropdown/Dropdown";

export const bindCallbacks = (
  items: { id?: number; name?: string }[],
  callback?: (id?: number) => void
): IDropdownItem[] =>
  items.map((item) => ({
    key: item.id?.toString() ?? "",
    onClick: () => callback && callback(1),
    text: item.name,
  }));
