"use client";

import { useState } from "react";
import { Shell } from "@/components/Shell";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { selfHeader, stats, statsCompare } from "@/lib/mockData";
import { useMode } from "@/lib/mode";

const TABS = ["Stats", "Guilds", "Titles", "Journal"] as const;
type Tab = (typeof TABS)[number];

function StatDetailCard() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <section className="card">
      <div className="flex items-center justify-between mb-3">
        <span className="label-mono">
          {mode === "flavor" ? "Stat Sheet · Detail" : "Vitals · Detail"}
        </span>
        <span className="label-mono text-ink-faint">{t(statsCompare)}</span>
      </div>
      <ul className="flex flex-col">
        {stats.map((s, i) => {
          const up = s.delta >= 0;
          const isLast = i === stats.length - 1;
          const pct = Math.max(0, Math.min(100, s.value));
          return (
            <li
              key={s.key}
              className={`py-3 ${isLast ? "" : "border-b border-dashed border-rule"}`}
            >
              <div className="flex items-center gap-3">
                <div className="label-mono w-12 shrink-0">{t(s.label)}</div>
                <div
                  className="text-2xl shrink-0 w-12"
                  style={{ fontFamily: "var(--font-pixel)", fontWeight: 600 }}
                >
                  {s.value}
                </div>
                <span
                  className="font-mono text-[0.7rem] shrink-0 w-8"
                  style={{ color: up ? "var(--color-up)" : "var(--color-down)" }}
                >
                  {up ? "▲" : "▼"}
                  {Math.abs(s.delta)}
                </span>
                <div className="flex-1 h-2 rounded-full bg-parchment-200 overflow-hidden">
                  <div
                    className="h-full rounded-full"
                    style={{ width: `${pct}%`, background: s.color }}
                  />
                </div>
              </div>
              <div className="label-mono mt-1 text-ink-faint">{s.source}</div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function Placeholder({ title, body }: { title: string; body: string }) {
  return (
    <section className="card flex flex-col items-center justify-center py-12 text-center gap-2">
      <span className="label-mono text-ink-faint">{title}</span>
      <p className="text-sm text-ink-muted max-w-sm">{body}</p>
    </section>
  );
}

export default function ProfilePage() {
  const [tab, setTab] = useState<Tab>("Stats");
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <Shell active="profile">
      <section className="card">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="min-w-0">
            <div className="label-mono" style={{ color: "var(--color-crit)" }}>
              {t(selfHeader.title)}
            </div>
            <div className="text-sm text-ink-muted mt-1">{t(selfHeader.subtitle)}</div>
          </div>
          <div className="shrink-0">
            <SegmentedTabs options={TABS} value={tab} onChange={setTab} />
          </div>
        </div>
      </section>
      {tab === "Stats" && <StatDetailCard />}
      {tab === "Guilds" && (
        <Placeholder
          title="Guild progress"
          body="Per-guild levels and XP curves land alongside the XP math in Phase 2."
        />
      )}
      {tab === "Titles" && (
        <Placeholder
          title="Titles & achievements"
          body="Earned titles and the equipped badge show up once achievements are wired."
        />
      )}
      {tab === "Journal" && (
        <Placeholder
          title="Journal"
          body="Daily mood/energy/wins entries — manual entry coming in Phase 2."
        />
      )}
    </Shell>
  );
}
