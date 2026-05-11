// Mock data for the Phase 1 scaffold. Every visible string carries both a
// flavor and data variant so the FLAVOR/DATA toggle has something to show.
// Phase 2 swaps the source from this module to Prisma.

export type TaskCategory =
  | "finance"
  | "fitness"
  | "work"
  | "reading"
  | "outreach";

export type Task = {
  id: string;
  title: { flavor: string; data: string };
  category: TaskCategory;
  xp: number;
  gold: number;
  crit?: boolean;
  done?: boolean;
};

export const character = {
  name: { flavor: "Aurelius", data: "You" },
  subtitle: {
    flavor: "Wraithbane of the Coin",
    data: "Paid off Card A · Q1",
  },
  dashboardTitle: { flavor: "Goals Cottage", data: "Personal Dashboard" },
  dashboardMeta: {
    flavor: "Goals Cottage · Spring, Year II · No. 47",
    data: "Personal Dashboard · Week 19 · 2026",
  },
  xpLabel: { flavor: "XP to Veteran", data: "XP to Lv 15" },
  level: 14,
  gold: 3215,
  gems: 12,
  xp: 8420,
  xpToNext: 12000,
};

export const wizardBrief = {
  text: {
    flavor:
      "Hmph. Recovery seventy-eight. Acceptable. The Plastic Wraith breathes still — strike harder. Pay above the minimum tonight or call yourself an apprentice. Eleven weeks on this cut. Tomorrow, a refeed quest. Today, the iron. Move.",
    data: "Whoop recovery is 78. Good — not great. Chase Sapphire still has $4,180 to clear. Plan an extra $50 payment tonight; you've got the slack in YNAB. You've been in deficit for 11 weeks. Schedule a refeed day mid-week. For now, hit the lifting session.",
  },
  footer: {
    flavor: "Sealed at sixth bell · refresh the wizard",
    data: "Generated 6:04 AM · regenerate",
  },
};

export const tasksHeader = { flavor: "Today's Quest Scrolls", data: "Today's Tasks" };
export const sealedLabel = { flavor: "sealed", data: "sealed" };
export const vitalsHeader = { flavor: "Vitals", data: "Vitals" };
export const vitalsCompare = { flavor: "vs last fortnight", data: "vs last week" };

export const tasks: Task[] = [
  {
    id: "t1",
    title: {
      flavor: "Strike $240 from the Plastic Wraith",
      data: "Pay $240 toward Chase Sapphire",
    },
    category: "finance",
    xp: 80,
    gold: 35,
    crit: true,
    done: true,
  },
  {
    id: "t2",
    title: {
      flavor: "Train at the Brawn Guild — 60 min",
      data: "Lifting session — 60 min",
    },
    category: "fitness",
    xp: 50,
    gold: 20,
    done: true,
  },
  {
    id: "t3",
    title: {
      flavor: "Solve 2 Code Guild riddles · Medium+",
      data: "LeetCode · 2 problems · Medium+",
    },
    category: "work",
    xp: 40,
    gold: 15,
  },
  {
    id: "t4",
    title: {
      flavor: "Read 30 pages in the Lore archive",
      data: "Read 30 pages · Designing Data-Intensive",
    },
    category: "reading",
    xp: 25,
    gold: 10,
  },
  {
    id: "t5",
    title: {
      flavor: "Dispatch 3 ravens to noble houses",
      data: "Send 3 job applications",
    },
    category: "outreach",
    xp: 60,
    gold: 25,
  },
];

export type Vital = {
  key: string;
  label: { flavor: string; data: string };
  value: number;
  delta: number;
};

export const vitals: Vital[] = [
  { key: "str", label: { flavor: "Strength", data: "Strength" }, value: 62, delta: 4 },
  { key: "rec", label: { flavor: "Vigour", data: "Recovery" }, value: 78, delta: 7 },
  { key: "con", label: { flavor: "Resolve", data: "Consistency" }, value: 54, delta: -2 },
  { key: "lrn", label: { flavor: "Lore", data: "Learning" }, value: 71, delta: 3 },
  { key: "dis", label: { flavor: "Discipline", data: "Discipline" }, value: 68, delta: 6 },
  { key: "out", label: { flavor: "Charisma", data: "Outbound" }, value: 41, delta: -3 },
];

export const nav = [
  { key: "home", label: { flavor: "Home", data: "Home" }, href: "/" },
  { key: "tasks", label: { flavor: "Quests", data: "Tasks" }, href: "/tasks" },
  { key: "finance", label: { flavor: "Coin", data: "Finance" }, href: "/finance" },
  { key: "grocery", label: { flavor: "Market", data: "Grocery" }, href: "/grocery" },
  { key: "profile", label: { flavor: "Self", data: "Profile" }, href: "/profile" },
];

export const categoryStyles: Record<
  TaskCategory,
  { label: { flavor: string; data: string }; bg: string; fg: string }
> = {
  finance: {
    label: { flavor: "Coin", data: "Finance" },
    bg: "bg-finance-soft",
    fg: "text-[#8a6a1f]",
  },
  fitness: {
    label: { flavor: "Brawn", data: "Health & Fitness" },
    bg: "bg-fitness-soft",
    fg: "text-[#3e5a30]",
  },
  work: {
    label: { flavor: "Code", data: "Work & Career" },
    bg: "bg-work-soft",
    fg: "text-[#4e3f80]",
  },
  reading: {
    label: { flavor: "Lore", data: "Reading & Learning" },
    bg: "bg-reading-soft",
    fg: "text-[#7a3a2a]",
  },
  outreach: {
    label: { flavor: "Wayfarer", data: "Outreach" },
    bg: "bg-outreach-soft",
    fg: "text-[#2f4f7a]",
  },
};
