/* ──────────── DATA ──────────── */
const stalls = [
  {
    id: 0,
    num: "#06",
    type: "Dry Goods",
    typeClass: "dry",
    section: "Section B · Row 1",
    size: "3×3 m²",
    rate: "₱1,200",
    deadline: "March 20, 2026",
    daysLeft: 12,
    applied: 7,
    qualified: 3,
    raffle: 3,
    rejected: 1,
    desc: "A 3×3 m² dry goods stall ideal for general merchandise, clothing, and household goods.",
    pipeline: [
      { label: "Submitted", count: 7, state: "done" },
      { label: "Pre-screened", count: 6, state: "done" },
      { label: "Docs Pending", count: 2, state: "active" },
      { label: "Docs Review", count: 1, state: "" },
      { label: "Qualified", count: 3, state: "done" },
      { label: "For Raffle", count: 3, state: "raffle" },
      { label: "Awardee", count: 0, state: "" },
    ],
    applicants: [
      {
        name: "Carla M. Bautista",
        init: "CB",
        grad: "135deg,#3b82f6,#6366f1",
        phone: "+63 912 345 6789",
        email: "carla.bautista@email.com",
        addr: "Brgy. Doon, Arkipaisi",
        date: "Mar 8 · 09:45 AM",
        pre: "Docs Submitted",
        status: "b-submitted",
        statusTxt: "Locked",
        docs: 3,
      },
      {
        name: "Ramon A. Flores",
        init: "RF",
        grad: "135deg,#0891b2,#0284c7",
        phone: "+63 915 111 2222",
        email: "ramon.flores@email.com",
        addr: "Brgy. Silangan, Arkipaisi",
        date: "Mar 5 · 04:15 PM",
        pre: "Passed",
        status: "b-qualified",
        statusTxt: "Qualified",
        docs: 5,
      },
      {
        name: "Juan Dela Cruz",
        init: "JD",
        grad: "135deg,#db2777,#9333ea",
        phone: "+63 919 777 8888",
        email: "juan.delacruz@email.com",
        addr: "Brgy. Norte, Arkipaisi",
        date: "Mar 3 · 10:20 AM",
        pre: "Failed",
        status: "b-submitted",
        statusTxt: "Locked",
        docs: 2,
      },
      {
        name: "Ana M. Reyes",
        init: "AR",
        grad: "135deg,#16a34a,#0891b2",
        phone: "+63 917 444 5566",
        email: "ana.reyes@email.com",
        addr: "Brgy. Sur, Arkipaisi",
        date: "Mar 2 · 11:00 AM",
        pre: "Passed",
        status: "b-submitted",
        statusTxt: "Locked",
        docs: 5,
      },
      {
        name: "Diego T. Mercado",
        init: "DM",
        grad: "135deg,#6b7280,#4b5563",
        phone: "+63 916 555 6666",
        email: "diego.mercado@email.com",
        addr: "Brgy. Bayan, Arkipaisi",
        date: "Mar 2 · 11:00 AM",
        pre: "Passed",
        status: "b-rejected",
        statusTxt: "Failed",
        docs: 5,
      },
    ],
  },
  {
    id: 1,
    num: "#11",
    type: "Vegetables",
    typeClass: "veggie",
    section: "Section C · Row 2",
    size: "4×3 m²",
    rate: "₱1,000",
    deadline: "March 22, 2026",
    daysLeft: 14,
    applied: 5,
    qualified: 2,
    raffle: 0,
    rejected: 1,
    desc: "Fresh produce and vegetable stall in the heart of the produce section.",
    pipeline: [
      { label: "Submitted", count: 5, state: "done" },
      { label: "Pre-screened", count: 4, state: "done" },
      { label: "Docs Pending", count: 1, state: "active" },
      { label: "Docs Review", count: 2, state: "" },
      { label: "Qualified", count: 2, state: "done" },
      { label: "For Raffle", count: 0, state: "" },
      { label: "Awardee", count: 0, state: "" },
    ],
    applicants: [
      {
        name: "Luis T. Villanueva",
        init: "LV",
        grad: "135deg,#d97706,#f59e0b",
        phone: "+63 917 234 5678",
        email: "luis.v@email.com",
        addr: "Brgy. Ibayo, Arkipaisi",
        date: "Mar 7 · 02:10 PM",
        pre: "Docs Submitted",
        status: "b-doc-pending",
        statusTxt: "Docs Pending",
        docs: 2,
      },
      {
        name: "Grace P. Cruz",
        init: "GC",
        grad: "135deg,#16a34a,#15803d",
        phone: "+63 918 333 4444",
        email: "grace.c@email.com",
        addr: "Brgy. Tulay, Arkipaisi",
        date: "Mar 8 · 07:50 AM",
        pre: "Docs Submitted",
        status: "b-qualified",
        statusTxt: "Qualified",
        docs: 5,
      },
      {
        name: "Nena E. Estrada",
        init: "NE",
        grad: "135deg,#7c3aed,#db2777",
        phone: "+63 920 876 5432",
        email: "nena.e@email.com",
        addr: "Brgy. Centro, Arkipaisi",
        date: "Mar 6 · 11:30 AM",
        pre: "Docs Submitted",
        status: "b-qualified",
        statusTxt: "Qualified",
        docs: 5,
      },
      {
        name: "Pablo L. Santos",
        init: "PS",
        grad: "135deg,#0f766e,#0891b2",
        phone: "+63 911 000 1111",
        email: "pablo.s@email.com",
        addr: "Brgy. Kanluran, Arkipaisi",
        date: "Mar 5 · 09:00 AM",
        pre: "Docs Submitted",
        status: "b-rejected",
        statusTxt: "Rejected",
        docs: 0,
      },
    ],
  },
  {
    id: 2,
    num: "#22",
    type: "General",
    typeClass: "general",
    section: "Section E · Row 1",
    size: "4×4 m²",
    rate: "₱1,500",
    deadline: "March 25, 2026",
    daysLeft: 17,
    applied: 9,
    qualified: 4,
    raffle: 0,
    rejected: 2,
    desc: "Spacious corner stall near the east entrance.",
    pipeline: [
      { label: "Submitted", count: 9, state: "done" },
      { label: "Pre-screened", count: 7, state: "done" },
      { label: "Docs Pending", count: 0, state: "" },
      { label: "Docs Review", count: 3, state: "active" },
      { label: "Qualified", count: 4, state: "done" },
      { label: "For Raffle", count: 0, state: "" },
      { label: "Awardee", count: 0, state: "" },
    ],
    applicants: [
      {
        name: "Rosa P. Magno",
        init: "RM",
        grad: "135deg,#ec4899,#a855f7",
        phone: "+63 910 222 3333",
        email: "rosa.m@email.com",
        addr: "Brgy. Bagong, Arkipaisi",
        date: "Feb 28 · 10:00 AM",
        pre: "Docs Submitted",
        status: "b-qualified",
        statusTxt: "Qualified",
        docs: 5,
      },
      {
        name: "Efren G. Bohol",
        init: "EB",
        grad: "135deg,#f59e0b,#ef4444",
        phone: "+63 921 444 5555",
        email: "efren.b@email.com",
        addr: "Brgy. Luma, Arkipaisi",
        date: "Mar 1 · 01:30 PM",
        pre: "Docs Submitted",
        status: "b-submitted",
        statusTxt: "Locked",
        docs: 4,
      },
      {
        name: "Carla Santos",
        init: "CS",
        grad: "135deg,#06b6d4,#3b82f6",
        phone: "+63 923 666 7777",
        email: "carla.s@email.com",
        addr: "Brgy. Datag, Arkipaisi",
        date: "Mar 2 · 03:20 PM",
        pre: "Docs Submitted",
        status: "b-qualified",
        statusTxt: "Qualified",
        docs: 5,
      },
    ],
  },
  {
    id: 3,
    num: "#25",
    type: "General",
    typeClass: "general",
    section: "Section E · Row 2",
    size: "3×4 m²",
    rate: "₱1,100",
    deadline: "March 30, 2026",
    daysLeft: 22,
    applied: 3,
    qualified: 0,
    raffle: 0,
    rejected: 0,
    desc: "Recently renovated general stall with improved ventilation.",
    pipeline: [
      { label: "Submitted", count: 3, state: "done" },
      { label: "Pre-screened", count: 2, state: "active" },
      { label: "Docs Pending", count: 0, state: "" },
      { label: "Docs Review", count: 0, state: "" },
      { label: "Qualified", count: 0, state: "" },
      { label: "For Raffle", count: 0, state: "" },
      { label: "Awardee", count: 0, state: "" },
    ],
    applicants: [
      {
        name: "Grace P. Cruz",
        init: "GC",
        grad: "135deg,#16a34a,#15803d",
        phone: "+63 918 333 4444",
        email: "grace.c@email.com",
        addr: "Brgy. Tulay, Arkipaisi",
        date: "Mar 8 · 07:50 AM",
        pre: "Docs Submitted",
        status: "b-submitted",
        statusTxt: "Submitted",
        docs: 0,
      },
      {
        name: "Mario T. Lim",
        init: "ML",
        grad: "135deg,#7c3aed,#3b82f6",
        phone: "+63 913 888 9999",
        email: "mario.l@email.com",
        addr: "Brgy. Puso, Arkipaisi",
        date: "Mar 7 · 06:00 PM",
        pre: "Docs Submitted",
        status: "b-submitted",
        statusTxt: "Submitted",
        docs: 0,
      },
    ],
  },
];


