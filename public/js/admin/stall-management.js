/* ══ SIDEBAR & THEME ══ */
var SB_OPEN = window.innerWidth >= 768,
  DARK = false;
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
  var ico = document.getElementById("themeIcon");
  ico.innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ══ VIEW TABS ══ */
function setView(id, el) {
  document.getElementById("view-map").style.display =
    id === "map" ? "block" : "none";
  document.getElementById("view-posted").style.display =
    id === "posted" ? "block" : "none";
  document.querySelectorAll(".view-tab").forEach(function (t) {
    t.classList.remove("on");
  });
  if (el) el.classList.add("on");
  if (id === "posted") renderPostedGrid();
  closeDetail();
}

/* ══ FLOOR TABS ══ */
function setFloor(id, el) {
  document.getElementById("floor-gf").style.display =
    id === "gf" ? "block" : "none";
  document.getElementById("floor-sf").style.display =
    id === "sf" ? "block" : "none";
  document.querySelectorAll(".floor-tab").forEach(function (t) {
    t.classList.remove("on");
  });
  if (el) el.classList.add("on");
  closeDetail();
}

/* ══ STALL CELL BUILDER ══ */
function sc(id) {
  var s = STALLS[id];
  if (!s) {
    var num = id.split("-").pop();
    return (
      '<div class="stall vacant tt" data-tip="Stall ' +
      num +
      ' — Unknown" onclick="openDetail(\'' +
      id +
      "')\">" +
      "<span>" +
      num +
      "</span></div>"
    );
  }
  var cls;
  if (s.status === "vacant") {
    cls = s.posted ? "posted" : "vacant";
  } else {
    cls = s.status;
  }
  var dot =
    s.status === "overdue" || s.status === "partial"
      ? '<div class="stall-dot"></div>'
      : "";
  var postedDot =
    s.posted && s.status === "vacant" ? '<div class="posted-ring"></div>' : "";
  var tip =
    "Stall " +
    s.num +
    " — " +
    s.section +
    " — " +
    (s.vendor || "Vacant") +
    (s.posted ? " (Posted)" : "") +
    (s.status === "overdue" ? " — " + s.overdueDays + "d overdue" : "") +
    (s.status === "partial" ? " — Bal ₱" + s.balance : "");
  return (
    '<div class="stall ' +
    cls +
    ' tt" id="st-' +
    id +
    '" data-tip="' +
    tip +
    '" onclick="openDetail(\'' +
    id +
    "')\"><span>" +
    s.num +
    "</span>" +
    dot +
    postedDot +
    "</div>"
  );
}
function row(ids) {
  return '<div class="fp-row">' + ids.map(sc).join("") + "</div>";
}
function section(label, rows) {
  return (
    '<div class="fp-section"><div class="fp-sec-lbl">' +
    label +
    "</div>" +
    rows.join("") +
    "</div>"
  );
}
function room(label, w, h, extra) {
  return (
    '<div class="fp-room' +
    (extra || "") +
    '" style="width:' +
    w +
    "px;height:" +
    h +
    'px">' +
    label +
    "</div>"
  );
}

