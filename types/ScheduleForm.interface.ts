import { CompanyScheduleDto } from "../api";

export type ScheduleFormTypes = {
  scheduleIsSameOnWeekdays: boolean;
  schedule: CompanyScheduleDto[];
};

export interface ICompanyEditFormScheduleForm {
  scheduleData: ScheduleFormTypes;
  readOnly: boolean;
  dayStart?: 0 | 1;
  handleScheduleSave(data: CompanyScheduleDto[]): Promise<ScheduleFormTypes | null>;
}

export interface ICompanyEditFormScheduleFormView {
  scheduleData: ScheduleFormTypes;
  sameDaysData: { timeDayStart: string; timeDayEnd: string };
  readOnly: boolean;
  dayStart?: 0 | 1;
  sortDaysInSchedule(data: CompanyScheduleDto[]): CompanyScheduleDto[];
  handleDayChange(day: CompanyScheduleDto): void;
  setSameDaysData({ timeDayStart, timeDayEnd }: { timeDayStart: string; timeDayEnd: string }): void;
  setScheduleData(data: ScheduleFormTypes): void;
  handleScheduleSave(): void;
}