// Align sample pre-screen indicators for non-#06 stalls with qualification states.
stalls.forEach((stall, stallIdx) => {
  if (stallIdx === 0) return;
  stall.applicants.forEach((app) => {
    if (app.statusTxt === "Qualified" || app.statusTxt === "For Raffle") {
      app.pre = "Passed";
      return;
    }
    if (app.statusTxt === "Rejected" || app.statusTxt === "Failed") {
      app.pre = "Failed";
      return;
    }
    app.pre = "Docs Submitted";
  });
});

applyStoredApplicantStatuses();
window.addEventListener("storage", (event) => {
  if (event.key !== REVIEW_STATUS_STORAGE_KEY) return;
  applyStoredApplicantStatuses();
  if (!currentStall) return;
  renderDetailTable();
  if (selectedApplicantIdx !== null) selectApplicant(selectedApplicantIdx);
});

let currentStall = null;
let selectedApplicantIdx = null;
let pendingSendLinkConfirm = null;
let pendingRejectConfirm = null;
const REVIEW_STATUS_STORAGE_KEY = "application_review_status_map";

function applicantStorageKey(stallId, applicantName) {
  return `${stallId}::${applicantName}`;
}

function readReviewStatusMap() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_STATUS_STORAGE_KEY) || "{}");
  } catch (err) {
    return {};
  }
}

