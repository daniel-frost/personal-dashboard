// Mock data for the Phase 1 scaffold. Phase 2 swaps the source from this
// module to Prisma.

export type TaskCategory =
  | "finance"
  | "fitness"
  | "work"
  | "reading"
  | "outreach";

export type Task = {
  id: string;
  title: string;
  category?: TaskCategory;
  xp?: number;
  emeralds?: number;
  done?: boolean;
};

// ---------- Character / home ----------

export const character = {
  name: "Aurelius",
  subtitle: "Wraithbane of the Coin",
  xpLabel: "XP to Veteran",
  level: 14,
  emeralds: 12,
  xp: 8420,
  xpToNext: 12000,
};

export const wizardBrief = {
  name: "Cato",
  text: "Hmph. Recovery seventy-eight. Acceptable. The Plastic Wraith breathes still — strike harder. Pay above the minimum tonight or call yourself an apprentice. Eleven weeks on this cut. Tomorrow, a refeed quest. Today, the iron. Move.",
};

// ---------- Morning conditions ----------

export const whoop = {
  recovery: 78,
  strain: 12.4,
  sleepHours: 7.4,
  hrv: 52,
  restingHr: 56,
};

export const weather = {
  city: "Boston",
  temp: 64,
  condition: "Partly cloudy",
  high: 71,
  low: 58,
};

export const tasksHeader = "Today's Quest Scrolls";

export const tasks: Task[] = [
  {
    id: "t1",
    title: "Strike $240 from the Plastic Wraith",
    category: "finance",
    xp: 80,
    emeralds: 4,
    done: true,
  },
  {
    id: "t2",
    title: "Bear iron for an hour",
    category: "fitness",
    xp: 50,
    emeralds: 3,
    done: true,
  },
  {
    id: "t3",
    title: "Solve two riddles of the Scriptorium",
    category: "work",
    xp: 40,
    emeralds: 3,
  },
  {
    id: "t4",
    title: "Read 30 pages of the gathered tomes",
    category: "reading",
    xp: 25,
    emeralds: 3,
  },
  {
    id: "t5",
    title: "Send three ravens to distant guilds",
    category: "outreach",
    xp: 60,
    emeralds: 4,
  },
];

export const categoryStyles: Record<
  TaskCategory,
  { label: string; bg: string; fg: string }
> = {
  finance: { label: "Coin", bg: "bg-finance-soft", fg: "text-[#8a6a1f]" },
  fitness: { label: "Brawn", bg: "bg-fitness-soft", fg: "text-[#3e5a30]" },
  work: { label: "Scriptorium", bg: "bg-work-soft", fg: "text-[#4e3f80]" },
  reading: { label: "Library", bg: "bg-reading-soft", fg: "text-[#7a3a2a]" },
  outreach: { label: "Wayfarer", bg: "bg-outreach-soft", fg: "text-[#2f4f7a]" },
};

// ---------- Stat sheet ----------

export const statsHeader = "Stat Sheet";
export const statsCompare = "Δ vs last fortnight";

export type Stat = {
  key: "str" | "con" | "dex" | "int" | "wis" | "cha";
  label: string;
  value: number;
  delta: number;
  source: string;
  /** CSS color token for the detail bar */
  color: string;
};

export const stats: Stat[] = [
  { key: "str", label: "STR", value: 62, delta: 4, source: "Whoop · 7-day lifting volume", color: "var(--color-fitness)" },
  { key: "con", label: "CON", value: 78, delta: 7, source: "Whoop · recovery score", color: "var(--color-gem)" },
  { key: "dex", label: "DEX", value: 54, delta: -2, source: "Active habit streaks", color: "var(--color-fitness)" },
  { key: "int", label: "INT", value: 71, delta: 3, source: "LeetCode + reading pages", color: "var(--color-work)" },
  { key: "wis", label: "WIS", value: 68, delta: 6, source: "Bills paid + days under budget", color: "var(--color-finance)" },
  { key: "cha", label: "CHA", value: 41, delta: -3, source: "Ravens sent + posts inked", color: "var(--color-crit)" },
];

// ---------- Nav ----------

export const nav = [
  { key: "home", label: "Home", href: "/" },
  { key: "tasks", label: "Quests", href: "/tasks" },
  { key: "finance", label: "Coin", href: "/finance" },
  { key: "grocery", label: "Market", href: "/grocery" },
  { key: "profile", label: "Self", href: "/profile" },
];

// ---------- Coin / Counting House ----------

export const coinHeader = {
  title: "Counting House",
  subtitle: "Debts, dues, and the vault toward the harbor city.",
};

export type Strike = { amount: number };

export type Boss = {
  id: string;
  name: string;
  rank: string;
  hp: number;
  maxHp: number;
  recentStrikes: Strike[];
  minPayment: number;
  recommendedStrike: number;
};

export const activeBoss: Boss = {
  id: "b1",
  name: "The Plastic Wraith",
  rank: "Avalanche · #1",
  hp: 4180,
  maxHp: 6800,
  recentStrikes: [
    { amount: 175 },
    { amount: 420 },
    { amount: 90 },
    { amount: 175 },
  ],
  minPayment: 95,
  recommendedStrike: 240,
};

export type Foe = {
  id: string;
  name: string;
  hp: number;
  maxHp: number;
};

export const remainingFoes: Foe[] = [
  { id: "f1", name: "The Tuition Lich", hp: 18400, maxHp: 24000 },
  { id: "f2", name: "The Iron Pursuer", hp: 6200, maxHp: 11000 },
  { id: "f3", name: "The Bone Collector", hp: 1240, maxHp: 3200 },
];

export type Bill = {
  id: string;
  name: string;
  status: string;
  amount: number;
};

export const duesHeader = {
  title: "Dues to Settle",
  available: 1240,
};

export const bills: Bill[] = [
  { id: "bill-rent", name: "Rent", status: "Scheduled · Jun 1", amount: 2400 },
  { id: "bill-sapphire", name: "Sapphire min", status: "Auto-pay · May 18", amount: 95 },
  { id: "bill-electric", name: "Electric", status: "Unpaid · May 22", amount: 87 },
  { id: "bill-phone", name: "Phone", status: "Auto-pay · May 28", amount: 65 },
];

export const vault = {
  title: "The Harbor Vault",
  current: 8400,
  goal: 22000,
  weeksRemaining: 71,
  quote: "The harbor whispers your name.",
};

// ---------- Market / Grocery ----------

export const marketHeader = {
  title: "Market",
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
  title: "The Self",
  subtitle: "Stats, guilds, titles, journal.",
};

// ---------- Quests Hall ----------

export const questHallHeader = {
  title: "Quest Hall",
  subtitle: "Daily, weekly, epic, and the bounty board.",
};
