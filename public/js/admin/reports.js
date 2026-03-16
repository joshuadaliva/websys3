/* ══ DATA ══ */
const VENDORS = [
  {
    id: "VND-001",
    name: "Juan Dela Cruz",
    init: "JD",
    grad: "135deg,#1d4ed8,#7c3aed",
    stall: "#01",
    section: "A",
    size: "4×4m",
    rate: 1500,
    ytd: 4500,
    start: "Jan 2024",
    end: "Dec 2026",
    status: "active",
    paid: 1500,
    balance: 0,
    payStatus: "paid",
  },
  {
    id: "VND-002",
    name: "Pedro Reyes",
    init: "PR",
    grad: "135deg,#b91c1c,#dc2626",
    stall: "#03",
    section: "A",
    size: "4×4m",
    rate: 1800,
    ytd: 5400,
    start: "Mar 2023",
    end: "Feb 2026",
    status: "active",
    paid: 1800,
    balance: 0,
    payStatus: "paid",
  },
  {
    id: "VND-003",
    name: "Maria Santos",
    init: "MS",
    grad: "135deg,#0f766e,#0891b2",
    stall: "#07",
    section: "B",
    size: "3×3m",
    rate: 1200,
    ytd: 3600,
    start: "Jun 2022",
    end: "May 2027",
    status: "active",
    paid: 1200,
    balance: 0,
    payStatus: "paid",
  },
  {
    id: "VND-004",
    name: "Ana Lim",
    init: "AL",
    grad: "135deg,#15803d,#16a34a",
    stall: "#19",
    section: "C",
    size: "5×5m",
    rate: 2200,
    ytd: 6600,
    start: "Sep 2024",
    end: "Aug 2027",
    status: "active",
    paid: 0,
    balance: 2200,
    payStatus: "unpaid",
  },
  {
    id: "VND-005",
    name: "Roberto Go",
    init: "RG",
    grad: "135deg,#0891b2,#6366f1",
    stall: "#24",
    section: "D",
    size: "4×4m",
    rate: 1500,
    ytd: 4500,
    start: "Jan 2025",
    end: "Dec 2027",
    status: "active",
    paid: 0,
    balance: 1500,
    payStatus: "unpaid",
  },
  {
    id: "VND-006",
    name: "Carla Bautista",
    init: "CB",
    grad: "135deg,#3b82f6,#6366f1",
    stall: "#06",
    section: "A",
    size: "3×3m",
    rate: 1200,
    ytd: 3600,
    start: "Feb 2023",
    end: "Jan 2026",
    status: "active",
    paid: 1200,
    balance: 0,
    payStatus: "paid",
  },
  {
    id: "VND-007",
    name: "Luis Villanueva",
    init: "LV",
    grad: "135deg,#d97706,#f59e0b",
    stall: "#11",
    section: "B",
    size: "4×4m",
    rate: 1500,
    ytd: 4500,
    start: "May 2024",
    end: "Apr 2027",
    status: "active",
    paid: 1000,
    balance: 500,
    payStatus: "partial",
  },
  {
    id: "VND-008",
    name: "Grace Cruz",
    init: "GC",
    grad: "135deg,#15803d,#0f766e",
    stall: "#09",
    section: "B",
    size: "3×3m",
    rate: 1200,
    ytd: 3600,
    start: "Jul 2023",
    end: "Jun 2026",
    status: "active",
    paid: 1200,
    balance: 0,
    payStatus: "paid",
  },
  {
    id: "VND-009",
    name: "Diego Cruz",
    init: "DC",
    grad: "135deg,#6d28d9,#db2777",
    stall: "#15",
    section: "C",
    size: "4×4m",
    rate: 1600,
    ytd: 4800,
    start: "Oct 2024",
    end: "Sep 2027",
    status: "active",
    paid: 1600,
    balance: 0,
    payStatus: "paid",
  },
];