function writeReviewStatusMap(map) {
  localStorage.setItem(REVIEW_STATUS_STORAGE_KEY, JSON.stringify(map));
}

function persistApplicantStatus(stallId, applicant) {
  const map = readReviewStatusMap();
  map[applicantStorageKey(stallId, applicant.name)] = {
    pre: applicant.pre,
    status: applicant.status,
    statusTxt: applicant.statusTxt,
  };
  writeReviewStatusMap(map);
}

function applyStoredApplicantStatuses() {
  const map = readReviewStatusMap();
  stalls.forEach((stall) => {
    stall.applicants.forEach((applicant) => {
      const saved = map[applicantStorageKey(stall.id, applicant.name)];
      if (!saved) return;
      applicant.pre = saved.pre;
      applicant.status = saved.status;
      applicant.statusTxt = saved.statusTxt;
    });
  });
}

/* ──────────── SIDEBAR / THEME ──────────── */
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
let dark = false;
function toggleTheme() {
  dark = !dark;
  document.documentElement.classList.toggle("dark", dark);
  const i = document.getElementById("themeIcon");
  i.innerHTML = dark
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ──────────── STALL VIEW TOGGLE ──────────── */
function switchStallView(v) {
  document.getElementById("stallsGrid").style.display =
    v === "card" ? "grid" : "none";
  document.getElementById("stallListView").style.display =
    v === "list" ? "block" : "none";
  document.getElementById("vt-card").classList.toggle("active", v === "card");
  document.getElementById("vt-list").classList.toggle("active", v === "list");
}

/* ──────────── FILTER STALLS ──────────── */
function filterStalls(q) {
  const lower = q.toLowerCase();
  document.querySelectorAll("#stallsGrid .stall-card").forEach((c, i) => {
    const s = stalls[i];
    const match =
      s.num.toLowerCase().includes(lower) ||
      s.type.toLowerCase().includes(lower) ||
      s.section.toLowerCase().includes(lower);
    c.style.display = match ? "" : "none";
  });
}

/* ──────────── OPEN STALL DETAIL ──────────── */
function openStallDetail(idx) {
  currentStall = stalls[idx];
  selectedApplicantIdx = null;

  // Switch views
  document.getElementById("view-stalls").style.display = "none";
  document.getElementById("view-detail").style.display = "block";

  // Update navbar
  document.getElementById("navTitle").textContent =
    "Applications — " + currentStall.num;
  document.getElementById(
    "navCrumb"
  ).innerHTML = `<span>ARKIPAISI</span><span class="sep">›</span><span onclick="goBackToStalls()" style="cursor:pointer;color:var(--accent)">Applications</span><span class="sep">›</span><span>Stall ${currentStall.num}</span>`;

  // Render header
  const typeColors = {
    dry: "amber",
    veggie: "green",
    meat: "red",
    fish: "blue",
    wet: "teal",
    general: "purple",
  };
  const tc = typeColors[currentStall.typeClass] || "blue";
  document.getElementById("detailHeader").innerHTML = `
    <div class="dh-left">
      <div class="dh-stall-icon">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
      </div>
      <div>
        <div class="dh-stall-num">Stall ${currentStall.num}</div>
        <div class="dh-stall-name">${currentStall.type} — ${currentStall.section}</div>
        <div class="dh-meta">
          <div class="dh-meta-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>${currentStall.section}</div>
          <div class="dh-meta-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/></svg>${currentStall.size}</div>
          <div class="dh-meta-item"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>${currentStall.rate}/mo</div>
          <span class="sc-open-badge" style="font-size:10.5px">Open for Applications</span>
        </div>
      </div>
    </div>
    <div class="dh-right">
      <div class="dh-deadline-card">
        <div class="dh-deadline-label">Application Deadline</div>
        <div class="dh-deadline-date">${currentStall.deadline}</div>
        <div class="dh-deadline-days">${currentStall.daysLeft} days remaining</div>
      </div>
      <div class="dh-stats-row">
        <div class="dh-stat applied"><div class="dh-stat-val">${currentStall.applied}</div><div class="dh-stat-lbl">Applied</div></div>
        <div class="dh-stat qualified"><div class="dh-stat-val">${currentStall.qualified}</div><div class="dh-stat-lbl">Qualified</div></div>
        <div class="dh-stat raffle"><div class="dh-stat-val">${currentStall.raffle}</div><div class="dh-stat-lbl">Raffle</div></div>
        <div class="dh-stat rejected"><div class="dh-stat-val">${currentStall.rejected}</div><div class="dh-stat-lbl">Rejected</div></div>
      </div>
    </div>`;


  // Render table
  document.getElementById(
    "detailTableTitle"
  ).textContent = `Applications — Stall ${currentStall.num}`;
  document.getElementById(
    "detailTableInfo"
  ).textContent = `Showing ${currentStall.applicants.length} applications`;
  renderDetailTable();

  const dateFilterInput = document.getElementById("detailDateFilter");
  if (dateFilterInput && !dateFilterInput.value) {
    const today = new Date();
    const yyyy = today.getFullYear();
    const mm = String(today.getMonth() + 1).padStart(2, "0");
    const dd = String(today.getDate()).padStart(2, "0");
    dateFilterInput.value = `${yyyy}-${mm}-${dd}`;
  }

  // Reset profile panel
  document.getElementById(
    "profileBody"
  ).innerHTML = `<div class="empty-profile"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg><p>Click an applicant to view their profile</p></div>`;
  document.getElementById("timelinePanel").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetailTable() {
  if (!currentStall) return;
  const tbody = document.getElementById("detailTable");
  tbody.innerHTML = `<thead><tr><th style="width:32px"><div class="chk" onclick="this.classList.toggle('on')"></div></th><th>Applicant</th><th>Pre-screening</th><th>Qualification</th><th>Docs</th><th>Applied</th><th>Actions</th></tr></thead><tbody>${currentStall.applicants
    .map(
      (a, i) => `
    <tr onclick="selectApplicant(${i})" class="${
        selectedApplicantIdx === i ? "selected" : ""
      }">
      <td><div class="chk"></div></td>
      <td><div class="applicant-cell"><div class="app-av" style="background:linear-gradient(${
        a.grad
      })">${a.init}</div><div><div class="app-name">${
        a.name
      }</div><div class="app-date">${a.date}</div></div></div></td>
      <td><span class="badge ${
        a.pre === "Passed"
          ? "b-validated"
          : a.pre === "Failed"
          ? "b-rejected"
          : a.pre === "Under Review"
          ? "b-under-review"
          : a.pre === "Docs Submitted"
          ? "b-doc-submitted"
          : "b-submitted"
      }">${a.pre}</span></td>
      <td><span class="badge ${a.status}">${a.statusTxt}</span></td>
      <td style="font-family:'DM Mono',monospace;font-size:12px;color:${
        a.docs > 0 ? "var(--green)" : "var(--text-muted)"
      }">${a.docs}/5</td>
      <td style="font-size:11.5px;color:var(--text-muted)">${a.date
        .split("·")[0]
        .trim()}</td>
      <td>
        <div class="row-acts">
          <button class="btn primary xs" ${
            ["Qualified", "Rejected"].includes(a.statusTxt) ? "disabled" : ""
          } onclick="event.stopPropagation();openReviewPage(${i})">Review Application</button>
        </div>
      </td>
    </tr>`
    )
    .join("")}</tbody>`;
}

