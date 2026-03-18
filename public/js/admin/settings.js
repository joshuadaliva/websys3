var SB_OPEN = window.innerWidth >= 768;
var DARK = false;

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

function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
  var ico = document.getElementById("themeIco");
  ico.innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

function setTab(id, el) {
  document.querySelectorAll(".settings-panel").forEach(function (p) {
    p.classList.remove("on");
  });
  document.querySelectorAll(".sn-item").forEach(function (i) {
    i.classList.remove("on");
  });
  var panel = document.getElementById("tab-" + id);
  if (panel) panel.classList.add("on");
  if (el) el.classList.add("on");
  if (id !== "payment") clearPM();
}

var activePM = null;
var PM_CFGS = ["cfg-cash", "cfg-bank", "cfg-gcash", "cfg-maya"];

function selectPM(card) {
  var pm = card.getAttribute("data-pm");
  if (activePM === pm) {
    clearPM();
    return;
  }
  activePM = pm;
  document.querySelectorAll(".pm-card").forEach(function (c) {
    c.classList.remove("sel");
  });
  card.classList.add("sel");
  PM_CFGS.forEach(function (id) {
    document.getElementById(id).style.display = "none";
  });
  var target = document.getElementById("cfg-" + pm);
  if (target) {
    target.style.display = "";
    target.classList.remove("fade-in");
    void target.offsetWidth;
    target.classList.add("fade-in");
    setTimeout(function () {
      target.scrollIntoView({ behavior: "smooth", block: "nearest" });
    }, 60);
  }
}

function clearPM() {
  activePM = null;
  document.querySelectorAll(".pm-card").forEach(function (c) {
    c.classList.remove("sel");
  });
  PM_CFGS.forEach(function (id) {
    document.getElementById(id).style.display = "none";
  });
}

/* ── MODAL ── */
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
}
document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    document.querySelectorAll(".modal-bg.open").forEach(function (m) {
      m.classList.remove("open");
    });
  }
});

/* ── RATE TABLE DATA ── */
var RATES = [
  {
    type: "Dry Goods",
    size: "3x3",
    rate: 1200,
    status: "active",
    desc: "",
    zone: "Section B",
    date: "",
  },
  {
    type: "Vegetables",
    size: "4x3",
    rate: 1000,
    status: "active",
    desc: "",
    zone: "Section C",
    date: "",
  },
  {
    type: "Meat / Fish",
    size: "3x4",
    rate: 1400,
    status: "active",
    desc: "",
    zone: "Section A",
    date: "",
  },
  {
    type: "General",
    size: "4x4",
    rate: 1500,
    status: "active",
    desc: "",
    zone: "Section E",
    date: "",
  },
  {
    type: "Kiosk",
    size: "2x2",
    rate: 600,
    status: "draft",
    desc: "",
    zone: "Section D",
    date: "",
  },
];
var editingIdx = -1;

function renderRateTable() {
  var tbody = document.getElementById("rateTableBody");
  if (!tbody) return;
  var scMap = { active: "ac", draft: "am", inactive: "rd" };
  var stMap = { active: "gr", draft: "am", inactive: "rd" };
  var stTxt = { active: "Active", draft: "Draft", inactive: "Inactive" };
  tbody.innerHTML = RATES.map(function (r, i) {
    return (
      "<tr>" +
      '<td><span class="bdg ' +
      (scMap[r.status] || "am") +
      '">' +
      r.type +
      "</span></td>" +
      '<td style="font-family:DM Mono,monospace;font-size:12px">' +
      r.size +
      " m</td>" +
      '<td style="font-family:DM Mono,monospace;font-weight:700;color:var(--gr)">P' +
      Number(r.rate).toLocaleString() +
      ".00</td>" +
      '<td><span class="bdg ' +
      (stMap[r.status] || "am") +
      '">' +
      (stTxt[r.status] || r.status) +
      "</span></td>" +
      '<td><button class="btn gh xs" onclick="openEditRate(' +
      i +
      ')">Edit</button></td>' +
      "</tr>"
    );
  }).join("");
}

function openEditRate(idx) {
  var r = RATES[idx];
  if (!r) return;
  editingIdx = idx;
  document.getElementById("er-type").value = r.type;
  document.getElementById("er-size").value = r.size;
  document.getElementById("er-rate").value = r.rate;
  document.getElementById("er-status").value = r.status;
  document.getElementById("er-desc").value = r.desc || "";
  document.getElementById("er-zone").value = r.zone || "";
  document.getElementById("er-date").value = r.date || "";
  openModal("editRateModal");
}

function saveRate() {
  if (editingIdx < 0) return;
  var r = RATES[editingIdx];
  r.type = document.getElementById("er-type").value.trim() || r.type;
  r.size = document.getElementById("er-size").value.trim() || r.size;
  r.rate = parseFloat(document.getElementById("er-rate").value) || r.rate;
  r.status = document.getElementById("er-status").value;
  r.desc = document.getElementById("er-desc").value.trim();
  r.zone = document.getElementById("er-zone").value.trim();
  r.date = document.getElementById("er-date").value;
  closeModal("editRateModal");
  renderRateTable();
  showToast("Rate for " + r.type + " updated");
}

function openAddRate() {
  document.getElementById("ar-type").value = "";
  document.getElementById("ar-size").value = "";
  document.getElementById("ar-rate").value = "";
  document.getElementById("ar-status").value = "draft";
  document.getElementById("ar-desc").value = "";
  document.getElementById("ar-zone").value = "";
  document.getElementById("ar-date").value = "";
  openModal("addRateModal");
}

function addRate() {
  var type = document.getElementById("ar-type").value.trim();
  if (!type) {
    showToast("Please enter a stall type");
    return;
  }
  RATES.push({
    type: type,
    size: document.getElementById("ar-size").value.trim() || "?",
    rate: parseFloat(document.getElementById("ar-rate").value) || 0,
    status: document.getElementById("ar-status").value,
    desc: document.getElementById("ar-desc").value.trim(),
    zone: document.getElementById("ar-zone").value.trim(),
    date: document.getElementById("ar-date").value,
  });
  closeModal("addRateModal");
  renderRateTable();
  showToast(type + " rate added");
}

/* ── TOAST ── */
var toastTimer = null;
function showToast(msg) {
  var t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(function () {
    t.classList.remove("show");
  }, 2500);
}
