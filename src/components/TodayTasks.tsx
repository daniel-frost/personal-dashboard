"use client";

import { tasks, tasksHeader } from "@/lib/mockData";
import { useMode } from "@/lib/mode";
import { QuestList } from "./QuestList";

export function TodayTasks() {
  const { mode } = useMode();
  const t = <T,>(v: { flavor: T; data: T }) =>
    mode === "flavor" ? v.flavor : v.data;
  const sealed = tasks.filter((task) => task.done).length;

  return (
    <section className="card">
      <div className="flex items-center justify-between mb-3">
        <span className="label-mono">{t(tasksHeader)}</span>
        <span className="label-mono text-ink">
          {sealed}/{tasks.length} sealed
        </span>
      </div>
      <QuestList />
    </section>
  );
}
