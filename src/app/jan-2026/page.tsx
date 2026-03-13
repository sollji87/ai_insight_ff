import type { Metadata } from "next";

import ReportView from "@/components/ReportView";
import { getReport } from "@/lib/reportData";

const report = getReport("jan-2026");

export const metadata: Metadata = {
  title: report.title,
  description: report.description,
};

export default function JanuaryReportPage() {
  return <ReportView report={report} />;
}
