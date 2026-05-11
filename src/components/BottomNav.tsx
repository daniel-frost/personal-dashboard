"use client";

import Link from "next/link";
import { nav } from "@/lib/mockData";
import { useMode } from "@/lib/mode";

export function BottomNav({ active = "home" }: { active?: string }) {
  const { mode } = useMode();
  return (
    <nav
      aria-label="Primary"
      className="md:hidden flex-none border-t border-rule bg-parchment-50"
      style={{ paddingBottom: "max(env(safe-area-inset-bottom), 4px)" }}
    >
      <ul className="flex items-stretch justify-around px-1 pt-1.5 pb-1">
        {nav.map((item) => {
          const isActive = item.key === active;
          const label = mode === "flavor" ? item.label.flavor : item.label.data;
          return (
            <li key={item.key} className="flex-1">
              <Link
                href={item.href}
                className={`flex flex-col items-center gap-1 py-1 font-mono text-[0.58rem] uppercase tracking-[0.12em] leading-none transition-colors ${
                  isActive ? "text-ink" : "text-ink-muted"
                }`}
              >
                <span
                  aria-hidden
                  className={`inline-block h-3.5 w-3.5 rounded-[3px] ${
                    isActive ? "bg-gold" : "bg-rule"
                  }`}
                />
                <span className="block">{label}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
