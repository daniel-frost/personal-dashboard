import { wizardBrief } from "@/lib/mockData";

function WizardSprite() {
  return (
    <svg viewBox="0 0 64 64" shapeRendering="crispEdges" className="h-16 w-16" aria-hidden>
      <rect x="22" y="6" width="20" height="6" fill="#7a5fb0" />
      <rect x="18" y="12" width="28" height="4" fill="#7a5fb0" />
      <rect x="36" y="8" width="2" height="2" fill="#e8d49a" />
      <rect x="22" y="16" width="20" height="10" fill="#f3d2a5" />
      <rect x="26" y="20" width="2" height="2" fill="#2c241b" />
      <rect x="36" y="20" width="2" height="2" fill="#2c241b" />
      <rect x="22" y="26" width="20" height="4" fill="#cdcdcd" />
      <rect x="20" y="28" width="24" height="4" fill="#cdcdcd" />
      <rect x="20" y="32" width="24" height="20" fill="#6b8e5a" />
      <rect x="14" y="34" width="6" height="14" fill="#6b8e5a" />
      <rect x="44" y="34" width="6" height="14" fill="#6b8e5a" />
      <rect x="50" y="18" width="2" height="36" fill="#7a5230" />
      <rect x="48" y="16" width="6" height="4" fill="#c9a24a" />
      <rect x="22" y="52" width="8" height="6" fill="#3b2a1d" />
      <rect x="34" y="52" width="8" height="6" fill="#3b2a1d" />
    </svg>
  );
}

export function WizardBrief() {
  return (
    <section className="card">
      <div className="flex gap-4 sm:gap-5">
        <div className="flex flex-col items-center gap-1 shrink-0">
          <div className="rounded-lg border border-rule bg-parchment-50 p-1">
            <WizardSprite />
          </div>
          <span className="label-mono text-[0.6rem]">{wizardBrief.name}</span>
        </div>
        <div className="flex-1 min-w-0">
          <div className="flex items-center justify-between mb-2 gap-2">
            <span className="label-mono">{wizardBrief.name}&apos;s Brief</span>
            <button
              type="button"
              className="pill-tag inline-flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity"
              style={{
                background: "var(--color-crit-soft)",
                color: "var(--color-crit)",
              }}
            >
              ↻ regenerate
            </button>
          </div>
          <p className="font-mono text-sm leading-relaxed text-ink">
            {wizardBrief.text}
          </p>
        </div>
      </div>
    </section>
  );
}
