export type ConsoleLoggingTypes = "info" | "success" | "error" | "warning";

export class useConsoleLogging {
  static log(message: string, type: ConsoleLoggingTypes = "error") {
    // console.log(message);
  }
}
