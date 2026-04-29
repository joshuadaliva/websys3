/* ═══ DATA ═══ */
const VENDORS = [
  {
    id: "VND-A001",
    name: "Ricardo Mendoza",
    init: "RM",
    grad: "135deg,#b91c1c,#dc2626",
    stall: "#05",
    contract: "Jan 2013 – Dec 2020",
    archivedOn: "Jan 1, 2021",
    reason: "Contract Ended",
    phone: "+63 912 111 2222",
    email: "r.mendoza@email.com",
    totalPaid: "₱201,600",
    year: "2021",
  },
  {
    id: "VND-A002",
    name: "Lourdes Fernandez",
    init: "LF",
    grad: "135deg,#0f766e,#0891b2",
    stall: "#12",
    contract: "Mar 2014 – Feb 2021",
    archivedOn: "Jan 1, 2021",
    reason: "Contract Ended",
    phone: "+63 917 333 4444",
    email: "l.fernandez@email.com",
    totalPaid: "₱172,800",
    year: "2021",
  },
  {
    id: "VND-A003",
    name: "Ernesto Villanueva",
    init: "EV",
    grad: "135deg,#1d4ed8,#7c3aed",
    stall: "#18",
    contract: "Jun 2012 – May 2020",
    archivedOn: "Jan 1, 2021",
    reason: "Vendor Resigned",
    phone: "+63 920 555 6666",
    email: "e.villanueva@email.com",
    totalPaid: "₱115,200",
    year: "2021",
  },
  {
    id: "VND-A004",
    name: "Josefa Ramos",
    init: "JR",
    grad: "135deg,#15803d,#16a34a",
    stall: "#22",
    contract: "Aug 2011 – Jul 2019",
    archivedOn: "Jan 1, 2020",
    reason: "Contract Ended",
    phone: "+63 915 777 8888",
    email: "j.ramos@email.com",
    totalPaid: "₱96,000",
    year: "2020",
  },
  {
    id: "VND-A005",
    name: "Manuel Cruz",
    init: "MC",
    grad: "135deg,#6d28d9,#db2777",
    stall: "#08",
    contract: "Feb 2010 – Jan 2018",
    archivedOn: "Jan 1, 2019",
    reason: "Contract Ended",
    phone: "+63 918 999 0000",
    email: "m.cruz@email.com",
    totalPaid: "₱172,800",
    year: "2019",
  },
  {
    id: "VND-A006",
    name: "Consuelo Santos",
    init: "CS",
    grad: "135deg,#0891b2,#6366f1",
    stall: "#14",
    contract: "Nov 2009 – Oct 2017",
    archivedOn: "Jan 1, 2018",
    reason: "Administrative Decision",
    phone: "+63 912 222 3333",
    email: "c.santos@email.com",
    totalPaid: "₱144,000",
    year: "2018",
  },
];

