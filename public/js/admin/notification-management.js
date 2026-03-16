/* ═══ DATA ═══ */
const VENDORS = [
  {
    id: "VND-001",
    fn: "Juan",
    ln: "Dela Cruz",
    init: "JD",
    grad: "135deg,#1d4ed8,#7c3aed",
    stall: "#01",
    rate: 1500,
    phone: "+63 912 345 6789",
    email: "juan.delacruz@email.com",
  },
  {
    id: "VND-002",
    fn: "Pedro",
    ln: "Reyes",
    init: "PR",
    grad: "135deg,#b91c1c,#dc2626",
    stall: "#03",
    rate: 1800,
    phone: "+63 917 111 2222",
    email: "pedro.reyes@email.com",
  },
  {
    id: "VND-003",
    fn: "Maria",
    ln: "Santos",
    init: "MS",
    grad: "135deg,#0f766e,#0891b2",
    stall: "#07",
    rate: 1200,
    phone: "+63 920 333 4444",
    email: "maria.santos@email.com",
  },
  {
    id: "VND-004",
    fn: "Ana",
    ln: "Lim",
    init: "AL",
    grad: "135deg,#15803d,#16a34a",
    stall: "#19",
    rate: 1000,
    phone: "+63 918 555 6666",
    email: "ana.lim@email.com",
  },
  {
    id: "VND-005",
    fn: "Roberto",
    ln: "Go",
    init: "RG",
    grad: "135deg,#0891b2,#6366f1",
    stall: "#24",
    rate: 2000,
    phone: "+63 915 777 8888",
    email: "roberto.go@email.com",
  },
  {
    id: "VND-006",
    fn: "Carla",
    ln: "Bautista",
    init: "CB",
    grad: "135deg,#3b82f6,#6366f1",
    stall: "#06",
    rate: 1200,
    phone: "+63 912 987 6543",
    email: "carla.bautista@email.com",
  },
  {
    id: "VND-007",
    fn: "Luis",
    ln: "Villanueva",
    init: "LV",
    grad: "135deg,#d97706,#f59e0b",
    stall: "#11",
    rate: 1000,
    phone: "+63 917 234 5678",
    email: "luis.v@email.com",
  },
  {
    id: "VND-008",
    fn: "Grace",
    ln: "Cruz",
    init: "GC",
    grad: "135deg,#15803d,#0f766e",
    stall: "#09",
    rate: 1000,
    phone: "+63 918 333 4444",
    email: "grace.c@email.com",
  },
  {
    id: "VND-009",
    fn: "Diego",
    ln: "Cruz",
    init: "DC",
    grad: "135deg,#6d28d9,#db2777",
    stall: "#15",
    rate: 1200,
    phone: "+63 916 444 5555",
    email: "diego.c@email.com",
  },
];

const NOTIFICATIONS = [
  {
    id: "N001",
    type: "pay",
    title: "Payment Received — Juan Dela Cruz",
    sub: "₱1,500 rental fee for Stall #01 recorded via Direct Office. OR: 0123456",
    time: "10 mins ago",
    unread: true,
    tag: "pay",
  },
  {
    id: "N002",
    type: "warn",
    title: "Overdue Payment Alert",
    sub: "3 vendors have overdue payments totalling ₱4,000. Roberto Go, Ana Lim, Diego Cruz.",
    time: "1 hr ago",
    unread: true,
    tag: "warn",
  },
  {
    id: "N003",
    type: "rem",
    title: "Payment Reminders Sent",
    sub: "Automatic 1-day reminder dispatched to 4 vendors via SMS and Email.",
    time: "2 hrs ago",
    unread: true,
    tag: "rem",
  },
  {
    id: "N004",
    type: "app",
    title: "New Application Submitted",
    sub: "Ricardo Mendoza applied for Stall #22. Pre-screening completed.",
    time: "3 hrs ago",
    unread: true,
    tag: "app",
  },
  {
    id: "N005",
    type: "doc",
    title: "Documents Received — Gina Reyes",
    sub: "Complete document package submitted for Stall #12 application.",
    time: "5 hrs ago",
    unread: true,
    tag: "doc",
  },
  {
    id: "N006",
    type: "awd",
    title: "Stall Awarded — Pedro Santos",
    sub: "Pedro Santos selected as stall awardee for Stall #08 via raffle.",
    time: "Yesterday",
    unread: false,
    tag: "awd",
  },
  {
    id: "N007",
    type: "sys",
    title: "New Vendor Account Created",
    sub: "Carla Bautista account activated. Login credentials sent via SMS and Email.",
    time: "Yesterday",
    unread: false,
    tag: "sys",
  },
  {
    id: "N008",
    type: "pay",
    title: "Payment Confirmed — Pedro Reyes",
    sub: "₱1,800 recorded for March 2026. OR: 0123457 via Staff Collector.",
    time: "2 days ago",
    unread: false,
    tag: "pay",
  },
  {
    id: "N009",
    type: "rem",
    title: "Overdue Reminder Sent — Roberto Go",
    sub: "Daily overdue SMS sent to +63 915 777 8888 for Stall #24.",
    time: "2 days ago",
    unread: false,
    tag: "rem",
  },
  {
    id: "N010",
    type: "app",
    title: "Application Validated — Sara Reyes",
    sub: "Application validated and document submission link sent via email.",
    time: "3 days ago",
    unread: false,
    tag: "app",
  },
];

