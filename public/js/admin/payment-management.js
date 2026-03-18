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

const PAYMENTS = [
  {
    id: "PAY-001",
    vid: "VND-001",
    or: "0123456",
    amount: 1500,
    date: "Mar 9, 2026",
    period: "March 2026",
    method: "portal",
    collector: "System",
    status: "paid",
  },
  {
    id: "PAY-002",
    vid: "VND-002",
    or: "0123457",
    amount: 1800,
    date: "Mar 8, 2026",
    period: "March 2026",
    method: "collector",
    collector: "Staff R. Diaz",
    status: "paid",
  },
  {
    id: "PAY-003",
    vid: "VND-003",
    or: "0123458",
    amount: 1200,
    date: "Mar 7, 2026",
    period: "March 2026",
    method: "office",
    collector: "Staff M. Torres",
    status: "paid",
  },
  {
    id: "PAY-004",
    vid: "VND-004",
    or: null,
    amount: 1000,
    date: null,
    period: "March 2026",
    method: null,
    collector: null,
    status: "overdue",
  },
  {
    id: "PAY-005",
    vid: "VND-005",
    or: null,
    amount: 2000,
    date: null,
    period: "March 2026",
    method: null,
    collector: null,
    status: "overdue",
  },
  {
    id: "PAY-006",
    vid: "VND-006",
    or: "0123459",
    amount: 1200,
    date: "Mar 9, 2026",
    period: "March 2026",
    method: "portal",
    collector: "System",
    status: "paid",
  },
  {
    id: "PAY-007",
    vid: "VND-007",
    or: "0123460",
    amount: 1000,
    date: "Mar 5, 2026",
    period: "March 2026",
    method: "collector",
    collector: "Staff R. Diaz",
    status: "paid",
  },
  {
    id: "PAY-008",
    vid: "VND-008",
    or: null,
    amount: 1000,
    date: null,
    period: "March 2026",
    method: null,
    collector: null,
    status: "due",
  },
  {
    id: "PAY-009",
    vid: "VND-009",
    or: null,
    amount: 1200,
    date: null,
    period: "March 2026",
    method: null,
    collector: null,
    status: "overdue",
  },
  {
    id: "PAY-010",
    vid: "VND-001",
    or: "0122001",
    amount: 1500,
    date: "Feb 5, 2026",
    period: "February 2026",
    method: "portal",
    collector: "System",
    status: "paid",
  },
  {
    id: "PAY-011",
    vid: "VND-002",
    or: "0122002",
    amount: 1800,
    date: "Feb 4, 2026",
    period: "February 2026",
    method: "collector",
    collector: "Staff R. Diaz",
    status: "paid",
  },
  {
    id: "PAY-012",
    vid: "VND-003",
    or: "0122003",
    amount: 1200,
    date: "Feb 4, 2026",
    period: "February 2026",
    method: "office",
    collector: "Staff M. Torres",
    status: "paid",
  },
  {
    id: "PAY-013",
    vid: "VND-004",
    or: null,
    amount: 1000,
    date: null,
    period: "February 2026",
    method: null,
    collector: null,
    status: "pending",
  },
  {
    id: "PAY-014",
    vid: "VND-006",
    or: "0122004",
    amount: 1200,
    date: "Feb 9, 2026",
    period: "February 2026",
    method: "portal",
    collector: "System",
    status: "paid",
  },
  {
    id: "PAY-015",
    vid: "VND-007",
    or: "0122005",
    amount: 1000,
    date: "Feb 6, 2026",
    period: "February 2026",
    method: "collector",
    collector: "Staff R. Diaz",
    status: "paid",
  },
];

const MT = {
  portal: "Vendor Portal",
  collector: "Staff Collector",
  office: "Direct Office",
};
const MC = { portal: "portal", collector: "collector", office: "office" };
const SC2 = {
  paid: "paid",
  pending: "pending",
  due: "due",
  overdue: "overdue",
  review: "review",
};
const SL = {
  paid: "Paid",
  pending: "Pending",
  due: "Due Today",
  overdue: "Overdue",
  review: "Under Review",
};

const MONTHLY_CHART = [
  52000, 61000, 48000, 70000, 65000, 74000, 68000, 80000, 77000, 87400, 0, 0,
];
const MONTHS = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Mar",
  "Apr",
  "May",
];

let SF2 = "all",
  CTAB = "records",
  SB_IS_OPEN = window.innerWidth >= 768;

/* ═══ SIDEBAR ═══ */
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

/* ═══ THEME ═══ */
let DARK = false;
function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
  document.getElementById("themeIco").innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ═══ TABS ═══ */
function setTab(id, btn) {
  CTAB = id;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  btn.classList.add("on");
  ["records", "monthly", "ledger", "summary"].forEach((t) => {
    document.getElementById("tab-" + t).style.display =
      t === id ? "block" : "none";
  });
  if (id === "monthly") renderMonthly();
  if (id === "ledger") renderLedgerSearch();
  if (id === "summary") renderSummary();
}