function openReviewPage(idx) {
  if (!currentStall) return;
  const applicant = currentStall.applicants[idx];
  if (!applicant) return;
  persistApplicantStatus(currentStall.id, applicant);
  const reviewUrl = `/admin/application-validation?stallId=${currentStall.id}&applicant=${encodeURIComponent(
    applicant.name
  )}`;
  window.open(reviewUrl, "_blank");
}

/* ──────────── SELECT APPLICANT ──────────── */
function selectApplicant(idx) {
  selectedApplicantIdx = idx;
  renderDetailTable();
  const a = currentStall.applicants[idx];

  // Profile card
  document.getElementById("profileBody").innerHTML = `
    <div class="profile-card" style="border:none;border-radius:0;box-shadow:none">
      <div class="profile-body">
        <div style="display:flex;align-items:center;gap:10px;margin-bottom:8px;">
          <div class="profile-av" style="background:linear-gradient(${a.grad});width:42px;height:42px;font-size:14px;">${a.init}</div>
          <div>
            <div class="profile-name">${a.name}</div>
            <div class="profile-sub">Applied for Stall ${currentStall.num} · ${
    currentStall.type
  }</div>
          </div>
        </div>
        <div class="profile-info-grid">
          <div class="pi-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07"/></svg><span class="pi-lbl">Phone</span><span class="pi-val">${
            a.phone
          }</span></div>
          <div class="pi-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg><span class="pi-lbl">Email</span><span class="pi-val">${
            a.email
          }</span></div>
          <div class="pi-row"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg><span class="pi-lbl">Address</span><span class="pi-val">${
            a.addr
          }</span></div>

        </div>

      </div>
    </div>`;

  // Timeline
  document.getElementById("timelinePanel").style.display = "block";
  const tl = [
    {
      c: "blue",
      txt: `<strong>Application submitted</strong> — pre-screening form`,
      t: "Today · 09:45 AM",
    },
    {
      c: "green",
      txt: `<strong>Pre-screening validated</strong> — by Admin Maria Torres`,
      t: "Today · 09:47 AM",
    },
    {
      c: "amber",
      txt: `<strong>Secure link sent</strong> — via SMS and Email, expires Mar 18`,
      t: "Today · 09:50 AM",
    },
    {
      c: "blue",
      txt: `<strong>Documents uploaded</strong> — ${a.docs} of 5 files submitted`,
      t: "Today · 10:05 AM",
    },
  ].slice(0, a.docs > 0 ? 4 : 2);
  document.getElementById("timelineBody").innerHTML = tl
    .map(
      (t) => `
    <div class="tl-item">
      <div class="tl-dot ${t.c}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/></svg></div>
      <div><div class="tl-text">${t.txt}</div><div class="tl-time">${t.t}</div></div>
    </div>`
    )
    .join("");
}

