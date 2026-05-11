"use client";

import { useState } from "react";

type ToggleProps<T extends string> = {
  options: readonly [T, T];
  defaultValue?: T;
  onChange?: (value: T) => void;
};

export function Toggle<T extends string>({
  options,
  defaultValue,
  onChange,
}: ToggleProps<T>) {
  const [value, setValue] = useState<T>(defaultValue ?? options[0]);
  return (
    <div className="inline-flex items-center rounded-full border border-rule bg-parchment-50 p-0.5">
      {options.map((opt) => {
        const active = value === opt;
        return (
          <button
            key={opt}
            type="button"
            onClick={() => {
              setValue(opt);
              onChange?.(opt);
            }}
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
