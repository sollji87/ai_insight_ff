"use client";

import { useRouter } from "next/navigation";

import { monthTabs, ReportData } from "@/lib/reportData";

type MonthSwitcherProps = {
  activeKey: ReportData["key"];
};

export default function MonthSwitcher({ activeKey }: MonthSwitcherProps) {
  const router = useRouter();

  return (
    <div className="month-switcher-wrap">
      <label className="month-switcher" aria-label="월 선택">
        <span className="month-switcher-label">월 선택</span>
        <select
          className="month-select"
          value={activeKey}
          onChange={(event) => {
            const selected = monthTabs.find((tab) => tab.key === event.target.value);
            if (selected) {
              router.push(selected.href);
            }
          }}
        >
          {monthTabs.map((tab) => (
            <option key={tab.key} value={tab.key}>
              {tab.label}
            </option>
          ))}
        </select>
      </label>
    </div>
  );
}
