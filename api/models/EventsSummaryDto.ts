import { CalendarEventDto } from "./CalendarEventDto";
import { CalendarScheduleWithStatisticDto } from "./CalendarScheduleWithStatisticDto";

export type EventsSummaryDto = {
  events: CalendarEventDto[];
  schedules: CalendarScheduleWithStatisticDto[];
  statistic: CalendarScheduleWithStatisticDto;
}