/* ═══ STATUS FILTER ═══ */
function setSF2(s, el) {
  SF2 = s;
  document
    .querySelectorAll("#status-pills .sp")
    .forEach((p) => p.classList.remove("on"));
  if (el) el.classList.add("on");
  else {
    // programmatic call — activate the right pill
    const pills = document.querySelectorAll("#status-pills .sp");
    pills.forEach((p) => {
      if (
        p.textContent.trim().toLowerCase().replace(" ", "") === s ||
        (p.classList.contains("s-all") && s === "all")
      )
        p.classList.add("on");
    });
    if (s === "overdue") {
      // switch to records tab
      const tab = document.querySelector(".tab:first-child");
      setTab("records", tab);
    }
  }
  renderRecords();
}

/* ═══ GET PAYMENTS (filtered) ═══ */
function getPays() {
  const q = (
    document.getElementById("psrch") || { value: "" }
  ).value.toLowerCase();
  const mth = (document.getElementById("pmethod") || { value: "" }).value;
  const mon = (document.getElementById("pmonth") || { value: "" }).value;
  return PAYMENTS.filter((p) => {
    const v = VENDORS.find((x) => x.id === p.vid) || {};
    const name = `${v.fn || ""} ${v.ln || ""}`.toLowerCase();
    const mq =
      !q ||
      name.includes(q) ||
      (p.or || "").includes(q) ||
      (v.stall || "").includes(q) ||
      p.id.toLowerCase().includes(q);
    const mm = !mth || p.method === mth;
    const mn =
      !mon ||
      p.period
        .toLowerCase()
        .includes(
          mon === "2026-03"
            ? "march"
            : mon === "2026-02"
            ? "february"
            : mon === "2026-01"
            ? "january"
            : "december"
        );
    const ms = SF2 === "all" || p.status === SF2;
    return mq && mm && mn && ms;
  });
}

/* ═══ RENDER RECORDS TABLE ═══ */
function renderRecords() {
  const list = getPays();
  document.getElementById(
    "prec-info"
  ).textContent = `Showing ${list.length} of ${PAYMENTS.length} records`;
  const tbl = document.getElementById("prec-tbl");
  tbl.innerHTML = `
      <thead><tr>
        <th>OR #</th><th>Vendor</th><th>Stall</th><th>Amount</th>
        <th>Date</th><th>Method</th><th>Status</th><th>Actions</th>
      </tr></thead>
      <tbody>${list
        .map((p) => {
          const v = VENDORS.find((x) => x.id === p.vid) || {
            fn: "—",
            ln: "",
            init: "?",
            grad: "135deg,#ccc,#aaa",
            stall: "—",
          };
          const orHtml = p.or
            ? `<span class="or-chip"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>${p.or}</span>`
            : `<span style="font-size:11px;color:var(--t3)">No OR yet</span>`;
          const mHtml = p.method
            ? `<span class="pm ${p.method}">${MT[p.method]}</span>`
            : `<span style="font-size:11px;color:var(--t3)">—</span>`;
          const dateHtml = p.date || `<span style="color:var(--t3)">—</span>`;
          return `<tr onclick="viewPayment('${p.id}')">
          <td>${orHtml}</td>
          <td><div class="vcell"><div class="vav-sm" style="background:linear-gradient(${
            v.grad
          })">${v.init}</div><div><div class="vn">${v.fn} ${
            v.ln
          }</div><div class="vi2">${v.id}</div></div></div></td>
          <td style="font-family:'DM Mono',monospace;font-weight:700;font-size:12px">${
            v.stall
          }</td>
          <td class="mono" style="font-weight:700;color:${
            p.status === "paid"
              ? "var(--gr)"
              : p.status === "overdue"
              ? "var(--rd)"
              : "var(--t1)"
          }">₱${p.amount.toLocaleString()}</td>
          <td style="font-size:12px">${dateHtml}</td>
          <td>${mHtml}</td>
          <td><span class="ps ${p.status}">${SL[p.status]}</span></td>
          <td><div class="racell">
            <div class="ra tt" data-tip="View" onclick="event.stopPropagation();viewPayment('${
              p.id
            }')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
            ${
              p.status === "paid"
                ? `<div class="ra tt" data-tip="Paid — locked" style="opacity:.35;cursor:default;pointer-events:none"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></div>`
                : `<div class="ra tt" data-tip="Edit" onclick="event.stopPropagation()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></div>
            <div class="ra tt" data-tip="Status" onclick="event.stopPropagation();openStatusM('${p.id}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg></div>
            <div class="ra tt" data-tip="Remind" onclick="event.stopPropagation();openReminder('${p.vid}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>`
            }
          </div></td>
        </tr>`;
        })
        .join("")}</tbody>`;
}