/* ──────────── BACK ──────────── */
function goBackToStalls() {
  document.getElementById("view-stalls").style.display = "block";
  document.getElementById("view-detail").style.display = "none";
  document.getElementById("navTitle").textContent = "Application Management";
  document.getElementById("navCrumb").innerHTML =
    '<span>ARKIPAISI</span><span class="sep">›</span><span>Applications</span>';
  currentStall = null;
  selectedApplicantIdx = null;
  currentReviewController = null;
  setRightTab("overview");
}

/* ──────────── MODALS ──────────── */
function openModal(id) {
  document.getElementById(id).classList.add("open");
}
function closeModal(id) {
  document.getElementById(id).classList.remove("open");
  if (id === "sendLinkModal") {
    pendingSendLinkConfirm = null;
    const successEl = document.getElementById("sendLinkSuccessMsg");
    if (successEl) successEl.style.display = "none";
  }
  if (id === "rejectModal") {
    pendingRejectConfirm = null;
    const rejectSuccessEl = document.getElementById("rejectSuccessMsg");
    if (rejectSuccessEl) rejectSuccessEl.style.display = "none";
  }
}
document.querySelectorAll(".modal-bg").forEach((b) =>
  b.addEventListener("click", function (e) {
    if (e.target === this) closeModal(this.id);
  })
);


