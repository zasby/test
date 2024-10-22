import { ExecutorTypes } from "../../components/pages/driver/types/DriverTypes";
import { AutocompleteModel, CompanyInviteDto } from "../api";

export interface IEmployeeInviteDialogView {
  open: boolean;
  inviteData: CompanyInviteDto;
  isAllInvitesDialogOpened: boolean;
  isShowInviteDialogOpened: boolean;
  allRoles: (AutocompleteModel & { orgchartId: number })[];
  isFunctionsSelectOpen: any;
  selectedOrgchartIds: number[];
  fullAccessUsersCount: number;
  fullAccessUsersLimit: string | number;
  onOrgchartIdsChange: (value: number[]) => void;
  handleApplyFunctionsButtonClick: (type: string, value: boolean) => void;
  setIsFunctionsSelectOpen: (type: string, value: boolean) => void;

  handleClose(): void;

  handleRolesChange(roleIds: string[], type: ExecutorTypes): void;

  setInviteData(data: CompanyInviteDto): void;

  handleInviteCreate(): void;

  setIsAllInvitesDialogOpened(value: boolean): void;

  handleAllInvitesDialogClose(): void;

  handleAllInvitesDialogOpen(): void;

  handleShowInviteDialogCLose(): void;

  isStringEmail(str: string): boolean;
}
