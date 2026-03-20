/* ═══ SIDEBAR ═══ */
let SB_OPEN = window.innerWidth >= 768;
let DARK = false;

function openSB() {
  SB_OPEN = true;
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
  SB_OPEN = false;
  document.getElementById("sb").style.transform =
    "translateX(calc(-1 * var(--sidebar-w)))";
  document.getElementById("veil").style.display = "none";
  document.getElementById("main").style.marginLeft = "0";
}
function toggleSB() {
  SB_OPEN ? closeSB() : openSB();
}

(function () {
  if (window.innerWidth < 768) closeSB();
  else openSB();
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      document.getElementById("veil").style.display = "none";
      if (SB_OPEN)
        document.getElementById("main").style.marginLeft = "var(--sidebar-w)";
    } else {
      document.getElementById("main").style.marginLeft = "0";
      if (SB_OPEN) document.getElementById("veil").style.display = "block";
    }
  });
})();

function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
  const ico = document.getElementById("themeIco");
  ico.innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ═══ HELPERS ═══ */
function getCurrentMonth() {
  return MONTHS[MONTH_IDX];
}

/* ═══ MONTH NAVIGATION ═══ */
function changeMonth(dir) {
  const newIdx = MONTH_IDX + dir;
  if (newIdx < 0 || newIdx >= MONTHS.length) return;
  MONTH_IDX = newIdx;
  renderAll();
}

function jumpMonth(key) {
  const idx = MONTHS.findIndex((m) => m.key === key);
  if (idx >= 0) {
    MONTH_IDX = idx;
    renderAll();
  }
}

/* ═══ RENDER ALL ═══ */
function renderAll() {
  const m = getCurrentMonth();
  document.getElementById("monthLabel").textContent = m.label;
  document.getElementById("pgSubMonth").textContent = m.label;
  document.getElementById("monthPicker").value = m.key;
  renderStats(m);
  renderSectionBreakdown(m);
  renderMethodBars(m);
  renderLog(m);
  renderCalendar(m);
  renderOutstanding(m);
  renderMoM();
}

/* ═══ STATS ROW ═══ */
function renderStats(m) {
  const total = m.transactions.reduce((s, t) => s + t.amount, 0);
  const auto = m.transactions
    .filter((t) => t.source === "auto")
    .reduce((s, t) => s + t.amount, 0);
  const cash = total - auto;
  const outAmt = m.outstanding.reduce((s, o) => s + o.amount, 0);
  const pct = m.target > 0 ? Math.round((total / m.target) * 100) : 0;

  document.getElementById("totalVal").innerHTML =
    "&#8369;" + total.toLocaleString();
  document.getElementById("totalSub").textContent = `${
    m.transactions.length
  } transactions — ${pct}% of ₱${m.target.toLocaleString()} target`;

  const ICONS = {
    gr: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
    ac: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="6" width="20" height="12" rx="2"/><circle cx="12" cy="12" r="2"/></svg>`,
    vi: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>`,
    rd: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/></svg>`,
  };

  const items = [
    {
      icon: "gr",
      val: `&#8369;${total.toLocaleString()}`,
      lbl: "Total Collected",
      sub: `${m.transactions.length} transactions`,
      subc: "gr",
    },
    {
      icon: "ac",
      val: `&#8369;${cash.toLocaleString()}`,
      lbl: "Cash Collected",
      sub: `${Math.round((cash / total) * 100)}% of total`,
      subc: "",
    },
    {
      icon: "vi",
      val: `&#8369;${auto.toLocaleString()}`,
      lbl: "Online (Auto)",
      sub: `${Math.round((auto / total) * 100)}% of total`,
      subc: "",
    },
    {
      icon: "rd",
      val: `&#8369;${outAmt.toLocaleString()}`,
      lbl: "Outstanding",
      sub: `${m.outstanding.length} unpaid accounts`,
      subc: "rd",
    },
  ];

  document.getElementById("statsRow").innerHTML = items
    .map(
      (it) =>
        `<div class="sc">
      <div class="sc-icon ${it.icon}">${ICONS[it.icon]}</div>
      <div class="sc-val">${it.val}</div>
      <div class="sc-lbl">${it.lbl}</div>
      ${it.sub ? `<div class="sc-sub ${it.subc}">${it.sub}</div>` : ""}
    </div>`
    )
    .join("");
}

