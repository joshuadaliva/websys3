/* ═══ DATA ═══ */
const VENDORS = [
  {
    id: "VND-001",
    name: "Juan Dela Cruz",
    init: "JD",
    grad: "135deg,#1d4ed8,#7c3aed",
    stall: "#01",
  },
  {
    id: "VND-002",
    name: "Pedro Reyes",
    init: "PR",
    grad: "135deg,#b91c1c,#dc2626",
    stall: "#03",
  },
  {
    id: "VND-003",
    name: "Maria Santos",
    init: "MS",
    grad: "135deg,#0f766e,#0891b2",
    stall: "#07",
  },
  {
    id: "VND-004",
    name: "Ana Lim",
    init: "AL",
    grad: "135deg,#15803d,#16a34a",
    stall: "#19",
  },
  {
    id: "VND-005",
    name: "Roberto Go",
    init: "RG",
    grad: "135deg,#0891b2,#6366f1",
    stall: "#24",
  },
  {
    id: "VND-006",
    name: "Carla Bautista",
    init: "CB",
    grad: "135deg,#3b82f6,#6366f1",
    stall: "#06",
  },
  {
    id: "VND-007",
    name: "Luis Villanueva",
    init: "LV",
    grad: "135deg,#d97706,#f59e0b",
    stall: "#11",
  },
  {
    id: "VND-008",
    name: "Grace Cruz",
    init: "GC",
    grad: "135deg,#15803d,#0f766e",
    stall: "#09",
  },
];

const COLLECTIONS = [
  {
    id: "OR-0123456",
    date: "Mar 1",
    vid: "VND-001",
    nature: "Stall Rental — March 2026",
    method: "office",
    amount: 1500,
    deposit: "DS-2026-001",
  },
  {
    id: "OR-0123457",
    date: "Mar 2",
    vid: "VND-002",
    nature: "Stall Rental — March 2026",
    method: "collector",
    amount: 1800,
    deposit: "DS-2026-001",
  },
  {
    id: "OR-0123458",
    date: "Mar 3",
    vid: "VND-003",
    nature: "Stall Rental — March 2026",
    method: "portal",
    amount: 1200,
    deposit: "DS-2026-001",
  },
  {
    id: "OR-0123459",
    date: "Mar 5",
    vid: "VND-006",
    nature: "Stall Rental — March 2026",
    method: "office",
    amount: 1200,
    deposit: "DS-2026-002",
  },
  {
    id: "OR-0123460",
    date: "Mar 5",
    vid: "VND-007",
    nature: "Stall Rental — March 2026",
    method: "collector",
    amount: 1000,
    deposit: "DS-2026-002",
  },
  {
    id: "OR-0123461",
    date: "Mar 5",
    vid: "VND-008",
    nature: "Stall Rental — March 2026",
    method: "portal",
    amount: 1000,
    deposit: "DS-2026-002",
  },
  {
    id: "OR-0123462",
    date: "Mar 7",
    vid: "VND-003",
    nature: "Penalty — Late Payment Feb",
    method: "office",
    amount: 300,
    deposit: "DS-2026-002",
  },
  {
    id: "OR-0123463",
    date: "Mar 9",
    vid: "VND-001",
    nature: "Stall Rental — March 2026 (2nd)",
    method: "office",
    amount: 1500,
    deposit: null,
  },
  {
    id: "OR-0123464",
    date: "Mar 10",
    vid: "VND-002",
    nature: "Stall Rental — March 2026 (2nd)",
    method: "collector",
    amount: 1800,
    deposit: null,
  },
  {
    id: "OR-0123465",
    date: "Mar 10",
    vid: "VND-005",
    nature: "Penalty — Overdue",
    method: "office",
    amount: 400,
    deposit: null,
  },
];

const DEPOSITS = [
  {
    id: "DS-2026-001",
    date: "Mar 3, 2026",
    bank: "Land Bank of the Philippines — Municipal Branch",
    amount: 4500,
    depositedBy: "Maria A. Torres",
    ors: ["OR-0123456", "OR-0123457", "OR-0123458"],
  },
  {
    id: "DS-2026-002",
    date: "Mar 8, 2026",
    bank: "Land Bank of the Philippines — Municipal Branch",
    amount: 3500,
    depositedBy: "Maria A. Torres",
    ors: ["OR-0123459", "OR-0123460", "OR-0123461", "OR-0123462"],
  },
];

