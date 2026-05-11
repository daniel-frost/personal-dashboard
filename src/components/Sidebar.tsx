"use client";

import Link from "next/link";
import { nav, sidebarHeader } from "@/lib/mockData";
import { useMode } from "@/lib/mode";

export function Sidebar({ active = "home" }: { active?: string }) {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  return (
    <aside className="hidden md:flex flex-col w-56 shrink-0 px-7 py-8 overflow-y-auto">
      <div className="label-mono mb-6" style={{ color: "var(--color-crit)" }}>
        {t(sidebarHeader)}
      </div>
      <nav className="flex flex-col gap-1">
        {nav.map((item) => {
          const isActive = item.key === active;
          const label = mode === "flavor" ? item.label.flavor : item.label.data;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`group flex items-center gap-3 rounded-md px-2 py-2 text-[0.78rem] font-mono uppercase tracking-[0.14em] transition-colors ${
                isActive ? "bg-gold-soft text-ink" : "text-ink-muted hover:text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`inline-block h-3.5 w-3.5 rounded-[3px] ${
                  isActive ? "bg-gold" : "bg-rule"
                }`}
              />
              {label}
            </Link>
          );
        })}
      </nav>
      <div className="mt-auto pt-6 label-mono text-[0.625rem] leading-relaxed text-ink-faint">
        v0.2 · spring 26
        <br />
        the wizard sleeps when
        <br />
        you sleep.
      </div>
    </aside>
  );
}