const PAYMENTS = [
  {
    id: "OR-2021-001",
    vendor: "Ricardo Mendoza",
    stall: "#05",
    period: "January 2021",
    amount: 1800,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-002",
    vendor: "Lourdes Fernandez",
    stall: "#12",
    period: "January 2021",
    amount: 1500,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-003",
    vendor: "Ernesto Villanueva",
    stall: "#18",
    period: "January 2021",
    amount: 1200,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-004",
    vendor: "Ricardo Mendoza",
    stall: "#05",
    period: "February 2021",
    amount: 1800,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-005",
    vendor: "Lourdes Fernandez",
    stall: "#12",
    period: "February 2021",
    amount: 1500,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-006",
    vendor: "Ernesto Villanueva",
    stall: "#18",
    period: "February 2021",
    amount: 1200,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-007",
    vendor: "Ricardo Mendoza",
    stall: "#05",
    period: "March 2021",
    amount: 1800,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2021-008",
    vendor: "Lourdes Fernandez",
    stall: "#12",
    period: "March 2021",
    amount: 1500,
    archivedOn: "Jan 1, 2021",
    year: "2021",
    nature: "Stall Rental",
  },
  {
    id: "OR-2020-001",
    vendor: "Josefa Ramos",
    stall: "#22",
    period: "October 2020",
    amount: 1000,
    archivedOn: "Jan 1, 2020",
    year: "2020",
    nature: "Stall Rental",
  },
  {
    id: "OR-2020-002",
    vendor: "Ricardo Mendoza",
    stall: "#05",
    period: "November 2020",
    amount: 1800,
    archivedOn: "Jan 1, 2020",
    year: "2020",
    nature: "Stall Rental",
  },
  {
    id: "OR-2020-003",
    vendor: "Josefa Ramos",
    stall: "#22",
    period: "November 2020",
    amount: 1000,
    archivedOn: "Jan 1, 2020",
    year: "2020",
    nature: "Stall Rental",
  },
  {
    id: "OR-2020-004",
    vendor: "Ernesto Villanueva",
    stall: "#18",
    period: "December 2020",
    amount: 1200,
    archivedOn: "Jan 1, 2020",
    year: "2020",
    nature: "Penalty — Late Payment",
  },
  {
    id: "OR-2019-001",
    vendor: "Manuel Cruz",
    stall: "#08",
    period: "June 2019",
    amount: 1800,
    archivedOn: "Jan 1, 2019",
    year: "2019",
    nature: "Stall Rental",
  },
  {
    id: "OR-2019-002",
    vendor: "Manuel Cruz",
    stall: "#08",
    period: "July 2019",
    amount: 1800,
    archivedOn: "Jan 1, 2019",
    year: "2019",
    nature: "Stall Rental",
  },
  {
    id: "OR-2018-001",
    vendor: "Consuelo Santos",
    stall: "#14",
    period: "March 2018",
    amount: 1500,
    archivedOn: "Jan 1, 2018",
    year: "2018",
    nature: "Stall Rental",
  },
  {
    id: "OR-2018-002",
    vendor: "Consuelo Santos",
    stall: "#14",
    period: "April 2018",
    amount: 1500,
    archivedOn: "Jan 1, 2018",
    year: "2018",
    nature: "Stall Rental",
  },
];

