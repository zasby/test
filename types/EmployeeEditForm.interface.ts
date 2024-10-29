import { UserDto } from "../api";

export interface IEmployeeEditForm {
  userId?: number;
  firstLaunch?: boolean;
  onSaveClick?: () => void;
}

export interface IEmployeeEditFormView {
  userId: number;
  currentUserId: number;
  employeeData: UserDto | null;
  checkEmailCode: string;
  firstLaunch: boolean;
  updater: any;
  canShowError: any;
  codeSendTimer: number;
  isUserTypeEditAvailable: boolean;
  isAccessTypeEditAvailable: boolean;
  onSaveClick?: () => void;

  handleAvatarChange(id: number): void;

  handleAvatarDelete(): void;

  handleConfirmEmail(): void;

  sendConfirmationCodeAgain(): void;

  setCheckEmailCode(value: string): void;

  setCanShowError(value: any): void;
}
