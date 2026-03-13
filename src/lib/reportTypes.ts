import { ReactNode } from "react";

export type ValueTone = "up" | "down" | "warn" | "neutral";
export type BadgeTone = "green" | "red" | "amber" | "blue";

export type ReportData = {
  key: "jan-2026" | "feb-2026";
  monthLabel: string;
  title: string;
  description: string;
  subtitle: string;
  totalRevenue: string;
  totalLabel: string;
  kpis: Array<{
    value: ReactNode;
    label: string;
    change: ReactNode;
    tone: ValueTone;
  }>;
  brandSectionTitle: string;
  brands: Array<{
    accentClass: string;
    name: string;
    revenue: string;
    unit: string;
    metrics: Array<{
      label: string;
      value: ReactNode;
      tone: ValueTone;
    }>;
  }>;
  risks: Array<{
    title: string;
    items: ReactNode[];
  }>;
  opportunities: Array<{
    title: string;
    items: ReactNode[];
  }>;
  table: {
    columns: string[];
    rows: Array<{
      label: ReactNode;
      rowClassName?: string;
      cells: Array<{
        content: ReactNode;
        tone?: ValueTone;
        badgeTone?: BadgeTone;
      }>;
    }>;
  };
  recommendations: Array<{
    title: string;
    items: ReactNode[];
  }>;
  ceoMessage: ReactNode;
  footerLabel: string;
};