const DOCS = [
  {
    id: "DOC-A001",
    name: "Contract_RicardoMendoza_2013.pdf",
    type: "Contract",
    vendor: "Ricardo Mendoza",
    stall: "#05",
    uploaded: "Jan 15, 2013",
    archivedOn: "Jan 1, 2021",
    size: "1.2 MB",
  },
  {
    id: "DOC-A002",
    name: "ValidID_LourdesFernandez_2014.jpg",
    type: "ID",
    vendor: "Lourdes Fernandez",
    stall: "#12",
    uploaded: "Mar 20, 2014",
    archivedOn: "Jan 1, 2021",
    size: "0.4 MB",
  },
  {
    id: "DOC-A003",
    name: "Contract_ErnestoVillanueva_2012.pdf",
    type: "Contract",
    vendor: "Ernesto Villanueva",
    stall: "#18",
    uploaded: "Jun 5, 2012",
    archivedOn: "Jan 1, 2021",
    size: "1.1 MB",
  },
  {
    id: "DOC-A004",
    name: "Application_ErnestoVillanueva_2012.pdf",
    type: "Application",
    vendor: "Ernesto Villanueva",
    stall: "#18",
    uploaded: "Jun 1, 2012",
    archivedOn: "Jan 1, 2021",
    size: "0.9 MB",
  },
  {
    id: "DOC-A005",
    name: "OR_RicardoMendoza_Jan2021.pdf",
    type: "OR",
    vendor: "Ricardo Mendoza",
    stall: "#05",
    uploaded: "Jan 31, 2021",
    archivedOn: "Jan 1, 2021",
    size: "0.3 MB",
  },
  {
    id: "DOC-A006",
    name: "Application_JosefaRamos_2011.pdf",
    type: "Application",
    vendor: "Josefa Ramos",
    stall: "#22",
    uploaded: "Aug 10, 2011",
    archivedOn: "Jan 1, 2020",
    size: "0.8 MB",
  },
  {
    id: "DOC-A007",
    name: "Contract_JosefaRamos_2011.pdf",
    type: "Contract",
    vendor: "Josefa Ramos",
    stall: "#22",
    uploaded: "Aug 15, 2011",
    archivedOn: "Jan 1, 2020",
    size: "1.0 MB",
  },
  {
    id: "DOC-A008",
    name: "ValidID_ManuelCruz_2010.jpg",
    type: "ID",
    vendor: "Manuel Cruz",
    stall: "#08",
    uploaded: "Feb 2, 2010",
    archivedOn: "Jan 1, 2019",
    size: "0.5 MB",
  },
  {
    id: "DOC-A009",
    name: "Contract_ManuelCruz_2010.pdf",
    type: "Contract",
    vendor: "Manuel Cruz",
    stall: "#08",
    uploaded: "Feb 5, 2010",
    archivedOn: "Jan 1, 2019",
    size: "1.3 MB",
  },
  {
    id: "DOC-A010",
    name: "OR_ManuelCruz_Jun2019.pdf",
    type: "OR",
    vendor: "Manuel Cruz",
    stall: "#08",
    uploaded: "Jun 30, 2019",
    archivedOn: "Jan 1, 2019",
    size: "0.3 MB",
  },
  {
    id: "DOC-A011",
    name: "Contract_ConsueloSantos_2009.pdf",
    type: "Contract",
    vendor: "Consuelo Santos",
    stall: "#14",
    uploaded: "Nov 1, 2009",
    archivedOn: "Jan 1, 2018",
    size: "1.4 MB",
  },
  {
    id: "DOC-A012",
    name: "BusinessPermit_ConsueloSantos.pdf",
    type: "Misc",
    vendor: "Consuelo Santos",
    stall: "#14",
    uploaded: "Nov 1, 2009",
    archivedOn: "Jan 1, 2018",
    size: "0.6 MB",
  },
];

const LOG = [
  {
    type: "auto",
    title: "Auto-Archive Run Completed",
    sub: "42 records archived automatically · Vendors: 6, Payments: 30, Documents: 6",
    time: "Jan 1, 2026 · 12:00 AM",
  },
  {
    type: "rest",
    title: "Record Restored — Josefa Ramos",
    sub: "Vendor VND-A004 restored by Maria A. Torres",
    time: "Dec 15, 2025 · 2:30 PM",
  },
  {
    type: "arch",
    title: "Manual Archive — Ernesto Villanueva",
    sub: "Vendor VND-A003 archived · Reason: Vendor Resigned",
    time: "Nov 20, 2025 · 10:15 AM",
  },
  {
    type: "auto",
    title: "Auto-Archive Run Completed",
    sub: "78 records archived automatically · Vendors: 12, Payments: 58, Documents: 8",
    time: "Jan 1, 2021 · 12:00 AM",
  },
  {
    type: "arch",
    title: "Manual Archive — Contract Files",
    sub: "8 expired contract documents archived by administrator",
    time: "Jun 5, 2020 · 9:00 AM",
  },
  {
    type: "rest",
    title: "Record Restored — Manuel Cruz",
    sub: "Payment OR-2019-001 restored for audit purposes",
    time: "Mar 3, 2020 · 11:00 AM",
  },
  {
    type: "auto",
    title: "Auto-Archive Run Completed",
    sub: "33 records archived · Vendors: 5, Payments: 22, Documents: 6",
    time: "Jan 1, 2019 · 12:00 AM",
  },
];

const DOC_ICO = {
  Contract: "📄",
  OR: "🧾",
  Application: "📝",
  ID: "🪪",
  Misc: "📁",
};
const DOC_BDG = {
  Contract: "contract",
  OR: "orc",
  Application: "applic",
  ID: "idc",
  Misc: "misc",
};
const REASON_BDG = {
  "Contract Ended": "arch",
  "Vendor Resigned": "arch",
  "Administrative Decision": "arch",
};

