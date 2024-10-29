import { CalendarEventDto } from "./CalendarEventDto";
import { CalendarScheduleWithStatisticDto } from "./CalendarScheduleWithStatisticDto";
import { StatisticDto } from "./StatisticDto";

export type EventsSummaryDto = {
  events: CalendarEventDto[];
  schedules: CalendarScheduleWithStatisticDto[];
  statistic: CalendarScheduleWithStatisticDto;
}
