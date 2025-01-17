import { TagDto } from "../api/models/TagDto";

export interface ITagItem {
  tag: TagDto;
  onSelectTag: (tagId: number) => void;
  isSelected: boolean;
}