let SB_OPEN = window.innerWidth >= 900,
  DARK = false;

/* ══ SIDEBAR ══ */
function openSB() {
  SB_OPEN = true;
  const sb = document.getElementById("sb");
  sb.style.transform = "translateX(0)";
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

/* ══ VIEW MODE (table / card) ══ */
let VIEW_MODE = "table";
function setView(mode) {
  VIEW_MODE = mode;
  document
    .getElementById("vbtn-table")
    .classList.toggle("on", mode === "table");
  document.getElementById("vbtn-card").classList.toggle("on", mode === "card");
  applyViewMode();
}
function applyViewMode() {
  // Apply to active data tabs
  ["vendors", "documents"].forEach(function (tabId) {
    const tblWrap = document.querySelector("#tab-" + tabId + " .tbl-wrap");
    const cardList = document.querySelector("#tab-" + tabId + " .card-list");
    if (!tblWrap || !cardList) return;
    if (VIEW_MODE === "card") {
      tblWrap.setAttribute("style", "display:none!important");
      cardList.setAttribute("style", "display:flex!important");
    } else {
      tblWrap.setAttribute("style", "display:block!important");
      cardList.setAttribute("style", "display:none!important");
    }
  });
}

/* ══ TABS ══ */
let ACTIVE_TAB = "vendors";
function setTab(id, btn) {
  ACTIVE_TAB = id;
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  btn.classList.add("on");
  ["vendors", "documents"].forEach(
    (t) =>
      (document.getElementById("tab-" + t).style.display =
        t === id ? "block" : "none")
  );
  if (id === "vendors") renderVendors();
  else if (id === "documents") renderDocs();
  applyViewMode(id);
}

/* ══ HELPERS ══ */
function fmt(n) {
  return "₱" + n.toLocaleString("en-PH", { minimumFractionDigits: 2 });
}
function detRows(pairs) {
  return pairs
    .map(
      ([l, v]) =>
        `<div class="det-row"><span class="det-lbl">${l}</span><span class="det-val">${v}</span></div>`
    )
    .join("");
}
function avatar(v, size = 28) {
  return `<div style="width:${size}px;height:${size}px;border-radius:50%;background:linear-gradient(${
    v.grad
  });display:grid;place-items:center;font-size:${Math.round(
    size * 0.37
  )}px;font-weight:800;color:#fff;opacity:.75;flex-shrink:0">${v.init}</div>`;
}

function makeRestoreBtn(type, id, name, rowEl) {
  const btn = document.createElement("button");
  btn.className = "btn su xs";
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg> Restore`;
  btn.addEventListener("click", () => doRestore(type, id, name, rowEl));
  return btn;
}
function makeViewBtn(clickFn) {
  const btn = document.createElement("button");
  btn.className = "btn gh xs";
  btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="11" height="11"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg> View`;
  btn.addEventListener("click", clickFn);
  return btn;
}

/* ══ VENDORS ══ */
function renderVendors() {
  const q = (document.getElementById("vnd-srch").value || "").toLowerCase();
  const yr = document.getElementById("vnd-year").value;
  const list = VENDORS.filter(
    (v) =>
      (!q ||
        v.name.toLowerCase().includes(q) ||
        v.id.toLowerCase().includes(q)) &&
      (!yr || v.year === yr)
  );

  // Table rows
  const tbody = document.getElementById("vnd-tbody");
  tbody.innerHTML = "";
  list.forEach((v) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="mono" style="color:var(--t3);font-size:11.5px">${v.id}</td>
      <td><div style="display:flex;align-items:center;gap:8px">${avatar(
        v
      )}<div><div style="font-size:13px;font-weight:700">${
      v.name
    }</div><div style="font-size:10.5px;color:var(--t3)">${
      v.email
    }</div></div></div></td>
      <td class="mono" style="font-weight:700">${v.stall}</td>
      <td style="font-size:12px;color:var(--t2);white-space:nowrap">${
        v.contract
      }</td>
      <td style="font-size:12px;color:var(--t3);white-space:nowrap">${
        v.archivedOn
      }</td>
      <td><span class="bdg arch">${v.reason}</span></td>
      <td style="white-space:nowrap"></td>`;
    const act = tr.querySelector("td:last-child");
    act.appendChild(makeViewBtn(() => openVendor(v.id)));
    tbody.appendChild(tr);
  });

  // Mobile cards
  const cards = document.getElementById("vnd-cards");
  cards.innerHTML = "";
  list.forEach((v) => {
    const div = document.createElement("div");
    div.className = "rec-card";
    div.innerHTML = `
      <div class="rc-top">
        <div style="display:flex;align-items:center;gap:9px;flex:1;min-width:0">
          ${avatar(v, 36)}
          <div style="min-width:0"><div class="rc-name">${
            v.name
          }</div><div class="rc-id">${v.id}</div></div>
        </div>
        <span class="bdg arch" style="flex-shrink:0">${v.reason}</span>
      </div>
      <div class="rc-meta">
        <div class="rc-field"><div class="rc-field-lbl">Stall</div><div class="rc-field-val mono">${
          v.stall
        }</div></div>
        <div class="rc-field"><div class="rc-field-lbl">Archived On</div><div class="rc-field-val">${
          v.archivedOn
        }</div></div>
        <div class="rc-field" style="grid-column:1/-1"><div class="rc-field-lbl">Contract Period</div><div class="rc-field-val">${
          v.contract
        }</div></div>
      </div>
      <div class="rc-actions"></div>`;
    const act = div.querySelector(".rc-actions");
    act.appendChild(makeViewBtn(() => openVendor(v.id)));
    cards.appendChild(div);
  });

  document.getElementById(
    "vnd-foot"
  ).textContent = `${list.length} of ${VENDORS.length} archived vendors`;
}

/* ══ PAYMENTS ══ */
function renderPayments() {
  const q = (document.getElementById("pay-srch").value || "").toLowerCase();
  const yr = document.getElementById("pay-year").value;
  const list = PAYMENTS.filter(
    (p) =>
      (!q ||
        p.id.toLowerCase().includes(q) ||
        p.vendor.toLowerCase().includes(q)) &&
      (!yr || p.year === yr)
  );

  const tbody = document.getElementById("pay-tbody");
  tbody.innerHTML = "";
  list.forEach((p) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td class="mono" style="color:var(--ac);font-size:11.5px">${p.id}</td>
      <td style="font-size:13px;font-weight:600">${p.vendor}</td>
      <td class="mono" style="font-weight:700">${p.stall}</td>
      <td style="font-size:12px;color:var(--t2)">${p.period}</td>
      <td style="text-align:right;font-family:'DM Mono',monospace;font-weight:700;color:var(--gr)">${fmt(
        p.amount
      )}</td>
      <td style="font-size:12px;color:var(--t3);white-space:nowrap">${
        p.archivedOn
      }</td>
      <td style="white-space:nowrap"></td>`;
    const act = tr.querySelector("td:last-child");
    act.appendChild(makeViewBtn(() => openPayment(p.id)));
    act.appendChild(
      Object.assign(document.createElement("span"), { innerHTML: " " })
    );
    act.appendChild(makeRestoreBtn("payment", p.id, p.id, tr));
    tbody.appendChild(tr);
  });

  const cards = document.getElementById("pay-cards");
  cards.innerHTML = "";
  list.forEach((p) => {
    const div = document.createElement("div");
    div.className = "rec-card";
    div.innerHTML = `
      <div class="rc-top">
        <div style="min-width:0;flex:1">
          <div class="rc-name mono" style="color:var(--ac)">${p.id}</div>
          <div class="rc-sub">${p.vendor} · Stall ${p.stall}</div>
        </div>
        <div style="text-align:right;flex-shrink:0">
          <div style="font-size:15px;font-weight:800;font-family:'DM Mono',monospace;color:var(--gr)">${fmt(
            p.amount
          )}</div>
        </div>
      </div>
      <div class="rc-meta">
        <div class="rc-field"><div class="rc-field-lbl">Period</div><div class="rc-field-val">${
          p.period
        }</div></div>
        <div class="rc-field"><div class="rc-field-lbl">Archived On</div><div class="rc-field-val">${
          p.archivedOn
        }</div></div>
        <div class="rc-field" style="grid-column:1/-1"><div class="rc-field-lbl">Nature</div><div class="rc-field-val">${
          p.nature
        }</div></div>
      </div>
      <div class="rc-actions"></div>`;
    const act = div.querySelector(".rc-actions");
    act.appendChild(makeViewBtn(() => openPayment(p.id)));
    act.appendChild(makeRestoreBtn("payment", p.id, p.id, div));
    cards.appendChild(div);
  });

  document.getElementById(
    "pay-foot"
  ).textContent = `${list.length} of ${PAYMENTS.length} archived payments`;
}