const SMS_LOG = [
  {
    id: "SMS-001",
    vendor: "Juan Dela Cruz",
    vid: "VND-001",
    phone: "+63 912 345 6789",
    msg: "Payment of ₱1,500 received. OR: 0123456. Thank you! — ARKIPAISI",
    channel: "SMS",
    status: "sent",
    time: "Mar 9, 10:12 AM",
  },
  {
    id: "SMS-002",
    vendor: "Juan Dela Cruz",
    vid: "VND-001",
    phone: "juan.delacruz@email.com",
    msg: "Payment Confirmation — March 2026",
    channel: "Email",
    status: "sent",
    time: "Mar 9, 10:12 AM",
  },
  {
    id: "SMS-003",
    vendor: "Ana Lim",
    vid: "VND-004",
    phone: "+63 918 555 6666",
    msg: "Dear Ana, your rental fee of ₱1,000 for Stall #19 is due Mar 10. — ARKIPAISI",
    channel: "SMS",
    status: "sent",
    time: "Mar 9, 8:00 AM",
  },
  {
    id: "SMS-004",
    vendor: "Roberto Go",
    vid: "VND-005",
    phone: "+63 915 777 8888",
    msg: "OVERDUE: Your rental fee of ₱2,000 for Stall #24 is overdue. Please pay immediately.",
    channel: "SMS",
    status: "sent",
    time: "Mar 9, 8:00 AM",
  },
  {
    id: "SMS-005",
    vendor: "Diego Cruz",
    vid: "VND-009",
    phone: "+63 916 444 5555",
    msg: "OVERDUE: Your rental fee of ₱1,200 for Stall #15 is overdue.",
    channel: "SMS",
    status: "failed",
    time: "Mar 9, 8:00 AM",
  },
  {
    id: "SMS-006",
    vendor: "Grace Cruz",
    vid: "VND-008",
    phone: "+63 918 333 4444",
    msg: "Dear Grace, your rental fee of ₱1,000 for Stall #09 is due today.",
    channel: "SMS",
    status: "sent",
    time: "Mar 9, 8:00 AM",
  },
  {
    id: "SMS-007",
    vendor: "Pedro Reyes",
    vid: "VND-002",
    phone: "+63 917 111 2222",
    msg: "Payment of ₱1,800 received. OR: 0123457. Thank you!",
    channel: "SMS",
    status: "sent",
    time: "Mar 8, 11:45 AM",
  },
  {
    id: "SMS-008",
    vendor: "Maria Santos",
    vid: "VND-003",
    phone: "+63 920 333 4444",
    msg: "Payment of ₱1,200 received. OR: 0123458. Thank you!",
    channel: "SMS",
    status: "sent",
    time: "Mar 7, 2:30 PM",
  },
  {
    id: "SMS-009",
    vendor: "Carla Bautista",
    vid: "VND-006",
    phone: "carla.bautista@email.com",
    msg: "Your ARKIPAISI vendor account has been created. Login: carla.bautista / Temp: arka2026",
    channel: "Email",
    status: "sent",
    time: "Mar 5, 9:10 AM",
  },
  {
    id: "SMS-010",
    vendor: "Luis Villanueva",
    vid: "VND-007",
    phone: "+63 917 234 5678",
    msg: "Dear Luis, reminder: rental fee of ₱1,000 due on Mar 10.",
    channel: "SMS",
    status: "sent",
    time: "Mar 8, 8:00 AM",
  },
  {
    id: "SMS-011",
    vendor: "Ana Lim",
    vid: "VND-004",
    phone: "ana.lim@email.com",
    msg: "Payment Reminder: ₱1,000 due Mar 10 for Stall #19.",
    channel: "Email",
    status: "failed",
    time: "Mar 9, 8:01 AM",
  },
  {
    id: "SMS-012",
    vendor: "Roberto Go",
    vid: "VND-005",
    phone: "roberto.go@email.com",
    msg: "OVERDUE NOTICE — ₱2,000 for Stall #24",
    channel: "Email",
    status: "sent",
    time: "Mar 9, 8:01 AM",
  },
];

const TICKETS = [
  {
    id: "TKT-001",
    vid: "VND-004",
    msg: "My stall has a water leak on the roof. It is damaging my goods.",
    sev: "high",
    status: "open",
    time: "Mar 9, 2:15 PM",
    replies: [
      {
        from: "vendor",
        msg: "My stall has a water leak on the roof. It is damaging my goods.",
        time: "Mar 9, 2:15 PM",
      },
      {
        from: "admin",
        msg: "Thank you for reporting this. We have forwarded the concern to our maintenance team. Please expect a visit tomorrow morning.",
        time: "Mar 9, 3:00 PM",
      },
    ],
  },
  {
    id: "TKT-002",
    vid: "VND-007",
    msg: "I cannot log into my vendor portal. Password reset is not working.",
    sev: "med",
    status: "prog",
    time: "Mar 8, 10:30 AM",
    replies: [
      {
        from: "vendor",
        msg: "I cannot log into my vendor portal. Password reset is not working.",
        time: "Mar 8, 10:30 AM",
      },
      {
        from: "admin",
        msg: "Hi Luis, we have reset your password manually. New temporary password: Luis2026#. Please change it upon login.",
        time: "Mar 8, 11:00 AM",
      },
      {
        from: "vendor",
        msg: "Thank you! I was able to log in successfully.",
        time: "Mar 8, 11:30 AM",
      },
    ],
  },
  {
    id: "TKT-003",
    vid: "VND-002",
    msg: "When will the new stall schedule for May be released?",
    sev: "low",
    status: "done",
    time: "Mar 7, 4:00 PM",
    replies: [
      {
        from: "vendor",
        msg: "When will the new stall schedule for May be released?",
        time: "Mar 7, 4:00 PM",
      },
      {
        from: "admin",
        msg: "The May schedule will be posted on April 15. We will send you an SMS and email notification.",
        time: "Mar 7, 4:30 PM",
      },
    ],
  },
  {
    id: "TKT-004",
    vid: "VND-005",
    msg: "There is no electricity in my section since yesterday afternoon.",
    sev: "urg",
    status: "open",
    time: "Mar 9, 9:00 AM",
    replies: [
      {
        from: "vendor",
        msg: "There is no electricity in my section since yesterday afternoon.",
        time: "Mar 9, 9:00 AM",
      },
    ],
  },
  {
    id: "TKT-005",
    vid: "VND-008",
    msg: "Can I request to move to a different stall location?",
    sev: "low",
    status: "open",
    time: "Mar 6, 11:00 AM",
    replies: [
      {
        from: "vendor",
        msg: "Can I request to move to a different stall location?",
        time: "Mar 6, 11:00 AM",
      },
    ],
  },
];

