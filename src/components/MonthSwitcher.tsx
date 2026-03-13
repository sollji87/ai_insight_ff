import Link from "next/link";

import { monthTabs, ReportData } from "@/lib/reportData";

type MonthSwitcherProps = {
  activeKey: ReportData["key"];
};

export default function MonthSwitcher({ activeKey }: MonthSwitcherProps) {
  return (
    <div className="month-switcher-wrap">
      <div className="month-switcher" aria-label="월 선택">
        {monthTabs.map((tab) => {
          const isActive = tab.key === activeKey;

          return (
            <Link
              key={tab.key}
              href={tab.href}
              className={`month-tab${isActive ? " active" : ""}`}
              aria-current={isActive ? "page" : undefined}
            >
              {isActive ? <span className="tab-check">✓</span> : null}
              {tab.label}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
