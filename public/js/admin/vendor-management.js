/* ═══ DATA ═══ */
const VD = [
  {
    id: "VND-001",
    fn: "Juan",
    ln: "Dela Cruz",
    init: "JD",
    grad: "135deg,#1d4ed8,#7c3aed",
    stall: "#01",
    type: "Wet Market",
    tc: "wet",
    phone: "+63 912 345 6789",
    email: "juan.delacruz@email.com",
    addr: "Brgy. Norte, Arkipaisi",
    since: "Mar 9, 2025",
    status: "active",
    cs: "Mar 9, 2025",
    ce: "Mar 9, 2026",
    cp: 75,
    cc: "warn",
    rate: "₱1,500",
    bal: "₱0.00",
    lp: "Mar 1, 2026",
    online: true,
  },
  {
    id: "VND-002",
    fn: "Pedro",
    ln: "Reyes",
    init: "PR",
    grad: "135deg,#b91c1c,#dc2626",
    stall: "#03",
    type: "Meat Section",
    tc: "meat",
    phone: "+63 917 111 2222",
    email: "pedro.reyes@email.com",
    addr: "Brgy. Silangan, Arkipaisi",
    since: "Jan 5, 2025",
    status: "active",
    cs: "Jan 5, 2025",
    ce: "Jan 5, 2026",
    cp: 91,
    cc: "crit",
    rate: "₱1,800",
    bal: "₱500.00",
    lp: "Feb 28, 2026",
    online: false,
  },
  {
    id: "VND-003",
    fn: "Maria",
    ln: "Santos",
    init: "MS",
    grad: "135deg,#0f766e,#0891b2",
    stall: "#07",
    type: "Dry Goods",
    tc: "dry",
    phone: "+63 920 333 4444",
    email: "maria.santos@email.com",
    addr: "Brgy. Doon, Arkipaisi",
    since: "Jun 12, 2024",
    status: "active",
    cs: "Jun 12, 2024",
    ce: "Jun 12, 2025",
    cp: 48,
    cc: "ok",
    rate: "₱1,200",
    bal: "₱0.00",
    lp: "Mar 3, 2026",
    online: true,
  },
  {
    id: "VND-004",
    fn: "Ana",
    ln: "Lim",
    init: "AL",
    grad: "135deg,#15803d,#16a34a",
    stall: "#19",
    type: "Vegetables",
    tc: "veg",
    phone: "+63 918 555 6666",
    email: "ana.lim@email.com",
    addr: "Brgy. Centro, Arkipaisi",
    since: "Sep 20, 2024",
    status: "suspended",
    cs: "Sep 20, 2024",
    ce: "Sep 20, 2025",
    cp: 62,
    cc: "warn",
    rate: "₱1,000",
    bal: "₱3,000.00",
    lp: "Jan 15, 2026",
    online: false,
  },
  {
    id: "VND-005",
    fn: "Roberto",
    ln: "Go",
    init: "RG",
    grad: "135deg,#0891b2,#6366f1",
    stall: "#24",
    type: "Fish Section",
    tc: "fish",
    phone: "+63 915 777 8888",
    email: "roberto.go@email.com",
    addr: "Brgy. Likha, Arkipaisi",
    since: "Dec 1, 2023",
    status: "expired",
    cs: "Dec 1, 2023",
    ce: "Dec 1, 2024",
    cp: 100,
    cc: "ex",
    rate: "₱2,000",
    bal: "₱1,500.00",
    lp: "Nov 30, 2024",
    online: false,
  },
  {
    id: "VND-006",
    fn: "Carla",
    ln: "Bautista",
    init: "CB",
    grad: "135deg,#3b82f6,#6366f1",
    stall: "#06",
    type: "Dry Goods",
    tc: "dry",
    phone: "+63 912 987 6543",
    email: "carla.bautista@email.com",
    addr: "Brgy. Bagong, Arkipaisi",
    since: "Mar 9, 2026",
    status: "active",
    cs: "Mar 9, 2026",
    ce: "Mar 9, 2027",
    cp: 2,
    cc: "ok",
    rate: "₱1,200",
    bal: "₱0.00",
    lp: "—",
    online: true,
  },
  {
    id: "VND-007",
    fn: "Luis",
    ln: "Villanueva",
    init: "LV",
    grad: "135deg,#d97706,#f59e0b",
    stall: "#11",
    type: "Vegetables",
    tc: "veg",
    phone: "+63 917 234 5678",
    email: "luis.v@email.com",
    addr: "Brgy. Ibayo, Arkipaisi",
    since: "Feb 1, 2025",
    status: "active",
    cs: "Feb 1, 2025",
    ce: "Feb 1, 2026",
    cp: 82,
    cc: "warn",
    rate: "₱1,000",
    bal: "₱0.00",
    lp: "Mar 5, 2026",
    online: false,
  },
  {
    id: "VND-008",
    fn: "Grace",
    ln: "Cruz",
    init: "GC",
    grad: "135deg,#15803d,#0f766e",
    stall: "#09",
    type: "Vegetables",
    tc: "veg",
    phone: "+63 918 333 4444",
    email: "grace.c@email.com",
    addr: "Brgy. Tulay, Arkipaisi",
    since: "Jul 12, 2024",
    status: "active",
    cs: "Jul 12, 2024",
    ce: "Jul 12, 2025",
    cp: 55,
    cc: "warn",
    rate: "₱1,000",
    bal: "₱0.00",
    lp: "Mar 4, 2026",
    online: true,
  },
  {
    id: "VND-009",
    fn: "Diego",
    ln: "Cruz",
    init: "DC",
    grad: "135deg,#6d28d9,#db2777",
    stall: "#15",
    type: "General",
    tc: "gen",
    phone: "+63 916 444 5555",
    email: "diego.c@email.com",
    addr: "Brgy. Luma, Arkipaisi",
    since: "May 15, 2022",
    status: "terminated",
    cs: "May 15, 2022",
    ce: "May 15, 2023",
    cp: 100,
    cc: "ex",
    rate: "₱1,200",
    bal: "₱8,500.00",
    lp: "Apr 10, 2023",
    online: false,
  },
];
const BL = {
  active: "active",
  suspended: "suspended",
  expired: "expired",
  terminated: "terminated",
};
const BT = {
  active: "Active",
  suspended: "Suspended",
  expired: "Contract Expired",
  terminated: "Terminated",
};
const PC = { ok: "ok", warn: "warn", crit: "crit", ex: "ex" };
const CLC = {
  ok: "var(--gr)",
  warn: "var(--am)",
  crit: "var(--rd)",
  ex: "var(--rd)",
};

