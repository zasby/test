import { UserShortDto } from "./UserShortDto";
import { PagingOptions } from "./PagingOptions";

export type CreateTagDto = {
  name: string;
  color?: string;
}


export type TagDto = {
  id: number;
  name: string;
  createdByUserId: number;
  createdByUser: UserShortDto;
  deletedByUserId?: number;
  deletedByUser?: UserShortDto;
  dateCreated: string;
  dateUpdated: string;
  isDeleted: boolean;
  dateDeletedAt?: string;
  color?: string;
}

export type TagDtoPagingModel = {
  pagingOptions: PagingOptions;
  totalItems: number;
  totalPages: number;
  items: TagDto[];
}