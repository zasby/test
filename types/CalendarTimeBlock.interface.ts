import { CalendarEventTimeBlockDto } from "../api/models/CalendarEventTimeBlockDto";

export interface ICalendarTimeBlock {
  item: CalendarEventTimeBlockDto;
  onClose(): void;
  handleSaveTimeBlock?: (data: CalendarEventTimeBlockDto) => Promise<void>;
  popupItems: any;
  isLoadingTimeBlock?: boolean;
}
