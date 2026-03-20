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

function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
  const ico = document.getElementById("themeIco");
  ico.innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ═══ FLOOR TABS ═══ */
function setFloor(id, el) {
  document.getElementById("floor-gf").style.display =
    id === "gf" ? "block" : "none";
  document.getElementById("floor-sf").style.display =
    id === "sf" ? "block" : "none";
  document
    .querySelectorAll(".floor-tab")
    .forEach((t) => t.classList.remove("on"));
  if (el) el.classList.add("on");
  closeDetail();
}

/* ═══ STALL HELPERS ═══ */
function sc(id) {
  const s = (STALLS || {})[id];
  if (!s) {
    const num = id.split("-").pop();
    return `<div class="stall other tt" data-tip="Stall ${num} - Other route"><span>${num}</span></div>`;
  }
  const cls = s.mine ? s.status : "other";
  const tip =
    `Stall ${s.num} - ${s.section} - ${s.vendor || "Vacant"}` +
    (s.mine && s.status === "overdue"
      ? ` - ${s.overdueDays} days overdue`
      : "") +
    (s.mine && s.status === "partial" ? ` - Balance PHP ${s.balance}` : "") +
    (!s.mine ? " (not your route)" : "");
  const dot =
    s.mine && (s.status === "overdue" || s.status === "partial")
      ? '<div class="stall-dot"></div>'
      : "";
  const click = s.mine ? ` onclick="openDetail('${id}')"` : "";
  return `<div class="stall ${cls}${
    s.mine ? " mine" : ""
  } tt" data-tip="${tip}" id="st-${id}"${click}><span>${
    s.num
  }</span>${dot}</div>`;
}

function row(ids) {
  return '<div class="fp-row">' + ids.map(sc).join("") + "</div>";
}
function section(label, rows) {
  return `<div class="fp-section"><div class="fp-sec-lbl">${label}</div>${rows.join(
    ""
  )}</div>`;
}
function room(label, w, h, extra = "") {
  return `<div class="fp-room${extra}" style="width:${w}px;height:${h}px">${label}</div>`;
}

/* ═══ GROUND FLOOR LAYOUT ═══ */
function buildGroundFloor() {
  const gf = document.getElementById("gfPlan");
  if (!gf) return;

  gf.innerHTML = ""; // 🔥 clear before rebuilding
  gf.style.cssText = "display:flex;flex-direction:column;gap:14px";
  gf.style.cssText = "display:flex;flex-direction:column;gap:14px";

  const r1 = document.createElement("div");
  r1.style.cssText =
    "display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap";
  r1.innerHTML =
    '<div><div class="fp-sec-lbl" style="margin-bottom:5px">Eatery</div>' +
    '<div class="fp-row">' +
    sc("GF-EA-1") +
    sc("GF-EA-2") +
    "</div></div>" +
    room("Empty<br/>Space", 100, 56, " dashed") +
    section("Eatery Section (Stalls 3-10)", [
      row([
        "GF-EA-3",
        "GF-EA-4",
        "GF-EA-5",
        "GF-EA-6",
        "GF-EA-7",
        "GF-EA-8",
        "GF-EA-9",
        "GF-EA-10",
      ]),
    ]) +
    room("Eatery Common Usage Area", 220, 56, " dashed");
  gf.appendChild(r1);

  const r2 = document.createElement("div");
  r2.style.cssText =
    "display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap";
  r2.innerHTML =
    room("Stairs<br/>Elevator", 80, 100) +
    '<div class="fp-section"><div class="fp-sec-lbl">RTW Section</div>' +
    row([
      "GF-RTW-1",
      "GF-RTW-2",
      "GF-RTW-3",
      "GF-RTW-4",
      "GF-RTW-5",
      "GF-RTW-6",
      "GF-RTW-7",
    ]) +
    '<div style="height:4px"></div>' +
    row([
      "GF-RTW-13",
      "GF-RTW-14",
      "GF-RTW-15",
      "GF-RTW-16",
      "GF-RTW-17",
      "GF-RTW-18",
      "GF-RTW-19",
    ]) +
    "</div>" +
    '<div style="display:flex;flex-direction:column;gap:6px">' +
    room("Stairs<br/>Elevator", 80, 56) +
    '<div class="fp-section"><div class="fp-sec-lbl">Special Purpose</div>' +
    row(["GF-RTW-8", "GF-RTW-9"]) +
    "</div></div>";
  gf.appendChild(r2);

  const r3 = document.createElement("div");
  r3.style.cssText =
    "display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap";
  r3.innerHTML =
    '<div class="fp-section"><div class="fp-sec-lbl">Service Section</div>' +
    row(["GF-SV-1", "GF-SV-2", "GF-SV-3", "GF-SV-4", "GF-SV-5"]) +
    '<div style="height:4px"></div>' +
    row(["GF-SV-6", "GF-SV-7", "GF-SV-8"]) +
    "</div>" +
    '<div class="fp-section"><div class="fp-sec-lbl">Footwear</div>' +
    row(["GF-FW-5", "GF-FW-6", "GF-FW-7", "GF-FW-8"]) +
    '<div style="height:4px"></div>' +
    row(["GF-FW-1", "GF-FW-2", "GF-FW-3", "GF-FW-4"]) +
    "</div>" +
    '<div class="fp-section"><div class="fp-sec-lbl">Misc / Pasalubong</div>' +
    row(["GF-MISC-5", "GF-MISC-6", "GF-MISC-7", "GF-MISC-8"]) +
    '<div style="height:4px"></div>' +
    row(["GF-MISC-1", "GF-MISC-2", "GF-MISC-3", "GF-MISC-4"]) +
    "</div>" +
    room("Storage<br/>Stairs", 80, 120);
  gf.appendChild(r3);

  const r4 = document.createElement("div");
  r4.style.cssText =
    "display:flex;align-items:center;gap:8px;flex-wrap:wrap;margin-top:4px";
  r4.innerHTML =
    room("ATM<br/>Kiosks", 60, 80) +
    room("WCR", 80, 56) +
    room("MCR", 80, 56) +
    room("PWD CR", 60, 56) +
    room("Utility Rm.", 70, 56);
  gf.appendChild(r4);
}

