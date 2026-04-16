import { februaryReport } from "@/lib/reportDataFeb";
import { januaryReport } from "@/lib/reportDataJan";
import { marchReport } from "@/lib/reportDataMar";
import { ReportData } from "@/lib/reportTypes";

export const monthTabs = [
  { key: "jan-2026", label: "26.01", href: "/jan-2026" },
  { key: "feb-2026", label: "26.02", href: "/feb-2026" },
  { key: "mar-2026", label: "26.03", href: "/mar-2026" },
] as const;

export const reports: Record<ReportData["key"], ReportData> = {
  "jan-2026": januaryReport,
  "feb-2026": februaryReport,
  "mar-2026": marchReport,
};

export function getReport(reportKey: ReportData["key"]) {
  return reports[reportKey];
}

export type { ReportData } from "@/lib/reportTypes";
