const user = {
  initials: "JR",
  firstName: "Juan",
  lastName: "Reyes",
  fullName: "Juan R. Reyes",
  role: "Collector",
  market: "Pili Public Market",
};

const stats = {
  collectedToday: {
    value: "₱14,800",
    change: "+₱2,200 vs yesterday",
    trend: "up",
  },
  receiptsIssued: { value: "12", change: "3 more than yesterday", trend: "up" },
  overdueAccounts: {
    value: "8",
    change: "₱38,400 total balance",
    trend: "down",
  },
  assignedStalls: {
    value: "42",
    change: "38 active · 4 vacant",
    trend: "neutral",
  },
};

const recentCollections = [
  {
    init: "JD",
    grad: "135deg,#3b82f6,#6366f1",
    name: "Juan Dela Cruz",
    vendorId: "VND-001",
    stall: "#01",
    amount: "₱1,200",
    method: "Cash",
    methodClass: "gr",
    time: "09:12 AM",
    or: "OR-2026-0841",
  },
  {
    init: "PR",
    grad: "135deg,#f59e0b,#ef4444",
    name: "Pedro Reyes",
    vendorId: "VND-002",
    stall: "#03",
    amount: "₱1,400",
    method: "GCash",
    methodClass: "vi",
    time: "09:35 AM",
    or: "OR-2026-0842",
  },
  {
    init: "MS",
    grad: "135deg,#10b981,#0891b2",
    name: "Maria Santos",
    vendorId: "VND-003",
    stall: "#07",
    amount: "₱1,000",
    method: "Cash",
    methodClass: "gr",
    time: "10:02 AM",
    or: "OR-2026-0843",
  },
  {
    init: "AL",
    grad: "135deg,#8b5cf6,#d946ef",
    name: "Ana Lim",
    vendorId: "VND-004",
    stall: "#19",
    amount: "₱1,500",
    method: "Maya",
    methodClass: "cy",
    time: "10:28 AM",
    or: "OR-2026-0844",
  },
  {
    init: "RG",
    grad: "135deg,#f97316,#ef4444",
    name: "Roberto Go",
    vendorId: "VND-005",
    stall: "#24",
    amount: "₱1,200",
    method: "Cash",
    methodClass: "gr",
    time: "11:15 AM",
    or: "OR-2026-0845",
  },
];

const overdueAccounts = [
  {
    init: "CB",
    grad: "135deg,#ef4444,#f97316",
    name: "Carla Bautista",
    stall: "#06",
    type: "Dry Goods",
    amount: "₱3,600",
    days: 45,
  },
  {
    init: "LV",
    grad: "135deg,#8b5cf6,#6366f1",
    name: "Luis Villanueva",
    stall: "#11",
    type: "Vegetables",
    amount: "₱2,000",
    days: 32,
  },
  {
    init: "GC",
    grad: "135deg,#f59e0b,#10b981",
    name: "Grace Cruz",
    stall: "#09",
    type: "Wet Market",
    amount: "₱5,600",
    days: 28,
  },
  {
    init: "DC",
    grad: "135deg,#0891b2,#3b82f6",
    name: "Diego Cruz",
    stall: "#15",
    type: "General",
    amount: "₱4,500",
    days: 21,
  },
];

const collectionProgress = {
  cash: { collected: "₱9,800", target: "₱42,000", pct: 23 },
  gcash: { collected: "₱3,400", target: "₱18,000", pct: 19 },
  maya: { collected: "₱1,600", target: "₱8,000", pct: 20 },
  overdue: { collected: "₱38,400", target: "", pct: 55 },
  totalCollected: "₱14,800",
  monthTarget: "₱68,000",
};

const tasks = [
  {
    label: "Collect Section A payments",
    meta: "12 stalls · Completed 10:30 AM",
    due: "Done",
    dueClass: "ok",
    done: true,
  },
  {
    label: "Issue OR for Carla Bautista",
    meta: "OR-2026-0841 · Completed",
    due: "Done",
    dueClass: "ok",
    done: true,
  },
  {
    label: "Collect Section B & C payments",
    meta: "18 stalls remaining",
    due: "Due 12:00 PM",
    dueClass: "soon",
    done: false,
  },
  {
    label: "Follow up: Luis Villanueva overdue",
    meta: "Stall #11 · 32 days",
    due: "Overdue",
    dueClass: "late",
    done: false,
  },
  {
    label: "Review Monthly Summary",
    meta: "Check collection progress for this month",
    due: "Due 5:00 PM",
    dueClass: "soon",
    done: false,
  },
];

const activityFeed = [
  {
    dotClass: "gr",
    icon: "check",
    text: "<strong>Payment recorded</strong> &mdash; Roberto Go, Stall #24, &#8369;1,200 cash",
    time: "11:15 AM · OR-2026-0845",
  },
  {
    dotClass: "ac",
    icon: "phone",
    text: "<strong>GCash payment</strong> &mdash; Ana Lim, Stall #19, &#8369;1,500 via Maya",
    time: "10:28 AM · OR-2026-0844",
  },
  {
    dotClass: "am",
    icon: "sms",
    text: "<strong>SMS reminder sent</strong> &mdash; Grace Cruz, Stall #09 overdue notice",
    time: "09:00 AM · Automated",
  },
  {
    dotClass: "gr",
    icon: "check",
    text: "<strong>Payment recorded</strong> &mdash; Maria Santos, Stall #07, &#8369;1,000 cash",
    time: "10:02 AM · OR-2026-0843",
  },
];

const calendarEvents = [5, 10, 12, 15, 18, 20, 25];

const vendorOptions = [
  { label: "Juan Dela Cruz — Stall #01" },
  { label: "Pedro Reyes — Stall #03" },
  { label: "Maria Santos — Stall #07" },
  { label: "Ana Lim — Stall #19" },
  { label: "Roberto Go — Stall #24" },
  { label: "Carla Bautista — Stall #06" },
  { label: "Luis Villanueva — Stall #11" },
  { label: "Grace Cruz — Stall #09" },
  { label: "Diego Cruz — Stall #15" },
];

const orCounter = 846;

const showDashboard = (req, res) => {
  res.render("pages/collector/dashboard", {
    user,
    stats,
    recentCollections,
    overdueAccounts,
    collectionProgress,
    tasks,
    activityFeed,
    calendarEvents,
    vendorOptions,
    orCounter,
  });
};

module.exports = { showDashboard };
