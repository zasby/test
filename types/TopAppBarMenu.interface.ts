import { UserDto } from "../api";

export interface ITopAppBarMenu {
  userData: UserDto | null;
  menuItems: any[];
  isMenuOpen: boolean;
  menuAnchorEl: any;

  handleMenuButtonClick(event: any): void;

  handleMenuClose(): void;
}