/* ══ DOCUMENTS ══ */
function renderDocs() {
  const q = (document.getElementById("doc-srch").value || "").toLowerCase();
  const type = document.getElementById("doc-type").value;
  const list = DOCS.filter(
    (d) =>
      (!q ||
        d.name.toLowerCase().includes(q) ||
        d.vendor.toLowerCase().includes(q)) &&
      (!type || d.type === type)
  );

  const tbody = document.getElementById("doc-tbody");
  tbody.innerHTML = "";
  list.forEach((d) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `
      <td><div style="display:flex;align-items:center;gap:8px">
        <span style="font-size:18px;flex-shrink:0">${
          DOC_ICO[d.type] || "📄"
        }</span>
        <div style="min-width:0"><div style="font-size:12.5px;font-weight:600;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;max-width:200px">${
          d.name
        }</div><div style="font-size:10px;color:var(--t3)">${d.id}</div></div>
      </div></td>
      <td><span class="bdg ${DOC_BDG[d.type] || "misc"}">${d.type}</span></td>
      <td style="font-size:12.5px;font-weight:600">${d.vendor}</td>
      <td style="font-size:12px;color:var(--t2);white-space:nowrap">${
        d.uploaded
      }</td>
      <td style="font-size:12px;color:var(--t3);white-space:nowrap">${
        d.archivedOn
      }</td>
      <td class="mono" style="font-size:11px;color:var(--t3)">${d.size}</td>
      <td style="white-space:nowrap"></td>`;
    const act = tr.querySelector("td:last-child");
    act.appendChild(makeViewBtn(() => openDoc(d.id)));
    tbody.appendChild(tr);
  });

  const cards = document.getElementById("doc-cards");
  cards.innerHTML = "";
  list.forEach((d) => {
    const div = document.createElement("div");
    div.className = "rec-card";
    div.innerHTML = `
      <div class="rc-top">
        <div style="display:flex;align-items:center;gap:10px;flex:1;min-width:0">
          <span style="font-size:28px;flex-shrink:0">${
            DOC_ICO[d.type] || "📄"
          }</span>
          <div style="min-width:0">
            <div class="rc-name" style="overflow:hidden;text-overflow:ellipsis;white-space:nowrap">${
              d.name
            }</div>
            <div class="rc-id">${d.id} · ${d.size}</div>
          </div>
        </div>
        <span class="bdg ${DOC_BDG[d.type] || "misc"}" style="flex-shrink:0">${
      d.type
    }</span>
      </div>
      <div class="rc-meta">
        <div class="rc-field"><div class="rc-field-lbl">Vendor</div><div class="rc-field-val">${
          d.vendor
        }</div></div>
        <div class="rc-field"><div class="rc-field-lbl">Archived On</div><div class="rc-field-val">${
          d.archivedOn
        }</div></div>
        <div class="rc-field" style="grid-column:1/-1"><div class="rc-field-lbl">Uploaded</div><div class="rc-field-val">${
          d.uploaded
        }</div></div>
      </div>
      <div class="rc-actions"></div>`;
    const act = div.querySelector(".rc-actions");
    act.appendChild(makeViewBtn(() => openDoc(d.id)));
    cards.appendChild(div);
  });

  document.getElementById(
    "doc-foot"
  ).textContent = `${list.length} of ${DOCS.length} archived documents`;
}

