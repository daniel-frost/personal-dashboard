import { vitals } from "@/lib/mockData";

export function Vitals() {
  return (
    <section className="card">
      <div className="flex items-center justify-between mb-4">
        <span className="label-mono">Vitals</span>
        <span className="label-mono text-ink-faint">vs last week</span>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
        {vitals.map((v) => {
          const up = v.delta >= 0;
          return (
            <div key={v.key} className="flex flex-col items-center text-center">
              <div className="label-mono">{v.label}</div>
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
