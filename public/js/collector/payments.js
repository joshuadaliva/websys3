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

/* ═══ TABS ═══ */
function setTab(id, el) {
  ["online", "cash", "history", "overdue"].forEach((t) => {
    const p = document.getElementById("tab-" + t);
    if (p) p.style.display = t === id ? "block" : "none";
  });
  document.querySelectorAll(".tab").forEach((t) => t.classList.remove("on"));
  if (el) el.classList.add("on");
}

/* ═══ OR NUMBER SYSTEM ═══ */
function nextOR() {
  OR_BASE++;
  return "OR-2026-" + String(OR_BASE).padStart(4, "0");
}
function currentNextOR() {
  return "OR-2026-" + String(OR_BASE + 1).padStart(4, "0");
}
function refreshORDisplay() {
  const bi = document.getElementById("orBaseInput");
  if (bi) bi.value = OR_BASE + 1;
}
function updateORBase() {
  const val = parseInt(document.getElementById("orBaseInput").value);
  if (isNaN(val) || val < 1) {
    showToast("Invalid OR number");
    return;
  }
  OR_BASE = val - 1;
  refreshORDisplay();
  showToast("Next OR set to OR-2026-" + String(val).padStart(4, "0"));
}

/* ═══ ONLINE PAYMENTS ═══ */
function renderOnlineQueue() {
  const wrap = document.getElementById("onlineQueue");
  const cnt = document.getElementById("tabCntOnline");
  const stat = document.getElementById("pendingCountStat");
  if (cnt) cnt.textContent = ONLINE_PAYMENTS.length;
  if (stat) stat.textContent = ONLINE_PAYMENTS.length + " awaiting OR";
  if (!ONLINE_PAYMENTS.length) {
    wrap.innerHTML =
      '<div style="padding:40px;text-align:center;color:var(--t3)">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" width="40" height="40" style="opacity:.3;display:block;margin:0 auto 12px"><polyline points="20 6 9 17 4 12"/></svg>' +
      '<div style="font-weight:600;font-size:13.5px">All online payments have been assigned an OR</div></div>';
    return;
  }
  wrap.innerHTML = ONLINE_PAYMENTS.map((p) => {
    const mc = p.method === "GCash" ? "gcash" : "maya";
    return `<div class="online-item">
      <div class="oi-left">
        <div class="oi-av" style="background:linear-gradient(${p.grad})">${
      p.init
    }</div>
        <div><div class="oi-name">${
          p.vendor
        }</div><div class="oi-stall">Stall ${p.stall} &middot; ${
      p.period
    }</div></div>
      </div>
      <div class="oi-mid"><span class="method-badge ${mc}">&loz; ${
      p.method
    }</span><div class="oi-ref">${p.ref} &middot; ${p.time}</div></div>
      <div class="oi-right">
        <div class="oi-amount">&#8369;${p.amount.toLocaleString()}</div>
        <button class="btn xs gr" onclick="assignOR(${p.id})">Assign OR</button>
      </div>
    </div>`;
  }).join("");
}

function assignOR(id) {
  const p = ONLINE_PAYMENTS.find((x) => x.id === id);
  if (!p) return;
  const orVal = nextOR();
  p.or = orVal;
  CONFIRMED_ONLINE.push({
    vendor: p.vendor,
    stall: p.stall,
    amount: p.amount,
    method: p.method,
    ref: p.ref,
    time: p.time,
    or: orVal,
    period: p.period,
  });
  ONLINE_PAYMENTS = ONLINE_PAYMENTS.filter((x) => x.id !== id);
  renderOnlineQueue();
  renderConfirmedOnline();
  renderHistory();
  refreshORDisplay();
  showToast(orVal + " assigned to " + p.vendor);
}

