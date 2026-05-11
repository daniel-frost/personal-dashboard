"use client";

import { useState } from "react";
import { character } from "@/lib/mockData";
import { useMode } from "@/lib/mode";
import { Toggle } from "./Toggle";

export function CharacterCard() {
  const { mode, setMode } = useMode();
  const [scope, setScope] = useState<"Today" | "Week">("Today");
  const pct = Math.round((character.xp / character.xpToNext) * 100);
  const t = <T,>(v: { flavor: T; data: T }) => (mode === "flavor" ? v.flavor : v.data);

  return (
    <section className="card relative">
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0 flex-1">
          <div className="label-mono" style={{ color: "var(--color-crit)" }}>
            {t(character.dashboardTitle)}
          </div>
          <div className="label-mono mt-1 text-ink-faint">
            {t(character.dashboardMeta)}
          </div>
        </div>
        <div className="flex flex-col sm:flex-row items-end sm:items-center gap-2 shrink-0">
          <Toggle
            options={["Today", "Week"] as const}
            value={scope}
            onChange={setScope}
          />
          <Toggle
            options={["Flavor", "Data"] as const}
            value={mode === "flavor" ? "Flavor" : "Data"}
            onChange={(v) => setMode(v === "Flavor" ? "flavor" : "data")}
          />
        </div>
      </div>

      <div className="rule-dashed mt-4 pt-4 flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-tight">
            {t(character.name)}
          </h1>
          <p className="text-ink-muted text-sm mt-1">— {t(character.subtitle)}</p>
        </div>
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <span className="pill">
            <span className="text-ink-muted">Lv</span>
            <span className="ml-1 font-semibold">{character.level}</span>
          </span>
          <span className="pill bg-gold-soft/40">
            <span style={{ color: "var(--color-gold)" }}>✦</span>
            <span className="font-semibold">{character.gold.toLocaleString()}</span>
          </span>
          <span className="pill bg-gem-soft/40">
            <span style={{ color: "var(--color-gem)" }}>◆</span>
            <span className="font-semibold">{character.gems}</span>
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between label-mono">
          <span>{t(character.xpLabel)}</span>
          <span className="text-ink">
            {character.xp.toLocaleString()} / {character.xpToNext.toLocaleString()}
          </span>
        </div>
        <div className="mt-2 h-2 rounded-full bg-parchment-200 overflow-hidden">
          <div
            className="h-full rounded-full"
            style={{ width: `${pct}%`, background: "var(--color-gold)" }}
          />
        </div>
      </div>
    </section>
  );
}