const STALLS = [
  {
    no: "#01",
    section: "A",
    size: "4×4m",
    rate: 1500,
    vendor: "Juan Dela Cruz",
    since: "Jan 2024",
    status: "occupied",
  },
  {
    no: "#02",
    section: "A",
    size: "4×4m",
    rate: 1500,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#03",
    section: "A",
    size: "4×4m",
    rate: 1800,
    vendor: "Pedro Reyes",
    since: "Mar 2023",
    status: "occupied",
  },
  {
    no: "#04",
    section: "A",
    size: "3×3m",
    rate: 1200,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#05",
    section: "A",
    size: "3×3m",
    rate: 1200,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#06",
    section: "A",
    size: "3×3m",
    rate: 1200,
    vendor: "Carla Bautista",
    since: "Feb 2023",
    status: "occupied",
  },
  {
    no: "#07",
    section: "B",
    size: "3×3m",
    rate: 1200,
    vendor: "Maria Santos",
    since: "Jun 2022",
    status: "occupied",
  },
  {
    no: "#08",
    section: "B",
    size: "4×4m",
    rate: 1500,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#09",
    section: "B",
    size: "3×3m",
    rate: 1200,
    vendor: "Grace Cruz",
    since: "Jul 2023",
    status: "occupied",
  },
  {
    no: "#10",
    section: "B",
    size: "4×4m",
    rate: 1500,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#11",
    section: "B",
    size: "4×4m",
    rate: 1500,
    vendor: "Luis Villanueva",
    since: "May 2024",
    status: "occupied",
  },
  {
    no: "#12",
    section: "B",
    size: "5×5m",
    rate: 2000,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#13",
    section: "C",
    size: "4×4m",
    rate: 1500,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#14",
    section: "C",
    size: "3×3m",
    rate: 1200,
    vendor: "—",
    since: "—",
    status: "vacant",
  },
  {
    no: "#15",
    section: "C",
    size: "4×4m",
    rate: 1600,
    vendor: "Diego Cruz",
    since: "Oct 2024",
    status: "occupied",
  },
  {
    no: "#19",
    section: "C",
    size: "5×5m",
    rate: 2200,
    vendor: "Ana Lim",
    since: "Sep 2024",
    status: "occupied",
  },
  {
    no: "#24",
    section: "D",
    size: "4×4m",
    rate: 1500,
    vendor: "Roberto Go",
    since: "Jan 2025",
    status: "occupied",
  },
];

const DAILY = [
  { date: "Mar 1", txns: 1, office: 1500, collector: 0, portal: 0 },
  { date: "Mar 2", txns: 1, office: 0, collector: 1800, portal: 0 },
  { date: "Mar 3", txns: 1, office: 0, collector: 0, portal: 1200 },
  { date: "Mar 4", txns: 0, office: 0, collector: 0, portal: 0 },
  { date: "Mar 5", txns: 3, office: 1200, collector: 1000, portal: 1000 },
  { date: "Mar 6", txns: 0, office: 0, collector: 0, portal: 0 },
  { date: "Mar 7", txns: 1, office: 300, collector: 0, portal: 0 },
  { date: "Mar 8", txns: 0, office: 0, collector: 0, portal: 0 },
  { date: "Mar 9", txns: 1, office: 1500, collector: 0, portal: 0 },
  { date: "Mar 10", txns: 2, office: 400, collector: 1800, portal: 0 },
];

const MONTHLY = [
  { m: "Oct", v: 11200 },
  { m: "Nov", v: 12400 },
  { m: "Dec", v: 13500 },
  { m: "Jan", v: 12800 },
  { m: "Feb", v: 13500 },
  { m: "Mar", v: 14700 },
];

const OCCUPANCY_TREND = [
  { m: "Oct", v: 65 },
  { m: "Nov", v: 68 },
  { m: "Dec", v: 72 },
  { m: "Jan", v: 72 },
  { m: "Feb", v: 75 },
  { m: "Mar", v: 78 },
];

