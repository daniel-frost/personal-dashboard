"use client";

import { useEffect, useRef, useState } from "react";

export type AddKind = "task" | "weight" | "payment" | "grocery";

const ADD_OPTIONS: { kind: AddKind; label: string; ready: boolean }[] = [
  { kind: "task", label: "Task", ready: true },
  { kind: "weight", label: "Weight", ready: false },
  { kind: "payment", label: "Payment", ready: false },
  { kind: "grocery", label: "Grocery item", ready: false },
];

export const ADD_EVENT = "addmenu:select";

export function AddMenu() {
  const [open, setOpen] = useState(false);
  const wrapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!open) return;
    function onDocPointer(e: MouseEvent) {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    document.addEventListener("mousedown", onDocPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDocPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  function pick(kind: AddKind) {
    setOpen(false);
    window.dispatchEvent(new CustomEvent(ADD_EVENT, { detail: { kind } }));
  }

  return (
    <div ref={wrapRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
        className="pill-tag inline-flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity"
        style={{
          background: "var(--color-crit-soft)",
          color: "var(--color-crit)",
        }}
      >
        + Add
      </button>
      {open && (
        <div
          role="menu"
          className="absolute top-full right-0 mt-1 z-10 min-w-[10rem] rounded-md border border-rule bg-parchment-50 shadow-sm py-1"
        >
          {ADD_OPTIONS.map(({ kind, label, ready }) => (
            <button
              key={kind}
              type="button"
              role="menuitem"
              disabled={!ready}
              onClick={() => pick(kind)}
              className="w-full text-left text-sm px-3 py-1.5 text-ink hover:bg-parchment-200 disabled:text-ink-faint disabled:cursor-not-allowed disabled:hover:bg-transparent flex items-center justify-between gap-3"
            >
              <span>{label}</span>
              {!ready && (
                <span className="label-mono text-ink-faint">soon</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
