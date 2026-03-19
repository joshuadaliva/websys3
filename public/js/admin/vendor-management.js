/**
 * vendor-management.js
 * Uses VENDORS injected by EJS from the server (see bottom of vendor-management.ejs).
 * Table structure lives in the EJS template; JS only populates tbody rows.
 */

/* ═══ STATUS MAPS ═══ */
const STATUS_LABEL = {
  active: "Active",
  suspended: "Suspended",
  expired: "Contract Expired",
  terminated: "Terminated",
};

const PROGRESS_COLOR = {
  ok: "var(--status-active)",
  warn: "var(--status-suspended)",
  crit: "var(--status-expired)",
  ex: "var(--status-expired)",
};

/* ═══ STATE ═══ */
let currentFilter = "all";
let currentView = "card";
let selectedId = null;
let currentPage = 1;
let createStep = 1;
const PAGE_SIZE = 8;

/* ═══ INLINE SVG ICONS ═══ */
const ICONS = {
  store:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,
  phone:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 13.5 19.79 19.79 0 0 1 1.61 4.87 2 2 0 0 1 3.59 2.69h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 10a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>`,
  calendar:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>`,
  pin:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>`,
  mail:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>`,
  edit:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>`,
  clock:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>`,
  lock:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>`,
  eye:       `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>`,
  activity:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>`,
  file:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>`,
  send:      `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>`,
  refresh:   `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="23 4 23 10 17 10"/><polyline points="1 20 1 14 7 14"/><path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15"/></svg>`,
  check:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg>`,
  money:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  cross:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="15" y1="9" x2="9" y2="15"/><line x1="9" y1="9" x2="15" y2="15"/></svg>`,
  userPlus:  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><line x1="20" y1="8" x2="20" y2="14"/><line x1="23" y1="11" x2="17" y2="11"/></svg>`,
  pause:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="10" y1="15" x2="10" y2="9"/><line x1="14" y1="15" x2="14" y2="9"/></svg>`,
  chevL:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>`,
  chevR:     `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>`,
};

/* ═══ HELPERS ═══ */
function getUsername(vendor) {
  return `${vendor.id.replace("-", "").toLowerCase()}.${vendor.stall.replace("#", "stall")}`;
}

function statusBadge(status) {
  return `<span class="badge badge-${status}">${STATUS_LABEL[status]}</span>`;
}

function getActionButtons(vendor, stopProp = true) {
  const sp = stopProp ? "event.stopPropagation();" : "";
  return `
    <div class="action-btn tooltip" data-tip="Edit" onclick="${sp}openEditModal('${vendor.id}')">${ICONS.edit}</div>
    <div class="action-btn action-btn-warn tooltip" data-tip="Status" onclick="${sp}openStatusModal('${vendor.id}')">${ICONS.clock}</div>
    <div class="action-btn tooltip" data-tip="Credentials" onclick="${sp}openCredModal('${vendor.id}')">${ICONS.lock}</div>
  `;
}

/* ═══ SIDEBAR ═══ */
let sidebarOpen = window.innerWidth >= 768;

function openSB() {
  sidebarOpen = true;
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
  sidebarOpen = false;
  document.getElementById("sb").style.transform = "translateX(calc(-1 * var(--sidebar-w)))";
  document.getElementById("veil").style.display = "none";
  document.getElementById("main").style.marginLeft = "0";
}

function toggleSB() {
  sidebarOpen ? closeSB() : openSB();
}

window.addEventListener("resize", () => {
  document.getElementById("veil").style.display = "none";
  if (window.innerWidth >= 768) {
    if (sidebarOpen) document.getElementById("main").style.marginLeft = "var(--sidebar-w)";
  } else {
    document.getElementById("main").style.marginLeft = "0";
    if (sidebarOpen) document.getElementById("veil").style.display = "block";
  }
});

// Init sidebar on load
if (window.innerWidth < 768) closeSB();
else openSB();

/* ═══ THEME ═══ */
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle("dark", isDark);
  document.getElementById("themeIco").innerHTML = isDark
    ? `<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>`
    : `<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>`;
}

/* ═══ FILTER / VIEW ═══ */
function setSF(status, el) {
  currentFilter = status;
  document.querySelectorAll(".pill").forEach((p) => p.classList.remove("active"));
  el.classList.add("active");
  currentPage = 1;
  renderView();
}

function setView(view, btn) {
  currentView = view;
  document.querySelectorAll(".view-btn").forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
  document.getElementById("vgrid").style.display = view === "card" ? "grid" : "none";
  document.getElementById("vtbl-container").style.display = view === "table" ? "block" : "none";
  renderView();
}

function getFilteredVendors() {
  const query = (document.getElementById("vsrch")?.value || "").toLowerCase();
  const typeFilter = document.getElementById("vtype")?.value || "";
  return VENDORS.filter((v) => {
    const name = `${v.firstName} ${v.lastName}`.toLowerCase();
    const matchesQuery =
      !query ||
      name.includes(query) ||
      v.stall.includes(query) ||
      v.phone.includes(query) ||
      v.email.toLowerCase().includes(query) ||
      v.id.toLowerCase().includes(query);
    const matchesType = !typeFilter || v.type === typeFilter;
    const matchesStatus = currentFilter === "all" || v.status === currentFilter;
    return matchesQuery && matchesType && matchesStatus;
  });
}

function renderView() {
  if (currentView === "card") renderCards();
  else renderTable(currentPage);
}

/* ═══ RENDER CARDS ═══ */
function renderCards() {
  const grid = document.getElementById("vgrid");
  const list = getFilteredVendors();

  if (!list.length) {
    grid.innerHTML = `<div class="empty-state">No vendors match your filters.</div>`;
    return;
  }

  grid.innerHTML = list.map((v, i) => `
    <div class="vendor-card ${selectedId === v.id ? "selected" : ""}"
         onclick="selectVendor('${v.id}')"
         style="animation-delay:${i * 0.04}s">
      <div class="vc-stripe vc-stripe-${v.status}"></div>
      <div class="vc-body">
        <div class="vc-top">
          <div class="vc-avatar">${v.initials}</div>
          <div style="flex:1;min-width:0">
            <div class="vc-name">${v.firstName} ${v.lastName}</div>
            <div class="vc-id">${v.id}</div>
          </div>
          ${statusBadge(v.status)}
        </div>
        <div class="vc-rows">
          <div class="vc-row">${ICONS.store}<span>${v.stall}</span><span style="margin-left:4px">${v.type}</span></div>
          <div class="vc-row">${ICONS.phone}${v.phone}</div>
          <div class="vc-row">${ICONS.calendar}Since ${v.since}</div>
        </div>
        <div class="vc-foot">
          <div class="contract-bar">
            <div class="contract-bar-labels"><span>Contract</span><span>${v.contractEnd}</span></div>
            <div class="contract-track"><div class="contract-fill contract-fill-${v.progressClass}" style="width:${v.contractProgress}%"></div></div>
          </div>
          <div class="action-btns">
            <div class="action-btn tooltip" data-tip="Edit" onclick="event.stopPropagation();openEditModal('${v.id}')">${ICONS.edit}</div>
            <div class="action-btn action-btn-warn tooltip" data-tip="Status" onclick="event.stopPropagation();openStatusModal('${v.id}')">${ICONS.clock}</div>
            <div class="action-btn tooltip" data-tip="Credentials" onclick="event.stopPropagation();openCredModal('${v.id}')">${ICONS.lock}</div>
          </div>
        </div>
      </div>
    </div>
  `).join("");
}

/* ═══ RENDER TABLE — only tbody rows, structure stays in EJS ═══ */
function renderTable(page = 1) {
  currentPage = page;
  const all = getFilteredVendors();
  const totalPages = Math.max(1, Math.ceil(all.length / PAGE_SIZE));
  const safePage = Math.min(Math.max(1, page), totalPages);
  const list = all.slice((safePage - 1) * PAGE_SIZE, safePage * PAGE_SIZE);

  // Store for index-based lookups
  window._tablePage = list;

  const tbody = document.getElementById("vtbl-body");
  if (!tbody) return;

  if (!list.length) {
    tbody.innerHTML = `<tr><td colspan="8" class="empty-state" style="padding:40px;text-align:center">No vendors match your filters.</td></tr>`;
  } else {
    tbody.innerHTML = list.map((v, i) => `
      <tr class="${selectedId === v.id ? "selected" : ""}" onclick="selectVendorByIndex(${i})">
        <td><div class="chk"></div></td>
        <td>
          <div class="vendor-cell">
            <div class="vendor-avatar-sm">${v.initials}</div>
            <div>
              <div class="vendor-name">${v.firstName} ${v.lastName}</div>
              <div class="vendor-id-sm">${v.id}</div>
            </div>
          </div>
        </td>
        <td><span>${v.stall}</span></td>
        <td><span>${v.type}</span></td>
        <td>${v.phone}</td>
        <td style="font-size:12px;font-weight:600;">${v.contractEnd}</td>
        <td>${statusBadge(v.status)}</td>
        <td>
          <div class="action-btns">
            <div class="action-btn tooltip" data-tip="View" onclick="event.stopPropagation();selectVendorByIndex(${i})">${ICONS.eye}</div>
            <div class="action-btn tooltip" data-tip="Edit" onclick="event.stopPropagation();editByIndex(${i})">${ICONS.edit}</div>
            <div class="action-btn action-btn-warn tooltip" data-tip="Status" onclick="event.stopPropagation();statusByIndex(${i})">${ICONS.clock}</div>
            <div class="action-btn tooltip" data-tip="Creds" onclick="event.stopPropagation();credByIndex(${i})">${ICONS.lock}</div>
          </div>
        </td>
      </tr>
    `).join("");
  }

  // Pagination info
  const start = (safePage - 1) * PAGE_SIZE + 1;
  const end = Math.min(safePage * PAGE_SIZE, all.length);
  const infoEl = document.getElementById("tbl-info");
  if (infoEl) infoEl.textContent = `Showing ${start}–${end} of ${all.length} vendors`;

  // Pagination controls
  const pgr = document.getElementById("pgr-wrap");
  if (!pgr) return;

  const pageStart = Math.max(1, safePage - 1);
  const pageEnd = Math.min(totalPages, pageStart + 2);
  let pageNums = "";
  for (let p = pageStart; p <= pageEnd; p++) {
    pageNums += `<button class="pg-btn ${p === safePage ? "active" : ""}" onclick="renderTable(${p})">${p}</button>`;
  }

  pgr.innerHTML = `
    <button class="pg-btn" ${safePage <= 1 ? "disabled" : ""} onclick="renderTable(${safePage - 1})">${ICONS.chevL}</button>
    ${pageNums}
    <button class="pg-btn" ${safePage >= totalPages ? "disabled" : ""} onclick="renderTable(${safePage + 1})">${ICONS.chevR}</button>
  `;
}

// Index-based table helpers (avoids quote-escaping in onclick)
function selectVendorByIndex(i) {
  const v = window._tablePage?.[i];
  if (v) selectVendor(v.id);
}
function editByIndex(i) {
  const v = window._tablePage?.[i];
  if (v) openEditModal(v.id);
}
function statusByIndex(i) {
  const v = window._tablePage?.[i];
  if (v) openStatusModal(v.id);
}
function credByIndex(i) {
  const v = window._tablePage?.[i];
  if (v) openCredModal(v.id);
}

/* ═══ SELECT VENDOR — renders right-column profile ═══ */
function selectVendor(id) {
  selectedId = id;
  const vendor = VENDORS.find((v) => v.id === id);
  if (!vendor) return;

  renderView(); // refresh selected highlight in list

  const col = document.getElementById("rpcol");
  const contractColor = PROGRESS_COLOR[vendor.progressClass];

  // Build activity log
  let activity = `
    <div class="activity-item">
      <div class="activity-dot activity-dot-blue">${ICONS.userPlus}</div>
      <div><div class="activity-text"><strong>Vendor account created</strong> — by Admin Maria Torres</div><div class="activity-time">${vendor.since}</div></div>
    </div>
    <div class="activity-item">
      <div class="activity-dot activity-dot-green">${ICONS.send}</div>
      <div><div class="activity-text"><strong>Login credentials sent</strong> — via SMS and Email</div><div class="activity-time">${vendor.since}</div></div>
    </div>`;
  if (vendor.lastPayment !== "—") {
    activity += `
    <div class="activity-item">
      <div class="activity-dot activity-dot-green">${ICONS.money}</div>
      <div><div class="activity-text"><strong>Monthly payment received</strong> — ${vendor.monthlyRate}</div><div class="activity-time">${vendor.lastPayment}</div></div>
    </div>`;
  }
  if (vendor.status === "suspended") {
    activity += `
    <div class="activity-item">
      <div class="activity-dot activity-dot-amber">${ICONS.pause}</div>
      <div><div class="activity-text"><strong>Account suspended</strong> — Outstanding balance ${vendor.balance}</div><div class="activity-time">Feb 1, 2026</div></div>
    </div>`;
  }
  if (vendor.status === "expired") {
    activity += `
    <div class="activity-item">
      <div class="activity-dot activity-dot-slate">${ICONS.calendar}</div>
      <div><div class="activity-text"><strong>Contract expired</strong> — Renewal required</div><div class="activity-time">${vendor.contractEnd}</div></div>
    </div>`;
  }
  if (vendor.status === "terminated") {
    activity += `
    <div class="activity-item">
      <div class="activity-dot activity-dot-red">${ICONS.cross}</div>
      <div><div class="activity-text"><strong>Account terminated</strong> — Vendor removed</div><div class="activity-time">May 20, 2023</div></div>
    </div>`;
  }

  // Quick-action button for special statuses
  let quickAction = "";
  if (vendor.status === "suspended") {
    quickAction = `<button class="btn btn-success btn-sm" style="width:100%">${ICONS.check} Activate Account</button>`;
  } else if (vendor.status === "expired") {
    quickAction = `<button class="btn btn-primary btn-sm" style="width:100%">${ICONS.refresh} Renew Contract</button>`;
  }

  col.innerHTML = `
    <div class="panel">
      <div class="profile-banner profile-banner-${vendor.status}"></div>
      <div class="profile-body">
        <div class="profile-avatar-row">
          <div class="profile-avatar">${vendor.initials}</div>
          ${statusBadge(vendor.status)}
        </div>
        <div class="profile-name">${vendor.firstName} ${vendor.lastName}</div>
        <div class="profile-id">${vendor.id}</div>
        <div class="profile-info">
          <div class="profile-row">${ICONS.store}<span class="profile-label">Stall</span><span class="profile-value"><span>${vendor.stall}</span>&nbsp;${vendor.type}</span></div>
          <div class="profile-row">${ICONS.phone}<span class="profile-label">Phone</span><span class="profile-value">${vendor.phone}</span></div>
          <div class="profile-row">${ICONS.mail}<span class="profile-label">Email</span><span class="profile-value">${vendor.email}</span></div>
          <div class="profile-row">${ICONS.pin}<span class="profile-label">Address</span><span class="profile-value">${vendor.address}</span></div>
          <div class="profile-row">${ICONS.calendar}<span class="profile-label">Vendor Since</span><span class="profile-value">${vendor.since}</span></div>
        </div>
        <div class="profile-status-row">
          <span class="profile-status-label">Current Status</span>
          ${statusBadge(vendor.status)}
        </div>
        <div class="profile-actions">
          <button class="btn btn-primary btn-sm" style="width:100%" onclick="openEditModal('${vendor.id}')">${ICONS.edit} Edit Vendor Information</button>
          <div style="display:flex;gap:6px">
            <button class="btn btn-outline btn-sm" style="flex:1" onclick="openStatusModal('${vendor.id}')">${ICONS.clock} Change Status</button>
            <button class="btn btn-ghost btn-sm" style="flex:1" onclick="openCredModal('${vendor.id}')">${ICONS.lock} Credentials</button>
          </div>
          ${quickAction}
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header"><div class="panel-title">${ICONS.file} Contract Information</div></div>
      <div class="contract-info">
        <div class="contract-info-row"><span class="contract-info-label">Contract Start</span><span class="contract-info-value">${vendor.contractStart}</span></div>
        <div class="contract-info-row"><span class="contract-info-label">Contract End</span><span class="contract-info-value" style="color:${contractColor};font-weight:700">${vendor.contractEnd}</span></div>
        <div class="contract-info-row"><span class="contract-info-label">Monthly Rate</span><span class="contract-info-value" style="color:var(--status-active);font-family:'DM Mono',monospace">${vendor.monthlyRate}</span></div>
        <div class="contract-info-row"><span class="contract-info-label">Balance Due</span><span class="contract-info-value" style="color:${vendor.balance !== "₱0.00" ? "var(--status-expired)" : "var(--status-active)"};font-family:'DM Mono',monospace">${vendor.balance}</span></div>
        <div class="contract-info-row"><span class="contract-info-label">Last Payment</span><span class="contract-info-value">${vendor.lastPayment}</span></div>
        <div>
          <div class="contract-progress-header"><span>Contract Progress</span><span style="font-family:'DM Mono',monospace">${vendor.contractProgress}%</span></div>
          <div class="contract-track"><div class="contract-fill contract-fill-${vendor.progressClass}" style="width:${vendor.contractProgress}%"></div></div>
        </div>
      </div>
    </div>

    <div class="panel">
      <div class="panel-header"><div class="panel-title">${ICONS.lock} Portal Account</div></div>
      <div class="account-row"><span class="account-label">Username</span><span class="account-value" style="font-family:'DM Mono',monospace;font-size:11.5px">${getUsername(vendor)}</span></div>
      <div class="account-row"><span class="account-label">Portal Access</span><span class="account-value">${vendor.status === "active" ? '<span class="pulse-dot"></span>Active' : '<span style="color:var(--status-expired)">Restricted</span>'}</span></div>
      <div class="account-row"><span class="account-label">Last Login</span><span class="account-value">${vendor.isOnline ? "Today · 08:30 AM" : "—"}</span></div>
      <div class="account-row"><span class="account-label">Account Created</span><span class="account-value">${vendor.since}</span></div>
    </div>

    <div class="panel">
      <div class="panel-header"><div class="panel-title">${ICONS.activity} Recent Activity</div></div>
      <div style="padding:4px 0">${activity}</div>
    </div>
  `;
}

/* ═══ MODALS ═══ */
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}

// Close modal when clicking backdrop
document.querySelectorAll(".modal-backdrop").forEach((backdrop) => {
  backdrop.addEventListener("click", (e) => {
    if (e.target === backdrop) backdrop.classList.remove("open");
  });
});

function openCreateModal() {
  createStep = 1;
  ["cs1", "cs2", "cs3"].forEach((id, i) => {
    document.getElementById(id).style.display = i === 0 ? "block" : "none";
  });
  for (let i = 1; i <= 3; i++) {
    const el = document.getElementById(`st${i}`);
    el.className = `stepper-step${i === 1 ? " active" : ""}`;
    el.querySelector(".step-dot").textContent = String(i);
  }
  document.getElementById("sl1").className = "stepper-line";
  document.getElementById("sl2").className = "stepper-line";
  document.getElementById("create-modal-footer").innerHTML = `
    <button class="btn btn-ghost btn-sm" onclick="closeModal('createModal')">Cancel</button>
    <button class="btn btn-primary btn-sm" onclick="nextStep()">Next ${ICONS.chevR}</button>
  `;
  openModal("createModal");
}

function nextStep() {
  if (createStep >= 3) return;
  document.getElementById(`cs${createStep}`).style.display = "none";
  const el = document.getElementById(`st${createStep}`);
  el.className = "stepper-step done";
  el.querySelector(".step-dot").textContent = "✓";
  document.getElementById(`sl${createStep}`).className = "stepper-line done";
  createStep++;
  document.getElementById(`cs${createStep}`).style.display = "block";
  document.getElementById(`st${createStep}`).className = "stepper-step active";
  if (createStep === 3) {
    document.getElementById("create-modal-footer").innerHTML = `
      <button class="btn btn-ghost btn-sm" onclick="closeModal('createModal')">Cancel</button>
      <button class="btn btn-success btn-sm">${ICONS.check} Create Account & Send Credentials</button>
    `;
  }
}

function openConvertModal() { openModal("convertModal"); }

function openEditModal(id) {
  const vendor = VENDORS.find((v) => v.id === id);
  if (vendor) {
    document.getElementById("ef-fn").value = vendor.firstName;
    document.getElementById("ef-ln").value = vendor.lastName;
    document.getElementById("ef-ph").value = vendor.phone;
    document.getElementById("ef-em").value = vendor.email;
    document.getElementById("ef-ad").value = vendor.address;
  }
  openModal("editModal");
}

function openStatusModal(id) {
  const vendor = VENDORS.find((v) => v.id === id);
  if (vendor) document.getElementById("sm-name").textContent = `${vendor.firstName} ${vendor.lastName}`;
  document.querySelectorAll(".status-option").forEach((opt) => opt.classList.remove("status-opt-active", "status-opt-suspended", "status-opt-expired", "status-opt-terminated"));
  if (vendor) {
    const classMap = { active: "status-opt-active", suspended: "status-opt-suspended", expired: "status-opt-expired", terminated: "status-opt-terminated" };
    document.querySelectorAll(".status-option")[["active", "suspended", "expired", "terminated"].indexOf(vendor.status)]?.classList.add(classMap[vendor.status]);
  }
  openModal("statusModal");
}

function pickStatus(el, status) {
  document.querySelectorAll(".status-option").forEach((opt) => {
    opt.classList.remove("status-opt-active", "status-opt-suspended", "status-opt-expired", "status-opt-terminated");
  });
  el.classList.add(`status-opt-${status}`);
}

function openCredModal(id) {
  const vendor = VENDORS.find((v) => v.id === id);
  if (vendor) {
    document.getElementById("cred-nm").textContent = `${vendor.firstName} ${vendor.lastName}`;
    document.getElementById("cred-un").textContent = getUsername(vendor);
    document.getElementById("cred-contact").textContent = `${vendor.phone} · ${vendor.email}`;
  }
  openModal("credModal");
}

function pickApplicant(el) {
  document.querySelectorAll(".applicant-item").forEach((item) => {
    item.classList.remove("selected");
    item.querySelector(".applicant-check")?.remove();
  });
  el.classList.add("selected");
  el.insertAdjacentHTML("beforeend", `
    <svg class="applicant-check" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--ac)" stroke-width="2.5" width="16" height="16">
      <polyline points="20 6 9 17 4 12"/>
    </svg>
  `);
}

/* ═══ INIT ═══ */
renderView();