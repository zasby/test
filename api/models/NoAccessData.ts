import { UserShortDto } from "./UserShortDto";

export interface NoAccessData {
  user: UserShortDto;
  title: string;
  link: string;
  isSection?: boolean;
}