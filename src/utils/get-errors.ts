import { type ZodIssue } from "zod";

export default function getErrorMessage(fieldName: string, alerts: ZodIssue[]) {
  const alertIssue = alerts.find((alert) => alert.path[0] === fieldName);
  return alertIssue?.message;
}