/* ═══ RENDER MONTHLY CARDS ═══ */
const MR_DATA = [
  {
    vid: "VND-001",
    status: "paid",
    dueDate: "Mar 10, 2026",
    paidDate: "Mar 9, 2026",
  },
  {
    vid: "VND-002",
    status: "paid",
    dueDate: "Mar 10, 2026",
    paidDate: "Mar 8, 2026",
  },
  {
    vid: "VND-003",
    status: "paid",
    dueDate: "Mar 10, 2026",
    paidDate: "Mar 7, 2026",
  },
  { vid: "VND-004", status: "overdue", dueDate: "Mar 5, 2026", paidDate: null },
  {
    vid: "VND-005",
    status: "overdue",
    dueDate: "Feb 28, 2026",
    paidDate: null,
  },
  {
    vid: "VND-006",
    status: "paid",
    dueDate: "Mar 10, 2026",
    paidDate: "Mar 9, 2026",
  },
  {
    vid: "VND-007",
    status: "paid",
    dueDate: "Mar 10, 2026",
    paidDate: "Mar 5, 2026",
  },
  { vid: "VND-008", status: "due", dueDate: "Mar 10, 2026", paidDate: null },
  { vid: "VND-009", status: "overdue", dueDate: "Mar 1, 2026", paidDate: null },
];
function renderMonthly() {
  const g = document.getElementById("mr-grid");
  g.innerHTML = MR_DATA.map((m, i) => {
    const v = VENDORS.find((x) => x.id === m.vid);
    const balColor =
      m.status === "paid"
        ? "var(--gr)"
        : m.status === "overdue"
        ? "var(--rd)"
        : m.status === "due"
        ? "var(--or)"
        : "var(--am)";
    return `<div class="mr-card ${m.status}" style="animation-delay:${
      i * 0.04
    }s">
        <div class="mr-top">
          <div>
            <div style="display:flex;align-items:center;gap:7px;margin-bottom:3px">
              <div class="vav-sm" style="background:linear-gradient(${
                v.grad
              })">${v.init}</div>
              <div>
                <div class="mr-vname">${v.fn} ${v.ln}</div>
                <div class="mr-vsub">${v.stall} · ${v.id}</div>
              </div>
            </div>
          </div>
          <div>
            <div class="mr-amount" style="color:${balColor}">₱${v.rate.toLocaleString()}</div>
            <div class="mr-due-lbl">Due ${m.dueDate}</div>
          </div>
        </div>
        <div class="mr-foot">
          <span class="ps ${m.status}">${SL[m.status]}</span>
          <div style="display:flex;gap:5px">
            ${
              m.status !== "paid"
                ? `<button class="btn pr xs" onclick="openM('recordModal')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Record</button>`
                : `<span style="font-size:11px;color:var(--t3)">${m.paidDate}</span>`
            }
            ${
              m.status !== "paid"
                ? `<button class="btn ao xs" onclick="openReminder('${m.vid}')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></button>`
                : ""
            }
          </div>
        </div>
      </div>`;
  }).join("");
}

/* ═══ RENDER LEDGER SEARCH ═══ */
function renderLedgerSearch() {
  const q = (
    document.getElementById("lsrch") || { value: "" }
  ).value.toLowerCase();
  const list = VENDORS.filter(
    (v) =>
      !q ||
      `${v.fn} ${v.ln}`.toLowerCase().includes(q) ||
      v.id.toLowerCase().includes(q)
  );
  document.getElementById("ldgr-list").innerHTML = list
    .map((v) => {
      const pays = PAYMENTS.filter(
        (p) => p.vid === v.id && p.status === "paid"
      );
      const total = pays.reduce((s, p) => s + p.amount, 0);
      const pending = PAYMENTS.filter(
        (p) => p.vid === v.id && p.status !== "paid"
      ).length;
      return `<div onclick="openLedger('${
        v.id
      }')" style="background:var(--surf);border:1.5px solid var(--brd);border-radius:var(--r);padding:12px 14px;cursor:pointer;transition:all .2s;display:flex;align-items:center;gap:11px;box-shadow:var(--sh);" onmouseover="this.style.transform='translateY(-1px)';this.style.boxShadow='var(--shm)'" onmouseout="this.style.transform='';this.style.boxShadow='var(--sh)'">
        <div class="vav-sm" style="width:36px;height:36px;font-size:12px;background:linear-gradient(${
          v.grad
        })">${v.init}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${
            v.fn
          } ${v.ln}</div>
          <div style="font-size:11px;color:var(--t3);">${v.id} · Stall ${
        v.stall
      }</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:13px;font-weight:700;font-family:'DM Mono',monospace;color:var(--gr)">₱${total.toLocaleString()}</div>
          <div style="font-size:10.5px;color:var(--t3)">${
            pays.length
          } payments${
        pending > 0
          ? ` · <span style="color:var(--rd)">${pending} pending</span>`
          : ""
      }</div>
        </div>
      </div>`;
    })
    .join("");
}

/* ═══ OPEN LEDGER ═══ */
function openLedger(vid) {
  const v = VENDORS.find((x) => x.id === vid);
  const pays = PAYMENTS.filter((p) => p.vid === vid);
  const paidPays = pays.filter((p) => p.status === "paid");
  const totalPaid = paidPays.reduce((s, p) => s + p.amount, 0);
  const outstanding = pays
    .filter((p) => p.status !== "paid")
    .reduce((s, p) => s + p.amount, 0);
  document.getElementById("ldgr-search").style.display = "none";
  document.getElementById("ldgr-detail").classList.add("show");
  // Info cards
  document.getElementById("ldgr-info-grid").innerHTML = `
      <div class="ldgr-info-card">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:10px">
          <div class="vav-sm" style="width:40px;height:40px;font-size:13px;background:linear-gradient(${
            v.grad
          })">${v.init}</div>
          <div><div style="font-weight:800;font-size:15px">${v.fn} ${
    v.ln
  }</div><div style="font-size:11px;color:var(--t3)">${v.id} · Stall ${
    v.stall
  }</div></div>
        </div>
        <div style="font-size:12px;color:var(--t2)">Monthly Rate: <strong class="mono">₱${v.rate.toLocaleString()}</strong></div>
      </div>
      <div class="ldgr-info-card"><div class="lic-lbl">Total Paid</div><div class="lic-val gr">₱${totalPaid.toLocaleString()}</div><div class="lic-sub">${
    paidPays.length
  } payment records</div></div>
      <div class="ldgr-info-card"><div class="lic-lbl">Outstanding Balance</div><div class="lic-val ${
        outstanding > 0 ? "rd" : "gr"
      }">₱${outstanding.toLocaleString()}</div><div class="lic-sub">${
    outstanding > 0
      ? pays.filter((p) => p.status !== "paid").length + " unpaid months"
      : "All clear"
  }</div></div>
      <div class="ldgr-info-card"><div class="lic-lbl">Last Payment</div><div class="lic-val" style="font-size:13px;font-weight:700">${
        paidPays.length ? paidPays[paidPays.length - 1].date : "—"
      }</div><div class="lic-sub">${
    paidPays.length
      ? "OR: " + paidPays[paidPays.length - 1].or
      : "No payments yet"
  }</div></div>
    `;
  // History table
  document.getElementById("ldgr-tbl").innerHTML = `
      <thead><tr><th>OR Number</th><th>Period</th><th>Amount</th><th>Date</th><th>Method</th><th>Collector</th><th>Status</th></tr></thead>
      <tbody>${pays
        .map(
          (p) => `<tr>
        <td>${
          p.or
            ? `<span class="or-chip"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg>${p.or}</span>`
            : `<span style="font-size:11px;color:var(--t3)">No OR</span>`
        }</td>
        <td style="font-size:12px">${p.period}</td>
        <td class="mono" style="font-weight:700;color:${
          p.status === "paid" ? "var(--gr)" : "var(--rd)"
        }">₱${p.amount.toLocaleString()}</td>
        <td style="font-size:12px">${p.date || "—"}</td>
        <td>${
          p.method ? `<span class="pm ${p.method}">${MT[p.method]}</span>` : "—"
        }</td>
        <td style="font-size:12px;color:var(--t2)">${p.collector || "—"}</td>
        <td><span class="ps ${p.status}">${SL[p.status]}</span></td>
      </tr>`
        )
        .join("")}</tbody>`;
}
function closeLedger() {
  document.getElementById("ldgr-search").style.display = "";
  document.getElementById("ldgr-detail").classList.remove("show");
}

/* ═══ RENDER SUMMARY CHART ═══ */
function renderSummary() {
  const max = Math.max(...MONTHLY_CHART.filter((v) => v > 0));
  const months2026 = [
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
  document.getElementById("chart-bars").innerHTML = months2026
    .map((m, i) => {
      const val = MONTHLY_CHART[i];
      const h = val ? Math.round((val / max) * 70) + 10 : 4;
      const col =
        val > 0 ? (i === 9 ? "var(--ac)" : "var(--acs)") : "var(--brd)";
      return `<div class="cbar-col">
        <div class="cbar-val">${
          val ? "₱" + (val / 1000).toFixed(0) + "K" : ""
        }</div>
        <div class="cbar" style="height:${h}px;background:${col}" title="${m}: ${
        val ? "₱" + val.toLocaleString() : "—"
      }"></div>
        <div class="cbar-lbl">${m}</div>
      </div>`;
    })
    .join("");

  // Outstanding table
  const outstanding = PAYMENTS.filter((p) => p.status !== "paid");
  document.getElementById("out-tbl").innerHTML = `
      <thead><tr><th>Vendor</th><th>Stall</th><th>Period</th><th>Amount Due</th><th>Status</th><th>Action</th></tr></thead>
      <tbody>${outstanding
        .map((p) => {
          const v = VENDORS.find((x) => x.id === p.vid) || {};
          return `<tr><td><div class="vcell"><div class="vav-sm" style="background:linear-gradient(${
            v.grad || "135deg,#ccc,#aaa"
          })">${v.init || "?"}</div><div><div class="vn">${v.fn || "—"} ${
            v.ln || ""
          }</div><div class="vi2">${v.id || ""}</div></div></div></td>
        <td class="mono" style="font-weight:700">${v.stall || "—"}</td>
        <td style="font-size:12px">${p.period}</td>
        <td class="mono" style="font-weight:700;color:var(--rd)">₱${p.amount.toLocaleString()}</td>
        <td><span class="ps ${p.status}">${SL[p.status]}</span></td>
        <td><div class="racell">
          <button class="btn pr xs" onclick="openM('recordModal')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="5" x2="12" y2="19"/><line x1="5" y1="12" x2="19" y2="12"/></svg>Record</button>
          <div class="ra tt" data-tip="Remind" onclick="openReminder('${
            p.vid
          }')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg></div>
        </div></td></tr>`;
        })
        .join("")}</tbody>`;
}

/* ═══ VIEW PAYMENT MODAL ═══ */
function viewPayment(pid) {
  const p = PAYMENTS.find((x) => x.id === pid);
  const v = VENDORS.find((x) => x.id === p.vid) || {};
  document.getElementById("view-body").innerHTML = `
      <div style="display:flex;align-items:center;gap:10px;padding:14px;background:var(--s2);border-radius:8px;margin-bottom:16px;border:1px solid var(--brd)">
        <div class="vav-sm" style="width:40px;height:40px;font-size:13px;background:linear-gradient(${
          v.grad || "135deg,#ccc,#aaa"
        })">${v.init || "?"}</div>
        <div><div style="font-weight:800;font-size:14px">${v.fn || "—"} ${
    v.ln || ""
  }</div><div style="font-size:11px;color:var(--t3)">${v.id || ""} · Stall ${
    v.stall || "—"
  }</div></div>
        <span class="ps ${p.status}" style="margin-left:auto">${
    SL[p.status]
  }</span>
      </div>
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-bottom:14px">
        <div style="background:var(--s2);border:1px solid var(--brd);border-radius:8px;padding:11px">
          <div style="font-size:10.5px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px">Amount</div>
          <div style="font-size:20px;font-weight:800;font-family:'DM Mono',monospace;color:${
            p.status === "paid" ? "var(--gr)" : "var(--rd)"
          }">₱${p.amount.toLocaleString()}</div>
        </div>
        <div style="background:var(--s2);border:1px solid var(--brd);border-radius:8px;padding:11px">
          <div style="font-size:10.5px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.4px;margin-bottom:4px">OR Number</div>
          <div style="font-size:14px;font-weight:800;font-family:'DM Mono',monospace">${
            p.or || "Not yet issued"
          }</div>
        </div>
      </div>
      <div style="background:var(--s2);border:1px solid var(--brd);border-radius:8px;overflow:hidden">
        <div style="display:flex;justify-content:space-between;padding:9px 13px;border-bottom:1px solid var(--brd2);font-size:12.5px"><span style="color:var(--t3);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.3px">Period</span><span style="font-weight:600">${
          p.period
        }</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 13px;border-bottom:1px solid var(--brd2);font-size:12.5px"><span style="color:var(--t3);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.3px">Payment Date</span><span style="font-weight:600">${
          p.date || "—"
        }</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 13px;border-bottom:1px solid var(--brd2);font-size:12.5px"><span style="color:var(--t3);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.3px">Method</span><span>${
          p.method ? `<span class="pm ${p.method}">${MT[p.method]}</span>` : "—"
        }</span></div>
        <div style="display:flex;justify-content:space-between;padding:9px 13px;font-size:12.5px"><span style="color:var(--t3);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.3px">Collector</span><span style="font-weight:600">${
          p.collector || "—"
        }</span></div>
      </div>`;
  openM("viewModal");
}

/* ═══ STATUS MODAL ═══ */
function openStatusM(pid) {
  document.getElementById("sm-ref").textContent = pid;
  openM("statusModal");
}
function pickPS(el, s) {
  document.querySelectorAll("#statusModal .vsopt").forEach((o) => {
    o.style.borderColor = "var(--brd)";
    o.style.background = "var(--s2)";
  });
  const cols = {
    paid: "var(--grs)",
    pending: "var(--ams)",
    due: "var(--ors)",
    overdue: "var(--rds)",
    review: "var(--cys)",
  };
  const bgs = {
    paid: "var(--grl)",
    pending: "var(--aml)",
    due: "var(--orl)",
    overdue: "var(--rdl)",
    review: "var(--cyl)",
  };
  el.style.borderColor = cols[s] || "var(--ac)";
  el.style.background = bgs[s] || "var(--acl)";
}

/* ═══ REMINDER MODAL ═══ */
function openReminder(vid) {
  const v = VENDORS.find((x) => x.id === vid);
  if (v) {
    document.getElementById("rem-name").textContent = `${v.fn} ${v.ln}`;
    document.getElementById("rem-phone").textContent = v.phone;
    document.getElementById("rem-email").textContent = v.email;
    document.getElementById("rem-msg").value = `Dear ${
      v.fn
    },\n\nThis is a reminder that your rental fee for Stall ${
      v.stall
    } is due. Please settle your balance of ₱${v.rate.toLocaleString()} at your earliest convenience.\n\nThank you,\nARKIPAISI Market Office`;
  }
  openM("reminderModal");
}

/* ═══ VENDOR SEARCH + SUGGESTIONS ═══ */
function showVSugg(q) {
  const list = document.getElementById("vsrch-list");
  const wrap = document.getElementById("vsrch-wrap");
  if (!q.trim()) {
    list.style.display = "none";
    wrap.style.borderColor = "var(--brd)";
    return;
  }
  const matches = VENDORS.filter((v) => {
    const name = `${v.fn} ${v.ln}`.toLowerCase();
    return (
      name.includes(q.toLowerCase()) ||
      v.stall.includes(q) ||
      v.id.toLowerCase().includes(q.toLowerCase())
    );
  });
  if (!matches.length) {
    list.style.display = "none";
    return;
  }
  wrap.style.borderColor = "var(--ac)";
  list.style.display = "block";
  list.innerHTML = matches
    .map((v) => {
      const outstanding = PAYMENTS.filter(
        (p) => p.vid === v.id && p.status !== "paid"
      ).reduce((s, p) => s + p.amount, 0);
      const outHtml =
        outstanding > 0
          ? `<span style="font-size:10.5px;font-weight:700;color:var(--rd);background:var(--rdl);padding:1px 7px;border-radius:10px">₱${outstanding.toLocaleString()} due</span>`
          : `<span style="font-size:10.5px;font-weight:700;color:var(--gr);background:var(--grl);padding:1px 7px;border-radius:10px">Cleared</span>`;
      return `<div onclick="autoFillVendor('${v.id}')" style="display:flex;align-items:center;gap:10px;padding:9px 12px;cursor:pointer;transition:background .12s;border-bottom:1px solid var(--brd2)" onmouseover="this.style.background='var(--s2)'" onmouseout="this.style.background=''">
        <div class="vav-sm" style="width:32px;height:32px;font-size:11px;flex-shrink:0;background:linear-gradient(${v.grad})">${v.init}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:13px">${v.fn} ${v.ln}</div>
          <div style="font-size:11px;color:var(--t3)">Stall ${v.stall} · ${v.id}</div>
        </div>
        ${outHtml}
      </div>`;
    })
    .join("");
}
function autoFillVendor(vid) {
  const v = VENDORS.find((x) => x.id === vid);
  if (!v) return;
  // close suggestion list, update search input
  document.getElementById("vsrch-list").style.display = "none";
  document.getElementById(
    "vsrch-input"
  ).value = `${v.fn} ${v.ln} — Stall ${v.stall}`;
  document.getElementById("vsrch-wrap").style.borderColor = "var(--grs)";
  document.getElementById("vsrch-clear").style.display = "inline";
  // populate hidden fields
  document.getElementById("rec-vendor").value = `${v.fn} ${v.ln}`;
  document.getElementById("rec-stall").value = v.stall;
  document.getElementById("rec-rate").value = v.rate;
  // auto-fill amount
  document.getElementById("rec-amount").value = v.rate;
  // outstanding balance
  const outstanding = PAYMENTS.filter(
    (p) => p.vid === vid && p.status !== "paid"
  ).reduce((s, p) => s + p.amount, 0);
  // vendor card
  document.getElementById(
    "vc-av"
  ).style.background = `linear-gradient(${v.grad})`;
  document.getElementById("vc-av").textContent = v.init;
  document.getElementById("vc-name").textContent = `${v.fn} ${v.ln}`;
  document.getElementById("vc-id").textContent = `${v.id} · Stall ${v.stall}`;
  document.getElementById("vc-stall").textContent = v.stall;
  document.getElementById(
    "vc-rate"
  ).textContent = `₱${v.rate.toLocaleString()}`;
  document.getElementById("vc-balance").textContent =
    outstanding > 0 ? `₱${outstanding.toLocaleString()}` : "₱0 — All Clear";
  document.getElementById("vc-balance").style.color =
    outstanding > 0 ? "var(--rd)" : "var(--gr)";
  document.getElementById("vc-phone").textContent = v.phone;
  document.getElementById("vc-email").textContent = v.email;
  document.getElementById("vendor-card").style.display = "block";
  // OR preview
  document.getElementById("prev-vendor").textContent = `${v.fn} ${v.ln}`;
  document.getElementById(
    "prev-amount"
  ).textContent = `₱${v.rate.toLocaleString()}`;
  updateORPreview();
}
function clearVendor() {
  document.getElementById("vsrch-input").value = "";
  document.getElementById("vsrch-clear").style.display = "none";
  document.getElementById("vsrch-wrap").style.borderColor = "var(--brd)";
  document.getElementById("vsrch-list").style.display = "none";
  document.getElementById("vendor-card").style.display = "none";
  document.getElementById("rec-vendor").value = "";
  document.getElementById("rec-stall").value = "";
  document.getElementById("rec-rate").value = "";
  document.getElementById("rec-amount").value = "";
  document.getElementById("prev-vendor").textContent = "—";
  document.getElementById("prev-amount").textContent = "—";
}
document.addEventListener("click", (e) => {
  if (!e.target.closest("#vsrch-wrap") && !e.target.closest("#vsrch-list"))
    document.getElementById("vsrch-list").style.display = "none";
});

/* ═══ SAVE PAYMENT → AUTO STATUS = PAID ═══ */
function savePayment() {
  const vid_name = document.getElementById("rec-vendor").value;
  const or = document.getElementById("rec-or").value.trim();
  const amt = parseFloat(document.getElementById("rec-amount").value) || 0;
  const date = document.getElementById("rec-date").value;
  const collector = document.getElementById("rec-collector").value.trim();
  if (!vid_name) {
    alert("Please select a vendor first.");
    return;
  }
  if (!or) {
    alert("Please enter the OR Serial Number.");
    return;
  }
  if (!amt) {
    alert("Please enter the amount paid.");
    return;
  }
  if (!date) {
    alert("Please enter the payment date.");
    return;
  }
  if (!collector) {
    alert("Please enter the collector name.");
    return;
  }
  // find vendor id
  const v = VENDORS.find((x) => `${x.fn} ${x.ln}` === vid_name);
  if (!v) return;
  // find existing unpaid record for this vendor in current period and set to paid
  const period = document.getElementById("rec-period").value;
  const existing = PAYMENTS.find(
    (p) => p.vid === v.id && p.status !== "paid" && p.period === period
  );
  if (existing) {
    existing.status = "paid";
    existing.or = or;
    existing.amount = amt;
    existing.date = new Date(date).toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    existing.method = "office";
    existing.collector = collector;
  } else {
    // new payment record
    const newId = "PAY-" + String(PAYMENTS.length + 1).padStart(3, "0");
    PAYMENTS.push({
      id: newId,
      vid: v.id,
      or,
      amount: amt,
      date: new Date(date).toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
        year: "numeric",
      }),
      period,
      method: "office",
      collector,
      status: "paid",
    });
  }
  closeM("recordModal");
  // reset form
  clearVendor();
  document.getElementById("rec-or").value = "";
  document.getElementById("rec-collector").value = "";
  document.getElementById("ufile-slot").innerHTML = "";
  [
    "prev-or",
    "prev-vendor",
    "prev-amount",
    "prev-date",
    "prev-collector",
  ].forEach((id) => (document.getElementById(id).textContent = "—"));
  // re-render
  renderRecords();
  if (CTAB === "monthly") renderMonthly();
  // toast
  showToast(`Payment recorded for ${v.fn} ${v.ln} — status set to Paid ✓`, "g");
}

/* ═══ TOAST ═══ */
function showToast(msg, type = "g") {
  let t = document.getElementById("toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "toast";
    t.style.cssText =
      "position:fixed;bottom:24px;right:24px;z-index:200;padding:11px 18px;border-radius:9px;font-size:13px;font-weight:600;box-shadow:var(--shl);transition:opacity .3s;pointer-events:none;display:flex;align-items:center;gap:8px;max-width:340px";
    document.body.appendChild(t);
  }
  const cols = {
    g: "background:var(--gr);color:#fff",
    r: "background:var(--rd);color:#fff",
    a: "background:var(--am);color:#fff",
  };
  t.style.cssText += ";" + cols[type] || cols.g;
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._tid);
  t._tid = setTimeout(() => {
    t.style.opacity = "0";
  }, 3200);
}

/* ═══ REMINDER MODAL (single vendor) ═══ */
function openReminder(vid) {
  const v = VENDORS.find((x) => x.id === vid);
  if (v) {
    document.getElementById("rem-name").textContent = `${v.fn} ${v.ln}`;
    document.getElementById("rem-phone").textContent = v.phone;
    document.getElementById("rem-email").textContent = v.email;
    const outstanding = PAYMENTS.filter(
      (p) => p.vid === vid && p.status !== "paid"
    ).reduce((s, p) => s + p.amount, 0);
    document.getElementById("rem-msg").value = `Dear ${
      v.fn
    },\n\nThis is a reminder that your rental fee for Stall ${
      v.stall
    } is due. Please settle your balance of ₱${
      outstanding > 0 ? outstanding.toLocaleString() : v.rate.toLocaleString()
    } at your earliest convenience.\n\nThank you,\nARKIPAISI Market Office`;
  }
  openM("reminderModal");
}

/* ═══ BULK REMINDER MODAL ═══ */
function openBulkReminder() {
  const unpaid = VENDORS.filter((v) =>
    PAYMENTS.some((p) => p.vid === v.id && p.status !== "paid")
  );
  document.getElementById("bulk-banner-txt").textContent = `${
    unpaid.length
  } vendor${
    unpaid.length !== 1 ? "s" : ""
  } have unpaid or overdue balances this period`;
  document.getElementById("bulk-count-lbl").textContent = unpaid.length;
  document.getElementById("bulk-result").style.display = "none";
  document.getElementById("bulk-vendor-list").innerHTML = unpaid
    .map((v) => {
      const outstanding = PAYMENTS.filter(
        (p) => p.vid === v.id && p.status !== "paid"
      ).reduce((s, p) => s + p.amount, 0);
      const statuses = [
        ...new Set(
          PAYMENTS.filter((p) => p.vid === v.id && p.status !== "paid").map(
            (p) => p.status
          )
        ),
      ];
      const worst = statuses.includes("overdue")
        ? "overdue"
        : statuses.includes("due")
        ? "due"
        : "pending";
      return `<div style="display:flex;align-items:center;gap:10px;padding:9px 11px;background:var(--s2);border:1px solid var(--brd);border-radius:8px">
        <div class="vav-sm" style="width:30px;height:30px;font-size:10px;flex-shrink:0;background:linear-gradient(${
          v.grad
        })">${v.init}</div>
        <div style="flex:1;min-width:0">
          <div style="font-weight:700;font-size:12.5px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${
            v.fn
          } ${v.ln}</div>
          <div style="font-size:11px;color:var(--t3)">Stall ${v.stall} · ${
        v.phone
      }</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:13px;font-weight:800;font-family:'DM Mono',monospace;color:var(--rd)">₱${outstanding.toLocaleString()}</div>
          <span class="ps ${worst}" style="font-size:10px">${SL[worst]}</span>
        </div>
      </div>`;
    })
    .join("");
  openM("bulkReminderModal");
}
function sendBulkReminders() {
  const unpaid = VENDORS.filter((v) =>
    PAYMENTS.some((p) => p.vid === v.id && p.status !== "paid")
  );
  document.getElementById("bulk-result").style.display = "flex";
  document.getElementById(
    "bulk-result"
  ).innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg><span>Reminders sent to ${
    unpaid.length
  } vendor${unpaid.length !== 1 ? "s" : ""}!</span>`;
  setTimeout(() => {
    closeM("bulkReminderModal");
    showToast(`Payment reminders sent to ${unpaid.length} vendors`, "a");
  }, 1400);
}

