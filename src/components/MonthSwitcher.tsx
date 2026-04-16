"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";

import { monthTabs, ReportData } from "@/lib/reportData";

type MonthSwitcherProps = {
  activeKey: ReportData["key"];
};

export default function MonthSwitcher({ activeKey }: MonthSwitcherProps) {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);
  const activeTab = monthTabs.find((tab) => tab.key === activeKey) ?? monthTabs[0];

  useEffect(() => {
    function handlePointerDown(event: MouseEvent) {
      if (!wrapRef.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    }

    window.addEventListener("mousedown", handlePointerDown);
    return () => {
      window.removeEventListener("mousedown", handlePointerDown);
    };
  }, []);

  return (
    <div className="month-switcher-wrap" ref={wrapRef}>
      <span className="month-switcher-label">월 선택</span>
      <button
        type="button"
        className={`month-select ${open ? "is-open" : ""}`}
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label="월 선택"
        onClick={() => setOpen((prev) => !prev)}
      >
        {activeTab.label}
      </button>
      {open ? (
        <div className="month-dropdown" role="listbox" aria-label="월 목록">
          {monthTabs.map((tab) => {
            const isActive = tab.key === activeKey;

            return (
              <button
                key={tab.key}
                type="button"
                role="option"
                aria-selected={isActive}
                className={`month-option ${isActive ? "active" : ""}`}
                onClick={() => {
                  setOpen(false);
                  router.push(tab.href);
                }}
              >
                {isActive ? <span className="month-option-check">✓</span> : null}
                {tab.label}
              </button>
            );
          })}
        </div>
      ) : null}
    </div>
  );
}