function renderConfirmedOnline() {
  const tbody = document.getElementById("confirmedOnlineBody");
  if (!tbody) return;
  const mb = {
    GCash: '<span class="method-badge gcash">&loz; GCash</span>',
    Maya: '<span class="method-badge maya">&loz; Maya</span>',
  };
  if (!CONFIRMED_ONLINE.length) {
    tbody.innerHTML =
      '<tr><td colspan="6" style="text-align:center;padding:24px;color:var(--t3);font-size:13px">No OR assigned yet today</td></tr>';
    return;
  }
  tbody.innerHTML = CONFIRMED_ONLINE.map(
    (p) =>
      `<tr>
      <td style="font-family:DM Mono,monospace;font-size:12px;font-weight:700;color:var(--ac)">${
        p.or
      }</td>
      <td><div style="font-weight:600;font-size:12.5px">${p.vendor}</div></td>
      <td style="font-family:DM Mono,monospace;font-weight:700">${p.stall}</td>
      <td style="font-family:DM Mono,monospace;font-weight:700;color:var(--gr)">&#8369;${p.amount.toLocaleString()}</td>
      <td>${mb[p.method] || p.method}</td>
      <td style="font-size:12px;color:var(--t3)">${p.time}</td>
    </tr>`
  ).join("");
}

/* ═══ CASH FORM ═══ */
function filterVendors(query) {
  const sel = document.getElementById("f-vendor");
  const q = query.trim().toLowerCase();
  Array.from(sel.options).forEach((opt, idx) => {
    if (idx === 0) return;
    const isMatch = !q || opt.text.toLowerCase().includes(q);
    opt.hidden = !isMatch;
  });
}

function selectVendor() {
  const sel = document.getElementById("f-vendor");
  const opt = sel.options[sel.selectedIndex];
  const summary = document.getElementById("cashSummary");
  if (!opt.value) {
    summary.style.display = "none";
    return;
  }
  const rate = parseInt(opt.getAttribute("data-rate"));
  const bal = parseInt(opt.getAttribute("data-bal"));
  const collect = bal > 0 ? bal : rate;
  summary.style.display = "grid";
  document.getElementById("infoVendor").textContent =
    opt.getAttribute("data-vendor");
  document.getElementById("infoStall").textContent =
    opt.getAttribute("data-stall");
  document.getElementById("infoPeriod").textContent =
    opt.getAttribute("data-period");
  document.getElementById("infoRate").innerHTML =
    "&#8369;" + rate.toLocaleString();
  document.getElementById("infoBalance").innerHTML =
    "&#8369;" + bal.toLocaleString();
  document.getElementById("infoCollect").innerHTML =
    "&#8369;" + collect.toLocaleString();
}

function clearForm() {
  document.getElementById("vendorSearch").value = "";
  document.getElementById("f-vendor").value = "";
  Array.from(document.getElementById("f-vendor").options).forEach(
    (opt) => (opt.hidden = false)
  );
  document.getElementById("f-or-manual").value = "";
  document.getElementById("cashSummary").style.display = "none";
  refreshORDisplay();
}

function submitCash() {
  const sel = document.getElementById("f-vendor");
  const opt = sel.options[sel.selectedIndex];
  if (!opt.value) {
    showToast("Please select a vendor");
    return;
  }
  const rate = parseInt(opt.getAttribute("data-rate"));
  const bal = parseInt(opt.getAttribute("data-bal"));
  const amount = bal > 0 ? bal : rate;
  const name = opt.getAttribute("data-vendor");
  const stall = opt.getAttribute("data-stall");
  const period = opt.getAttribute("data-period");
  const manualOR = document.getElementById("f-or-manual").value.trim();
  const orNum = manualOR || nextOR();
  const now = new Date();
  let hh = now.getHours(),
    mm = now.getMinutes();
  const ampm = hh >= 12 ? "PM" : "AM";
  hh = hh % 12 || 12;
  const timeStr = hh + ":" + (mm < 10 ? "0" + mm : mm) + " " + ampm;
  CASH_RECEIPTS.push({
    or: orNum,
    vendor: name,
    stall,
    period,
    amount,
    time: timeStr,
  });
  clearForm();
  renderCashTable();
  renderHistory();
  showToast(orNum + " issued to " + name);
}

