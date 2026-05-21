import { weather } from "@/lib/mockData";

export function WeatherCard() {
  const range = Math.max(1, weather.high - weather.low);
  const pinPct = Math.max(
    0,
    Math.min(100, ((weather.temp - weather.low) / range) * 100),
  );

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-2">
        <span className="label-mono">Weather</span>
        <span className="label-mono text-ink-faint">{weather.city}</span>
      </div>
      <div className="flex items-baseline gap-2">
        <span className="text-3xl font-semibold tracking-tight">
          {weather.temp}
        </span>
        <span className="text-ink-faint text-sm">°F</span>
        <span className="text-ink-muted text-sm ml-1">{weather.condition}</span>
      </div>
      <div className="mt-3 flex items-center gap-2">
        <span className="font-mono text-[0.7rem] text-ink-faint w-8 shrink-0 text-right">
          {weather.low}°
        </span>
        <div className="relative flex-1 h-2 rounded-full bg-parchment-200">
          <span
            aria-hidden
            className="absolute top-1/2 h-3 w-3 rounded-full border-2 border-white shadow"
            style={{
              left: `${pinPct}%`,
              transform: "translate(-50%, -50%)",
              background: "var(--color-gem)",
            }}
          />
        </div>
        <span className="font-mono text-[0.7rem] text-ink-faint w-8 shrink-0">
          {weather.high}°
        </span>
      </div>
    </section>
  );
}