/* ══ VIEW MODALS ══ */
function openVendor(id) {
  const v = VENDORS.find((x) => x.id === id);
  if (!v) return;
  document.getElementById("view-vendor-body").innerHTML = `
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px">
      ${avatar(
        v,
        46
      )}<div style="flex:1;min-width:0"><div style="font-size:16px;font-weight:800">${
    v.name
  }</div><div style="font-size:12px;color:var(--t3)">${v.id} · Stall ${
    v.stall
  }</div></div>
      <span class="bdg arch">Archived</span>
    </div>
    <div class="det-block">${detRows([
      ["Contract Period", v.contract],
      ["Archive Date", v.archivedOn],
      ["Reason", v.reason],
      ["Phone", v.phone],
      ["Email", v.email],
      ["Total Paid", `<strong style="color:var(--gr)">${v.totalPaid}</strong>`],
    ])}</div>
    <div class="chip g" style="margin-top:13px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div>Restoring will move this vendor back to the active Vendor Management list.</div></div>`;
  document.getElementById("restore-vendor-btn").onclick = () =>
    doRestore("vendor", v.id, v.name, null, true);
  openM("viewVendorModal");
}

function openPayment(id) {
  const p = PAYMENTS.find((x) => x.id === id);
  if (!p) return;
  document.getElementById("view-pay-body").innerHTML = `
    <div class="det-block">${detRows([
      [
        "OR Number",
        `<span class="mono" style="color:var(--ac)">${p.id}</span>`,
      ],
      ["Vendor", p.vendor],
      ["Stall", p.stall],
      ["Period", p.period],
      ["Nature", p.nature],
      ["Amount", `<strong style="color:var(--gr)">${fmt(p.amount)}</strong>`],
      ["Archived On", p.archivedOn],
    ])}</div>
    <div class="chip g" style="margin-top:13px"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg><div>Restoring will make this payment visible again in Payment Management and RCD Reports.</div></div>`;
  document.getElementById("restore-pay-btn").onclick = () =>
    doRestore("payment", p.id, p.id, null, true);
  openM("viewPaymentModal");
}

