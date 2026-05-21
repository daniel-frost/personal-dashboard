import { character } from "@/lib/mockData";

function seasonOf(month: number): string {
  if (month >= 2 && month <= 4) return "Spring";
  if (month >= 5 && month <= 7) return "Summer";
  if (month >= 8 && month <= 10) return "Fall";
  return "Winter";
}

function formatToday(d: Date): string {
  const season = seasonOf(d.getMonth());
  const month = d.toLocaleString("en-US", { month: "long" });
  return `${season}, Year ${d.getFullYear()}, ${month} ${d.getDate()}`;
}

export function CharacterCard() {
  const pct = Math.round((character.xp / character.xpToNext) * 100);
  const meta = formatToday(new Date());

  return (
    <section className="card relative">
      <div className="min-w-0">
        <div className="label-mono text-ink-faint">{meta}</div>
      </div>

      <div className="mt-4 flex items-start justify-between gap-4 flex-wrap">
        <div className="min-w-0">
          <h1 className="text-3xl font-semibold tracking-tight">
            {character.name}
          </h1>
          <p className="text-ink-muted text-sm mt-1">{character.subtitle}</p>
        </div>
        <div className="flex items-center gap-2 pt-1 flex-wrap">
          <span className="pill">
            <span className="text-ink-muted">Lv</span>
            <span className="ml-1 font-semibold">{character.level}</span>
          </span>
          <span
            className="pill"
            style={{ background: "var(--color-emerald-soft)" }}
          >
            <span style={{ color: "var(--color-emerald)" }}>◆</span>
            <span className="font-semibold">{character.emeralds}</span>
          </span>
        </div>
      </div>

      <div className="mt-5">
        <div className="flex items-center justify-between label-mono">
          <span>{character.xpLabel}</span>
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
