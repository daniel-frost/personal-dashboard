// Mock data for the Phase 1 scaffold. Every visible string carries both a
// flavor and data variant so the FLAVOR/DATA toggle has something to show.
// Phase 2 swaps the source from this module to Prisma.

export type Bilingual<T = string> = { flavor: T; data: T };

export type TaskCategory =
  | "finance"
  | "fitness"
  | "work"
  | "reading"
  | "outreach";

export type Task = {
  id: string;
  title: Bilingual;
  category: TaskCategory;
  xp: number;
  gold: number;
  crit?: boolean;
  done?: boolean;
};

// ---------- Sidebar / branding ----------

export const sidebarHeader: Bilingual = {
  flavor: "Goals Cottage",
  data: "Dashboard",
};

// ---------- Character / home ----------

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

export const tasksHeader: Bilingual = {
  flavor: "Today's Quest Scrolls",
  data: "Today's Tasks",
};

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
      flavor: "Bear iron for an hour",
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
      flavor: "Solve two riddles of the Scriptorium",
      data: "LeetCode · 2 problems · Medium+",
    },
    category: "work",
    xp: 40,
    gold: 15,
  },
  {
    id: "t4",
    title: {
      flavor: "Read 30 pages of the gathered tomes",
      data: "Read 30 pages · Designing Data-Intensive",
    },
    category: "reading",
    xp: 25,
    gold: 10,
  },
  {
    id: "t5",
    title: {
      flavor: "Send three ravens to distant guilds",
      data: "Send 3 job applications",
    },
    category: "outreach",
    xp: 60,
    gold: 25,
  },
];

export const categoryStyles: Record<
  TaskCategory,
  { label: Bilingual; bg: string; fg: string }
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
    label: { flavor: "Scriptorium", data: "Work & Career" },
    bg: "bg-work-soft",
    fg: "text-[#4e3f80]",
  },
  reading: {
    label: { flavor: "Library", data: "Reading & Learning" },
    bg: "bg-reading-soft",
    fg: "text-[#7a3a2a]",
  },
  outreach: {
    label: { flavor: "Wayfarer", data: "Outreach" },
    bg: "bg-outreach-soft",
    fg: "text-[#2f4f7a]",
  },
};

// ---------- Stat sheet ----------

export const statsHeader: Bilingual = {
  flavor: "Stat Sheet",
  data: "Vitals",
};
export const statsCompare: Bilingual = {
  flavor: "Δ vs last fortnight",
  data: "vs last week",
};

export type Stat = {
  key: "str" | "con" | "dex" | "int" | "wis" | "cha";
  label: Bilingual;
  value: number;
  delta: number;
  source: string;
  /** CSS color token for the detail bar */
  color: string;
};

export const stats: Stat[] = [
  {
    key: "str",
    label: { flavor: "STR", data: "Strength" },
    value: 62,
    delta: 4,
    source: "Whoop · 7-day lifting volume",
    color: "var(--color-fitness)",
  },
  {
    key: "con",
    label: { flavor: "CON", data: "Recovery" },
    value: 78,
    delta: 7,
    source: "Whoop · recovery score",
    color: "var(--color-gem)",
  },
  {
    key: "dex",
    label: { flavor: "DEX", data: "Consistency" },
    value: 54,
    delta: -2,
    source: "Active habit streaks",
    color: "var(--color-fitness)",
  },
  {
    key: "int",
    label: { flavor: "INT", data: "Learning" },
    value: 71,
    delta: 3,
    source: "LeetCode + reading pages",
    color: "var(--color-work)",
  },
  {
    key: "wis",
    label: { flavor: "WIS", data: "Discipline" },
    value: 68,
    delta: 6,
    source: "Bills paid + days under budget",
    color: "var(--color-finance)",
  },
  {
    key: "cha",
    label: { flavor: "CHA", data: "Outbound" },
    value: 41,
    delta: -3,
    source: "Ravens sent + posts inked",
    color: "var(--color-crit)",
  },
];

// ---------- Nav ----------

export const nav = [
  { key: "home", label: { flavor: "Home", data: "Home" }, href: "/" },
  { key: "tasks", label: { flavor: "Quests", data: "Tasks" }, href: "/tasks" },
  { key: "finance", label: { flavor: "Coin", data: "Finance" }, href: "/finance" },
  { key: "grocery", label: { flavor: "Market", data: "Grocery" }, href: "/grocery" },
  { key: "profile", label: { flavor: "Self", data: "Profile" }, href: "/profile" },
];

// ---------- Coin / Counting House ----------

export const coinHeader = {
  title: { flavor: "Counting House", data: "Finance" },
  subtitle: {
    flavor: "Debts, dues, and the vault toward the harbor city.",
    data: "Debts, bills, and savings toward the next move.",
  },
};

export type Strike = { amount: number; crit?: boolean };

export type Boss = {
  id: string;
  name: Bilingual;
  rank: Bilingual;
  hp: number;
  maxHp: number;
  recentStrikes: Strike[];
  minPayment: number;
  recommendedStrike: number;
};

