"use client";

import { vitals, vitalsCompare, vitalsHeader } from "@/lib/mockData";
import { useMode } from "@/lib/mode";

export function Vitals() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) => (mode === "flavor" ? v.flavor : v.data);
  return (
    <section className="card">
      <div className="flex items-center justify-between mb-4">
        <span className="label-mono">{t(vitalsHeader)}</span>
        <span className="label-mono text-ink-faint">{t(vitalsCompare)}</span>
      </div>
      <div className="grid grid-cols-3 sm:grid-cols-3 lg:grid-cols-6 gap-x-2 gap-y-4 sm:gap-4">
        {vitals.map((v) => {
          const up = v.delta >= 0;
          return (
            <div key={v.key} className="flex flex-col items-center text-center min-w-0">
              <div
                className="label-mono leading-tight"
                style={{ letterSpacing: "0.08em", overflowWrap: "anywhere" }}
              >
                {t(v.label)}
              </div>
              <div
                className="text-4xl mt-1"
                style={{
                  fontFamily: "var(--font-pixel)",
                  fontWeight: 600,
                  letterSpacing: "0.02em",
                }}
              >
                {v.value}
              </div>
              <div
                className="mt-1 font-mono text-[0.7rem]"
                style={{ color: up ? "var(--color-up)" : "var(--color-down)" }}
              >
                {up ? "▲" : "▼"}
                {Math.abs(v.delta)}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
