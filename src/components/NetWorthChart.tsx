import { netWorth } from "@/lib/mockData";

const W = 600;
const H = 220;
const PAD_L = 48;
const PAD_R = 16;
const PAD_T = 16;
const PAD_B = 28;

function formatK(value: number): string {
  if (value >= 1_000_000) return `$${(value / 1_000_000).toFixed(1)}M`;
  if (value >= 1_000) return `$${Math.round(value / 1_000)}k`;
  return `$${value}`;
}

function formatMonthLabel(month: string): string {
  const [y, m] = month.split("-");
  const date = new Date(Number(y), Number(m) - 1, 1);
  return date.toLocaleString("en-US", { month: "short", year: "2-digit" });
}

export function NetWorthChart() {
  const { goal, history } = netWorth;
  const current = history[history.length - 1].value;
  const pctToGoal = Math.round((current / goal) * 100);

  const innerW = W - PAD_L - PAD_R;
  const innerH = H - PAD_T - PAD_B;

  const xFor = (i: number) =>
    PAD_L + (i / (history.length - 1)) * innerW;
  const yFor = (v: number) => PAD_T + innerH - (v / goal) * innerH;

  const linePath = history
    .map((p, i) => `${i === 0 ? "M" : "L"} ${xFor(i).toFixed(2)} ${yFor(p.value).toFixed(2)}`)
    .join(" ");

  const areaPath =
    `M ${xFor(0).toFixed(2)} ${(PAD_T + innerH).toFixed(2)} ` +
    history
      .map((p, i) => `L ${xFor(i).toFixed(2)} ${yFor(p.value).toFixed(2)}`)
      .join(" ") +
    ` L ${xFor(history.length - 1).toFixed(2)} ${(PAD_T + innerH).toFixed(2)} Z`;

  const gridValues = [
    0, 125_000, 250_000, 375_000, 500_000, 625_000, 750_000, 875_000, 1_000_000,
  ];

  const labelEvery = 6;
  const xLabels = history
    .map((p, i) => ({ p, i }))
    .filter(({ i }) => i === history.length - 1 || i % labelEvery === 0);

  const lastIdx = history.length - 1;
  const lastX = xFor(lastIdx);
  const lastY = yFor(history[lastIdx].value);

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-2 gap-2 flex-wrap">
        <span className="label-mono">The Long Road to a Million</span>
        <span className="label-mono text-ink-faint">{pctToGoal}% of the hoard</span>
      </div>

      <div className="flex items-baseline gap-1.5 flex-wrap mb-3">
        <span
          className="text-sm font-semibold tracking-tight"
          style={{ color: "var(--color-gem)" }}
        >
          {formatK(current)}
        </span>
        <span className="text-ink-faint text-sm">/</span>
        <span className="text-ink-muted text-sm">{formatK(goal)}</span>
      </div>

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="w-full h-auto"
        preserveAspectRatio="none"
        role="img"
        aria-label={`Net worth over time, currently ${formatK(current)} of ${formatK(goal)} goal`}
      >
        {gridValues.map((v) => {
          const y = yFor(v);
          return (
            <g key={v}>
              <line
                x1={PAD_L}
                x2={W - PAD_R}
                y1={y}
                y2={y}
                stroke="#d4d4d8"
                strokeWidth={1}
                strokeDasharray={v === goal ? "0" : "2 3"}
              />
              <text
                x={PAD_L - 8}
                y={y + 3}
                textAnchor="end"
                fontFamily="var(--font-mono)"
                fontSize={7}
                fill="#a1a1aa"
                style={{ letterSpacing: "0.08em" }}
              >
                {formatK(v)}
              </text>
            </g>
          );
        })}

        <path d={areaPath} fill="var(--color-gem)" fillOpacity={0.6} />
        <path
          d={linePath}
          fill="none"
          stroke="#3d5670"
          strokeWidth={2}
          strokeLinejoin="round"
          strokeLinecap="round"
        />

        <circle
          cx={lastX}
          cy={lastY}
          r={4}
          fill="#3d5670"
          stroke="#ffffff"
          strokeWidth={1.5}
        />

        {xLabels.map(({ p, i }) => (
          <text
            key={p.month}
            x={xFor(i)}
            y={H - 10}
            textAnchor={i === history.length - 1 ? "end" : "middle"}
            fontFamily="var(--font-mono)"
            fontSize={7}
            fill="#a1a1aa"
            style={{ letterSpacing: "0.08em" }}
          >
            {formatMonthLabel(p.month)}
          </text>
        ))}
      </svg>
    </section>
  );
}