/* ═══ SECTION BREAKDOWN ═══ */
function renderSectionBreakdown(m) {
  const sections = {};
  m.transactions.forEach((t) => {
    sections[t.section] = (sections[t.section] || 0) + t.amount;
  });
  const total = m.transactions.reduce((s, t) => s + t.amount, 0);
  const dots = {
    "GF Eatery": "#f59e0b",
    "GF RTW": "#0ea5e9",
    "GF Service": "#22c55e",
    "GF Misc": "#e11d48",
    "SF Ukay": "#ca8a04",
    "SF Veggie": "#16a34a",
    "SF Fruit": "#22c55e",
    "SF Egg": "#f59e0b",
  };
  const sorted = Object.keys(sections).sort(
    (a, b) => sections[b] - sections[a]
  );
  document.getElementById("sectionBreakdown").innerHTML = sorted
    .map((sec) => {
      const amt = sections[sec];
      const pct = total > 0 ? Math.round((amt / total) * 100) : 0;
      const dot = dots[sec] || "#9099b8";
      const cnt = m.transactions.filter((t) => t.section === sec).length;
      return `<div class="sec-item">
      <div class="sec-left">
        <div class="sec-dot" style="background:${dot}"></div>
        <div><div class="sec-name">${sec}</div><div class="sec-count">${cnt} transaction${
        cnt > 1 ? "s" : ""
      }</div></div>
      </div>
      <div class="sec-right">
        <div class="sec-amt">&#8369;${amt.toLocaleString()}</div>
        <div class="sec-pct">${pct}% of total</div>
      </div>
    </div>`;
    })
    .join("");
}

/* ═══ METHOD BARS ═══ */
function renderMethodBars(m) {
  const methods = { Cash: 0, GCash: 0, Maya: 0 };
  m.transactions.forEach((t) => {
    methods[t.method] =
      (methods[t.method] !== undefined ? methods[t.method] : 0) + t.amount;
  });
  const total = m.transactions.reduce((s, t) => s + t.amount, 0);
  const colors = { Cash: "gr", GCash: "ac", Maya: "cy" };
  document.getElementById("methodBars").innerHTML = Object.keys(methods)
    .map((meth) => {
      const amt = methods[meth];
      const pct = total > 0 ? Math.round((amt / total) * 100) : 0;
      return `<div class="cbar-row">
      <div class="cbar-top">
        <span class="cbar-lbl">${meth}</span>
        <span class="cbar-amt">&#8369;${amt.toLocaleString()} (${pct}%)</span>
      </div>
      <div class="bar-track"><div class="bar-fill ${
        colors[meth] || "am"
      }" style="width:${pct}%"></div></div>
    </div>`;
    })
    .join("");
}

/* ═══ COLLECTION LOG ═══ */
function renderLog(m) {
  const tbody = document.getElementById("logTbody");
  const info = document.getElementById("logInfo");
  const sub = document.getElementById("logSub");
  const total = m.transactions.reduce((s, t) => s + t.amount, 0);
  info.innerHTML = `${
    m.transactions.length
  } transactions &mdash; Total: <strong>&#8369;${total.toLocaleString()}</strong>`;
  sub.textContent = `All ${m.transactions.length} transactions in ${m.label}`;
  const mb = {
    Cash: '<span class="mbdg cash">Cash</span>',
    GCash: '<span class="mbdg gcash">&loz; GCash</span>',
    Maya: '<span class="mbdg maya">&loz; Maya</span>',
  };
  const src = {
    manual: '<span style="font-size:11px;color:var(--t3)">Manual</span>',
    auto: '<span style="font-size:10.5px;font-weight:700;color:var(--gr);background:var(--grl);border:1px solid var(--grs);border-radius:20px;padding:1px 7px">Auto</span>',
  };
  tbody.innerHTML = m.transactions
    .map(
      (t) =>
        `<tr>
      <td style="font-size:12px;color:var(--t3)">${t.date}</td>
      <td style="font-family:DM Mono,monospace;font-size:11.5px;font-weight:700;color:var(--ac)">${
        t.or
      }</td>
      <td><div style="font-weight:600;font-size:12.5px">${t.vendor}</div></td>
      <td style="font-size:12px;color:var(--t2)">${t.section}</td>
      <td style="font-family:DM Mono,monospace;font-weight:700;color:var(--gr)">&#8369;${t.amount.toLocaleString()}</td>
      <td>${mb[t.method] || t.method}</td>
      <td>${src[t.source] || t.source}</td>
    </tr>`
    )
    .join("");
}

