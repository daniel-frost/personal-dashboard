"use client";

import { useEffect, useRef, useState } from "react";
import { tasks as seedTasks, tasksHeader, type Task } from "@/lib/mockData";
import { QuestList } from "./QuestList";

export function TodayTasks() {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const [adding, setAdding] = useState(false);
  const [draft, setDraft] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (adding) inputRef.current?.focus();
  }, [adding]);

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, done: !task.done } : task,
      ),
    );
  }

  function commit() {
    const text = draft.trim();
    if (!text) {
      cancel();
      return;
    }
    setTasks((prev) => [
      ...prev,
      {
        id: `m-${Date.now()}`,
        title: text,
        emeralds: 3,
      },
    ]);
    setDraft("");
    setAdding(false);
  }

  function cancel() {
    setDraft("");
    setAdding(false);
  }

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-3 gap-2">
        <span className="label-mono">{tasksHeader}</span>
        <button
          type="button"
          onClick={() => setAdding(true)}
          className="pill-tag inline-flex items-center gap-1 shrink-0 hover:opacity-80 transition-opacity"
          style={{
            background: "var(--color-crit-soft)",
            color: "var(--color-crit)",
          }}
        >
          + Add
        </button>
      </div>
      {adding && (
        <div className="flex items-center gap-2 pb-3 border-b border-dashed border-rule mb-1">
          <input
            ref={inputRef}
            type="text"
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === "Enter") commit();
              if (e.key === "Escape") cancel();
            }}
            placeholder="What needs doing?"
            className="flex-1 min-w-0 bg-transparent border border-rule rounded-md px-3 py-1.5 text-[0.95rem] text-ink placeholder:text-ink-faint focus:outline-none focus:border-rule-strong"
          />
          <button
            type="button"
            onClick={commit}
            className="label-mono text-ink hover:opacity-80 transition-opacity"
          >
            Add
          </button>
          <button
            type="button"
            onClick={cancel}
            className="label-mono text-ink-muted hover:text-ink transition-colors"
          >
            Cancel
          </button>
        </div>
      )}
      <QuestList tasks={tasks} onToggle={toggle} />
    </section>
  );
}