export const activeBoss: Boss = {
  id: "b1",
  name: { flavor: "The Plastic Wraith", data: "Chase Sapphire" },
  rank: { flavor: "Avalanche · #1", data: "Avalanche · #1" },
  hp: 4180,
  maxHp: 6800,
  recentStrikes: [
    { amount: 175 },
    { amount: 420, crit: true },
    { amount: 90 },
    { amount: 175 },
  ],
  minPayment: 95,
  recommendedStrike: 240,
};

export type Foe = {
  id: string;
  name: Bilingual;
  hp: number;
  maxHp: number;
};

export const remainingFoes: Foe[] = [
  {
    id: "f1",
    name: { flavor: "The Tuition Lich", data: "Sallie Mae" },
    hp: 18400,
    maxHp: 24000,
  },
  {
    id: "f2",
    name: { flavor: "The Iron Pursuer", data: "Auto loan" },
    hp: 6200,
    maxHp: 11000,
  },
  {
    id: "f3",
    name: { flavor: "The Bone Collector", data: "Medical · CityMed" },
    hp: 1240,
    maxHp: 3200,
  },
];

export type Bill = {
  id: string;
  name: Bilingual;
  status: Bilingual;
  amount: number;
};

export const duesHeader = {
  title: { flavor: "Dues to Settle", data: "Bills" },
  available: 1240,
};

export const bills: Bill[] = [
  {
    id: "bill-rent",
    name: { flavor: "Rent", data: "Rent" },
    status: { flavor: "Scheduled · Jun 1", data: "Scheduled · Jun 1" },
    amount: 2400,
  },
  {
    id: "bill-sapphire",
    name: { flavor: "Sapphire min", data: "Chase Sapphire min" },
    status: { flavor: "Auto-pay · May 18", data: "Auto-pay · May 18" },
    amount: 95,
  },
  {
    id: "bill-electric",
    name: { flavor: "Electric", data: "Electric" },
    status: { flavor: "Unpaid · May 22", data: "Unpaid · May 22" },
    amount: 87,
  },
  {
    id: "bill-phone",
    name: { flavor: "Phone", data: "Phone" },
    status: { flavor: "Auto-pay · May 28", data: "Auto-pay · May 28" },
    amount: 65,
  },
];

export const vault = {
  title: { flavor: "The Harbor Vault", data: "Savings · Move fund" },
  current: 8400,
  goal: 22000,
  weeksRemaining: 71,
  quote: {
    flavor: "The harbor whispers your name.",
    data: "On pace for the move at this rate.",
  },
};

// ---------- Market / Grocery ----------

export const marketHeader = {
  title: { flavor: "Market", data: "Grocery" },
  subtitle: {
    flavor: "Provisions for the cottage. Aisles ordered for the chosen stall.",
    data: "Grocery list. Aisles ordered for the chosen store.",
  },
};

export const stores = ["Trader Joe's", "Whole Foods", "Wegmans"];

export type GroceryCategory = "produce" | "dairy" | "pantry" | "frozen";

export type GroceryItem = {
  id: string;
  name: string;
  category: GroceryCategory;
  qty?: string;
  staple?: boolean;
  done?: boolean;
};

export const groceryCategoryStyle: Record<
  GroceryCategory,
  { label: string; bg: string; fg: string }
> = {
  produce: { label: "Produce", bg: "bg-fitness-soft", fg: "text-[#3e5a30]" },
  dairy: { label: "Dairy", bg: "bg-outreach-soft", fg: "text-[#2f4f7a]" },
  pantry: { label: "Pantry", bg: "bg-finance-soft", fg: "text-[#8a6a1f]" },
  frozen: { label: "Frozen", bg: "bg-work-soft", fg: "text-[#4e3f80]" },
};

export const groceryItems: GroceryItem[] = [
  { id: "g1", name: "Spinach", category: "produce", qty: "1 bag", staple: true },
  { id: "g2", name: "Lemons", category: "produce", qty: "4", done: true },
  { id: "g3", name: "Avocados", category: "produce", qty: "2" },
  { id: "g4", name: "Garlic", category: "produce", qty: "1 head", staple: true },
  { id: "g5", name: "Greek yogurt", category: "dairy", qty: "32 oz", staple: true },
  { id: "g6", name: "Eggs", category: "dairy", qty: "18", staple: true },
  { id: "g7", name: "Olive oil", category: "pantry", qty: "500 ml", done: true },
  { id: "g8", name: "Rolled oats", category: "pantry", qty: "1 lb", staple: true },
  { id: "g9", name: "Black beans", category: "pantry", qty: "2 cans" },
  { id: "g10", name: "Wild blueberries", category: "frozen", qty: "1 bag", staple: true },
];

// ---------- Self ----------

export const selfHeader = {
  title: { flavor: "The Self", data: "Profile" },
  subtitle: {
    flavor: "Stats, guilds, titles, journal.",
    data: "Stats, guilds, titles, journal.",
  },
};

// ---------- Quests Hall ----------

export const questHallHeader = {
  title: { flavor: "Quest Hall", data: "Tasks" },
  subtitle: {
    flavor: "Daily, weekly, epic, and the bounty board.",
    data: "Daily, weekly, big-rock, and outstanding tasks.",
  },
};
