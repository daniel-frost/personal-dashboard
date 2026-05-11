"use client";

import { useMemo, useState } from "react";
import { Shell } from "@/components/Shell";
import {
  groceryCategoryStyle,
  groceryItems as seed,
  marketHeader,
  stores,
  type GroceryCategory,
  type GroceryItem,
} from "@/lib/mockData";
import { useMode } from "@/lib/mode";

const CATEGORY_ORDER: GroceryCategory[] = ["produce", "dairy", "pantry", "frozen"];

export default function GroceryPage() {
  const [store, setStore] = useState(stores[0]);
  const [items, setItems] = useState<GroceryItem[]>(seed);
  const [draft, setDraft] = useState("");
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;

  const grouped = useMemo(() => {
    const map: Record<GroceryCategory, GroceryItem[]> = {
      produce: [],
      dairy: [],
      pantry: [],
      frozen: [],
    };
    items.forEach((it) => map[it.category].push(it));
    return map;
  }, [items]);

  const remaining = items.filter((it) => !it.done).length;

  function toggle(id: string) {
    setItems((prev) =>
      prev.map((it) => (it.id === id ? { ...it, done: !it.done } : it)),
    );
  }

  function addItem(e: React.FormEvent) {
    e.preventDefault();
    const name = draft.trim();
    if (!name) return;
    const id = `g-${Date.now()}`;
    setItems((prev) => [...prev, { id, name, category: "pantry" }]);
    setDraft("");
  }

  return (
    <Shell active="grocery">
      <header className="flex items-start justify-between gap-3 flex-wrap">
        <div className="min-w-0">
          <div className="label-mono" style={{ color: "var(--color-crit)" }}>
            {t(marketHeader.title)}
          </div>
          <div className="text-sm text-ink-muted mt-1">{t(marketHeader.subtitle)}</div>
        </div>
        <label className="shrink-0">
          <span className="sr-only">Store</span>
          <select
            value={store}
            onChange={(e) => setStore(e.target.value)}
            className="rounded-full border border-rule bg-parchment-50 px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-gold"
          >
            {stores.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </label>
      </header>

      <form
        onSubmit={addItem}
        className="card flex items-center justify-between gap-3 py-3 px-4"
      >
        <input
          value={draft}
          onChange={(e) => setDraft(e.target.value)}
          placeholder="Add to the list..."
          className="flex-1 bg-transparent text-sm text-ink placeholder:text-ink-faint focus:outline-none"
        />
        <span className="label-mono shrink-0">
          {remaining} {mode === "flavor" ? "to gather" : "remaining"}
        </span>
      </form>

      {CATEGORY_ORDER.map((cat) => {
        const list = grouped[cat];
        if (list.length === 0) return null;
        const style = groceryCategoryStyle[cat];
        return (
          <section key={cat} className="card">
            <div className="flex items-center mb-2">
              <span className={`pill-tag ${style.bg} ${style.fg}`}>{style.label}</span>
              <div className="flex-1 ml-3 border-t border-dashed border-rule" />
            </div>
            <ul className="flex flex-col">
              {list.map((it, i) => {
                const isLast = i === list.length - 1;
                return (
                  <li
                    key={it.id}
                    className={`flex items-center gap-3 py-2.5 ${
                      isLast ? "" : "border-b border-dashed border-rule"
                    }`}
                  >
                    <input
                      type="checkbox"
                      className="task-checkbox shrink-0"
                      checked={!!it.done}
                      onChange={() => toggle(it.id)}
                      aria-label={`Mark ${it.name} as gathered`}
                    />
                    <span
                      className={`flex-1 min-w-0 text-[0.95rem] ${
                        it.done ? "line-through text-ink-faint" : "text-ink"
                      }`}
                    >
                      {it.name}
                    </span>
                    <span className="flex items-center gap-2 shrink-0">
                      {it.qty && (
                        <span className="font-mono text-xs text-ink-muted">
                          {it.qty}
                        </span>
                      )}
                      {it.staple && (
                        <span
                          className="pill-tag"
                          style={{
                            background: "var(--color-gold-soft)",
                            color: "#8a6a1f",
                          }}
                        >
                          Staple
                        </span>
                      )}
                    </span>
                  </li>
                );
              })}
            </ul>
          </section>
        );
      })}
    </Shell>
  );
}
