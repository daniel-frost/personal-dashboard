import { character } from "@/lib/mockData";
import { Toggle } from "./Toggle";

export function CharacterCard() {
  const pct = Math.round((character.xp / character.xpToNext) * 100);
  return (
    <section className="card relative pb-6">
      <div className="flex items-start justify-between gap-4">
        <div>
          <div className="label-mono text-crit/80" style={{ color: "var(--color-crit)" }}>
            Personal Dashboard
          </div>
          <div className="label-mono mt-1 text-ink-faint">
            Personal Dashboard · Week {character.weekNumber} · {character.year}
          </div>
        </div>
        <div className="flex items-center gap-2">
          <Toggle options={["Today", "Week"] as const} defaultValue="Today" />
          <Toggle options={["Flavor", "Data"] as const} defaultValue="Data" />
        </div>
      </div>

      <div className="mt-6 flex items-start justify-between gap-6">
        <div>
          <h1 className="text-3xl font-semibold tracking-tight">{character.name}</h1>
          <p className="text-ink-muted text-sm mt-1">— {character.recentAchievement}</p>
        </div>
        <div className="flex items-center gap-2 pt-2">
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
          <span>XP to Lv {character.level + 1}</span>
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
