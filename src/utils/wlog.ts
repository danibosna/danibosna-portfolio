type LogType = "info" | "warn" | "error";

export function wLog(str: string, type: LogType = "error") {
  const fn = console[type] || console.error;
  fn(str);
}