/* ═══ SECOND FLOOR LAYOUT ═══ */
function buildSecondFloor() {
  const sf = document.getElementById("sfPlan");
  if (!sf) return;

  sf.innerHTML = ""; // 🔥 clear before rebuilding
  sf.style.cssText = "display:flex;flex-direction:column;gap:14px";

  const r1 = document.createElement("div");
  r1.style.cssText = "display:flex;align-items:center;gap:14px;flex-wrap:wrap";
  r1.innerHTML =
    room("Market<br/>Admin", 100, 70) +
    '<div style="display:flex;flex-direction:column;gap:6px">' +
    room("Stairs<br/>Elevator", 70, 56) +
    "</div>" +
    room("RAMP", 200, 100, " ramp") +
    '<div style="display:flex;flex-direction:column;gap:6px;margin-left:auto">' +
    room("Storage", 120, 60) +
    room("Storage", 120, 60) +
    "</div>";
  sf.appendChild(r1);

  const r2 = document.createElement("div");
  r2.style.cssText =
    "display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap";
  r2.innerHTML =
    '<div class="fp-section"><div class="fp-sec-lbl">Seginda Mano / Ukay-Ukay</div>' +
    '<div class="fp-row">' +
    sc("SF-UK-10") +
    sc("SF-UK-11") +
    sc("SF-UK-12") +
    sc("SF-UK-13") +
    sc("SF-UK-14") +
    sc("SF-UK-15") +
    sc("SF-UK-16") +
    sc("SF-UK-17") +
    sc("SF-UK-18") +
    sc("SF-UK-19") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-UK-9") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-UK-1") +
    sc("SF-UK-2") +
    sc("SF-UK-3") +
    sc("SF-UK-4") +
    sc("SF-UK-5") +
    sc("SF-UK-6") +
    sc("SF-UK-7") +
    sc("SF-UK-8") +
    "</div></div>" +
    '<div class="fp-section"><div class="fp-sec-lbl">Ukay (Right)</div>' +
    '<div class="fp-row">' +
    sc("SF-UK-25") +
    sc("SF-UK-24") +
    sc("SF-UK-23") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-UK-20") +
    sc("SF-UK-21") +
    sc("SF-UK-22") +
    "</div></div>" +
    '<div style="display:flex;flex-direction:column;gap:6px;margin-left:auto">' +
    room("Stairs<br/>Elevator", 70, 56) +
    '<div class="fp-section"><div class="fp-sec-lbl">Special Purpose</div>' +
    row(["SF-SP-5", "SF-SP-6", "SF-SP-7", "SF-SP-8"]) +
    "</div></div>";
  sf.appendChild(r2);

  const r3 = document.createElement("div");
  r3.style.cssText =
    "display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap";
  r3.innerHTML =
    '<div class="fp-section"><div class="fp-sec-lbl">Maritatas / Vegetable Section</div>' +
    '<div class="fp-row">' +
    sc("SF-VG-17") +
    sc("SF-VG-16") +
    sc("SF-VG-15") +
    sc("SF-VG-14") +
    sc("SF-VG-13") +
    sc("SF-VG-12") +
    sc("SF-VG-11") +
    sc("SF-VG-10") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-VG-18") +
    '<div style="width:52px;height:52px"></div>' +
    sc("SF-VG-9") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-VG-1") +
    sc("SF-VG-2") +
    sc("SF-VG-3") +
    sc("SF-VG-4") +
    sc("SF-VG-5") +
    sc("SF-VG-6") +
    sc("SF-VG-7") +
    sc("SF-VG-8") +
    "</div></div>" +
    room("Storage<br/>Stairs", 80, 120) +
    '<div class="fp-section"><div class="fp-sec-lbl">Fruit Section</div>' +
    '<div class="fp-row">' +
    sc("SF-FR-2") +
    sc("SF-FR-3") +
    sc("SF-FR-4") +
    sc("SF-FR-5") +
    sc("SF-FR-6") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-FR-1") +
    '<div style="width:52px;height:52px"></div><div style="width:52px;height:52px"></div><div style="width:52px;height:52px"></div>' +
    sc("SF-FR-7") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-FR-22") +
    sc("SF-FR-23") +
    sc("SF-FR-24") +
    sc("SF-FR-25") +
    sc("SF-FR-26") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-FR-19") +
    sc("SF-FR-20") +
    sc("SF-FR-21") +
    "</div></div>" +
    '<div class="fp-section"><div class="fp-sec-lbl">Egg Section</div>' +
    '<div class="fp-row">' +
    sc("SF-EG-7") +
    room("WCR", 56, 56) +
    room("Utility<br/>Rm.", 56, 56) +
    room("MCR", 56, 56) +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px"><div style="width:56px;height:56px"></div>' +
    room("WCR", 56, 56) +
    room("PWD CR", 56, 56) +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-EG-6") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-EG-5") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-EG-4") +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px">' +
    sc("SF-EG-3") +
    sc("SF-EG-2") +
    sc("SF-EG-1") +
    "</div></div>";
  sf.appendChild(r3);
}

