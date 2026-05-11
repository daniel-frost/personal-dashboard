"use client";

import { Shell } from "@/components/Shell";
import {
  activeBoss,
  bills,
  coinHeader,
  duesHeader,
  remainingFoes,
  vault,
} from "@/lib/mockData";
import { useMode } from "@/lib/mode";

function PlasticWraithSprite() {
  // Pixel-art "Plastic Wraith" — a ghost-y blob in coral red.
  return (
    <svg viewBox="0 0 32 32" shapeRendering="crispEdges" className="h-20 w-20" aria-hidden>
      <rect width="32" height="32" fill="#fff" />
      {/* body */}
      <rect x="8" y="6" width="16" height="2" fill="#c97a6a" />
      <rect x="6" y="8" width="20" height="2" fill="#c97a6a" />
      <rect x="5" y="10" width="22" height="14" fill="#c97a6a" />
      {/* eye whites + pupil */}
      <rect x="11" y="12" width="6" height="6" fill="#faf6ea" />
      <rect x="13" y="14" width="2" height="3" fill="#2c241b" />
      {/* shadow under eye */}
      <rect x="11" y="18" width="6" height="1" fill="#a96156" />
      {/* zigzag bottom */}
      <rect x="5" y="24" width="3" height="3" fill="#c97a6a" />
      <rect x="11" y="24" width="3" height="3" fill="#c97a6a" />
      <rect x="17" y="24" width="3" height="3" fill="#c97a6a" />
      <rect x="23" y="24" width="3" height="3" fill="#c97a6a" />
    </svg>
  );
}

function HpBar({
  hp,
  max,
  color = "var(--color-reading)",
}: {
  hp: number;
  max: number;
  color?: string;
}) {
  const pct = Math.max(0, Math.min(100, Math.round((hp / max) * 100)));
  return (
    <div className="h-2 rounded-full bg-parchment-200 overflow-hidden">
      <div className="h-full rounded-full" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function BossCard() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <section className="card">
      <div className="flex items-center justify-between gap-2 mb-3">
        <span className="label-mono">{mode === "flavor" ? "Active Boss" : "Top debt"}</span>
        <span
          className="pill-tag"
          style={{ background: "var(--color-reading-soft)", color: "var(--color-reading)" }}
        >
          {t(activeBoss.rank)}
        </span>
      </div>
      <div className="flex gap-4">
        <div className="rounded-lg border border-rule bg-white p-1 shrink-0">
          <PlasticWraithSprite />
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-baseline justify-between gap-2 flex-wrap">
            <h2 className="text-xl font-semibold tracking-tight">{t(activeBoss.name)}</h2>
            <span
              className="font-mono text-sm"
              style={{ color: "var(--color-reading)" }}
            >
              ${activeBoss.hp.toLocaleString()}{" "}
              <span className="text-ink-faint">/ ${activeBoss.maxHp.toLocaleString()}</span>
            </span>
          </div>
          <div className="mt-2">
            <HpBar hp={activeBoss.hp} max={activeBoss.maxHp} />
          </div>
          <div className="mt-4">
            <div className="label-mono mb-2">
              {mode === "flavor" ? "Recent Strikes" : "Recent payments"}
            </div>
            <div className="flex flex-wrap gap-1.5">
              {activeBoss.recentStrikes.map((s, i) => (
                <span
                  key={i}
                  className="pill-tag"
                  style={{
                    background: s.crit ? "var(--color-crit-soft)" : "#faf6ea",
                    color: s.crit ? "var(--color-crit)" : "var(--color-ink-muted)",
                    border: "1px solid var(--color-rule)",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  -${s.amount}
                  {s.crit && <span className="ml-1">CRIT</span>}
                </span>
              ))}
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <button
              type="button"
              className="pill-tag border border-rule hover:bg-parchment-200 transition-colors"
              style={{ fontFamily: "var(--font-mono)" }}
            >
              × Strike · ${activeBoss.minPayment}
            </button>
            <button
              type="button"
              className="pill-tag transition-colors"
              style={{
                background: "var(--color-crit-soft)",
                color: "var(--color-crit)",
                border: "1px solid var(--color-crit)",
                fontFamily: "var(--font-mono)",
              }}
            >
              ✦ Strike +${activeBoss.recommendedStrike} CRIT
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

function FoesCard() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <section className="card">
      <div className="label-mono mb-3">
        {mode === "flavor" ? "Remaining Foes" : "Other debts"}
      </div>
      <ul className="flex flex-col">
        {remainingFoes.map((foe, i) => {
          const isLast = i === remainingFoes.length - 1;
          return (
            <li
              key={foe.id}
              className={`py-3 ${isLast ? "" : "border-b border-dashed border-rule"}`}
            >
              <div className="flex items-baseline justify-between gap-2">
                <span className="text-ink">{t(foe.name)}</span>
                <span className="font-mono text-sm text-ink">
                  ${foe.hp.toLocaleString()}
                </span>
              </div>
              <div className="mt-2">
                <HpBar hp={foe.hp} max={foe.maxHp} />
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function DuesCard() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <section className="card">
      <div className="flex items-center justify-between mb-3">
        <span className="label-mono">{t(duesHeader.title)}</span>
        <span className="label-mono text-ink">
          ${duesHeader.available.toLocaleString()} avail.
        </span>
      </div>
      <ul className="flex flex-col">
        {bills.map((bill, i) => {
          const isLast = i === bills.length - 1;
          return (
            <li
              key={bill.id}
              className={`flex items-start justify-between gap-3 py-3 ${
                isLast ? "" : "border-b border-dashed border-rule"
              }`}
            >
              <div className="min-w-0">
                <div className="text-ink">{t(bill.name)}</div>
                <div className="label-mono mt-0.5 text-ink-faint">
                  {t(bill.status)}
                </div>
              </div>
              <span className="font-mono text-sm text-ink shrink-0">
                ${bill.amount.toLocaleString()}
              </span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

function VaultCard() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  const pct = Math.round((vault.current / vault.goal) * 100);
  return (
    <section className="card flex flex-col" style={{ background: "var(--color-parchment-100)" }}>
      <div className="label-mono mb-2">{t(vault.title)}</div>
      <div className="text-3xl font-semibold tracking-tight">
        ${vault.current.toLocaleString()}
      </div>
      <div className="label-mono mt-1 text-ink-faint">
        of ${vault.goal.toLocaleString()} · ~{vault.weeksRemaining}w
      </div>
      <div className="mt-3 h-2 rounded-full bg-parchment-200 overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{ width: `${pct}%`, background: "var(--color-gem)" }}
        />
      </div>
      <p
        className="mt-4 text-[1rem] leading-relaxed text-ink"
        style={{ fontFamily: "var(--font-hand)" }}
      >
        “{t(vault.quote)}”
      </p>
    </section>
  );
}

export default function FinancePage() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <Shell active="finance">
      <header>
        <div className="label-mono" style={{ color: "var(--color-crit)" }}>
          {t(coinHeader.title)}
        </div>
        <div className="text-sm text-ink-muted mt-1">{t(coinHeader.subtitle)}</div>
      </header>
      <BossCard />
      <FoesCard />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-5">
        <DuesCard />
        <VaultCard />
      </div>
    </Shell>
  );
}
