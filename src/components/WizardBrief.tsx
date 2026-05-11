import { wizardBrief } from "@/lib/mockData";

function WizardSprite() {
  // Pixel-art wizard placeholder. Real sprite asset lands later.
  return (
    <svg
      viewBox="0 0 64 64"
      shapeRendering="crispEdges"
      className="h-16 w-16"
      aria-hidden
    >
      <rect width="64" height="64" fill="transparent" />
      {/* Hat */}
      <rect x="22" y="6" width="20" height="6" fill="#7a5fb0" />
      <rect x="18" y="12" width="28" height="4" fill="#7a5fb0" />
      <rect x="36" y="8" width="2" height="2" fill="#e8d49a" />
      {/* Face */}
      <rect x="22" y="16" width="20" height="10" fill="#f3d2a5" />
      <rect x="26" y="20" width="2" height="2" fill="#2c241b" />
      <rect x="36" y="20" width="2" height="2" fill="#2c241b" />
      <rect x="22" y="26" width="20" height="4" fill="#cdcdcd" /> {/* beard */}
      <rect x="20" y="28" width="24" height="4" fill="#cdcdcd" />
      {/* Robe */}
      <rect x="20" y="32" width="24" height="20" fill="#6b8e5a" />
      <rect x="14" y="34" width="6" height="14" fill="#6b8e5a" />
      <rect x="44" y="34" width="6" height="14" fill="#6b8e5a" />
      {/* Staff */}
      <rect x="50" y="18" width="2" height="36" fill="#7a5230" />
      <rect x="48" y="16" width="6" height="4" fill="#c9a24a" />
      {/* Boots */}
      <rect x="22" y="52" width="8" height="6" fill="#3b2a1d" />
      <rect x="34" y="52" width="8" height="6" fill="#3b2a1d" />
    </svg>
  );
}

export function WizardBrief() {
  return (
    <section className="card">
      <div className="flex gap-5">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="rounded-lg border border-rule bg-parchment-50 p-1">
            <WizardSprite />
          </div>
          <span className="label-mono text-[0.6rem]">The Wizard</span>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <span className="label-mono">The Wizard&apos;s Brief</span>
            <button className="label-mono inline-flex items-center gap-1 text-ink-muted hover:text-ink transition-colors">
              ↻ regenerate
            </button>
          </div>
          <p
            className="text-[1.05rem] leading-relaxed text-ink"
            style={{ fontFamily: "var(--font-hand)" }}
          >
            {wizardBrief.text}
          </p>
          <div className="rule-dashed mt-4 pt-3 flex items-center justify-between label-mono text-ink-faint">
            <span>Generated {wizardBrief.generatedAt} · regenerate</span>
          </div>
        </div>
      </div>
    </section>
  );
}
