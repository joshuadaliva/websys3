// ── SIDEBAR ──
let SB_OPEN = window.innerWidth >= 900;
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
  window.addEventListener("resize", function () {
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
function toggleSidebar() {
  toggleSB();
}

// ── THEME ──
let isDark = false;
function toggleTheme() {
  isDark = !isDark;
  document.documentElement.classList.toggle("dark", isDark);
  const i = document.getElementById("themeIcon");
  i.innerHTML = isDark
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

// ── TABS ──
function switchTab(tab, btn) {
  ["list", "map", "posted"].forEach((t) => {
    document.getElementById("tab-" + t).style.display =
      t === tab ? "block" : "none";
  });
  document
    .querySelectorAll(".tab-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

// ── VIEW TOGGLE ──
function switchView(view, btn) {
  document.getElementById("view-table").style.display =
    view === "table" ? "block" : "none";
  document.getElementById("view-grid").style.display =
    view === "grid" ? "block" : "none";
  document
    .querySelectorAll(".view-btn")
    .forEach((b) => b.classList.remove("active"));
  btn.classList.add("active");
}

// ── FILTER ──
function filterStatus(status, el) {
  document
    .querySelectorAll(".filter-badge")
    .forEach((b) => b.classList.remove("active"));
  el.classList.add("active");
}

// ── STATUS SELECT ──
function selectStatus(s, el) {
  document
    .querySelectorAll(".status-opt")
    .forEach((o) => o.classList.remove("active"));
  el.classList.add("active", s);
}

// ── MODALS ──
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}
function openAddModal() {
  document.getElementById("modalTitle").textContent = "Add New Stall";
  openModal("addModal");
}
function openEditModal() {
  document.getElementById("modalTitle").textContent = "Edit Stall Details";
  openModal("addModal");
}
function openUploadModal() {
  openModal("uploadModal");
}

function openPostModal(num, type, loc) {
  if (num) {
    document.getElementById(
      "previewStall"
    ).textContent = `Stall ${num} — ${type}`;
    document.getElementById("previewLoc").textContent = loc;
  }
  openModal("postModal");
}

function updateDeadline(val) {
  const d = new Date(val);
  const opts = { year: "numeric", month: "long", day: "numeric" };
  document.getElementById("previewDeadline").textContent =
    "Application Deadline: " + d.toLocaleDateString("en-US", opts);
}

function openViewModal(num, type, loc, vendor, status) {
  document.getElementById("viewTitle").textContent = `Stall ${num} — Details`;
  const colors = {
    occupied: "var(--ac)",
    vacant: "var(--am)",
    maintenance: "var(--rd)",
  };
  const labels = {
    occupied: "Occupied",
    vacant: "Vacant",
    maintenance: "Under Maintenance",
  };
  const vendorRow = vendor
    ? `<div style="display:flex;align-items:center;gap:8px"><div style="width:28px;height:28px;border-radius:50%;background:linear-gradient(135deg,var(--ac),#7c3aed);display:flex;align-items:center;justify-content:center;color:white;font-size:10px;font-weight:700">${vendor
        .split(" ")
        .map((w) => w[0])
        .slice(0, 2)
        .join(
          ""
        )}</div><div><div style="font-size:13px;font-weight:600">${vendor}</div><div style="font-size:11px;color:var(--t3)">Current Vendor</div></div></div>`
    : `<span style="color:var(--t3);font-style:italic;font-size:13px">No current vendor</span>`;
  document.getElementById("viewBody").innerHTML = `
    <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-bottom:16px">
      <div style="background:var(--s2);border:1px solid var(--brd);border-radius:8px;padding:12px">
        <div style="font-size:10px;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Stall Number</div>
        <div style="font-size:22px;font-weight:700;font-family:'DM Mono',monospace">${num}</div>
      </div>
      <div style="background:var(--s2);border:1px solid var(--brd);border-radius:8px;padding:12px">
        <div style="font-size:10px;color:var(--t3);font-weight:700;text-transform:uppercase;letter-spacing:.5px;margin-bottom:6px">Status</div>
        <span class="status-badge ${status}">${labels[status]}</span>
      </div>
    </div>
    <div style="display:flex;flex-direction:column;gap:10px;margin-bottom:16px">
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--brd2)">
        <span style="font-size:12px;color:var(--t3);font-weight:600">Type</span>
        <span style="font-size:13px;font-weight:600">${type}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--brd2)">
        <span style="font-size:12px;color:var(--t3);font-weight:600">Location</span>
        <span style="font-size:13px;font-weight:600">${loc}</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--brd2)">
        <span style="font-size:12px;color:var(--t3);font-weight:600">Size</span>
        <span style="font-size:13px;font-weight:600;font-family:'DM Mono',monospace">4 × 4 m²</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0;border-bottom:1px solid var(--brd2)">
        <span style="font-size:12px;color:var(--t3);font-weight:600">Monthly Rate</span>
        <span style="font-size:13px;font-weight:700;font-family:'DM Mono',monospace;color:var(--gr)">₱1,500.00</span>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;padding:10px 0">
        <span style="font-size:12px;color:var(--t3);font-weight:600">Vendor</span>
        ${vendorRow}
      </div>
    </div>`;
  openModal("viewModal");
}

// Close on backdrop click
document.querySelectorAll(".modal-backdrop").forEach((b) => {
  b.addEventListener("click", function (e) {
    if (e.target === this) this.classList.remove("open");
  });
});

// Toggle all checkboxes
function toggleAll(el) {
  el.classList.toggle("checked");
  document.querySelectorAll(".stall-table td .checkbox").forEach((c) => {
    c.classList.toggle("checked", el.classList.contains("checked"));
  });
}