function openDoc(id) {
  const d = DOCS.find((x) => x.id === id);
  if (!d) return;
  document.getElementById("view-doc-body").innerHTML = `
    <div style="display:flex;align-items:center;gap:10px;padding:12px;background:var(--s2);border:1px solid var(--brd);border-radius:8px;margin-bottom:13px">
      <span style="font-size:28px">${DOC_ICO[d.type] || "📄"}</span>
      <div><div style="font-size:13px;font-weight:700">${
        d.name
      }</div><div style="font-size:11px;color:var(--t3)">${d.size} · ${
    d.type
  }</div></div>
    </div>
    <div class="det-block">${detRows([
      ["Vendor", d.vendor],
      ["Stall", d.stall],
      ["Uploaded", d.uploaded],
      ["Archived On", d.archivedOn],
      ["File Size", d.size],
    ])}</div>`;
  document.getElementById("restore-doc-btn").onclick = () =>
    doRestore("document", d.id, d.name, null, true);
  openM("viewDocModal");
}

/* ══ RESTORE ══ */
function doRestore(type, id, name, rowEl, fromModal) {
  if (fromModal) {
    closeM("viewVendorModal");
    closeM("viewPaymentModal");
    closeM("viewDocModal");
  }
  if (rowEl) {
    rowEl.style.transition = "opacity .3s,transform .3s";
    rowEl.style.opacity = "0";
    rowEl.style.transform = "translateX(16px)";
    setTimeout(() => rowEl.remove(), 320);
  }
  const lbl = { vendor: "Vendor", payment: "Payment", document: "Document" }[
    type
  ];
  const now =
    "Mar 10, 2026 · " +
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  LOG.unshift({
    type: "rest",
    title: `Record Restored — ${name}`,
    sub: `${lbl} restored by Maria A. Torres`,
    time: now,
  });
  document.getElementById("stat-total").textContent = Math.max(
    0,
    parseInt(document.getElementById("stat-total").textContent) - 1
  );
  document.getElementById("stat-total-b").textContent =
    document.getElementById("stat-total").textContent;
  showToast(`${lbl} "${name}" restored to active records`, "g");
}