let SF = "all",
  VIEW = "card",
  SEL = null,
  CSTEP = 1;

/* ═══ SIDEBAR LOGIC ═══ */
let SB_IS_OPEN = window.innerWidth >= 768;

function openSB() {
  SB_IS_OPEN = true;
  document.getElementById("sb").style.transform = "translateX(0)";
  if (window.innerWidth < 768) {
    // Mobile: overlay mode, show veil, don't shift main
    document.getElementById("veil").style.display = "block";
    document.getElementById("main").style.marginLeft = "0";
  } else {
    // Desktop: push main content
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
// Init
(function () {
  if (window.innerWidth < 768) {
    closeSB();
  } else {
    openSB();
  }
  window.addEventListener("resize", function () {
    if (window.innerWidth >= 768) {
      document.getElementById("veil").style.display = "none";
      if (SB_IS_OPEN) {
        document.getElementById("main").style.marginLeft = "var(--sidebar-w)";
      }
    } else {
      // On mobile, main is always full width
      document.getElementById("main").style.marginLeft = "0";
      if (SB_IS_OPEN) {
        document.getElementById("veil").style.display = "block";
      }
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

/* ═══ FILTER/VIEW ═══ */
function setSF(s, el) {
  SF = s;
  document.querySelectorAll(".sp").forEach((p) => p.classList.remove("on"));
  el.classList.add("on");
  renderView();
}
function setView(v, btn) {
  VIEW = v;
  document.querySelectorAll(".vb").forEach((b) => b.classList.remove("on"));
  btn.classList.add("on");
  document.getElementById("vgrid").style.display =
    v === "card" ? "grid" : "none";
  document.getElementById("vtbl-container").style.display =
    v === "tbl" ? "block" : "none";
  renderView();
}
function getVD() {
  const q = (document.getElementById("vsrch").value || "").toLowerCase();
  const t = document.getElementById("vtype").value;
  return VD.filter((v) => {
    const mq =
      !q ||
      `${v.fn} ${v.ln}`.toLowerCase().includes(q) ||
      v.stall.includes(q) ||
      v.phone.includes(q) ||
      v.email.includes(q) ||
      v.id.toLowerCase().includes(q);
    const mt = !t || v.type === t;
    const ms = SF === "all" || v.status === SF;
    return mq && mt && ms;
  });
}
function renderView() {
  if (VIEW === "card") renderCards();
  else renderTable();
}

/* ═══ INLINE SVGS (no CDN needed) ═══ */
const S = {
  store:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>',
  phone:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.59 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
  cal: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>',
  pin: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>',
  mail: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>',
  edit: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>',
  tog: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>',
  key: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>',
  eye: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
  activity:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
  file: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>',
  send: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>',
  refresh:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>',
  check:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg>',
  money:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>',
  cross:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>',
  uplus:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>',
  pause:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>',
};

/* ═══ RENDER CARDS ═══ */
function renderCards() {
  const g = document.getElementById("vgrid");
  const list = getVD();
  if (!list.length) {
    g.innerHTML = `<div style="grid-column:1/-1;padding:40px;text-align:center;color:var(--t3);font-size:13px">No vendors match your filters.</div>`;
    return;
  }
  g.innerHTML = list
    .map(
      (v, i) => `
    <div class="vcard ${SEL === v.id ? "sel" : ""}" onclick="selV('${
        v.id
      }')" style="animation-delay:${i * 0.04}s">
      <div class="vc-stripe ${v.status}"></div>
      <div class="vc-body">
        <div class="vc-top">
          <div class="vc-av" style="background:linear-gradient(${v.grad})">${
        v.init
      }</div>
          <div style="flex:1;min-width:0">
            <div class="vc-nm">${v.fn} ${v.ln}</div>
            <div class="vc-id">${v.id}</div>
          </div>
          <span class="bdg ${BL[v.status]}">${BT[v.status]}</span>
        </div>
        <div class="vc-rows">
          <div class="vc-row">${S.store}<span class="stag">${
        v.stall
      }</span><span style="margin-left:4px">${v.type}</span></div>
          <div class="vc-row">${S.phone}${v.phone}</div>
          <div class="vc-row">${S.cal}Since ${v.since}</div>
        </div>
        <div class="vc-foot">
          <div class="ctbar-w">
            <div class="ctlbl"><span>Contract</span><span>${v.ce}</span></div>
            <div class="cttrack"><div class="ctfill ${PC[v.cc]}" style="width:${
        v.cp
      }%"></div></div>
          </div>
          <div class="vcacts">
            <div class="ra tt" data-tip="Edit" onclick="event.stopPropagation();openEditM('${
              v.id
            }')">${S.edit}</div>
            <div class="ra amhov tt" data-tip="Status" onclick="event.stopPropagation();openStatusM('${
              v.id
            }')">${S.tog}</div>
            <div class="ra tt" data-tip="Credentials" onclick="event.stopPropagation();openCredM('${
              v.id
            }')">${S.key}</div>
          </div>
        </div>
      </div>
    </div>`
    )
    .join("");
}

/* ═══ RENDER TABLE ═══ */
function renderTable(page) {
  var PAGE = 8;
  page = page || 1;
  var all = getVD();
  var totalPages = Math.max(1, Math.ceil(all.length / PAGE));
  page = Math.min(Math.max(1, page), totalPages);
  var list = all.slice((page - 1) * PAGE, page * PAGE);

  var wrap = document.getElementById("vtbl-wrap");
  if (!wrap) return;

  // Store page vendors for index-based onclick (avoids all quote-escaping issues)
  window._tblPage = list;

  var rows = list
    .map(function (v, ri) {
      return (
        '<tr onclick="selVI(' +
        ri +
        ')" class="' +
        (SEL === v.id ? "sel" : "") +
        '">' +
        '<td><div class="chk"></div></td>' +
        '<td><div class="vcell"><div class="vav-sm" style="background:linear-gradient(' +
        v.grad +
        ')">' +
        v.init +
        "</div>" +
        '<div><div class="vn">' +
        v.fn +
        " " +
        v.ln +
        '</div><div class="vi2">' +
        v.id +
        "</div></div></div></td>" +
        '<td><span class="stag">' +
        v.stall +
        "</span></td>" +
        '<td><span class="tc ' +
        v.tc +
        '">' +
        v.type +
        "</span></td>" +
        '<td style="font-size:12px;color:var(--t2)">' +
        v.phone +
        "</td>" +
        '<td style="font-size:12px;font-weight:600;color:' +
        (CLC[v.cc] || "var(--t2)") +
        '">' +
        v.ce +
        "</td>" +
        '<td><span class="bdg ' +
        (BL[v.status] || "") +
        '">' +
        BT[v.status] +
        "</span></td>" +
        '<td><div class="vcacts">' +
        '<div class="ra tt" data-tip="View"   onclick="event.stopPropagation();selVI(' +
        ri +
        ')">' +
        S.eye +
        "</div>" +
        '<div class="ra tt" data-tip="Edit"   onclick="event.stopPropagation();editVI(' +
        ri +
        ')">' +
        S.edit +
        "</div>" +
        '<div class="ra amhov tt" data-tip="Status" onclick="event.stopPropagation();statusVI(' +
        ri +
        ')">' +
        S.tog +
        "</div>" +
        '<div class="ra tt" data-tip="Creds"  onclick="event.stopPropagation();credVI(' +
        ri +
        ')">' +
        S.key +
        "</div>" +
        "</div></td></tr>"
      );
    })
    .join("");

  wrap.innerHTML =
    '<div class="tbl-wrap"><table class="vtbl">' +
    "<thead><tr>" +
    '<th><div class="chk"></div></th>' +
    "<th>Vendor</th><th>Stall</th><th>Type</th>" +
    "<th>Contact</th><th>Contract End</th><th>Status</th><th>Actions</th>" +
    "</tr></thead>" +
    "<tbody>" +
    rows +
    "</tbody>" +
    "</table></div>";

  var s = (page - 1) * PAGE + 1,
    e2 = Math.min(page * PAGE, all.length);
  var infoEl = document.getElementById("tbl-info");
  if (infoEl)
    infoEl.textContent =
      "Showing " + s + "–" + e2 + " of " + all.length + " vendors";

  var pgr = document.getElementById("pgr-wrap");
  if (!pgr) return;
  var prev =
    '<button class="pg-btn"' +
    (page <= 1 ? " disabled" : "") +
    ' onclick="renderTable(' +
    (page - 1) +
    ')">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>' +
    "</button>";
  var nxt =
    '<button class="pg-btn"' +
    (page >= totalPages ? " disabled" : "") +
    ' onclick="renderTable(' +
    (page + 1) +
    ')">' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>' +
    "</button>";
  var nums = "";
  var ps = Math.max(1, page - 1),
    pe = Math.min(totalPages, ps + 2);
  for (var i = ps; i <= pe; i++) {
    nums +=
      '<button class="pg-btn' +
      (i === page ? " on" : "") +
      '" onclick="renderTable(' +
      i +
      ')">' +
      i +
      "</button>";
  }
  pgr.innerHTML = prev + nums + nxt;
}
function selVI(i) {
  var v = window._tblPage && window._tblPage[i];
  if (v) selV(v.id);
}
function editVI(i) {
  var v = window._tblPage && window._tblPage[i];
  if (v) openEditM(v.id);
}
function statusVI(i) {
  var v = window._tblPage && window._tblPage[i];
  if (v) openStatusM(v.id);
}
function credVI(i) {
  var v = window._tblPage && window._tblPage[i];
  if (v) openCredM(v.id);
}

function selV(id) {
  SEL = id;
  const v = VD.find((x) => x.id === id);
  if (!v) return;
  renderView();
  const col = document.getElementById("rpcol");
  const ctc = CLC[v.cc];

  let acts = `
    <div class="actitem"><div class="actdot b">${S.uplus}</div><div><div class="acttxt"><strong>Vendor account created</strong> — by Admin Maria Torres</div><div class="acttime">${v.since}</div></div></div>
    <div class="actitem"><div class="actdot g">${S.send}</div><div><div class="acttxt"><strong>Login credentials sent</strong> — via SMS and Email</div><div class="acttime">${v.since}</div></div></div>`;
  if (v.lp !== "—")
    acts += `<div class="actitem"><div class="actdot g">${S.money}</div><div><div class="acttxt"><strong>Monthly payment received</strong> — ${v.rate}</div><div class="acttime">${v.lp}</div></div></div>`;
  if (v.status === "suspended")
    acts += `<div class="actitem"><div class="actdot a">${S.pause}</div><div><div class="acttxt"><strong>Account suspended</strong> — Outstanding balance ${v.bal}</div><div class="acttime">Feb 1, 2026</div></div></div>`;
  if (v.status === "expired")
    acts += `<div class="actitem"><div class="actdot r">${S.cal}</div><div><div class="acttxt"><strong>Contract expired</strong> — Renewal required</div><div class="acttime">${v.ce}</div></div></div>`;
  if (v.status === "terminated")
    acts += `<div class="actitem"><div class="actdot v">${S.cross}</div><div><div class="acttxt"><strong>Account terminated</strong> — Vendor removed</div><div class="acttime">May 20, 2023</div></div></div>`;

  let extra = "";
  if (v.status === "suspended")
    extra = `<button class="btn su sm" style="width:100%">${S.check} Activate Account</button>`;
  if (v.status === "expired")
    extra = `<button class="btn pr sm" style="width:100%">${S.refresh} Renew Contract</button>`;

  col.innerHTML = `
    <div class="panel">
      <div class="pf-banner" style="background:linear-gradient(${
        v.grad
      })"></div>
      <div class="pf-body">
        <div class="pf-avrow">
          <div class="pf-av" style="background:linear-gradient(${v.grad})">${
    v.init
  }</div>
          <span class="bdg ${BL[v.status]}">${BT[v.status]}</span>
        </div>
        <div class="pf-name">${v.fn} ${v.ln}</div>
        <div class="pf-id">${v.id}</div>
        <div class="pf-info">
          <div class="pfr">${
            S.store
          }<span class="pfl">Stall</span><span class="pfv"><span class="stag">${
    v.stall
  }</span>&nbsp;${v.type}</span></div>
          <div class="pfr">${
            S.phone
          }<span class="pfl">Phone</span><span class="pfv">${
    v.phone
  }</span></div>
          <div class="pfr">${
            S.mail
          }<span class="pfl">Email</span><span class="pfv">${
    v.email
  }</span></div>
          <div class="pfr">${
            S.pin
          }<span class="pfl">Address</span><span class="pfv">${
    v.addr
  }</span></div>
          <div class="pfr">${
            S.cal
          }<span class="pfl">Vendor Since</span><span class="pfv">${
    v.since
  }</span></div>
        </div>
        <div class="pf-srow">
          <span style="font-size:10.5px;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.3px">Current Status</span>
          <span class="bdg ${BL[v.status]}">${BT[v.status]}</span>
        </div>
        <div class="pf-acts">
          <button class="btn pr sm" style="width:100%" onclick="openEditM('${
            v.id
          }')">${S.edit} Edit Vendor Information</button>
          <div style="display:flex;gap:6px">
            <button class="btn ao sm" style="flex:1" onclick="openStatusM('${
              v.id
            }')">${S.tog} Change Status</button>
            <button class="btn gh sm" style="flex:1" onclick="openCredM('${
              v.id
            }')">${S.key} Credentials</button>
          </div>
          ${extra}
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-t">${
        S.file
      } Contract Information</div></div>
      <div class="ct-info">
        <div class="cti-row"><span class="cti-lbl">Contract Start</span><span class="cti-val">${
          v.cs
        }</span></div>
        <div class="cti-row"><span class="cti-lbl">Contract End</span><span class="cti-val" style="color:${ctc};font-weight:700">${
    v.ce
  }</span></div>
        <div class="cti-row"><span class="cti-lbl">Monthly Rate</span><span class="cti-val" style="color:var(--gr);font-family:'DM Mono',monospace">${
          v.rate
        }</span></div>
        <div class="cti-row"><span class="cti-lbl">Balance Due</span><span class="cti-val" style="color:${
          v.bal !== "₱0.00" ? "var(--rd)" : "var(--gr)"
        };font-family:'DM Mono',monospace">${v.bal}</span></div>
        <div class="cti-row"><span class="cti-lbl">Last Payment</span><span class="cti-val">${
          v.lp
        }</span></div>
        <div>
          <div class="ctp-hdr"><span>Contract Progress</span><span style="font-family:'DM Mono',monospace">${
            v.cp
          }%</span></div>
          <div class="ctp-track"><div class="ctp-fill ${
            PC[v.cc]
          }" style="width:${v.cp}%"></div></div>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-t">${S.key} Portal Account</div></div>
      <div class="arow"><span class="al">Username</span><span class="av2" style="font-family:'DM Mono',monospace;font-size:11.5px">${v.id
        .replace("-", "")
        .toLowerCase()}.${v.stall.replace("#", "stall")}</span></div>
      <div class="arow"><span class="al">Portal Access</span><span class="av2">${
        v.status === "active"
          ? '<span class="pulse"></span>Active'
          : '<span style="color:var(--rd)">Restricted</span>'
      }</span></div>
      <div class="arow"><span class="al">Last Login</span><span class="av2">${
        v.online ? "Today · 08:30 AM" : "—"
      }</span></div>
      <div class="arow"><span class="al">Account Created</span><span class="av2">${
        v.since
      }</span></div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-t">${
        S.activity
      } Recent Activity</div></div>
      <div style="padding:4px 0">${acts}</div>
    </div>`;
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

function openCreateModal() {
  CSTEP = 1;
  ["cs1", "cs2", "cs3"].forEach(
    (s, i) =>
      (document.getElementById(s).style.display = i === 0 ? "block" : "none")
  );
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById("st" + i);
    el.className = "step" + (i === 1 ? " active" : "");
    el.querySelector(".sdot").textContent = String(i);
  }
  document.getElementById("sl1").className = "sline";
  document.getElementById("sl2").className = "sline";
  document.getElementById(
    "create-mft"
  ).innerHTML = `<button class="btn gh sm" onclick="closeM('createModal')">Cancel</button><button class="btn pr sm" onclick="nextStep()">Next <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>`;
  openM("createModal");
}
function nextStep() {
  if (CSTEP >= 3) return;
  document.getElementById("cs" + CSTEP).style.display = "none";
  const el = document.getElementById("st" + CSTEP);
  el.className = "step done";
  el.querySelector(".sdot").textContent = "✓";
  document.getElementById("sl" + CSTEP).className = "sline done";
  CSTEP++;
  document.getElementById("cs" + CSTEP).style.display = "block";
  document.getElementById("st" + CSTEP).className = "step active";
  if (CSTEP === 3) {
    document.getElementById(
      "create-mft"
    ).innerHTML = `<button class="btn gh sm" onclick="closeM('createModal')">Cancel</button><button class="btn su sm">${S.check} Create Account & Send Credentials</button>`;
  }
}
function openConvertModal() {
  openM("convertModal");
}
function openEditM(id) {
  const v = VD.find((x) => x.id === id);
  if (v) {
    document.getElementById("ef-fn").value = v.fn;
    document.getElementById("ef-ln").value = v.ln;
    document.getElementById("ef-ph").value = v.phone;
    document.getElementById("ef-em").value = v.email;
    document.getElementById("ef-ad").value = v.addr;
  }
  openM("editModal");
}
function openStatusM(id) {
  const v = VD.find((x) => x.id === id);
  if (v) document.getElementById("sm-name").textContent = `${v.fn} ${v.ln}`;
  document.querySelectorAll(".vsopt").forEach((o) => (o.className = "vsopt"));
  const map = {
    active: "sg",
    suspended: "sa",
    expired: "sr",
    terminated: "sv",
  };
  const idx = ["active", "suspended", "expired", "terminated"].indexOf(
    v?.status
  );
  if (idx >= 0)
    document.querySelectorAll(".vsopt")[idx].classList.add(map[v.status]);
  openM("statusModal");
}
function pickSt(el, cls) {
  document.querySelectorAll(".vsopt").forEach((o) => (o.className = "vsopt"));
  el.classList.add(cls);
}
function openCredM(id) {
  const v = VD.find((x) => x.id === id);
  if (v) {
    document.getElementById("cred-nm").textContent = `${v.fn} ${v.ln}`;
    document.getElementById("cred-un").textContent = `${v.id
      .replace("-", "")
      .toLowerCase()}.${v.stall.replace("#", "stall")}`;
    document.getElementById(
      "cred-contact"
    ).textContent = `${v.phone} · ${v.email}`;
  }
  openM("credModal");
}
function pickAp(el) {
  document.querySelectorAll(".apitem").forEach((i) => {
    i.classList.remove("sel");
    const chk = i.querySelector(".ap-chk");
    if (chk) chk.remove();
  });
  el.classList.add("sel");
  el.insertAdjacentHTML(
    "beforeend",
    '<svg class="ap-chk" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" stroke-width="2.5" width="16" height="16"><polyline points="20 6 9 17 4 12"/></svg>'
  );
}

/* Init */
renderView();