const DAILY_DATA = [
  { date: "Mar 1", office: 1500, collector: 0, portal: 0 },
  { date: "Mar 2", office: 0, collector: 1800, portal: 0 },
  { date: "Mar 3", office: 0, collector: 0, portal: 1200 },
  { date: "Mar 4", office: 0, collector: 0, portal: 0 },
  { date: "Mar 5", office: 1200, collector: 1000, portal: 1000 },
  { date: "Mar 6", office: 0, collector: 0, portal: 0 },
  { date: "Mar 7", office: 300, collector: 0, portal: 0 },
  { date: "Mar 8", office: 0, collector: 0, portal: 0 },
  { date: "Mar 9", office: 1500, collector: 0, portal: 0 },
  { date: "Mar 10", office: 400, collector: 1800, portal: 0 },
];

let SB_OPEN = window.innerWidth >= 768;
let SB_IS_OPEN = window.innerWidth >= 900,
  DARK = false,
  CTAB = "collection";

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
  SB_OPEN = window.innerWidth >= 768;
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
  const ico = document.getElementById("themeIco");
  ico.innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ══ TABS ══ */
function setTab(id, btn) {
  CTAB = id;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  btn.classList.add("on");
  ["collection", "summary", "deposit", "chart"].forEach((t) => {
    document.getElementById("tab-" + t).style.display =
      t === id ? "block" : "none";
  });
  if (id === "summary") renderDailySummary();
  if (id === "deposit") renderDeposits();
  if (id === "chart") renderChart();
}

/* ══ COLLECTION LIST ══ */
function fmt(n) {
  return "₱" + n.toLocaleString("en-PH", { minimumFractionDigits: 2 });
}