function renderCashTable() {
  const tbody = document.getElementById("cashTbody");
  const info = document.getElementById("cashInfo");
  tbody.innerHTML = CASH_RECEIPTS.map(
    (r) =>
      `<tr>
      <td style="font-family:DM Mono,monospace;font-size:12px;font-weight:700;color:var(--ac)">${
        r.or
      }</td>
      <td><div style="font-weight:600">${r.vendor}</div></td>
      <td style="font-family:DM Mono,monospace;font-weight:700">${r.stall}</td>
      <td style="font-size:12px;color:var(--t3)">${r.period}</td>
      <td style="font-family:DM Mono,monospace;font-weight:700;color:var(--gr)">&#8369;${r.amount.toLocaleString()}</td>
      <td style="font-size:12px;color:var(--t3)">${r.time}</td>
    </tr>`
  ).join("");
  const total = CASH_RECEIPTS.reduce((s, r) => s + r.amount, 0);
  info.textContent =
    CASH_RECEIPTS.length + " receipts -- Total: PHP " + total.toLocaleString();
}

/* ═══ HISTORY ═══ */
function getAllHistory() {
  const all = HISTORY_BASE.slice();
  CASH_RECEIPTS.forEach((r) => {
    if (!HISTORY_BASE.find((h) => h.or === r.or))
      all.push({
        or: r.or,
        vendor: r.vendor,
        stall: r.stall,
        period: r.period,
        amount: r.amount,
        method: "Cash",
        posted: r.time,
        source: "manual",
      });
  });
  CONFIRMED_ONLINE.forEach((p) => {
    if (p.or && !HISTORY_BASE.find((h) => h.or === p.or))
      all.push({
        or: p.or,
        vendor: p.vendor,
        stall: p.stall,
        period: p.period,
        amount: p.amount,
        method: p.method,
        posted: p.time,
        source: "auto",
      });
  });
  return all;
}

function filterHistory(q) {
  const method = document.getElementById("histMethod")?.value || "";
  const month = document.getElementById("histMonth")?.value || "";
  const list = getAllHistory().filter((h) => {
    if (method && !h.method.includes(method)) return false;
    if (month && !h.period.includes(month)) return false;
    if (
      q &&
      !h.vendor.toLowerCase().includes(q.toLowerCase()) &&
      !h.or.toLowerCase().includes(q.toLowerCase())
    )
      return false;
    return true;
  });
  renderHistory(list);
}

function renderHistory(list) {
  if (!list) list = getAllHistory();
  const tbody = document.getElementById("histTbody");
  const info = document.getElementById("histInfo");
  if (!tbody || !info) return;
  const mb = {
    Cash: '<span class="method-badge cash">Cash</span>',
    GCash: '<span class="method-badge gcash">&loz; GCash</span>',
    Maya: '<span class="method-badge maya">&loz; Maya</span>',
  };
  info.textContent = "Showing " + list.length + " transactions";
  tbody.innerHTML = list
    .map((h) => {
      const src =
        h.source === "auto"
          ? '<span class="auto-tag"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="9" height="9"><polyline points="20 6 9 17 4 12"/></svg>Auto</span>'
          : '<span style="font-size:11px;color:var(--t3)">Manual</span>';
      return `<tr>
      <td style="font-family:DM Mono,monospace;font-size:11.5px;font-weight:700;color:var(--ac)">${
        h.or
      }</td>
      <td><div style="font-weight:600;font-size:12.5px">${h.vendor}</div></td>
      <td style="font-family:DM Mono,monospace;font-weight:700">${h.stall}</td>
      <td style="font-size:12px;color:var(--t3)">${h.period}</td>
      <td style="font-family:DM Mono,monospace;font-weight:700;color:var(--gr)">&#8369;${h.amount.toLocaleString()}</td>
      <td>${mb[h.method] || h.method}</td>
      <td style="font-size:12px;color:var(--t3)">${h.posted}</td>
      <td>${src}</td>
    </tr>`;
    })
    .join("");
}

/* ═══ TOAST ═══ */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2800);
}

/* ═══ INIT ═══ */
(function () {
  const today = new Date();
  const d =
    today.getFullYear() +
    "-" +
    String(today.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(today.getDate()).padStart(2, "0");
  const fd = document.getElementById("f-date");
  if (fd) fd.value = d;
  refreshORDisplay();
  renderOnlineQueue();
  renderConfirmedOnline();
  renderCashTable();
  renderHistory();
})();
