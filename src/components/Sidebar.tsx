import Link from "next/link";
import { nav } from "@/lib/mockData";

export function Sidebar({ active = "home" }: { active?: string }) {
  return (
    <aside className="flex flex-col h-screen sticky top-0 w-56 shrink-0 px-7 py-8">
      <div className="label-mono mb-6">Dashboard</div>
      <nav className="flex flex-col gap-1">
        {nav.map((item) => {
          const isActive = item.key === active;
          return (
            <Link
              key={item.key}
              href={item.href}
              className={`group flex items-center gap-3 rounded-md px-2 py-2 text-[0.78rem] font-mono uppercase tracking-[0.14em] transition-colors ${
                isActive
                  ? "bg-gold-soft text-ink"
                  : "text-ink-muted hover:text-ink"
              }`}
            >
              <span
                aria-hidden
                className={`inline-block h-3.5 w-3.5 rounded-[3px] ${
                  isActive ? "bg-gold" : "bg-rule"
                }`}
              />
              {item.label}
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