let SB_OPEN = window.innerWidth >= 900,
  DARK = false;

/* ══ SIDEBAR ══ */
function openSB() {
  SB_OPEN = true;
  document.getElementById("sb").style.transform = "translateX(0)";
  if (window.innerWidth < 768) {
    document.getElementById("veil").style.display = "block";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    document.getElementById("veil").style.display = "none";
    document.getElementById("main").style.marginLeft = "var(--sbw)";
  }
}
function closeSB() {
  SB_OPEN = false;
  document.getElementById("sb").style.transform =
    "translateX(calc(-1 * var(--sbw)))";
  document.getElementById("veil").style.display = "none";
  document.getElementById("main").style.marginLeft = "0";
}
function toggleSB() {
  SB_OPEN ? closeSB() : openSB();
}
(function () {
  if (window.innerWidth < 768) closeSB();
  else openSB();
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      document.getElementById("veil").style.display = "none";
      if (SB_OPEN)
        document.getElementById("main").style.marginLeft = "var(--sbw)";
    } else {
      document.getElementById("main").style.marginLeft = "0";
      if (SB_OPEN) document.getElementById("veil").style.display = "block";
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
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  btn.classList.add("on");
  ["payment", "vendor", "stall", "collection"].forEach(
    (t) =>
      (document.getElementById("tab-" + t).style.display =
        t === id ? "block" : "none")
  );
}

/* ══ FORMAT ══ */
function fmt(n) {
  return "₱" + n.toLocaleString("en-PH", { minimumFractionDigits: 2 });
}
function fmtShort(n) {
  return n >= 1000 ? "₱" + (n / 1000).toFixed(1) + "K" : "₱" + n;
}
function av(v, size = 26) {
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:linear-gradient(${
    v.grad
  });display:grid;place-items:center;font-size:${Math.round(
    size * 0.38
  )}px;font-weight:800;color:#fff;flex-shrink:0">${v.init}</div>`;
}

/* ══ BAR CHART ══ */
function buildBars(containerId, data, colorFn) {
  const el = document.getElementById(containerId);
  if (!el) return;
  const max = Math.max(...data.map((d) => d.v), 1);
  const H = 130;
  el.innerHTML = "";
  data.forEach((d) => {
    const col = document.createElement("div");
    col.className = "bar-col";
    const val = document.createElement("div");
    val.className = "bar-val";
    val.textContent = d.suffix ? d.v + d.suffix : fmtShort(d.v);
    const bar = document.createElement("div");
    bar.className = "bar-body";
    bar.style.cssText = `height:${Math.max(
      4,
      (d.v / max) * H
    )}px;background:${colorFn(d)};`;
    bar.setAttribute(
      "data-tip",
      d.tip || (d.suffix ? d.v + d.suffix : fmt(d.v))
    );
    const lbl = document.createElement("div");
    lbl.className = "bar-lbl";
    lbl.textContent = d.m;
    col.appendChild(val);
    col.appendChild(bar);
    col.appendChild(lbl);
    el.appendChild(col);
  });
}

/* ══ DONUT ══ */
function buildDonut(donutId, legendId, segments) {
  const total = segments.reduce((s, x) => s + x.v, 0);
  let deg = 0;
  const parts = segments
    .map((s) => {
      const pct = (s.v / total) * 360;
      const p = `${s.color} ${deg}deg ${deg + pct}deg`;
      deg += pct;
      return p;
    })
    .join(", ");
  document.getElementById(
    donutId
  ).style.background = `conic-gradient(${parts})`;
  const legend = document.getElementById(legendId);
  legend.innerHTML = "";
  segments.forEach((s) => {
    const pct = Math.round((s.v / total) * 100);
    const row = document.createElement("div");
    row.className = "dl-item";
    row.innerHTML = `<div class="dl-dot" style="background:${
      s.color
    }"></div><div class="dl-name">${s.label}</div><div class="dl-val">${
      s.fmt ? s.fmt : fmtShort(s.v)
    }</div><span class="dl-pct">${pct}%</span>`;
    legend.appendChild(row);
  });
}

/* ══ PAYMENT TABLE ══ */
function renderPayTable() {
  const f = document.getElementById("pay-status-f").value;
  const list = VENDORS.filter((v) => !f || v.payStatus === f);
  const tbody = document.getElementById("pay-tbody");
  tbody.innerHTML = "";
  list.forEach((v) => {
    const tr = document.createElement("tr");
    const statusBdg = `<span class="bdg ${v.payStatus}">${
      v.payStatus === "paid"
        ? "Paid"
        : v.payStatus === "partial"
        ? "Partial"
        : "Unpaid"
    }</span>`;
    tr.innerHTML = `
<td><div style="display:flex;align-items:center;gap:8px">${av(
      v
    )}<div><div style="font-size:13px;font-weight:700">${
      v.name
    }</div><div style="font-size:10.5px;color:var(--t3)">${
      v.id
    }</div></div></div></td>
<td class="mono" style="font-weight:700">${v.stall}</td>
<td style="font-size:12px;color:var(--t2)">Mar 15, 2026</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700">${fmt(
      v.rate
    )}</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700;color:var(--gr)">${fmt(
      v.paid
    )}</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700;color:${
      v.balance > 0 ? "var(--rd)" : "var(--t3)"
    }">${fmt(v.balance)}</td>
<td>${statusBdg}</td>`;
    tbody.appendChild(tr);
  });
  const totRate = list.reduce((s, v) => s + v.rate, 0);
  const totPaid = list.reduce((s, v) => s + v.paid, 0);
  const totBal = list.reduce((s, v) => s + v.balance, 0);
  document.getElementById(
    "pay-tfoot"
  ).innerHTML = `<tr style="background:var(--s2);font-weight:700;font-size:12.5px">
<td colspan="3" style="padding:9px 14px;border-top:2px solid var(--brd)">Total (${
    list.length
  } vendors)</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace">${fmt(
    totRate
  )}</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace;color:var(--gr)">${fmt(
    totPaid
  )}</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace;color:var(--rd)">${fmt(
    totBal
  )}</td>
<td style="padding:9px 14px;border-top:2px solid var(--brd)"></td>
</tr>`;
  document.getElementById("pay-foot").textContent = `${
    list.length
  } vendors · Total collected: ${fmt(totPaid)} · Outstanding: ${fmt(totBal)}`;
}

/* ══ VENDOR TABLE ══ */
function renderVendorTable() {
  const tbody = document.getElementById("vnd-tbody");
  VENDORS.forEach((v) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
<td><div style="display:flex;align-items:center;gap:8px">${av(
      v
    )}<div><div style="font-size:13px;font-weight:700">${
      v.name
    }</div><div style="font-size:10.5px;color:var(--t3)">${
      v.id
    }</div></div></div></td>
<td class="mono" style="font-weight:700">${v.stall}</td>
<td style="font-size:12px;color:var(--t2)">${v.start}</td>
<td style="font-size:12px;color:var(--t2)">${v.end}</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700">${fmt(
      v.rate
    )}</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700;color:var(--gr)">${fmt(
      v.ytd
    )}</td>
