// Mock data for the Phase 1 scaffold. Real data lands in subsequent phases
// (manual entry first, then YNAB / Whoop / etc.).

export type DisplayMode = "flavor" | "data";

export type TaskCategory =
  | "finance"
  | "fitness"
  | "work"
  | "reading"
  | "outreach";

export type Task = {
  id: string;
  title: string;
  flavorTitle: string;
  category: TaskCategory;
  xp: number;
  gold: number;
  crit?: boolean;
  done?: boolean;
};

export const character = {
  name: "You",
  flavorName: "Wanderer",
  recentAchievement: "Paid off Card A · Q1",
  level: 14,
  gold: 3215,
  gems: 12,
  xp: 8420,
  xpToNext: 12000,
  weekNumber: 19,
  year: 2026,
};

export const wizardBrief = {
  text: "Whoop recovery is 78. Good — not great. Chase Sapphire still has $4,180 to clear. Plan an extra $50 payment tonight; you've got the slack in YNAB. You've been in deficit for 11 weeks. Schedule a refeed day mid-week. For now, hit the lifting session.",
  generatedAt: "6:04 AM",
};

export const tasks: Task[] = [
  {
    id: "t1",
    title: "Pay $240 toward Chase Sapphire",
    flavorTitle: "Strike the Plastic Wraith for 240 gold",
    category: "finance",
    xp: 80,
    gold: 35,
    crit: true,
    done: true,
  },
  {
    id: "t2",
    title: "Lifting session — 60 min",
    flavorTitle: "Train at the Brawn Guild — 60 min",
    category: "fitness",
    xp: 50,
    gold: 20,
    done: true,
  },
  {
    id: "t3",
    title: "LeetCode · 2 problems · Medium+",
    flavorTitle: "Solve 2 Code Guild riddles (Medium+)",
    category: "work",
    xp: 40,
    gold: 15,
  },
  {
    id: "t4",
    title: "Read 30 pages · Designing Data-Intensive",
    flavorTitle: "Read 30 pages in the Lore archive",
    category: "reading",
    xp: 25,
    gold: 10,
  },
  {
    id: "t5",
    title: "Send 3 job applications",
    flavorTitle: "Dispatch 3 ravens to the noble houses",
    category: "outreach",
    xp: 60,
    gold: 25,
  },
];

export type Vital = {
  key: string;
  label: string;
  flavorLabel: string;
  value: number;
  delta: number;
};

export const vitals: Vital[] = [
  { key: "str", label: "Strength", flavorLabel: "STR", value: 62, delta: 4 },
  { key: "rec", label: "Recovery", flavorLabel: "CON", value: 78, delta: 7 },
  { key: "con", label: "Consistency", flavorLabel: "DEX", value: 54, delta: -2 },
  { key: "lrn", label: "Learning", flavorLabel: "INT", value: 71, delta: 3 },
  { key: "dis", label: "Discipline", flavorLabel: "WIS", value: 68, delta: 6 },
  { key: "out", label: "Outbound", flavorLabel: "CHA", value: 41, delta: -3 },
];

export const nav = [
  { key: "home", label: "Home", flavorLabel: "Hearth", href: "/" },
  { key: "tasks", label: "Tasks", flavorLabel: "Quests", href: "/tasks" },
  { key: "finance", label: "Finance", flavorLabel: "Coin", href: "/finance" },
  { key: "grocery", label: "Grocery", flavorLabel: "Market", href: "/grocery" },
  { key: "profile", label: "Profile", flavorLabel: "Self", href: "/profile" },
];

export const categoryStyles: Record<
  TaskCategory,
  { label: string; bg: string; fg: string }
> = {
  finance: {
    label: "Finance",
    bg: "bg-finance-soft",
    fg: "text-[#8a6a1f]",
  },
  fitness: {
    label: "Health & Fitness",
    bg: "bg-fitness-soft",
    fg: "text-[#3e5a30]",
  },
  work: {
    label: "Work & Career",
    bg: "bg-work-soft",
    fg: "text-[#4e3f80]",
  },
  reading: {
    label: "Reading & Learning",
    bg: "bg-reading-soft",
    fg: "text-[#7a3a2a]",
  },
  outreach: {
    label: "Outreach",
    bg: "bg-outreach-soft",
    fg: "text-[#2f4f7a]",
  },
};