/* ═══ DETAIL PANEL ═══ */
function openDetail(id) {
  const s = STALLS[id];
  if (!s || !s.mine) return;

  document
    .querySelectorAll(".stall.mine.active")
    .forEach((el) => el.classList.remove("active"));
  document.getElementById("st-" + id)?.classList.add("active");
  document.getElementById("dpTitle").textContent =
    s.section + " Stall " + s.num;

  const heroBg = {
    paid: "linear-gradient(135deg,var(--grl),var(--s2))",
    overdue: "linear-gradient(135deg,var(--rdl),var(--s2))",
    partial: "linear-gradient(135deg,var(--aml),var(--s2))",
    vacant: "linear-gradient(135deg,var(--s2),var(--s3))",
  };
  const heroColor = {
    paid: "var(--gr)",
    overdue: "var(--rd)",
    partial: "var(--am)",
    vacant: "var(--t3)",
  };
  const statusLabels = {
    paid: "Paid",
    overdue: "Overdue",
    partial: "Partial Payment",
    vacant: "Vacant",
  };
  const badgeCls = { paid: "gr", overdue: "rd", partial: "am", vacant: "gy" };

  const vendorBlock = s.vendor
    ? `<div style="display:flex;align-items:center;gap:10px;padding:10px 0">
        <div style="width:36px;height:36px;border-radius:50%;background:linear-gradient(${s.grad});display:grid;place-items:center;color:#fff;font-size:12px;font-weight:700;flex-shrink:0">${s.init}</div>
        <div><div style="font-size:13.5px;font-weight:700">${s.vendor}</div>
        <div style="font-size:11.5px;color:var(--t3)">Contract expires ${s.contractExp}</div></div></div>`
    : '<div style="padding:10px 0;color:var(--t3);font-style:italic;font-size:13px">No current vendor</div>';

  const histHtml =
    s.history && s.history.length
      ? s.history
          .map(
            (h) =>
              `<div class="ph-item">
          <div><div style="font-size:12.5px;font-weight:600">${
            h.month
          }</div><div style="font-size:11px;color:var(--t3)">Paid ${
                h.date
              }</div></div>
          <div style="text-align:right"><div style="font-size:13px;font-weight:700;font-family:DM Mono,monospace;color:var(--gr)">&#8369;${h.amount.toLocaleString()}</div>
          <div style="font-size:11px;color:var(--t3)">${h.method} &middot; ${
                h.or
              }</div></div>
        </div>`
          )
          .join("")
      : '<div style="padding:12px 0;text-align:center;color:var(--t3);font-size:13px">No payment history</div>';

  document.getElementById(
    "dpBody"
  ).innerHTML = `<div class="stall-hero" style="background:${
    heroBg[s.status] || heroBg.vacant
  }">
      <div class="stall-hero-num" style="color:${
        heroColor[s.status] || heroColor.vacant
      }">${s.num}</div>
      <div class="stall-hero-meta">${s.section} &mdash; ${s.type}</div>
      <div style="margin-top:6px"><span class="bdg ${
        badgeCls[s.status] || "gy"
      }">${statusLabels[s.status] || s.status}</span></div>
    </div>
    <div class="d-sec"><div class="d-sec-lbl">Vendor</div>${vendorBlock}</div>
    <div class="d-sec"><div class="d-sec-lbl">Payment Details</div>
      <div class="d-row"><span class="d-lbl">Floor</span><span class="d-val">${
        s.floor === "GF" ? "Ground Floor" : "Second Floor"
      }</span></div>
      <div class="d-row"><span class="d-lbl">Monthly Rate</span><span class="d-val mono">&#8369;${s.rate.toLocaleString()}</span></div>
      <div class="d-row"><span class="d-lbl">Last Paid</span><span class="d-val">${
        s.lastPaid
      }</span></div>
      ${
        s.balance > 0
          ? `<div class="d-row"><span class="d-lbl">Balance Due</span><span class="d-val rd mono">&#8369;${s.balance.toLocaleString()}</span></div>`
          : ""
      }
      ${
        s.overdueDays > 0
          ? `<div class="d-row"><span class="d-lbl">Days Overdue</span><span class="d-val rd">${s.overdueDays} days</span></div>`
          : ""
      }
    </div>
    <div class="d-sec"><div class="d-sec-lbl">Payment History</div>${histHtml}</div>`;

  document.getElementById("dpFoot").innerHTML = s.vendor
    ? `<button class="btn gh" style="flex:1" onclick="sendSMSReminder()">SMS Reminder</button>`
    : `<button class="btn gh" style="flex:1" onclick="showToast('Stall marked as occupied')">Mark Occupied</button>`;

  window._activeVendor = s.vendor || "";
  document.getElementById("detailOverlay").classList.add("open");
  document.getElementById("detailPanel").classList.add("open");
}

function sendSMSReminder() {
  showToast("SMS reminder sent to " + (window._activeVendor || "vendor"));
}

function closeDetail() {
  document.getElementById("detailOverlay").classList.remove("open");
  document.getElementById("detailPanel").classList.remove("open");
  document
    .querySelectorAll(".stall.mine.active")
    .forEach((el) => el.classList.remove("active"));
}

document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeDetail();
});

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
document.addEventListener("DOMContentLoaded", () => {
  buildGroundFloor();
  buildSecondFloor();
});