<td><span class="bdg active">Active</span></td>`;
    tbody.appendChild(tr);
  });
}

/* ══ STALL TABLE ══ */
function renderStallTable() {
  const f = document.getElementById("stall-status-f").value;
  const list = STALLS.filter((s) => !f || s.status === f);
  const tbody = document.getElementById("stall-tbody");
  tbody.innerHTML = "";
  list.forEach((s) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
<td class="mono" style="font-weight:800;font-size:13px">${s.no}</td>
<td style="font-size:12.5px;font-weight:600">Section ${s.section}</td>
<td style="font-size:12px;color:var(--t2)">${s.size}</td>
<td style="font-family:'DM Mono',monospace;font-weight:700">${fmt(s.rate)}</td>
<td style="font-size:12.5px;font-weight:${
      s.status === "occupied" ? "600" : "400"
    };color:${s.status === "occupied" ? "var(--t1)" : "var(--t3)"}">${
      s.vendor
    }</td>
<td style="font-size:12px;color:var(--t2)">${s.since}</td>
<td><span class="bdg ${s.status}">${
      s.status === "occupied" ? "Occupied" : "Vacant"
    }</span></td>`;
    tbody.appendChild(tr);
  });
  document.getElementById("stall-foot").textContent = `${
    list.length
  } stalls · Occupied: ${
    list.filter((s) => s.status === "occupied").length
  } · Vacant: ${list.filter((s) => s.status === "vacant").length}`;
}

