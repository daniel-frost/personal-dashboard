"use client";

import { useState } from "react";
import {
  tasks as seedTasks,
  categoryStyles,
  tasksHeader,
  type Task,
} from "@/lib/mockData";
import { useMode } from "@/lib/mode";

export function TodayTasks() {
  const [tasks, setTasks] = useState<Task[]>(seedTasks);
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) => (mode === "flavor" ? v.flavor : v.data);
  const sealed = tasks.filter((task) => task.done).length;

  function toggle(id: string) {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-3">
        <span className="label-mono">{t(tasksHeader)}</span>
        <span className="label-mono text-ink">
          {sealed}/{tasks.length} sealed
        </span>
      </div>
      <ul className="flex flex-col">
        {tasks.map((task, i) => {
          const cat = categoryStyles[task.category];
          const isLast = i === tasks.length - 1;
          return (
            <li
              key={task.id}
              className={`flex items-start gap-3 py-3 ${
                isLast ? "" : "border-b border-dashed border-rule"
              }`}
            >
              <input
                type="checkbox"
                className="task-checkbox mt-0.5 shrink-0"
                checked={!!task.done}
                onChange={() => toggle(task.id)}
                aria-label={`Mark ${t(task.title)} complete`}
              />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span
                    className={`text-[0.95rem] ${
                      task.done ? "line-through text-ink-faint" : "text-ink"
                    }`}
                  >
                    {t(task.title)}
                  </span>
                  {task.crit && (
                    <span
                      className="pill-tag"
                      style={{
                        background: "var(--color-crit-soft)",
                        color: "var(--color-crit)",
                      }}
                    >
                      Crit
                    </span>
                  )}
                </div>
                <div className="mt-1">
                  <span className={`pill-tag ${cat.bg} ${cat.fg}`}>
                    {t(cat.label)}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-end sm:items-center gap-1.5 sm:gap-2 pt-0.5 shrink-0">
                <span
                  className="pill-tag"
                  style={{
                    background: "var(--color-work-soft)",
                    color: "#4e3f80",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  + {task.xp}
                </span>
                <span
                  className="pill-tag"
                  style={{
                    background: "var(--color-gold-soft)",
                    color: "#8a6a1f",
                    fontFamily: "var(--font-mono)",
                  }}
                >
                  ✦ {task.gold}
                </span>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
