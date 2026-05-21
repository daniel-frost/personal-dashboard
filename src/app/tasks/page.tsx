"use client";

import { useState } from "react";
import { Shell } from "@/components/Shell";
import { SegmentedTabs } from "@/components/SegmentedTabs";
import { QuestList } from "@/components/QuestList";
import { questHallHeader, tasks } from "@/lib/mockData";

const TABS = ["Active", "Epic", "Available"] as const;
type Tab = (typeof TABS)[number];

function EmptyState({ label }: { label: string }) {
  return (
    <div className="card flex flex-col items-center justify-center py-12 text-center gap-2">
      <span className="label-mono text-ink-faint">No {label.toLowerCase()} yet</span>
      <p className="text-sm text-ink-muted max-w-xs">
        Manual entry lands in Phase 2 — once goals + DB are wired, this list fills
        in from your active goals.
      </p>
    </div>
  );
}

export default function TasksPage() {
  const [tab, setTab] = useState<Tab>("Active");

  const equipped = tasks.length;

  return (
    <Shell active="tasks">
      <section className="card">
        <div className="flex items-start justify-between gap-3 flex-wrap">
          <div className="min-w-0">
            <div className="label-mono" style={{ color: "var(--color-crit)" }}>
              {questHallHeader.title}
            </div>
            <div className="text-sm text-ink-muted mt-1">
              {questHallHeader.subtitle}
            </div>
          </div>
          <div className="shrink-0">
            <SegmentedTabs options={TABS} value={tab} onChange={setTab} />
          </div>
        </div>
      </section>

      {tab === "Active" && (
        <section className="card">
          <div className="flex items-center justify-between mb-3">
            <span className="label-mono">Equipped Quests</span>
            <span className="label-mono text-ink-faint">
              {equipped} / 5 equipped · loadout full
            </span>
          </div>
          <QuestList />
        </section>
      )}

      {tab === "Epic" && <EmptyState label="Epic quests" />}
      {tab === "Available" && <EmptyState label="Available bounties" />}
    </Shell>
  );
}
