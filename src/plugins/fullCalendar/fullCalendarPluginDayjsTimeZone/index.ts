import { createPlugin, PluginDef } from "@fullcalendar/core";
import { DayjsNamedTimeZone } from "./DayjsNamedTimeZone";

export default createPlugin({
  name: "fullCalendarPluginDayjsTimeZone",
  namedTimeZonedImpl: DayjsNamedTimeZone,
}) as PluginDef;