const REMINDER_QUEUE = [
  {
    vendor: "Ana Lim",
    vid: "VND-004",
    stall: "#19",
    phone: "+63 918 555 6666",
    amount: "₱1,000",
    type: "Due Today",
    channel: "SMS + Email",
    scheduled: "Mar 10, 8:00 AM",
  },
  {
    vendor: "Grace Cruz",
    vid: "VND-008",
    stall: "#09",
    phone: "+63 918 333 4444",
    amount: "₱1,000",
    type: "Due Today",
    channel: "SMS + Email",
    scheduled: "Mar 10, 8:00 AM",
  },
  {
    vendor: "Roberto Go",
    vid: "VND-005",
    stall: "#24",
    phone: "+63 915 777 8888",
    amount: "₱2,000",
    type: "Overdue",
    channel: "SMS",
    scheduled: "Mar 10, 8:00 AM",
  },
  {
    vendor: "Diego Cruz",
    vid: "VND-009",
    stall: "#15",
    phone: "+63 916 444 5555",
    amount: "₱1,200",
    type: "Overdue",
    channel: "SMS",
    scheduled: "Mar 10, 8:00 AM",
  },
  {
    vendor: "Ana Lim",
    vid: "VND-004",
    stall: "#19",
    phone: "ana.lim@email.com",
    amount: "₱1,000",
    type: "Overdue (Feb)",
    channel: "Email",
    scheduled: "Mar 10, 8:00 AM",
  },
];

const SMS_CMDS = [
  {
    kw: "BAL",
    desc: "Check current rental balance",
    ex: "Reply: Your balance is ₱1,000. Due: Mar 10.",
  },
  {
    kw: "DUE",
    desc: "Check next due date",
    ex: "Reply: Next due: March 10, 2026.",
  },
  {
    kw: "PAY",
    desc: "View payment history",
    ex: "Reply: Last payment: ₱1,000 on Feb 5.",
  },
  {
    kw: "STALL",
    desc: "View stall information",
    ex: "Reply: Stall #19, Section B, Area: 4sqm.",
  },
  {
    kw: "STATUS",
    desc: "Check account status",
    ex: "Reply: Account: Active. Balance: ₱1,000 due.",
  },
  {
    kw: "HELP",
    desc: "List all available commands",
    ex: "Reply: BAL, DUE, PAY, STALL, STATUS, HELP",
  },
];

const NOTIF_ICO = {
  pay: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  app: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>',
  rem: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>',
  sys: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></svg>',
  doc: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  warn: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/></svg>',
  awd: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="8" r="7"/><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/></svg>',
};

let SB_IS_OPEN = window.innerWidth >= 768,
  DARK = false,
  CTAB = "feed";
let CURTICKET = null;

/* ══ SIDEBAR ══ */
function openSB() {
  SB_IS_OPEN = true;
  document.getElementById("sb").style.transform = "translateX(0)";
  if (window.innerWidth < 768) {
    document.getElementById("veil").style.display = "block";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("veil").style.display = "none";
    document.getElementById("main").style.marginLeft = "var(--sidebar-w)";
  }
}
function closeSB() {
  SB_IS_OPEN = false;
  document.getElementById("sb").style.transform =
    "translateX(calc(-1 * var(--sidebar-w)))";
  document.getElementById("veil").style.display = "none";
  document.getElementById("main").style.marginLeft = "0";
}
function toggleSB() {
  if (SB_IS_OPEN) closeSB();
  else openSB();
}
(function () {
  if (window.innerWidth < 768) closeSB();
  else openSB();
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      document.getElementById("veil").style.display = "none";
      if (SB_IS_OPEN)
        document.getElementById("main").style.marginLeft = "var(--sidebar-w)";
    } else {
      document.getElementById("main").style.marginLeft = "0";
      if (SB_IS_OPEN) document.getElementById("veil").style.display = "block";
    }
  });
})();

/* ══ THEME ══ */
function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
  document.getElementById("themeIco").innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ══ TABS ══ */
function setTab(id, btn) {
  CTAB = id;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  btn.classList.add("on");
  ["feed", "sms", "reminders", "inquiries", "commands"].forEach((t) => {
    document.getElementById("tab-" + t).style.display =
      t === id ? "block" : "none";
  });
  if (id === "sms") renderSMSLog();
  if (id === "reminders") renderReminderQueue();
  if (id === "inquiries") renderTickets();
  if (id === "commands") renderCommands();
}

/* ══ NOTIFICATION FEED ══ */
function renderFeed() {
  const q = (document.getElementById("feed-srch").value || "").toLowerCase();
  const type = document.getElementById("feed-type").value;
  const readF = document.getElementById("feed-read").value;
  const list = NOTIFICATIONS.filter((n) => {
    const mq =
      !q ||
      n.title.toLowerCase().includes(q) ||
      n.sub.toLowerCase().includes(q);
    const mt = !type || n.type === type;
    const mr =
      !readF ||
      (readF === "unread" && n.unread) ||
      (readF === "read" && !n.unread);
    return mq && mt && mr;
  });
  const feed = document.getElementById("notif-feed");
  feed.innerHTML =
    list
      .map(
        (n) => `
    <div class="notif-item${n.unread ? " unread" : ""}" onclick="markRead('${
          n.id
        }')">
      <div class="ni-ico ${n.type}">${NOTIF_ICO[n.type] || ""}</div>
      <div class="ni-body">
        <div class="ni-title">${n.title}</div>
        <div class="ni-sub">${n.sub}</div>
        <div class="ni-meta">
          <span class="ni-time">${n.time}</span>
          <span class="ni-tag ${n.tag}">${
          n.tag === "pay"
            ? "Payment"
            : n.tag === "app"
            ? "Application"
            : n.tag === "rem"
            ? "Reminder"
            : n.tag === "doc"
            ? "Document"
            : n.tag === "awd"
            ? "Award"
            : n.tag === "sys"
            ? "System"
            : "Alert"
        }</span>
        </div>
      </div>
      <div class="ni-r">
        ${n.unread ? '<div class="ni-dot"></div>' : ""}
      </div>
    </div>`
      )
      .join("") ||
    '<div style="padding:32px;text-align:center;color:var(--t3);font-size:13px">No notifications found</div>';
  document.getElementById("feed-info").textContent = `${
    list.length
  } notification${list.length !== 1 ? "s" : ""} · ${
    NOTIFICATIONS.filter((n) => n.unread).length
  } unread`;
}