function renderCollection(page) {
  page = page || 1;
  const PAGE_SIZE = 8;
  const q = (document.getElementById("col-srch").value || "").toLowerCase();
  const method = document.getElementById("col-method").value;
  const day = document.getElementById("col-day").value;

  const filtered = COLLECTIONS.filter((c) => {
    const v = VENDORS.find((x) => x.id === c.vid) || {};
    const mq =
      !q || c.id.toLowerCase().includes(q) || v.name.toLowerCase().includes(q);
    const mm = !method || c.method === method;
    const md = !day || c.date === day;
    return mq && mm && md;
  });

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  page = Math.min(Math.max(1, page), totalPages);
  const pageData = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);

  const tbody = document.getElementById("col-tbody");
  tbody.innerHTML = "";

  pageData.forEach((c) => {
    const v = VENDORS.find((x) => x.id === c.vid) || {
      name: "Unknown",
      init: "?",
      grad: "135deg,#ccc,#aaa",
      stall: "—",
    };
    const methodBdg = {
      office: '<span class="bdg office">Office</span>',
      collector: '<span class="bdg collector">Collector</span>',
      portal: '<span class="bdg portal">Portal</span>',
    };
    const depCell = c.deposit
      ? `<span class="mono" style="font-size:11px;color:var(--t2)">${c.deposit}</span>`
      : `<span class="bdg pend">Undeposited</span>`;
    const tr = document.createElement("tr");
    tr.innerHTML = `
  <td class="mono" style="font-weight:700;color:var(--ac)">${c.id}</td>
  <td style="font-size:12px;color:var(--t2);white-space:nowrap">${c.date}</td>
  <td><div style="display:flex;align-items:center;gap:7px">
    <div style="width:26px;height:26px;border-radius:50%;background:linear-gradient(${
      v.grad
    });display:grid;place-items:center;font-size:9px;font-weight:700;color:#fff;flex-shrink:0">${
      v.init
    }</div>
    <div><div style="font-size:12.5px;font-weight:600">${
      v.name
    }</div><div style="font-size:10px;color:var(--t3)">${c.vid}</div></div>
  </div></td>
  <td class="mono" style="font-weight:700">${v.stall}</td>
  <td style="font-size:12px;color:var(--t2);max-width:180px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${
    c.nature
  }</td>
  <td>${methodBdg[c.method] || ""}</td>
  <td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700;color:var(--gr)">${fmt(
    c.amount
  )}</td>
  <td>${depCell}</td>
  <td></td>`;
    const btn = document.createElement("button");
    btn.className = "btn gh xs";
    btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View`;
    btn.addEventListener("click", () => openOR(c.id));
    tr.querySelector("td:last-child").appendChild(btn);
    tbody.appendChild(tr);
  });

  const total = filtered.reduce((s, c) => s + c.amount, 0);
  document.getElementById("col-total").textContent = fmt(total);

  // Footer + pagination
  const foot = document.getElementById("col-foot");
  foot.innerHTML = "";
  const info = document.createElement("span");
  info.className = "tbl-footer-info";
  info.textContent = `Showing ${(page - 1) * PAGE_SIZE + 1}–${Math.min(
    page * PAGE_SIZE,
    filtered.length
  )} of ${filtered.length} records · Total: ${fmt(total)}`;
  foot.appendChild(info);

  const pg = document.createElement("div");
  pg.className = "pg-wrap";
  // Prev
  const prev = document.createElement("button");
  prev.className = "btn gh xs pg-arr";
  prev.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>';
  prev.disabled = page <= 1;
  prev.addEventListener("click", () => renderCollection(page - 1));
  pg.appendChild(prev);
  // Page buttons
  const start = Math.max(1, page - 1);
  const end = Math.min(totalPages, start + 2);
  for (let i = start; i <= end; i++) {
    const b = document.createElement("button");
    b.className = "btn gh xs" + (i === page ? " on" : "");
    b.textContent = i;
    b.addEventListener(
      "click",
      (() => {
        const p = i;
        return () => renderCollection(p);
      })()
    );
    pg.appendChild(b);
  }
  // Next
  const next = document.createElement("button");
  next.className = "btn gh xs pg-arr";
  next.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>';
  next.disabled = page >= totalPages;
  next.addEventListener("click", () => renderCollection(page + 1));
  pg.appendChild(next);
  foot.appendChild(pg);
}
/* ══ VIEW OR MODAL ══ */
function openOR(orId) {
  const c = COLLECTIONS.find((x) => x.id === orId);
  if (!c) return;
  const v = VENDORS.find((x) => x.id === c.vid) || {
    name: "Unknown",
    stall: "—",
  };
  document.getElementById("or-detail-body").innerHTML = `
<div style="background:var(--acl);border:1px solid var(--acs);border-radius:8px;padding:14px 16px;margin-bottom:16px;text-align:center">
  <div style="font-size:10px;color:var(--ac);font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-bottom:4px">Official Receipt</div>
  <div style="font-size:24px;font-weight:800;font-family:'DM Mono',monospace;color:var(--ac)">${
    c.id
  }</div>
  <div style="font-size:11px;color:var(--t3);margin-top:3px">Municipal Public Market — ARKIPAISI</div>
</div>
<div style="background:var(--surf);border:1px solid var(--brd);border-radius:8px;overflow:hidden;margin-bottom:14px">
  ${[
    ["Date", c.date + ", 2026"],
    ["Vendor", v.name],
    ["Stall No.", v.stall],
    ["Nature", c.nature],
    ["Method", c.method.charAt(0).toUpperCase() + c.method.slice(1)],
    [
      "Amount",
      `<strong style="color:var(--gr);font-size:15px;font-family:'DM Mono',monospace">${fmt(
        c.amount
      )}</strong>`,
    ],
    ["Deposit Ref", c.deposit || '<span class="bdg pend">Undeposited</span>'],
  ]
    .map(
      ([l, v]) => `
    <div style="display:flex;justify-content:space-between;align-items:center;padding:9px 13px;border-bottom:1px solid var(--brd2)">
      <span style="font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.3px">${l}</span>
      <span style="font-size:12.5px;font-weight:600">${v}</span>
    </div>`
    )
    .join("")}
</div>
<div style="display:flex;justify-content:space-between;align-items:center;padding:10px 13px;background:var(--s2);border:1px solid var(--brd);border-radius:8px;font-size:11.5px">
  <span style="color:var(--t3)">Issued by</span>
  <span style="font-weight:700">Maria A. Torres · Market Administrator</span>
</div>`;
  openM("viewORModal");
}

/* ══ DAILY SUMMARY ══ */
function renderDailySummary() {
  const rows = DAILY_DATA.map((d) => {
    const total = d.office + d.collector + d.portal;
    const count = COLLECTIONS.filter((c) => c.date === d.date).length;
    const dep = COLLECTIONS.filter(
      (c) => c.date === d.date && c.deposit
    ).length;
    return `<tr>
  <td style="font-weight:700;white-space:nowrap">${d.date}</td>
  <td>${
    count > 0
      ? `<span style="font-size:11px;font-weight:700;padding:2px 8px;border-radius:10px;background:var(--acs);color:var(--ac)">${count} txn${
          count > 1 ? "s" : ""
        }</span>`
      : '<span style="color:var(--t3);font-size:12px">—</span>'
  }</td>
  <td class="mono" style="color:var(--gr);font-weight:700">${
    total > 0 ? fmt(d.office) : ""
  }</td>
  <td class="mono" style="color:var(--vi);font-weight:700">${
    total > 0 ? fmt(d.collector) : ""
  }</td>
  <td class="mono" style="color:var(--ac);font-weight:700">${
    total > 0 ? fmt(d.portal) : ""
  }</td>
  <td class="mono" style="font-weight:800;font-size:13px">${
    total > 0 ? fmt(total) : '<span style="color:var(--t3)">₱0.00</span>'
  }</td>
  <td>${
    dep > 0
      ? `<span class="bdg dep">${dep} deposited</span>`
      : count > 0
      ? '<span class="bdg pend">Undeposited</span>'
      : ""
  }</td>
</tr>`;
  });
  const grandTotal = DAILY_DATA.reduce(
    (s, d) => s + (d.office + d.collector + d.portal),
    0
  );
  const grandOffice = DAILY_DATA.reduce((s, d) => s + d.office, 0);
  const grandCollector = DAILY_DATA.reduce((s, d) => s + d.collector, 0);
  const grandPortal = DAILY_DATA.reduce((s, d) => s + d.portal, 0);

  const wrap = document.getElementById("sum-tbl-wrap");
  if (!wrap) return;
  wrap.innerHTML = `<div class="tbl-wrap"><table class="tbl">
<thead><tr>
  <th>Date</th><th>Transactions</th><th>Office</th><th>Collector</th><th>Portal</th><th>Daily Total</th><th>Status</th>
</tr></thead>
<tbody>${rows.join("")}</tbody>
<tfoot><tr style="background:var(--s2);font-weight:700">
  <td colspan="2" style="padding:9px 14px;border-top:2px solid var(--brd)">Grand Total</td>
  <td class="mono" style="color:var(--gr);padding:9px 14px;border-top:2px solid var(--brd)">${fmt(
    grandOffice
  )}</td>
  <td class="mono" style="color:var(--vi);padding:9px 14px;border-top:2px solid var(--brd)">${fmt(
    grandCollector
  )}</td>
  <td class="mono" style="color:var(--ac);padding:9px 14px;border-top:2px solid var(--brd)">${fmt(
    grandPortal
  )}</td>
  <td class="mono" style="color:var(--gr);font-size:14px;padding:9px 14px;border-top:2px solid var(--brd)">${fmt(
    grandTotal
  )}</td>
  <td style="padding:9px 14px;border-top:2px solid var(--brd)"></td>
</tr></tfoot>
</table></div>
<div class="tbl-footer">
<span class="tbl-footer-info">${DAILY_DATA.length} days · Grand Total: ${fmt(
    grandTotal
  )}</span>
</div>`;
}
/* ══ DEPOSIT REPORT ══ */
function renderDeposits() {
  const undeposited = COLLECTIONS.filter((c) => !c.deposit);
  const undepTotal = undeposited.reduce((s, c) => s + c.amount, 0);

  let html = "";

  // existing deposits
  DEPOSITS.forEach((d) => {
    const ors = d.ors
      .map((orid) => {
        const c = COLLECTIONS.find((x) => x.id === orid) || {};
        const v = VENDORS.find((x) => x.id === c.vid) || {
          name: "?",
          stall: "—",
        };
        return `<div style="display:flex;justify-content:space-between;align-items:center;padding:7px 0;border-bottom:1px solid var(--brd2)">
    <div style="display:flex;align-items:center;gap:8px">
      <span class="mono" style="font-size:11.5px;color:var(--ac);font-weight:700">${orid}</span>
      <span style="font-size:12px;color:var(--t2)">${v.name}</span>
      <span style="font-size:11px;color:var(--t3)">Stall ${v.stall}</span>
    </div>
    <span class="mono" style="font-weight:700;color:var(--gr)">${fmt(
      c.amount || 0
    )}</span>
  </div>`;
      })
      .join("");
    html += `<div class="dep-slip" style="margin-bottom:14px">
  <div class="dep-slip-hdr">
    <div class="dep-slip-hdr-l">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13" style="margin-right:5px"></svg>
      Deposit Slip — ${d.id}
    </div>
    <div style="display:flex;align-items:center;gap:8px">
      <span class="bdg dep">Deposited</span>
      <button class="btn gh xs" onclick="showToast('Deposit slip printed','g')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><polyline points="6 9 6 2 18 2 18 9"/><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><rect x="6" y="14" width="12" height="8"/></svg>
        Print
      </button>
    </div>
  </div>
  <div class="dep-slip-body">
    <div class="dep-slip-col">
      <div class="dep-field"><div class="dep-field-lbl">Deposit Date</div><div class="dep-field-val">${
        d.date
      }</div></div>
      <div class="dep-field"><div class="dep-field-lbl">Bank / Branch</div><div class="dep-field-val" style="font-size:12px">${
        d.bank
      }</div></div>
      <div class="dep-field"><div class="dep-field-lbl">Deposited By</div><div class="dep-field-val" style="font-size:12px">${
        d.depositedBy
      }</div></div>
      <div class="dep-field"><div class="dep-field-lbl">Total Amount Deposited</div><div class="dep-field-val big">${fmt(
        d.amount
      )}</div></div>
    </div>
    <div class="dep-slip-col">
      <div class="rcd-section-lbl">Official Receipts Covered (${
        d.ors.length
      })</div>
      ${ors}
      <div style="display:flex;justify-content:space-between;padding-top:8px;margin-top:4px;font-weight:700;font-size:13px">
        <span>Total</span><span class="mono" style="color:var(--gr)">${fmt(
          d.amount
        )}</span>
      </div>
    </div>
  </div>
  <div class="dep-slip-foot">
    <span style="font-size:11.5px;color:var(--gr);font-weight:600">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><polyline points="9 11 12 14 22 4"/></svg>
      Successfully deposited — ${d.date}
    </span>
    <span style="font-size:11px;color:var(--t3)">Covered ${d.ors.length} OR${
      d.ors.length > 1 ? "s" : ""
    }</span>
  </div>
</div>`;
  });

  // undeposited section
  if (undeposited.length > 0) {
    const orRows = undeposited
      .map((c) => {
        const v = VENDORS.find((x) => x.id === c.vid) || {
          name: "?",
          stall: "—",
        };
        return `<div style="display:flex;justify-content:space-between;align-items:center;padding:8px 0;border-bottom:1px solid var(--brd2)">
    <div style="display:flex;align-items:center;gap:8px">
      <span class="mono" style="font-size:11.5px;color:var(--am);font-weight:700">${
        c.id
      }</span>
      <span style="font-size:12px">${v.name}</span>
      <span style="font-size:11px;color:var(--t3)">${c.date}</span>
    </div>
    <span class="mono" style="font-weight:700;color:var(--am)">${fmt(
      c.amount
    )}</span>
  </div>`;
      })
      .join("");
    html += `<div class="dep-slip" style="margin-bottom:14px;border-color:var(--ams)">
  <div class="dep-slip-hdr" style="background:var(--aml);border-color:var(--ams)">
    <div class="dep-slip-hdr-l" style="color:var(--am)">Undeposited Collections — Pending Bank Deposit</div>
    <div style="display:flex;align-items:center;gap:8px">
      <span style="font-size:13px;font-weight:800;font-family:'DM Mono',monospace;color:var(--am)">${fmt(
        undepTotal
      )}</span>
      <button class="btn ao xs" onclick="openM('recordDepositModal')">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><rect x="2" y="5" width="20" height="14" rx="2"/><line x1="2" y1="10" x2="22" y2="10"/></svg>
        Record Deposit
      </button>
    </div>
  </div>
  <div style="padding:14px 16px">
    <div class="rcd-section-lbl">${undeposited.length} Undeposited OR${
      undeposited.length > 1 ? "s" : ""
    }</div>
    ${orRows}
    <div style="display:flex;justify-content:space-between;padding-top:10px;margin-top:4px;font-weight:800;font-size:14px">
      <span>Total Pending</span><span class="mono" style="color:var(--am)">${fmt(
        undepTotal
      )}</span>
    </div>
  </div>
</div>`;
  }

  document.getElementById("deposit-list").innerHTML = html;

  // populate OR checkboxes in record deposit modal
  const orList = document.getElementById("dep-or-list");
  if (orList) {
    orList.innerHTML = undeposited
      .map((c) => {
        const v = VENDORS.find((x) => x.id === c.vid) || { name: "?" };
        return `<label style="display:flex;align-items:center;gap:8px;padding:8px 11px;background:var(--s2);border:1px solid var(--brd);border-radius:7px;cursor:pointer;transition:background .12s" onmouseover="this.style.background='var(--acl)'" onmouseout="this.style.background='var(--s2)'">
    <input type="checkbox" checked style="width:14px;height:14px;accent-color:var(--ac)"/>
    <div style="flex:1">
      <span class="mono" style="font-size:12px;font-weight:700;color:var(--ac)">${
        c.id
      }</span>
      <span style="font-size:12px;color:var(--t2);margin-left:7px">${
        v.name
      }</span>
    </div>
    <span class="mono" style="font-weight:700;font-size:12px;color:var(--gr)">${fmt(
      c.amount
    )}</span>
  </label>`;
      })
      .join("");
  }
}

function saveDeposit() {
  const slipNo =
    document.getElementById("dep-slip-no").value.trim() || "DS-2026-003";
  const amountRaw =
    parseFloat(document.getElementById("dep-amount").value) || 0;
  const date = document.getElementById("dep-date").value;
  const dateFormatted = new Date(date).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  // mark undeposited ORs as deposited
  const undeposited = COLLECTIONS.filter((c) => !c.deposit);
  const totalUndep = undeposited.reduce((s, c) => s + c.amount, 0);
  undeposited.forEach((c) => {
    c.deposit = slipNo;
  });

  DEPOSITS.push({
    id: slipNo,
    date: dateFormatted,
    bank: document.getElementById("dep-bank").value,
    amount: amountRaw || totalUndep,
    depositedBy: document.getElementById("dep-by").value,
    ors: undeposited.map((c) => c.id),
  });

  closeM("recordDepositModal");
  renderDeposits();
  renderCollection();

  // update stats
  document.getElementById("stat-deposited").textContent = fmt(
    DEPOSITS.reduce((s, d) => s + d.amount, 0)
  );
  document.getElementById(
    "stat-deposited-sub"
  ).textContent = `${DEPOSITS.length} deposits made`;
  document.getElementById("stat-undeposited").textContent = "₱0.00";
  document.getElementById("stat-undeposited-sub").textContent = "All deposited";

  showToast(
    `Deposit ${slipNo} recorded — ${undeposited.length} OR${
      undeposited.length > 1 ? "s" : ""
    } covered`,
    "g"
  );
}

/* ══ CHART ══ */
function renderChart() {
  const maxVal = Math.max(
    ...DAILY_DATA.map((d) => d.office + d.collector + d.portal),
    1
  );
  const H = 140;
  const chart = document.getElementById("bar-chart");
  chart.innerHTML = "";
  DAILY_DATA.forEach((d) => {
    const total = d.office + d.collector + d.portal;
    const group = document.createElement("div");
    group.className = "bar-group";

    const valDiv = document.createElement("div");
    valDiv.className = "bar-val";
    valDiv.textContent = total > 0 ? "₱" + Math.round(total / 1000) + "K" : "";

    const stack = document.createElement("div");
    stack.className = "bar-stack";
    stack.style.height = (total / maxVal) * H + "px";

    [
      { val: d.portal, color: "#1d4ed8", label: "Portal" },
      { val: d.collector, color: "#6d28d9", label: "Collector" },
      { val: d.office, color: "#15803d", label: "Office" },
    ].forEach((seg) => {
      if (seg.val <= 0) return;
      const div = document.createElement("div");
      div.className = "bar-seg";
      div.style.background = seg.color;
      div.style.flex = seg.val + " 0 0";
      div.setAttribute("data-tip", `${seg.label}: ${fmt(seg.val)}`);
      stack.appendChild(div);
    });

    const lbl = document.createElement("div");
    lbl.className = "bar-lbl";
    lbl.textContent = d.date.replace("Mar ", "");

    group.appendChild(valDiv);
    group.appendChild(stack);
    group.appendChild(lbl);
    chart.appendChild(group);
  });
}

/* ══ PRINT PREVIEW ══ */
function openPreview() {
  const rows = COLLECTIONS.map((c) => {
    const v = VENDORS.find((x) => x.id === c.vid) || { name: "?", stall: "—" };
    return `<tr>
  <td>${c.id}</td><td>${c.date}</td><td>${v.name}</td><td>${v.stall}</td>
  <td>${c.nature}</td><td style="text-align:right;font-weight:700">${fmt(
      c.amount
    )}</td>
</tr>`;
  }).join("");
  const total = COLLECTIONS.reduce((s, c) => s + c.amount, 0);
  document.getElementById("rcd-preview-content").innerHTML = `
<div class="rcd-print-title">
  <div class="t1">Republic of the Philippines · Local Government Unit</div>
  <div class="t2">Municipal Public Market — ARKIPAISI</div>
  <div class="t3">Report of Collection and Deposit (RCD)</div>
</div>
<div class="rcd-print-meta">
  <span>RCD No.: <strong>RCD-2026-03</strong></span>
  <span>Period: <strong>March 1–10, 2026</strong></span>
  <span>Officer: <strong>Maria A. Torres</strong></span>
</div>
<div class="rcd-section-lbl">Collection List</div>
<table class="rcd-ptbl">
  <thead><tr><th>OR No.</th><th>Date</th><th>Vendor</th><th>Stall</th><th>Nature</th><th style="text-align:right">Amount (₱)</th></tr></thead>
  <tbody>${rows}</tbody>
  <tfoot><tr><td colspan="5">TOTAL COLLECTION</td><td style="text-align:right">${fmt(
    total
  )}</td></tr></tfoot>
</table>
<div class="rcd-section-lbl" style="margin-top:16px">Deposit Summary</div>
<table class="rcd-ptbl">
  <thead><tr><th>Deposit Slip No.</th><th>Date</th><th>Bank</th><th style="text-align:right">Amount (₱)</th></tr></thead>
  <tbody>${DEPOSITS.map(
    (d) =>
      `<tr><td>${d.id}</td><td>${d.date}</td><td>${d.bank
        .split("—")[0]
        .trim()}</td><td style="text-align:right;font-weight:700">${fmt(
        d.amount
      )}</td></tr>`
  ).join("")}</tbody>
  <tfoot><tr><td colspan="3">TOTAL DEPOSITED</td><td style="text-align:right">${fmt(
    DEPOSITS.reduce((s, d) => s + d.amount, 0)
  )}</td></tr></tfoot>
</table>
<div class="rcd-sig">
  <div class="rcd-sig-block"><div class="rcd-sig-name">MARIA A. TORRES</div><div class="rcd-sig-title">Market Administrator / Collecting Officer</div></div>
  <div class="rcd-sig-block"><div class="rcd-sig-name">HON. JUAN DELA CRUZ</div><div class="rcd-sig-title">Municipal Treasurer</div></div>
</div>`;
}

/* ══ MODALS ══ */
function openM(id) {
  document.getElementById(id).classList.add("open");
  if (id === "previewModal") openPreview();
}
function closeM(id) {
  document.getElementById(id).classList.remove("open");
}
document.querySelectorAll(".mbg").forEach((b) =>
  b.addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  })
);

/* ══ EXPORT ══ */
function exportExcel() {
  showToast("Exporting RCD to Excel…", "g");
}

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
  t.setAttribute("style", t.style.cssText + ";" + (cols[type] || cols.g));
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._tid);
  t._tid = setTimeout(() => {
    t.style.opacity = "0";
  }, 3200);
}

/* ══ INIT ══ */
renderCollection();