/* OR preview updater */
function updateORPreview() {
  const or = document.getElementById("rec-or").value;
  const amt = document.getElementById("rec-amount").value;
  const date = document.getElementById("rec-date").value;
  const col = document.getElementById("rec-collector").value;
  if (or) document.getElementById("prev-or").textContent = or;
  if (amt)
    document.getElementById("prev-amount").textContent =
      "₱" + parseFloat(amt).toLocaleString();
  if (date)
    document.getElementById("prev-date").textContent = new Date(
      date
    ).toLocaleDateString("en-PH", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  if (col) document.getElementById("prev-collector").textContent = col;
}
["rec-or", "rec-amount", "rec-date", "rec-collector"].forEach((id) => {
  const el = document.getElementById(id);
  if (el) el.addEventListener("input", updateORPreview);
});

/* Set default date */
document.getElementById("rec-date").value = new Date()
  .toISOString()
  .split("T")[0];
document.getElementById("rec-period").value = "March 2026";

/* Payment method picker */
function pickMethod(el, type) {
  document
    .querySelectorAll(".pm-opt")
    .forEach((o) => o.classList.remove("sel"));
  el.classList.add("sel");
}

/* Fake upload */
function fakeUpload() {
  const slot = document.getElementById("ufile-slot");
  if (slot.innerHTML) return;
  slot.innerHTML = `<div class="ufile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/></svg><div class="ufile-name">OR_0123456_scan.pdf</div><div class="ufile-size">428 KB</div><button class="ufile-rm" onclick="document.getElementById('ufile-slot').innerHTML=''"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button></div>`;
}

/* ═══ MODALS ═══ */
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

/* ═══ INIT ═══ */
renderRecords();
// set today's date
const today = new Date();
document.getElementById("rec-date").value = today.toISOString().split("T")[0];
