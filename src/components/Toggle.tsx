"use client";

type ToggleProps<T extends string> = {
  options: readonly [T, T];
  value: T;
  onChange: (value: T) => void;
};

export function Toggle<T extends string>({
  options,
  value,
  onChange,
}: ToggleProps<T>) {
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
