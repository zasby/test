import { createPlugin, PluginDef } from "@fullcalendar/core";
import { toDayjs, toDayjsDuration } from "./convert";
import { formatWithCmdStr } from "./format";

export const plugin = createPlugin({
  name: "fullCalendarPluginDayjs",
  cmdFormatter: formatWithCmdStr,
}) as PluginDef;

export { toDayjs, toDayjsDuration };