/* ══ LOG ══ */
function renderLog() {
  const ICO = {
    auto: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/></svg>`,
    rest: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="1 4 1 10 7 10"/><path d="M3.51 15a9 9 0 1 0 .49-3.5"/></svg>`,
    arch: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><polyline points="3.29 7 12 12 20.71 7"/><line x1="12" y1="22" x2="12" y2="12"/></svg>`,
  };
  document.getElementById("arch-timeline").innerHTML = LOG.map(
    (item) => `
    <div class="tl-item">
      <div class="tl-dot ${item.type}">${ICO[item.type] || ""}</div>
      <div class="tl-body"><div class="tl-title">${
        item.title
      }</div><div class="tl-sub">${item.sub}</div><div class="tl-time">${
      item.time
    }</div></div>
    </div>`
  ).join("");
}

/* ══ MANUAL ARCHIVE ══ */
function loadManualItems() {
  const type = document.getElementById("man-type").value;
  const wrap = document.getElementById("man-items-wrap");
  const items = document.getElementById("man-items");
  if (!type) {
    wrap.style.display = "none";
    return;
  }
  wrap.style.display = "block";
  const data =
    type === "vendor"
      ? [
          ["VND-001", "Juan Dela Cruz"],
          ["VND-002", "Pedro Reyes"],
          ["VND-003", "Maria Santos"],
          ["VND-004", "Ana Lim"],
        ]
      : type === "payment"
      ? [
          ["OR-0123463", "Juan Dela Cruz · Mar 9 · ₱1,500"],
          ["OR-0123464", "Pedro Reyes · Mar 10 · ₱1,800"],
          ["OR-0123465", "Roberto Go · Mar 10 · ₱400"],
        ]
      : [
          ["DOC-B001", "Contract_AnaLim_2024.pdf"],
          ["DOC-B002", "ValidID_RobertoGo.jpg"],
          ["DOC-B003", "BusinessPermit_GraceCruz.pdf"],
        ];
  items.innerHTML = data
    .map(
      ([id, lbl]) =>
        `<label class="chk-item"><input type="checkbox"/><div style="flex:1"><span style="font-size:13px;font-weight:600">${lbl}</span><span class="mono" style="font-size:10.5px;color:var(--t3);margin-left:6px">${id}</span></div></label>`
    )
    .join("");
}

function doArchive() {
  const n = document.querySelectorAll("#man-items input:checked").length;
  if (!n) {
    showToast("Select at least one record", "r");
    return;
  }
  const type = document.getElementById("man-type").value;
  const reason = document.getElementById("man-reason").value;
  closeM("manualArchiveModal");
  const now =
    "Mar 10, 2026 · " +
    new Date().toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
  LOG.unshift({
    type: "arch",
    title: `Manual Archive — ${n} record${n > 1 ? "s" : ""} archived`,
    sub: `${
      type.charAt(0).toUpperCase() + type.slice(1)
    } records archived · Reason: ${reason}`,
    time: now,
  });
  const el = document.getElementById("stat-total");
  el.textContent = parseInt(el.textContent) + n;
  document.getElementById("stat-total-b").textContent = el.textContent;
  showToast(`${n} record${n > 1 ? "s" : ""} archived successfully`, "g");
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
  Object.assign(t.style, { cssText: t.style.cssText });
  t.setAttribute("style", t.style.cssText + ";" + (C[type] || C.g));
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(() => (t.style.opacity = "0"), 3200);
}

/* ══ INIT ══ */
renderVendors();
renderDocs();
applyViewMode();
