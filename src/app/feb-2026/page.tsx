import type { Metadata } from "next";

import ReportView from "@/components/ReportView";
import { getReport } from "@/lib/reportData";

const report = getReport("feb-2026");

export const metadata: Metadata = {
  title: report.title,
  description: report.description,
};

export default function FebruaryReportPage() {
  return <ReportView report={report} />;
}
