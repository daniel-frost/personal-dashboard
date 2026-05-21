"use client";

import { useState } from "react";
import { tasks as seedTasks, categoryStyles, type Task } from "@/lib/mockData";

type QuestListProps = {
  initial?: Task[];
  tasks?: Task[];
  onToggle?: (id: string) => void;
};

export function QuestList({
  initial = seedTasks,
  tasks: controlledTasks,
  onToggle,
}: QuestListProps) {
  const [internalTasks, setInternalTasks] = useState<Task[]>(initial);
  const tasks = controlledTasks ?? internalTasks;

  function handleToggle(id: string) {
    if (onToggle) {
      onToggle(id);
      return;
    }
    setInternalTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task)),
    );
  }

  return (
    <ul className="flex flex-col">
      {tasks.map((task, i) => {
        const cat = task.category ? categoryStyles[task.category] : null;
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
              onChange={() => handleToggle(task.id)}
              aria-label={`Mark ${task.title} complete`}
            />
            <span
              className={`flex-1 min-w-0 text-[0.95rem] ${
                task.done ? "line-through text-ink-faint" : "text-ink"
              }`}
            >
              {task.title}
            </span>
            {(cat || task.xp != null || task.emeralds != null) && (
              <div className="flex items-center gap-1.5 sm:gap-2 pt-0.5 shrink-0 flex-wrap justify-end">
                {cat && (
                  <span className={`pill-tag ${cat.bg} ${cat.fg}`}>
                    {cat.label}
                  </span>
                )}
                {task.xp != null && (
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
                )}
                {task.emeralds != null && (
                  <span
                    className="pill-tag"
                    style={{
                      background: "var(--color-emerald-soft)",
                      color: "var(--color-emerald)",
                      fontFamily: "var(--font-mono)",
                    }}
                  >
                    ◆ {task.emeralds}
                  </span>
                )}
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );
}