const sendSecureLinkBtn = document.getElementById("sendSecureLinkBtn");
if (sendSecureLinkBtn) {
  sendSecureLinkBtn.addEventListener("click", () => {
    const successEl = document.getElementById("sendLinkSuccessMsg");
    if (successEl) successEl.style.display = "flex";

    const onConfirm = pendingSendLinkConfirm;
    pendingSendLinkConfirm = null;

    if (onConfirm) {
      setTimeout(() => {
        closeModal("sendLinkModal");
        onConfirm();
      }, 850);
      return;
    }

    setTimeout(() => {
      closeModal("sendLinkModal");
    }, 850);
  });
}

const confirmRejectBtn = document.getElementById("confirmRejectBtn");
if (confirmRejectBtn) {
  confirmRejectBtn.addEventListener("click", () => {
    const successEl = document.getElementById("rejectSuccessMsg");
    if (successEl) successEl.style.display = "flex";

    const onConfirm = pendingRejectConfirm;
    pendingRejectConfirm = null;

    setTimeout(() => {
      closeModal("rejectModal");
      if (onConfirm) onConfirm();
    }, 850);
  });
}

function openSendLinkModal(idx, onConfirm) {
  const hasIdx = idx !== undefined && idx !== null;
  const a = hasIdx && currentStall ? currentStall.applicants[idx] : null;
  if (a) {
    document.getElementById("linkName").value = a.name;
  } else if (selectedApplicantIdx !== null && currentStall) {
    document.getElementById("linkName").value = currentStall.applicants[selectedApplicantIdx].name;
  }

  pendingSendLinkConfirm = typeof onConfirm === "function" ? onConfirm : null;
  const successEl = document.getElementById("sendLinkSuccessMsg");
  if (successEl) successEl.style.display = "none";

  openModal("sendLinkModal");
}
function openRejectModal(name, onConfirm) {
  document.getElementById("rejectApplicantName").textContent =
    name || "this applicant";
  pendingRejectConfirm = typeof onConfirm === "function" ? onConfirm : null;
  const successEl = document.getElementById("rejectSuccessMsg");
  if (successEl) successEl.style.display = "none";
  openModal("rejectModal");
}
function openStatusModal(name) {
  document.getElementById("statusName").textContent = name;
  openModal("statusModal");
}
function selStatus(el) {
  document
    .querySelectorAll(".status-opt")
    .forEach((o) => o.classList.remove("sel"));
  el.classList.add("sel");
}

/* ──────────── RAFFLE ──────────── */
function openRaffleModal() {
  if (!currentStall) return;
  const qualified = currentStall.applicants.filter(
    (a) => a.statusTxt === "For Raffle" || a.statusTxt === "Qualified"
  );
  document.getElementById("raffleStallInfo").innerHTML = `
    <div class="rc-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg></div>
    <div><div class="rc-num">Stall ${currentStall.num} · ${currentStall.type}</div><div class="rc-info">${currentStall.section} · ${currentStall.size} · ${currentStall.rate}/mo</div></div>
    <span class="badge b-raffle" style="margin-left:auto">${qualified.length} Qualified</span>`;
  const drawApplicants =
    qualified.length > 0 ? qualified : currentStall.applicants.slice(0, 3);
  document.getElementById("raffleListEl").innerHTML = drawApplicants
    .map(
      (a, i) => `
    <div class="raffle-applicant" id="raf-${i}">
      <div class="ra-num" id="rnum-${i}">${i + 1}</div>
      <div class="ra-av" style="background:linear-gradient(${a.grad})">${
        a.init
      }</div>
      <div class="ra-name">${a.name}</div>
      <span class="ra-tag pending" id="rtag-${i}">Pending</span>
    </div>`
    )
    .join("");
  document.getElementById("raffleWinnerBox").style.display = "none";
  document.getElementById("raffleNote").style.display = "flex";
  const btn = document.getElementById("raffleBtn");
  btn.disabled = false;
  btn.style.background = "";
  btn.innerHTML = `<svg id="raffleBtnIcon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><path d="M8 14s1.5 2 4 2 4-2 4-2"/><line x1="9" y1="9" x2="9.01" y2="9"/><line x1="15" y1="9" x2="15.01" y2="9"/></svg>Draw Raffle Winner`;
  document.getElementById(
    "raffleFoot"
  ).innerHTML = `<button class="btn ghost sm" onclick="closeModal('raffleModal')">Cancel</button>`;
  openModal("raffleModal");
}

