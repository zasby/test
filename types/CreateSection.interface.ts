import { NavigationMenuItemDto } from "../api/models/NavigationMenuDto";

export interface ICreateSection {
  section: NavigationMenuItemDto;
  addedRegulations: (list: NavigationMenuItemDto[]) => void;
  removeRegulation: (id: number) => void;
}
