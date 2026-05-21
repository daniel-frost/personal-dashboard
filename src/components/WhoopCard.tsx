import { whoop } from "@/lib/mockData";

const STRAIN_MAX = 21;

export function WhoopCard() {
  const strainPct = Math.max(
    0,
    Math.min(100, (whoop.strain / STRAIN_MAX) * 100),
  );

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-2">
        <span className="label-mono">vitals</span>
      </div>
      <div className="flex items-baseline gap-2 flex-wrap">
        <span
          className="text-3xl font-semibold tracking-tight"
          style={{ color: "var(--color-reading)" }}
        >
          {whoop.recovery}
        </span>
        <span className="text-ink-faint text-sm">HP</span>
        <span className="text-ink-faint text-sm">/</span>
        <span
          className="text-3xl font-semibold tracking-tight"
          style={{ color: "var(--color-gem)" }}
        >
          {whoop.strain}
        </span>
        <span className="text-ink-faint text-sm">MP</span>
      </div>
      <div className="mt-3 h-2 rounded-full bg-parchment-200 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${whoop.recovery}%`,
            background: "var(--color-reading)",
          }}
        />
      </div>
      <div className="mt-1.5 h-2 rounded-full bg-parchment-200 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${strainPct}%`,
            background: "var(--color-gem)",
          }}
        />
      </div>
      <div className="label-mono mt-3 text-ink-muted">
        sleep {whoop.sleepHours}h · hrv {whoop.hrv}ms · rhr {whoop.restingHr}
      </div>
    </section>
  );
}