/* ══ COLLECTION TABLE ══ */
function renderCollectionTable() {
  const tbody = document.getElementById("col-tbody");
  let totOffice = 0,
    totCollector = 0,
    totPortal = 0,
    totTxns = 0;
  DAILY.forEach((d) => {
    const total = d.office + d.collector + d.portal;
    const tr = document.createElement("tr");
    tr.innerHTML = `
<td style="font-weight:700;white-space:nowrap">${d.date}, 2026</td>
<td>${
      d.txns > 0
        ? `<span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;background:var(--acs);color:var(--ac)">${d.txns}</span>`
        : '<span style="color:var(--t3);font-size:12px">—</span>'
    }</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:600;color:var(--gr)">${
      d.office > 0 ? fmt(d.office) : ""
    }</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:600;color:var(--vi)">${
      d.collector > 0 ? fmt(d.collector) : ""
    }</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:600;color:var(--ac)">${
      d.portal > 0 ? fmt(d.portal) : ""
    }</td>
<td style="text-align:right;font-family:'DM Mono',monospace;font-weight:800;font-size:13px">${
      total > 0 ? fmt(total) : '<span style="color:var(--t3)">₱0.00</span>'
    }</td>`;
    tbody.appendChild(tr);
    totOffice += d.office;
    totCollector += d.collector;
    totPortal += d.portal;
    totTxns += d.txns;
  });
  const grand = totOffice + totCollector + totPortal;
  document.getElementById(
    "col-tfoot"
  ).innerHTML = `<tr style="background:var(--s2);font-weight:700;font-size:12.5px">
<td style="padding:9px 14px;border-top:2px solid var(--brd)">Grand Total</td>
<td style="padding:9px 14px;border-top:2px solid var(--brd)">${totTxns} txns</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace;color:var(--gr)">${fmt(
    totOffice
  )}</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace;color:var(--vi)">${fmt(
    totCollector
  )}</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace;color:var(--ac)">${fmt(
    totPortal
  )}</td>
<td style="text-align:right;padding:9px 14px;border-top:2px solid var(--brd);font-family:'DM Mono',monospace;color:var(--gr);font-size:14px">${fmt(
    grand
  )}</td>
</tr>`;
}

/* ══ CHARTS ══ */
function initCharts() {
  // Payment tab
  buildBars(
    "pay-bar",
    MONTHLY.map((d) => ({ ...d, v: d.v, tip: fmt(d.v) })),
    () => "var(--ac)"
  );
  buildDonut("pay-donut", "pay-donut-legend", [
    { label: "Paid", v: 7, fmt: "7 vendors", color: "var(--gr)" },
    { label: "Partial", v: 1, fmt: "1 vendor", color: "var(--am)" },
    { label: "Unpaid", v: 1, fmt: "1 vendor", color: "var(--rd)" },
  ]);

  // Vendor tab
  const vendorBarsEl = document.getElementById("vnd-bars");
  if (vendorBarsEl) {
    vendorBarsEl.innerHTML = '<div class="bar-wrap" id="vnd-bar-inner"></div>';
    const maxV = Math.max(...VENDORS.map((v) => v.rate));
    const H = 120;
    const inner = document.getElementById("vnd-bar-inner");
    VENDORS.forEach((v) => {
      const col = document.createElement("div");
      col.className = "bar-col";
      col.innerHTML = `<div class="bar-val" style="font-size:9.5px">${fmtShort(
        v.rate
      )}</div>