function conductRaffle() {
  const qualified = currentStall.applicants.filter(
    (a) => a.statusTxt === "For Raffle" || a.statusTxt === "Qualified"
  );
  const drawApplicants =
    qualified.length > 0 ? qualified : currentStall.applicants.slice(0, 3);
  const btn = document.getElementById("raffleBtn");
  btn.disabled = true;
  btn.innerHTML = `<svg class="spinning" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12a9 9 0 1 1-6.219-8.56"/></svg>Drawing winner...`;
  let count = 0;
  const total = 22;
  const interval = setInterval(() => {
    count++;
    const r = Math.floor(Math.random() * drawApplicants.length);
    drawApplicants.forEach((_, i) => {
      const el = document.getElementById("raf-" + i);
      if (el) el.classList.toggle("hl", i === r);
    });
    if (count >= total) {
      clearInterval(interval);
      const winIdx = Math.floor(Math.random() * drawApplicants.length);
      drawApplicants.forEach((_, i) => {
        const el = document.getElementById("raf-" + i);
        const numEl = document.getElementById("rnum-" + i);
        const tagEl = document.getElementById("rtag-" + i);
        if (!el) return;
        el.classList.remove("hl");
        if (i === winIdx) {
          el.classList.add("winner");
          numEl.className = "ra-num win";
          tagEl.className = "ra-tag win";
          tagEl.textContent = "🏆 WINNER";
        } else {
          tagEl.className = "ra-tag no";
          tagEl.textContent = "Not Selected";
        }
      });
      document.getElementById("raffleWinnerName").textContent =
        drawApplicants[winIdx].name;
      document.getElementById(
        "raffleWinnerStall"
      ).textContent = `Stall ${currentStall.num} · ${currentStall.type}`;
      document.getElementById("raffleWinnerBox").style.display = "block";
      document.getElementById("raffleNote").style.display = "none";
      btn.innerHTML = "✓ Winner Drawn";
      btn.style.background = "var(--green)";
      document.getElementById(
        "raffleFoot"
      ).innerHTML = `<button class="btn ghost sm" onclick="closeModal('raffleModal')">Close</button><button class="btn success sm"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>Award Stall to Winner</button>`;
    }
  }, 100);
}

async function scheduleRaffleDraw() {
  const stallId = document.getElementById('rfStallId').value.trim();
  const stallName = document.getElementById('rfStallName').value.trim();
  const drawDate = document.getElementById('rfDate').value;
  const drawTime = document.getElementById('rfTime').value;
  if (!drawDate || !drawTime) return alert('Please set draw date/time');
  await fetch('/admin/raffle/schedule', { method:'POST', headers:{'Content-Type':'application/json'}, body: JSON.stringify({ stallId, stallName, drawDate, drawTime }) });
  showToast('Raffle draw scheduled');
}

async function startScheduledRaffle() {
  await fetch('/admin/raffle/start', { method:'POST' });
  showToast('Raffle started. Applicant list locked.');
}

(function seedRaffleDate(){
  const d = new Date();
  const dd = `${d.getFullYear()}-${String(d.getMonth()+1).padStart(2,'0')}-${String(d.getDate()).padStart(2,'0')}`;
  const tt = `${String(d.getHours()).padStart(2,'0')}:${String(d.getMinutes()).padStart(2,'0')}`;
  const dateEl=document.getElementById('rfDate');
  const timeEl=document.getElementById('rfTime');
  if(dateEl) dateEl.value=dd;
  if(timeEl) timeEl.value=tt;
})();
