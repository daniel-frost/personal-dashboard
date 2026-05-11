"use client";

type SegmentedTabsProps<T extends string> = {
  options: readonly T[];
  value: T;
  onChange: (value: T) => void;
};

export function SegmentedTabs<T extends string>({
  options,
  value,
  onChange,
}: SegmentedTabsProps<T>) {
  return (
    <div className="inline-flex items-center rounded-full border border-rule bg-parchment-50 p-0.5">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => onChange(opt)}
            className={`px-3 py-1 rounded-full font-mono text-[0.65rem] uppercase tracking-[0.12em] transition-colors ${
              active ? "bg-parchment-200 text-ink" : "text-ink-muted"
            }`}
          >
            {opt}
          </button>
        );
      })}
    </div>
  );
}