<div class="bar-body" style="height:${Math.max(
        4,
        (v.rate / maxV) * H
      )}px;background:linear-gradient(180deg,${v.grad.replace(
        "135deg,",
        ""
      )})" data-tip="${v.name}: ${fmt(v.rate)}/mo"></div>
<div class="bar-lbl">${v.init}</div>`;
      inner.appendChild(col);
    });
  }
  buildDonut("vnd-donut", "vnd-donut-legend", [
    { label: "Active", v: 9, fmt: "9", color: "var(--gr)" },
  ]);

  // Stall tab
  const sections = ["A", "B", "C", "D"];
  const stallBars = document.getElementById("stall-bars");
  if (stallBars) {
    stallBars.innerHTML = "";
    sections.forEach((sec) => {
      const total = STALLS.filter((s) => s.section === sec).length;
      const occ = STALLS.filter(
        (s) => s.section === sec && s.status === "occupied"
      ).length;
      const pct = total > 0 ? Math.round((occ / total) * 100) : 0;
      const row = document.createElement("div");
      row.className = "prog-row";
      row.innerHTML = `<div class="prog-lbl">Section ${sec}</div>
<div class="prog-bar"><div class="prog-fill" style="width:${pct}%;background:var(--ac)"></div></div>
<div class="prog-val">${occ}/${total}</div>`;
      stallBars.appendChild(row);
    });
  }
  buildBars(
    "stall-trend-bar",
    OCCUPANCY_TREND.map((d) => ({
      ...d,
      suffix: "%",
      tip: d.v + "% occupancy",
    })),
    () => "var(--vi)"
  );

  // Collection tab
  buildDonut("col-donut", "col-donut-legend", [
    { label: "Direct Office", v: 4900, color: "var(--gr)" },
    { label: "Collector", v: 4600, color: "var(--vi)" },
    { label: "Vendor Portal", v: 2200, color: "var(--ac)" },
    { label: "Penalties", v: 700, color: "var(--am)" },
  ]);
  buildBars(
    "col-trend-bar",
    MONTHLY.map((d) => ({ ...d, tip: fmt(d.v) })),
    () => "var(--gr)"
  );
}

/* ══ PERIOD ══ */
function applyPeriod() {
  const month = document.getElementById("period-month").value;
  document.getElementById("period-label").textContent = month;
  closeM("periodModal");
  showToast("Report period updated to " + month, "g");
}

/* ══ EXPORT / PRINT ══ */
function doExport(type) {
  showToast(
    type === "excel" ? "Exporting to Excel…" : "Exporting to PDF…",
    "g"
  );
}
function doPrint() {
  showToast("Sending to printer…", "g");
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
  let t = document.getElementById("_toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "_toast";
    t.style.cssText =
      "position:fixed;bottom:24px;right:24px;z-index:9999;padding:11px 18px;border-radius:9px;font-size:13px;font-weight:600;box-shadow:0 8px 32px rgba(0,0,0,.25);transition:opacity .3s;pointer-events:none;display:flex;align-items:center;gap:8px;max-width:320px";
    document.body.appendChild(t);
  }
  const C = {
    g: "background:var(--gr);color:#fff",
    r: "background:var(--rd);color:#fff",
    a: "background:var(--am);color:#fff",
  };
  t.setAttribute("style", t.style.cssText + ";" + (C[type] || C.g));
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(() => (t.style.opacity = "0"), 3200);
}

/* ══ INIT ══ */
renderPayTable();
renderVendorTable();
renderStallTable();
renderCollectionTable();
initCharts();