function markRead(id) {
  const n = NOTIFICATIONS.find((x) => x.id === id);
  if (n) n.unread = false;
  renderFeed();
}

function markAllRead() {
  NOTIFICATIONS.forEach((n) => (n.unread = false));
  renderFeed();
  showToast("All notifications marked as read", "g");
}

/* ══ SMS LOG ══ */
function renderSMSLog() {
  const failed = SMS_LOG.filter((s) => s.status === "failed").length;
  const foot = document.getElementById("sms-foot");
  if (foot)
    foot.innerHTML = `Showing ${SMS_LOG.length} records · ${
      failed > 0
        ? `<span style="color:var(--rd);font-weight:700">${failed} failed</span>`
        : '<span style="color:var(--gr);font-weight:700">All delivered ✓</span>'
    }`;

  const tbody = document.createElement("tbody");
  SMS_LOG.forEach((s) => {
    const v = VENDORS.find((x) => x.id === s.vid) || {};
    const isFailed = s.status === "failed";

    const tr = document.createElement("tr");
    if (isFailed) tr.style.background = "var(--rdl)";

    // avatar cell
    tr.innerHTML = `
      <td class="mono">${s.id}</td>
      <td><div style="display:flex;align-items:center;gap:7px">
        <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(${
          v.grad || "135deg,#ccc,#aaa"
        });display:grid;place-items:center;font-size:9px;font-weight:700;color:#fff;flex-shrink:0">${
      v.init || "?"
    }</div>
        <div><div style="font-size:12.5px;font-weight:600">${
          s.vendor
        }</div><div style="font-size:10px;color:var(--t3)">${
      v.id || ""
    }</div></div>
      </div></td>
      <td><span style="display:inline-flex;align-items:center;gap:4px;padding:3px 8px;border-radius:5px;font-size:11px;font-weight:700;background:${
        s.channel === "SMS" ? "var(--vis)" : "var(--acs)"
      };color:${s.channel === "SMS" ? "var(--vi)" : "var(--ac)"}">${
      s.channel
    }</span></td>
      <td class="mono" style="font-size:11.5px;color:var(--t2)">${s.phone}</td>
      <td style="font-size:12px;color:var(--t2);max-width:240px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap" title="${
        s.msg
      }">${s.msg}</td>
      <td><span class="sbdg ${s.status}" id="status-${s.id}">${
      s.status === "sent"
        ? "Sent"
        : s.status === "failed"
        ? "Failed"
        : s.status === "pending"
        ? "Pending"
        : "Scheduled"
    }</span></td>
      <td style="font-size:11.5px;color:var(--t3);white-space:nowrap" id="time-${
        s.id
      }">${s.time}</td>
      <td id="action-${s.id}"></td>`;

    tbody.appendChild(tr);

    // attach resend button via real DOM if failed
    if (isFailed) {
      const btn = document.createElement("button");
      btn.className = "btn ro xs";
      btn.style.whiteSpace = "nowrap";
      btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg> Resend`;
      btn.addEventListener("click", function () {
        resendSMS(s.id, btn, tr);
      });
      tr.querySelector("#action-" + s.id).appendChild(btn);
    } else {
      tr.querySelector(
        "#action-" + s.id
      ).innerHTML = `<span style="font-size:11px;color:var(--t3)">—</span>`;
    }
  });

  const wrap = document.getElementById("sms-tbl-wrap");
  if (!wrap) return;
  const tbl = document.createElement("table");
  tbl.className = "stbl";
  tbl.innerHTML = `<thead><tr><th>ID</th><th>Vendor</th><th>Channel</th><th>Recipient</th><th>Message Preview</th><th>Status</th><th>Time</th><th>Action</th></tr></thead>`;
  tbl.appendChild(tbody);
  const div = document.createElement("div");
  div.className = "tbl-wrap";
  div.appendChild(tbl);
  wrap.innerHTML = "";
  wrap.appendChild(div);
}

/* ══ RESEND FAILED SMS ══ */
function resendSMS(id, btn, tr) {
  const entry = SMS_LOG.find((s) => s.id === id);
  if (!entry || !btn) return;

  // show spinner, disable button
  btn.disabled = true;
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="animation:spin .8s linear infinite"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg> Sending…`;

  setTimeout(() => {
    // mark as sent
    const now = new Date().toLocaleString("en-US", {
      month: "short",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
    entry.status = "sent";
    entry.time = now + " (resent)";

    // update row in-place: clear red bg, swap badge, swap time, swap action cell
    if (tr) tr.style.background = "";
    const statusEl = document.getElementById("status-" + id);
    if (statusEl) {
      statusEl.className = "sbdg sent";
      statusEl.textContent = "Sent";
    }
    const timeEl = document.getElementById("time-" + id);
    if (timeEl) timeEl.textContent = entry.time;
    const actionEl = document.getElementById("action-" + id);
    if (actionEl)
      actionEl.innerHTML = `<span style="font-size:11px;color:var(--t3)">—</span>`;

    // update footer count
    const failed = SMS_LOG.filter((s) => s.status === "failed").length;
    const foot = document.getElementById("sms-foot");
    if (foot)
      foot.innerHTML = `Showing ${SMS_LOG.length} records · ${
        failed > 0
          ? `<span style="color:var(--rd);font-weight:700">${failed} failed</span>`
          : '<span style="color:var(--gr);font-weight:700">All delivered ✓</span>'
      }`;

    showToast(`${entry.channel} resent to ${entry.vendor} — Delivered ✓`, "g");
  }, 1400);
}

/* ══ RESEND ALL FAILED — by date ══ */
function getDateKey(timeStr) {
  // extract "Mar 9" or "Mar 10" from strings like "Mar 9, 8:00 AM"
  return timeStr.split(",")[0].trim();
}

function openResendAllModal() {
  const failed = SMS_LOG.filter((s) => s.status === "failed");

  // update "Resend All" label
  document.getElementById("resend-all-label").textContent = `${
    failed.length
  } failed message${failed.length !== 1 ? "s" : ""}`;

  // toggle button visibility — hide if 0 failed
  const headerBtn = document.getElementById("resend-all-btn");
  if (headerBtn) headerBtn.style.display = failed.length > 0 ? "" : "none";

  // group by date
  const groups = {};
  failed.forEach((s) => {
    const dk = getDateKey(s.time);
    if (!groups[dk]) groups[dk] = [];
    groups[dk].push(s);
  });

  const container = document.getElementById("resend-date-groups");
  container.innerHTML = "";

  if (Object.keys(groups).length === 0) {
    container.innerHTML = `<div style="padding:14px;text-align:center;color:var(--gr);font-size:13px;font-weight:600;background:var(--grl);border:1px solid var(--grs);border-radius:8px">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14" style="margin-right:5px"><polyline points="9 11 12 14 22 4"/></svg>
      No failed messages — all delivered!
    </div>`;
    document.getElementById("resend-all-confirm-btn").disabled = true;
    return;
  }

  document.getElementById("resend-all-confirm-btn").disabled = false;

  // sort dates newest first (simple string sort works for "Mar 9", "Mar 10" etc)
  const sortedDates = Object.keys(groups).sort((a, b) => {
    const months = [
      "Jan",
      "Feb",
      "Mar",
      "Apr",
      "May",
      "Jun",
      "Jul",
      "Aug",
      "Sep",
      "Oct",
      "Nov",
      "Dec",
    ];
    const parse = (d) => {
      const p = d.split(" ");
      return months.indexOf(p[0]) * 31 + parseInt(p[1] || 0);
    };
    return parse(b) - parse(a);
  });

  sortedDates.forEach((dk) => {
    const items = groups[dk];
    const smsCount = items.filter((x) => x.channel === "SMS").length;
    const emailCount = items.filter((x) => x.channel === "Email").length;
    const vendors = [...new Set(items.map((x) => x.vendor))];

    const card = document.createElement("div");
    card.style.cssText =
      "background:var(--s2);border:1.5px solid var(--brd);border-radius:9px;overflow:hidden";
    card.innerHTML = `
      <div style="padding:11px 13px;display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap">
        <div style="display:flex;align-items:center;gap:10px">
          <div style="width:36px;height:36px;border-radius:8px;background:var(--rdl);display:grid;place-items:center;flex-shrink:0">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--rd)" stroke-width="2" width="15" height="15"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
          </div>
          <div>
            <div style="font-size:13px;font-weight:800;color:var(--rd)">${dk}</div>
            <div style="font-size:11px;color:var(--t3);margin-top:1px">
              ${items.length} failed &nbsp;·&nbsp;
              ${
                smsCount > 0
                  ? `<span style="color:var(--vi);font-weight:600">${smsCount} SMS</span>`
                  : ""
              } 
              ${smsCount > 0 && emailCount > 0 ? " + " : ""}
              ${
                emailCount > 0
                  ? `<span style="color:var(--ac);font-weight:600">${emailCount} Email</span>`
                  : ""
              }
            </div>
          </div>
        </div>
        <button class="btn ro xs" data-datekey="${dk}" style="flex-shrink:0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>
          Resend ${items.length}
        </button>
      </div>
      <div style="padding:0 13px 10px;display:flex;flex-wrap:wrap;gap:5px">
        ${vendors
          .map(
            (v) =>
              `<span style="font-size:11px;font-weight:600;padding:2px 8px;background:var(--surf);border:1px solid var(--brd);border-radius:10px;color:var(--t2)">${v}</span>`
          )
          .join("")}
      </div>`;

    // bind the per-date resend button properly via addEventListener
    const btn = card.querySelector("button[data-datekey]");
    btn.addEventListener("click", function () {
      resendByDate(dk, btn);
    });

    container.appendChild(card);
  });
}

function resendByDate(dateKey, btn) {
  const targets = SMS_LOG.filter(
    (s) => s.status === "failed" && getDateKey(s.time) === dateKey
  );
  if (!targets.length) return;

  btn.disabled = true;
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11" style="animation:spin .8s linear infinite"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg> Sending…`;

  const now = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  setTimeout(() => {
    targets.forEach((s) => {
      s.status = "sent";
      s.time = now + " (resent)";
    });
    renderSMSLog();
    openResendAllModal(); // refresh modal groups
    showToast(
      `${targets.length} message${
        targets.length !== 1 ? "s" : ""
      } from ${dateKey} resent — All delivered ✓`,
      "g"
    );
  }, 1200 + targets.length * 180);
}

function resendAllFailed() {
  const targets = SMS_LOG.filter((s) => s.status === "failed");
  if (!targets.length) return;

  const confirmBtn = document.getElementById("resend-all-confirm-btn");
  confirmBtn.disabled = true;
  confirmBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12" style="animation:spin .8s linear infinite"><path d="M21 12a9 9 0 1 1-6.22-8.56"/></svg> Sending…`;

  // collect date breakdown BEFORE marking as sent
  const dateGroups = {};
  targets.forEach((s) => {
    const dk = getDateKey(s.time);
    if (!dateGroups[dk]) dateGroups[dk] = [];
    dateGroups[dk].push(s);
  });

  const now = new Date().toLocaleString("en-US", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  setTimeout(() => {
    targets.forEach((s) => {
      s.status = "sent";
      s.time = now + " (resent)";
    });
    renderSMSLog();

    // hide header button since no more failures
    const headerBtn = document.getElementById("resend-all-btn");
    if (headerBtn) headerBtn.style.display = "none";

    // show success summary inside modal instead of immediately closing
    const container = document.getElementById("resend-date-groups");
    const confirmSection = document.querySelector(
      "#resendAllModal .mbdy > div:last-of-type"
    );

    // replace date groups with a sent summary
    const dateLines = Object.entries(dateGroups)
      .map(([dk, items]) => {
        const sms = items.filter((x) => x.channel === "SMS").length;
        const email = items.filter((x) => x.channel === "Email").length;
        return `<div style="display:flex;align-items:center;justify-content:space-between;padding:9px 12px;border-bottom:1px solid var(--brd2)">
        <div style="display:flex;align-items:center;gap:8px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--gr)" stroke-width="2" width="13" height="13"><polyline points="9 11 12 14 22 4"/></svg>
          <span style="font-size:13px;font-weight:700;color:var(--t1)">${dk}</span>
        </div>
        <div style="display:flex;gap:5px;align-items:center">
          ${
            sms > 0
              ? `<span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:10px;background:var(--vis);color:var(--vi)">${sms} SMS</span>`
              : ""
          }
          ${
            email > 0
              ? `<span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:10px;background:var(--acs);color:var(--ac)">${email} Email</span>`
              : ""
          }
          <span style="font-size:11px;font-weight:700;padding:2px 7px;border-radius:10px;background:var(--grs);color:var(--gr)">Delivered ✓</span>
        </div>
      </div>`;
      })
      .join("");

    container.innerHTML = `
      <div style="background:var(--grl);border:1.5px solid var(--grs);border-radius:9px;overflow:hidden">
        <div style="padding:11px 13px;border-bottom:1px solid var(--grs);display:flex;align-items:center;gap:8px">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--gr)" stroke-width="2" width="16" height="16"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>
          <span style="font-size:13px;font-weight:800;color:var(--gr)">${
            targets.length
          } message${targets.length !== 1 ? "s" : ""} resent successfully</span>
          <span style="font-size:11px;color:var(--t3);margin-left:auto">${now}</span>
        </div>
        ${dateLines}
      </div>`;

    // swap "Resend All" section to a done state
    document.getElementById("resend-all-label").textContent =
      "All messages delivered";
    document.getElementById("resend-all-label").style.color = "var(--gr)";
    confirmBtn.disabled = true;
    confirmBtn.className = "btn su sm";
    confirmBtn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><polyline points="9 11 12 14 22 4"/></svg> Done`;

    showToast(
      `${targets.length} failed message${
        targets.length !== 1 ? "s" : ""
      } resent — All delivered ✓`,
      "g"
    );
  }, 1400 + targets.length * 160);
}

/* ══ REMINDER QUEUE ══ */
function renderReminderQueue() {
  const wrap = document.getElementById("rem-tbl-wrap");
  if (!wrap) return;

  const rows = REMINDER_QUEUE.map((r, ri) => {
    const v = VENDORS.find((x) => x.id === r.vid) || {};
    const grad = v.grad || "135deg,#ccc,#aaa";
    const typeCol = r.type.includes("Overdue")
      ? '<span class="sbdg failed">' + r.type + "</span>"
      : '<span class="sbdg scheduled">' + r.type + "</span>";
    return (
      "<tr>" +
      '<td><div style="display:flex;align-items:center;gap:7px">' +
      '<div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(' +
      grad +
      ');display:grid;place-items:center;font-size:9px;font-weight:700;color:#fff;flex-shrink:0">' +
      (v.init || "?") +
      "</div>" +
      '<div><div style="font-size:12.5px;font-weight:700">' +
      r.vendor +
      "</div>" +
      '<div style="font-size:10.5px;color:var(--t3)">' +
      (v.id || "") +
      "</div></div>" +
      "</div></td>" +
      '<td class="mono" style="font-weight:700">' +
      r.stall +
      "</td>" +
      '<td style="font-size:11.5px;color:var(--t2);font-family:DM Mono,monospace">' +
      r.phone +
      "</td>" +
      '<td class="mono" style="font-weight:700;color:var(--rd)">' +
      r.amount +
      "</td>" +
      "<td>" +
      typeCol +
      "</td>" +
      '<td><span style="font-size:11px;font-weight:600;color:var(--t2)">' +
      r.channel +
      "</span></td>" +
      '<td style="font-size:11.5px;color:var(--t3);white-space:nowrap">' +
      r.scheduled +
      "</td>" +
      '<td><button class="btn gh xs" onclick="sendReminder(' +
      ri +
      ')">Send Now</button></td>' +
      "</tr>"
    );
  }).join("");

  wrap.innerHTML =
    '<div class="tbl-wrap">' +
    '<table class="stbl">' +
    "<thead><tr>" +
    "<th>Vendor</th><th>Stall</th><th>Contact</th>" +
    "<th>Amount</th><th>Type</th><th>Channel</th>" +
    "<th>Scheduled</th><th>Action</th>" +
    "</tr></thead>" +
    "<tbody>" +
    rows +
    "</tbody>" +
    "</table></div>" +
    '<div style="padding:9px 14px;background:var(--s2);border-top:1px solid var(--brd);font-size:11.5px;color:var(--t3)">' +
    REMINDER_QUEUE.length +
    " reminders scheduled" +
    "</div>";
}
function sendReminder(ri) {
  var r = REMINDER_QUEUE[ri];
  if (r) showToast("Reminder sent to " + r.vendor, "a");
}
/* ══ INQUIRY TICKETS ══ */
function renderTickets() {
  const q = (document.getElementById("tkt-srch").value || "").toLowerCase();
  const sf = document.getElementById("tkt-filter").value;
  const sv = document.getElementById("tkt-sev").value;
  const list = TICKETS.filter((t) => {
    const v = VENDORS.find((x) => x.id === t.vid) || {};
    const name = `${v.fn || ""} ${v.ln || ""}`.toLowerCase();
    const mq =
      !q ||
      name.includes(q) ||
      t.msg.toLowerCase().includes(q) ||
      t.id.toLowerCase().includes(q);
    const ms = !sf || t.status === sf;
    const mv = !sv || t.sev === sv;
    return mq && ms && mv;
  });
  const sevL = { low: "Low", med: "Medium", high: "High", urg: "Urgent" };
  const stL = { open: "Open", prog: "In Progress", done: "Resolved" };
  document.getElementById("tkt-list").innerHTML =
    list
      .map((t) => {
        const v = VENDORS.find((x) => x.id === t.vid) || {
          fn: "?",
          ln: "",
          init: "?",
          grad: "135deg,#ccc,#aaa",
          stall: "—",
        };
        const unread = t.replies.filter((r) => r.from === "vendor").length;
        return `<div class="tkt-item" onclick="openTicket('${t.id}')">
      <div class="tkt-av" style="background:linear-gradient(${v.grad})">${
          v.init
        }</div>
      <div class="tkt-body">
        <div class="tkt-top">
          <span class="tkt-name">${v.fn} ${v.ln}</span>
          <span class="tkt-id">${t.id}</span>
        </div>
        <div class="tkt-msg">${t.msg}</div>
        <div class="tkt-meta">
          <span class="tkt-time">${t.time}</span>
          <span class="sev ${t.sev}">${sevL[t.sev]}</span>
          <span class="tkt-st ${t.status}">${stL[t.status]}</span>
          <span style="font-size:11px;color:var(--t3)">Stall ${v.stall}</span>
        </div>
      </div>
      <div class="tkt-r">
        <span style="font-size:11px;color:var(--t3)">${t.replies.length} msg${
          t.replies.length !== 1 ? "s" : ""
        }</span>
        ${
          t.status !== "done"
            ? `<span class="tkt-unread">${t.replies.length}</span>`
            : ""
        }
      </div>
    </div>`;
      })
      .join("") ||
    '<div style="padding:28px;text-align:center;color:var(--t3);font-size:13px">No tickets found</div>';
}

/* ══ OPEN TICKET MODAL ══ */
function openTicket(tid) {
  const t = TICKETS.find((x) => x.id === tid);
  CURTICKET = t;
  const v = VENDORS.find((x) => x.id === t.vid) || {};
  const sevL = { low: "Low", med: "Medium", high: "High", urg: "Urgent" };
  const stL = { open: "Open", prog: "In Progress", done: "Resolved" };
  document.getElementById(
    "tkt-modal-ttl"
  ).textContent = `${t.id} — ${v.fn} ${v.ln}`;
  // header
  document.getElementById("tkt-modal-hdr").innerHTML = `
    <div style="display:flex;align-items:center;gap:9px">
      <div style="width:32px;height:32px;border-radius:50%;background:linear-gradient(${
        v.grad
      });display:grid;place-items:center;font-size:11px;font-weight:700;color:#fff;flex-shrink:0">${
    v.init
  }</div>
      <div><div style="font-size:13px;font-weight:700">${v.fn} ${
    v.ln
  }</div><div style="font-size:11px;color:var(--t3)">Stall ${v.stall} · ${
    v.phone
  }</div></div>
      <span class="tkt-st ${t.status}" style="margin-left:auto">${
    stL[t.status]
  }</span>
      <span class="sev ${t.sev}">${sevL[t.sev]}</span>
    </div>`;
  // info sidebar
  document.getElementById("ti-id").textContent = t.id;
  document.getElementById("ti-vendor").textContent = `${v.fn} ${v.ln}`;
  document.getElementById("ti-stall").textContent = v.stall;
  document.getElementById("ti-date").textContent = t.time;
  // severity buttons
  document.querySelectorAll(".sev-opt").forEach((o) => {
    o.className = "sev-opt";
    const s = o.textContent.trim().toLowerCase().replace(" ", "");
    const key =
      s === "low"
        ? "low"
        : s === "medium"
        ? "med"
        : s === "high"
        ? "high"
        : "urg";
    if (key === t.sev) o.classList.add("sel-" + key);
  });
  // status buttons
  ["open", "prog", "done"].forEach((s) => {
    document.getElementById("st-" + s).classList.remove("sel");
  });
  document.getElementById("st-" + t.status).classList.add("sel");
  // messages
  renderTicketMsgs(t);
  openM("ticketModal");
}

function renderTicketMsgs(t) {
  document.getElementById("tkt-msgs").innerHTML = t.replies
    .map(
      (r) => `
    <div>
      <div class="msg-meta${r.from === "admin" ? " r" : ""}">${
        r.from === "admin" ? "Admin — Torres" : "Vendor · " + r.time
      }</div>
      <div style="display:flex;justify-content:${
        r.from === "admin" ? "flex-end" : "flex-start"
      }">
        <div class="msg-bubble ${r.from}">${r.msg}</div>
      </div>
      ${
        r.from === "admin"
          ? ""
          : '<div class="msg-meta" style="font-size:10px;margin-top:2px">' +
            r.time +
            "</div>"
      }
    </div>`
    )
    .join("");
  const mc = document.getElementById("tkt-msgs");
  mc.scrollTop = mc.scrollHeight;
}

function sendTicketReply() {
  const txt = document.getElementById("tkt-reply-txt").value.trim();
  if (!txt || !CURTICKET) return;
  const now = new Date().toLocaleString("en-PH", {
    month: "short",
    day: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  });
  CURTICKET.replies.push({ from: "admin", msg: txt, time: now });
  if (CURTICKET.status === "open") CURTICKET.status = "prog";
  document.getElementById("tkt-reply-txt").value = "";
  renderTicketMsgs(CURTICKET);
  // update status button
  ["open", "prog", "done"].forEach((s) => {
    document.getElementById("st-" + s).classList.remove("sel");
  });
  document.getElementById("st-" + CURTICKET.status).classList.add("sel");
  renderTickets();
  showToast("Reply sent to vendor", "g");
}

function setSev(el, s) {
  document
    .querySelectorAll(".sev-opt")
    .forEach((o) => (o.className = "sev-opt"));
  el.classList.add("sel-" + s);
  if (CURTICKET) CURTICKET.sev = s;
  renderTickets();
}

function setTktSt(s) {
  ["open", "prog", "done"].forEach((st) => {
    document.getElementById("st-" + st).classList.remove("sel");
  });
  document.getElementById("st-" + s).classList.add("sel");
  if (CURTICKET) CURTICKET.status = s;
  renderTickets();
  const lbl = {
    open: "Set to Open",
    prog: "Marked In Progress",
    done: "Ticket Resolved",
  };
  showToast(lbl[s] || "Status updated", "g");
}

/* ══ SMS COMMANDS ══ */
function renderCommands() {
  document.getElementById("cmd-grid").innerHTML = SMS_CMDS.map(
    (c) => `
    <div class="cmd-card">
      <div class="cmd-kw">${c.kw}</div>
      <div class="cmd-desc">${c.desc}</div>
      <div class="cmd-ex">${c.ex}</div>
    </div>`
  ).join("");
  // seed sim messages
  if (!document.getElementById("sms-sim-msgs").children.length) {
    addSimMsg("vendor", "HELP");
    addSimMsg(
      "system",
      "Available commands: BAL, DUE, PAY, STALL, STATUS, HELP"
    );
    addSimMsg("vendor", "BAL");
    addSimMsg(
      "system",
      "Your current balance is ₱1,000. Due Date: Mar 10, 2026."
    );
  }
}

function addSimMsg(from, msg) {
  const wrap = document.getElementById("sms-sim-msgs");
  const isVendor = from === "vendor";
  const div = document.createElement("div");
  div.style.cssText = `display:flex;justify-content:${
    isVendor ? "flex-end" : "flex-start"
  }`;
  div.innerHTML = `<div style="max-width:80%;padding:8px 12px;border-radius:10px;font-size:12.5px;font-family:'DM Mono',monospace;${
    isVendor
      ? "background:var(--ac);color:#fff;border-radius:10px 10px 3px 10px"
      : "background:var(--s2);border:1px solid var(--brd);border-radius:10px 10px 10px 3px"
  }">${msg}</div>`;
  wrap.appendChild(div);
  wrap.scrollTop = wrap.scrollHeight;
}

function sendSimSMS() {
  const inp = document.getElementById("sms-sim-input");
  const msg = inp.value.trim();
  if (!msg) return;
  addSimMsg("vendor", msg);
  inp.value = "";
  // check for keyword
  const key = msg.toUpperCase().trim();
  const cmd = SMS_CMDS.find((c) => c.kw === key);
  setTimeout(() => {
    if (cmd) {
      addSimMsg("system", cmd.ex.replace("Reply: ", ""));
    } else {
      // freestyle — becomes a ticket
      addSimMsg(
        "system",
        "Your message has been received and converted into an Inquiry Ticket (" +
          generateTktId() +
          "). Our team will respond shortly."
      );
      const newTkt = {
        id: generateTktId(),
        vid: "VND-004",
        msg,
        sev: "low",
        status: "open",
        time: new Date().toLocaleString("en-PH", {
          month: "short",
          day: "numeric",
          hour: "2-digit",
          minute: "2-digit",
        }),
        replies: [
          {
            from: "vendor",
            msg,
            time: new Date().toLocaleString("en-PH", {
              month: "short",
              day: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ],
      };
      TICKETS.unshift(newTkt);
      if (CTAB === "inquiries") renderTickets();
    }
  }, 600);
}

let tktCounter = 6;
function generateTktId() {
  return "TKT-00" + tktCounter++;
}

/* ══ SEND NOTIFICATION MODAL ══ */
function pickNT(el) {
  document
    .querySelectorAll(".nt-opt")
    .forEach((o) => o.classList.remove("sel"));
  el.classList.add("sel");
}

function updateRecipientChips() {
  const val = document.getElementById("send-rcpt").value;
  const preview = document.getElementById("rcpt-preview");
  let chips = [];
  if (val === "all") chips = VENDORS.map((v) => `${v.fn} ${v.ln}`);
  else if (val === "overdue") chips = ["Roberto Go", "Ana Lim", "Diego Cruz"];
  else if (val === "pending") chips = ["Ana Lim", "Grace Cruz"];
  else chips = ["— select specific vendor —"];
  preview.innerHTML =
    chips
      .slice(0, 6)
      .map(
        (n) =>
          `<span class="rcpt-chip"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>${n}</span>`
      )
      .join("") +
    (chips.length > 6
      ? `<span style="font-size:11.5px;color:var(--t3);padding:3px 5px">+${
          chips.length - 6
        } more</span>`
      : "");
}

function sendNotification() {
  const msg = document.getElementById("send-msg").value.trim();
  if (!msg) {
    alert("Please enter a message.");
    return;
  }
  closeM("sendModal");
  const rcptEl = document.getElementById("send-rcpt");
  const rcptCount = rcptEl.options[rcptEl.selectedIndex].text;
  showToast(`Notification sent to ${rcptCount}`, "g");
  // add to feed
  NOTIFICATIONS.unshift({
    id: "N" + (NOTIFICATIONS.length + 1).toString().padStart(3, "0"),
    type: "sys",
    title: "Notification Sent by Admin",
    sub: msg.slice(0, 80) + (msg.length > 80 ? "…" : ""),
    time: "Just now",
    unread: false,
    tag: "sys",
  });
  if (CTAB === "feed") renderFeed();
}

/* ══ MODALS ══ */
function openM(id) {
  document.getElementById(id).classList.add("open");
}
function closeM(id) {
  document.getElementById(id).classList.remove("open");
}
document.querySelectorAll(".mbg").forEach((b) =>
  b.addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  })
);

/* ══ TOAST ══ */
function showToast(msg, type = "g") {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.cssText =
      "position:fixed;bottom:24px;right:24px;z-index:200;padding:11px 18px;border-radius:9px;font-size:13px;font-weight:600;box-shadow:0 8px 32px rgba(0,0,0,.25);transition:opacity .3s;pointer-events:none;display:flex;align-items:center;gap:8px;max-width:340px";
    document.body.appendChild(t);
  }
  const cols = {
    g: "background:var(--gr);color:#fff",
    r: "background:var(--rd);color:#fff",
    a: "background:var(--am);color:#fff",
  };
  t.style.cssText += ";" + (cols[type] || cols.g);
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._tid);
  t._tid = setTimeout(() => {
    t.style.opacity = "0";
  }, 3200);
}

/* ══ INIT ══ */
renderFeed();
updateRecipientChips();
