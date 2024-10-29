import { CompanyDto, CompanyScheduleDto, TimeZoneDto } from "../api";
import { ScheduleFormTypes } from "./ScheduleForm.interface";

export interface ICompanyEditForm {
  companyId?: number;
  firstLaunch?: boolean;

  onSaveClick?: () => void;

  setLoading(value: boolean): void;
}


export interface ICompanyEditFormView {
  companyData: CompanyDto;
  updater: {
    update: () => Promise<void>;
    updatePartially: () => Promise<void>;
    setInitialState: (initialState: CompanyDto) => void;
    applyChanges: (changes: any) => void;
    currentState: CompanyDto | null;
    beforeState: CompanyDto | null;
    reset: () => void;
  };
  timezonesList: TimeZoneDto[];
  scheduleData: ScheduleFormTypes;
  firstLaunch?: boolean;
  canShowError: any;

  onSaveClick?: () => void;

  handleAvatarChange(id: number): void;

  handleAvatarDelete(): void;

  setCanShowError(value: any): void;

  handleScheduleSave(data: CompanyScheduleDto[]): Promise<ScheduleFormTypes | null>;
}
