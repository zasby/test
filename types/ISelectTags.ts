import { TagDto } from "../api/models/TagDto";

export interface ISelectTags {
  tags: TagDto[];
  onChange: (data: any) => void;
  selectedTags: TagDto[];
  refetchTags: () => void;
}

export interface ISelectTagOption {
  id?: number;
  value: string;
  label: string;
  color?: string;
}