/* ══ BUILD GROUND FLOOR ══ */
function buildGroundFloor() {
  var gf = document.getElementById("gfPlan");
  gf.style.cssText = "display:flex;flex-direction:column;gap:14px";

  var r1 = document.createElement("div");
  r1.style.cssText =
    "display:flex;align-items:flex-start;gap:14px;flex-wrap:wrap";
  r1.innerHTML =
    '<div><div class="fp-sec-lbl" style="margin-bottom:5px">Eatery</div>' +
    '<div class="fp-row">' +
    sc("GF-EA-1") +
    sc("GF-EA-2") +
    "</div></div>" +
    room("Empty Space", 100, 56, " dashed") +
    section("Eatery Section (Stalls 3–10)", [
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
    room("Eatery<br/>Common Area", 220, 56, " dashed");
  gf.appendChild(r1);

  var r2 = document.createElement("div");
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

  var r3 = document.createElement("div");
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

  var r4 = document.createElement("div");
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

/* ══ BUILD SECOND FLOOR ══ */
function buildSecondFloor() {
  var sf = document.getElementById("sfPlan");
  sf.style.cssText = "display:flex;flex-direction:column;gap:14px";

  var r1 = document.createElement("div");
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

  var r2 = document.createElement("div");
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
    "</div>" +
    "</div>" +
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
    "</div>" +
    "</div>" +
    '<div style="display:flex;flex-direction:column;gap:6px;margin-left:auto">' +
    room("Stairs<br/>Elevator", 70, 56) +
    '<div class="fp-section"><div class="fp-sec-lbl">Special Purpose</div>' +
    row(["SF-SP-5", "SF-SP-6", "SF-SP-7", "SF-SP-8"]) +
    "</div></div>";
  sf.appendChild(r2);

  var r3 = document.createElement("div");
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
    "</div>" +
    "</div>" +
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
    "</div>" +
    "</div>" +
    '<div class="fp-section"><div class="fp-sec-lbl">Egg Section</div>' +
    '<div class="fp-row">' +
    sc("SF-EG-7") +
    room("WCR", 52, 52) +
    room("Utility<br/>Rm.", 52, 52) +
    room("MCR", 52, 52) +
    "</div>" +
    '<div class="fp-row" style="margin-top:4px"><div style="width:52px;height:52px"></div>' +
    room("WCR", 52, 52) +
    room("PWD CR", 52, 52) +
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
    "</div>" +
    "</div>";
  sf.appendChild(r3);
}

/* ══ DETAIL DRAWER ══ */
function openDetail(id) {
  var s = STALLS[id];
  var el = document.getElementById("st-" + id);
  document.querySelectorAll(".stall.active").forEach(function (e) {
    e.classList.remove("active");
  });
  if (el) el.classList.add("active");

  if (!s) {
    renderVacantDrawer(id, null);
    return;
  }
  if (!s.vendor) {
    renderVacantDrawer(id, s);
    return;
  }

  /* ── Occupied stall ── */
  document.getElementById("dpTitle").textContent =
    s.section + " Stall " + s.num;
  var heroBg = {
    paid: "linear-gradient(135deg,var(--grl),var(--s2))",
    overdue: "linear-gradient(135deg,var(--rdl),var(--s2))",
    partial: "linear-gradient(135deg,var(--aml),var(--s2))",
  };
  var heroColor = {
    paid: "var(--gr)",
    overdue: "var(--rd)",
    partial: "var(--am)",
  };
  var statusLbl = {
    paid: "Paid",
    overdue: "Overdue",
    partial: "Partial Payment",
  };
  var bdgCls = { paid: "gr", overdue: "rd", partial: "am" };
  var histHtml =
    s.history && s.history.length
      ? s.history
          .map(function (h) {
            return (
              '<div class="ph-item"><div><div style="font-size:12.5px;font-weight:600">' +
              h.month +
              '</div><div style="font-size:11px;color:var(--t3)">Paid ' +
              h.date +
              "</div></div>" +
              '<div style="text-align:right"><div style="font-size:13px;font-weight:700;font-family:DM Mono,monospace;color:var(--gr)">&#8369;' +
              h.amount.toLocaleString() +
              "</div>" +
              '<div style="font-size:11px;color:var(--t3)">' +
              h.method +
              " &bull; " +
              h.or +
              "</div></div></div>"
            );
          })
          .join("")
      : '<div style="padding:10px 0;text-align:center;color:var(--t3);font-size:13px">No payment history</div>';

  document.getElementById("dpBody").innerHTML =
    '<div class="stall-hero" style="background:' +
    (heroBg[s.status] || heroBg.paid) +
    '">' +
    '<div class="stall-hero-num" style="color:' +
    (heroColor[s.status] || heroColor.paid) +
    '">' +
    s.num +
    "</div>" +
    '<div class="stall-hero-meta">' +
    s.section +
    " &mdash; " +
    s.type +
    "</div>" +
    '<div style="margin-top:6px"><span class="bdg ' +
    (bdgCls[s.status] || "gr") +
    '">' +
    (statusLbl[s.status] || s.status) +
    "</span></div></div>" +
    '<div class="d-sec"><div class="d-sec-lbl">Vendor</div>' +
    '<div style="display:flex;align-items:center;gap:10px;padding:10px 0">' +
    '<div style="width:38px;height:38px;border-radius:50%;background:linear-gradient(' +
    s.grad +
    ');display:grid;place-items:center;color:#fff;font-size:13px;font-weight:700;flex-shrink:0">' +
    s.init +
    "</div>" +
    '<div><div style="font-size:13.5px;font-weight:700">' +
    s.vendor +
    "</div>" +
    '<div style="font-size:11.5px;color:var(--t3)">' +
    s.vendorId +
    " &bull; Expires " +
    s.contractExp +
    "</div></div>" +
    "</div></div>" +
    '<div class="d-sec"><div class="d-sec-lbl">Stall Details</div>' +
    '<div class="d-row"><span class="d-lbl">Floor</span><span class="d-val">' +
    (s.floor === "GF" ? "Ground Floor" : "Second Floor") +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Section</span><span class="d-val">' +
    s.section +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Type</span><span class="d-val">' +
    s.type +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Monthly Rate</span><span class="d-val mono gr">&#8369;' +
    s.rate.toLocaleString() +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Last Paid</span><span class="d-val">' +
    s.lastPaid +
    "</span></div>" +
    (s.balance > 0
      ? '<div class="d-row"><span class="d-lbl">Balance Due</span><span class="d-val rd mono">&#8369;' +
        s.balance.toLocaleString() +
        "</span></div>"
      : "") +
    (s.overdueDays > 0
      ? '<div class="d-row"><span class="d-lbl">Days Overdue</span><span class="d-val rd">' +
        s.overdueDays +
        " days</span></div>"
      : "") +
    "</div>" +
    '<div class="d-sec"><div class="d-sec-lbl">Payment History</div>' +
    histHtml +
    "</div>";

  document.getElementById("dpFoot").innerHTML =
    '<button class="btn gh" style="flex:1" onclick="sendSMSReminder(\'' +
    id +
    "')\">" +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="13" height="13"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/><path d="M11 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/></svg>SMS Reminder</button>' +
    '<button class="btn pri sm" onclick="editStall(\'' +
    id +
    "')\">" +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg>Edit</button>';

  document.getElementById("detailOverlay").classList.add("open");
  document.getElementById("detailPanel").classList.add("open");
}

/* ── Vacant stall drawer with listing form ── */
function renderVacantDrawer(id, s) {
  var num = s ? s.num : id.split("-").pop();
  var sec = s ? s.section : "Unknown";
  var floor = s ? (s.floor === "GF" ? "Ground Floor" : "Second Floor") : "--";
  var type = s ? s.type : "--";
  var baseRate = s ? s.rate : 0;
  var isPosted = s && s.posted;
  var li = STALL_LISTINGS[id] || {};

  document.getElementById("dpTitle").textContent = sec + " Stall " + num;

  var postedBanner = isPosted
    ? '<div class="posted-card" style="margin-bottom:14px">' +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
      "<p>This stall is publicly posted and open for applications.</p></div>"
    : "";

  document.getElementById("dpBody").innerHTML =
    '<div class="stall-hero" style="background:linear-gradient(135deg,var(--s2),var(--s3))">' +
    '<div class="stall-hero-num" style="color:var(--t3)">' +
    num +
    "</div>" +
    '<div class="stall-hero-meta">' +
    sec +
    " &mdash; " +
    type +
    "</div>" +
    '<div style="margin-top:6px"><span class="bdg gy">Vacant</span>' +
    (isPosted ? '&nbsp;<span class="bdg ac">Posted</span>' : "") +
    "</div></div>" +
    postedBanner +
    '<div class="d-sec"><div class="d-sec-lbl">Stall Info</div>' +
    '<div class="d-row"><span class="d-lbl">Floor</span><span class="d-val">' +
    floor +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Section</span><span class="d-val">' +
    sec +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Type</span><span class="d-val">' +
    type +
    "</span></div>" +
    '<div class="d-row"><span class="d-lbl">Base Rate</span><span class="d-val mono gr">&#8369;' +
    baseRate.toLocaleString() +
    "</span></div>" +
    "</div>" +
    '<div class="dp-form-sec"><div class="dp-form-sec-lbl">Listing Details &mdash; Fill before posting</div>' +
    '<div class="fg"><label>Stall Photo</label>' +
    '<div class="img-upload-zone" id="imgZone-' +
    id +
    '">' +
    '<img class="img-preview' +
    (li.imgSrc ? " show" : "") +
    '" id="imgPrev-' +
    id +
    '" src="' +
    (li.imgSrc || "") +
    '" alt=""/>' +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" id="imgIco-' +
    id +
    '" style="' +
    (li.imgSrc ? "display:none" : "") +
    '"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>' +
    '<span id="imgLbl-' +
    id +
    '" style="' +
    (li.imgSrc ? "display:none" : "") +
    '">Click or drag to upload stall photo</span>' +
    '<input type="file" accept="image/*" onchange="previewImg(event,\'' +
    id +
    "')\">" +
    '<button class="img-clear' +
    (li.imgSrc ? " show" : "") +
    '" id="imgClr-' +
    id +
    '" onclick="clearImg(event,\'' +
    id +
    "')\">" +
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>' +
    "</button></div></div>" +
    '<div class="fg"><label>Description</label>' +
    '<textarea class="finp" id="lDesc-' +
    id +
    '" placeholder="Describe the stall — location highlights, suitability, features...">' +
    (li.description || "") +
    "</textarea></div>" +
    '<div class="frow">' +
    '<div class="fg"><label>Size</label><input class="finp" id="lSize-' +
    id +
    '" placeholder="e.g. 3 x 3 m" value="' +
    (li.size || "") +
    '"/></div>' +
    '<div class="fg"><label>Monthly Price (PHP)</label><input class="finp" id="lPrice-' +
    id +
    '" type="number" placeholder="e.g. 1200" value="' +
    (li.price || baseRate || "") +
    '"/></div>' +
    "</div></div>";

  var footHtml;
  if (isPosted) {
    footHtml =
      '<button class="btn rd" style="flex:1" onclick="unpostStall(\'' +
      id +
      "')\">" +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Remove from Posting</button>' +
      '<button class="btn gh sm" onclick="viewApplications(\'' +
      id +
      "')\">" +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>View Applicants</button>';
  } else {
    footHtml =
      '<button class="btn post" style="flex:1" onclick="saveAndPost(\'' +
      id +
      "')\">" +
      '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
      "Post Publicly</button>";
  }
  document.getElementById("dpFoot").innerHTML = footHtml;
  document.getElementById("detailOverlay").classList.add("open");
  document.getElementById("detailPanel").classList.add("open");
}

function closeDetail() {
  document.getElementById("detailOverlay").classList.remove("open");
  document.getElementById("detailPanel").classList.remove("open");
  document.querySelectorAll(".stall.active").forEach(function (e) {
    e.classList.remove("active");
  });
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") closeDetail();
});

/* ══ IMAGE UPLOAD ══ */
function previewImg(evt, id) {
  var file = evt.target.files[0];
  if (!file) return;
  var reader = new FileReader();
  reader.onload = function (e) {
    var prev = document.getElementById("imgPrev-" + id),
      ico = document.getElementById("imgIco-" + id),
      lbl = document.getElementById("imgLbl-" + id),
      clr = document.getElementById("imgClr-" + id),
      zone = document.getElementById("imgZone-" + id);
    if (prev) {
      prev.src = e.target.result;
      prev.classList.add("show");
    }
    if (ico) ico.style.display = "none";
    if (lbl) lbl.style.display = "none";
    if (clr) clr.classList.add("show");
    if (zone) zone.classList.add("has-img");
    if (!STALL_LISTINGS[id]) STALL_LISTINGS[id] = {};
    STALL_LISTINGS[id].imgSrc = e.target.result;
  };
  reader.readAsDataURL(file);
}
function clearImg(evt, id) {
  evt.stopPropagation();
  var prev = document.getElementById("imgPrev-" + id),
    ico = document.getElementById("imgIco-" + id),
    lbl = document.getElementById("imgLbl-" + id),
    clr = document.getElementById("imgClr-" + id),
    zone = document.getElementById("imgZone-" + id);
  if (prev) {
    prev.src = "";
    prev.classList.remove("show");
  }
  if (ico) ico.style.display = "";
  if (lbl) lbl.style.display = "";
  if (clr) clr.classList.remove("show");
  if (zone) zone.classList.remove("has-img");
  if (STALL_LISTINGS[id]) STALL_LISTINGS[id].imgSrc = "";
}

/* ══ SAVE & POST ══ */
function saveAndPost(id) {
  var desc = (document.getElementById("lDesc-" + id) || {}).value || "";
  var size = (document.getElementById("lSize-" + id) || {}).value || "";
  var price = parseInt(
    (document.getElementById("lPrice-" + id) || {}).value || 0,
    10
  );
  if (!desc.trim()) {
    showToast("Please add a description before posting");
    return;
  }
  if (!size.trim()) {
    showToast("Please enter the stall size before posting");
    return;
  }
  if (!price) {
    showToast("Please enter the monthly price before posting");
    return;
  }

  if (!STALL_LISTINGS[id]) STALL_LISTINGS[id] = {};
  STALL_LISTINGS[id].description = desc.trim();
  STALL_LISTINGS[id].size = size.trim();
  STALL_LISTINGS[id].price = price;
  STALL_LISTINGS[id].postedDate = (function () {
    var d = new Date(),
      mo = [
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
      ][d.getMonth()];
    return mo + " " + d.getDate() + ", " + d.getFullYear();
  })();
  var parts = size.match(/(\d+)\s*[xX]\s*(\d+)/);
  if (parts)
    STALL_LISTINGS[id].sizeLabel =
      parseInt(parts[1]) * parseInt(parts[2]) + " sq.m.";

  var sectionColors = {
    Eatery: ["#fef9c3", "#ca8a04"],
    RTW: ["#dbeafe", "#1d4ed8"],
    Service: ["#f0fdf4", "#16a34a"],
    Misc: ["#fff1f2", "#e11d48"],
    Ukay: ["#fef9c3", "#ca8a04"],
    Veggie: ["#f0fdf4", "#16a34a"],
    Fruit: ["#dcfce7", "#22c55e"],
    Egg: ["#fffbeb", "#f59e0b"],
    Special: ["#e0f2fe", "#0284c7"],
    Footwear: ["#faf5ff", "#9333ea"],
  };
  var s = STALLS[id],
    sc_ = s ? sectionColors[s.section] : null;
  if (sc_ && !STALL_LISTINGS[id].imgSrc) {
    STALL_LISTINGS[id].imgColor = sc_[0];
    STALL_LISTINGS[id].imgAccent = sc_[1];
  }

  postStall(id);
}

function postStall(id) {
  var s = STALLS[id],
    num = s ? s.num : id.split("-").pop();
  if (s) {
    s.posted = true;
    s.status = "vacant";
  }
  closeDetail();
  updatePostedCount();
  var el = document.getElementById("st-" + id);
  if (el && s) {
    el.className = "stall posted tt";
    el.setAttribute(
      "data-tip",
      "Stall " + num + " — " + s.section + " — Vacant (Posted)"
    );
    el.innerHTML = "<span>" + num + '</span><div class="posted-ring"></div>';
  }
  showToast("Stall #" + num + " is now publicly posted");
}

function unpostStall(id) {
  var s = STALLS[id],
    num = s ? s.num : id.split("-").pop();
  if (s) s.posted = false;
  closeDetail();
  updatePostedCount();
  var el = document.getElementById("st-" + id);
  if (el && s) {
    el.className = "stall vacant tt";
    el.setAttribute(
      "data-tip",
      "Stall " + num + " — " + s.section + " — Vacant"
    );
    el.innerHTML = "<span>" + num + "</span>";
  }
  if (document.getElementById("view-posted").style.display !== "none")
    renderPostedGrid();
  showToast("Stall #" + num + " removed from public posting");
}

/* ══ POSTED COUNT ══ */
function updatePostedCount() {
  var n = Object.values(STALLS).filter(function (s) {
    return s.posted;
  }).length;
  var el = document.getElementById("postedTabCount");
  if (el) el.textContent = n || "";
}

/* ══ POSTED GRID ══ */
function renderPostedGrid() {
  var grid = document.getElementById("postedGrid");
  if (!grid) return;
  var posted = Object.keys(STALLS).filter(function (id) {
    return STALLS[id].posted;
  });
  updatePostedCount();
  if (!posted.length) {
    grid.innerHTML =
      '<div class="post-empty"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 2L11 13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>' +
      "<p>No stalls posted yet</p><span>Go to Stall Map, click a vacant stall, fill in the details, and press Post Publicly.</span></div>";
    return;
  }
  grid.innerHTML = posted
    .map(function (id) {
      var s = STALLS[id],
        li = STALL_LISTINGS[id] || {};
      var floor = s.floor === "GF" ? "Ground Floor" : "Second Floor";
      var imgHtml = li.imgSrc
        ? '<img class="pc-img" src="' +
          li.imgSrc +
          '" alt="Stall #' +
          s.num +
          '">'
        : '<div class="pc-img-ph" style="background:linear-gradient(135deg,' +
          (li.imgColor || "#f0f2f8") +
          "," +
          (li.imgColor || "#f0f2f8") +
          'cc)">' +
          '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="' +
          (li.imgAccent || "#1d4ed8") +
          '" stroke-width="1.5" style="width:44px;height:44px;opacity:.45"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>' +
          '<span style="font-size:12px;font-weight:700;color:' +
          (li.imgAccent || "#1d4ed8") +
          ';opacity:.7">Stall #' +
          s.num +
          "</span></div>";
      var price = li.price || s.rate,
        size = li.size || "3 x 3 m",
        sizeL = li.sizeLabel || "9 sq.m.",
        desc =
          li.description ||
          "Available stall space in the " + s.section + " section.",
        posted_ = li.postedDate || "Recently";
      return (
        '<div class="post-card">' +
        imgHtml +
        '<div class="pc-body"><div class="pc-top">' +
        '<div><div class="pc-num">#' +
        s.num +
        '</div><div class="pc-sec">' +
        s.section +
        " &mdash; " +
        s.type +
        "</div></div>" +
        '<div><div class="pc-price-val">&#8369;' +
        price.toLocaleString() +
        '</div><div class="pc-price-lbl">/month</div></div>' +
        "</div>" +
        '<div class="pc-desc">' +
        desc +
        "</div>" +
        '<div class="pc-meta">' +
        '<div class="pcm-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><strong>Location:</strong> ' +
        floor +
        ", " +
        s.section +
        " Section</div>" +
        '<div class="pcm-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg><strong>Size:</strong> ' +
        size +
        " (" +
        sizeL +
        ")</div>" +
        '<div class="pcm-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg><strong>Posted:</strong> ' +
        posted_ +
        "</div>" +
        "</div>" +
        '<div class="pc-foot">' +
        '<button class="btn gh sm" style="flex:1" onclick="unpublishFromGrid(\'' +
        id +
        "')\">" +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>Unpublish</button>' +
        '<button class="btn pri sm" onclick="viewApplications(\'' +
        id +
        "')\">" +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/></svg>Applicants</button>' +
        "</div></div></div>"
      );
    })
    .join("");
}

function unpublishFromGrid(id) {
  unpostStall(id);
  renderPostedGrid();
}

/* ══ ACTIONS ══ */
function editStall(id) {
  var s = STALLS[id];
  showToast("Opening edit for Stall #" + (s ? s.num : id) + " ...");
}
function viewApplications(id) {
  var s = STALLS[id];
  showToast("Opening applications for Stall #" + (s ? s.num : id) + " ...");
}
function sendSMSReminder(id) {
  var s = STALLS[id];
  if (s && s.vendor) showToast("SMS sent to " + s.vendor);
}

/* ══ TOAST ══ */
var toastTimer = null;
function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    t.classList.remove("show");
  }, 2800);
}

/* ══ INIT ══ */
buildGroundFloor();
buildSecondFloor();