/* ═══ CALENDAR HEATMAP ═══ */
function renderCalendar(m) {
  const daily = {};
  m.transactions.forEach((t) => {
    const dayNum = parseInt(t.date.split(" ")[1]);
    daily[dayNum] = (daily[dayNum] || 0) + t.amount;
  });
  const maxDay = Math.max(...Object.values(daily).concat([1]));
  const daysCount = Object.keys(daily).length;
  const parts = m.key.split("-");
  const yr = parseInt(parts[0]),
    mo = parseInt(parts[1]);
  const firstDow = new Date(yr, mo - 1, 1).getDay();
  const today = new Date();
  const isCurrentMonth =
    today.getFullYear() === yr && today.getMonth() === mo - 1;

  let html = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"]
    .map((d) => `<div class="cal-hdr">${d}</div>`)
    .join("");
  for (let i = 0; i < firstDow; i++)
    html += '<div class="cal-cell empty"></div>';
  for (let d = 1; d <= m.daysInMonth; d++) {
    const amt = daily[d] || 0;
    const isFuture = isCurrentMonth && d > today.getDate();
    const isToday = isCurrentMonth && d === today.getDate();
    let cls = "cal-cell ";
    if (isFuture) cls += "future";
    else if (amt === 0) cls += "no-collect";
    else if (amt < maxDay * 0.33) cls += "low";
    else if (amt < maxDay * 0.66) cls += "mid";
    else cls += "high";
    if (isToday) cls += " today-mark";
    const tip =
      amt > 0
        ? `${d} - PHP ${amt.toLocaleString()}`
        : `${d}${isFuture ? " (future)" : " - No collection"}`;
    html += `<div class="${cls}" title="${tip}">${d}</div>`;
  }
  document.getElementById("calGrid").innerHTML = html;
  document.getElementById(
    "calDaysCount"
  ).textContent = `${daysCount} collection day${daysCount !== 1 ? "s" : ""}`;
}

/* ═══ OUTSTANDING ═══ */
function renderOutstanding(m) {
  const list = document.getElementById("outstandingList");
  const bdg = document.getElementById("outstandingBdg");
  const tot = document.getElementById("outstandingTotal");
  const totalAmt = m.outstanding.reduce((s, o) => s + o.amount, 0);
  bdg.textContent = `${m.outstanding.length} accounts`;
  tot.innerHTML = `Total outstanding: <strong style="color:var(--rd)">&#8369;${totalAmt.toLocaleString()}</strong>`;
  if (!m.outstanding.length) {
    list.innerHTML =
      '<div style="padding:24px;text-align:center;color:var(--gr);font-size:13px;font-weight:600">All accounts settled this month</div>';
    return;
  }
  list.innerHTML = m.outstanding
    .map((o) => {
      const dayTag =
        o.days > 0
          ? `<span style="font-size:10.5px;font-weight:700;color:var(--rd)">${o.days} days overdue</span>`
          : `<span style="font-size:10.5px;font-weight:700;color:var(--am)">Partial</span>`;
      return `<div class="ot-item">
      <div style="display:flex;align-items:center;gap:8px;flex:1;min-width:0">
        <div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(${
          o.grad
        });display:grid;place-items:center;color:#fff;font-size:10px;font-weight:700;flex-shrink:0">${
        o.init
      }</div>
        <div><div class="ot-vendor">${o.vendor}</div><div class="ot-stall">${
        o.section
      }</div></div>
      </div>
      <div class="ot-right"><div class="ot-amt">&#8369;${o.amount.toLocaleString()}</div>${dayTag}</div>
    </div>`;
    })
    .join("");
}

/* ═══ MONTH-OVER-MONTH ═══ */
function renderMoM() {
  document.getElementById("momList").innerHTML = MONTHS.map((m, idx) => {
    const total = m.transactions.reduce((s, t) => s + t.amount, 0);
    const pct = m.target > 0 ? Math.round((total / m.target) * 100) : 0;
    const barW = Math.min(100, pct);
    const isCurrent = idx === MONTH_IDX;
    return `<div style="padding:12px 16px;border-bottom:1px solid var(--brd2);cursor:pointer;transition:background .12s${
      isCurrent ? ";background:var(--acl)" : ""
    }" onclick="MONTH_IDX=${idx};renderAll()">
      <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px">
        <div style="font-size:12.5px;font-weight:${
          isCurrent ? "700" : "600"
        };color:${isCurrent ? "var(--ac)" : "var(--t1)"}">${m.label}</div>
        <div style="font-size:13px;font-weight:800;font-family:DM Mono,monospace;color:var(--gr)">&#8369;${total.toLocaleString()}</div>
      </div>
      <div style="height:5px;background:var(--brd);border-radius:3px;overflow:hidden">
        <div style="height:100%;width:${barW}%;background:${
      isCurrent ? "var(--ac)" : "var(--gr)"
    };border-radius:3px;transition:width .5s ease"></div>
      </div>
      <div style="font-size:11px;color:var(--t3);margin-top:3px">${pct}% of PHP ${m.target.toLocaleString()} target</div>
    </div>`;
  }).join("");
}

/* ═══ TOAST ═══ */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2600);
}

/* ═══ INIT ═══ */
renderAll();
