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
        status: "b-doc-submitted",
        statusTxt: "Docs Submitted",
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
        pre: "Docs Submitted",
        status: "b-raffle",
        statusTxt: "For Raffle",
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
        pre: "Docs Submitted",
        status: "b-raffle",
        statusTxt: "For Raffle",
        docs: 5,
      },
      {
        name: "Ana M. Reyes",
        init: "AR",
        grad: "135deg,#16a34a,#0891b2",
        phone: "+63 917 444 5566",
        email: "ana.reyes@email.com",
        addr: "Brgy. Sur, Arkipaisi",
        date: "Mar 2 · 11:00 AM",
        pre: "Docs Submitted",
        status: "b-qualified",
        statusTxt: "Qualified",
        docs: 5,
      },
      {
        name: "Diego T. Mercado",
        init: "DM",
        grad: "135deg,#6b7280,#4b5563",
        phone: "+63 916 555 6666",
        email: "diego.mercado@email.com",
        addr: "Brgy. Bayan, Arkipaisi",
        date: "Mar 4 · 01:00 PM",
        pre: "Docs Submitted",
        status: "b-rejected",
        statusTxt: "Rejected",
        docs: 0,
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
        status: "b-doc-submitted",
        statusTxt: "Docs Submitted",
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

let currentStall = null;
let selectedApplicantIdx = null;
let pendingSendLinkConfirm = null;
let pendingRejectConfirm = null;

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
  document.getElementById("docsPanel").style.display = "none";
  document.getElementById("timelinePanel").style.display = "none";
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDetailTable() {
  if (!currentStall) return;
  const tbody = document.getElementById("detailTable");
  tbody.innerHTML = `<thead><tr><th style="width:32px"><div class="chk" onclick="this.classList.toggle('on')"></div></th><th>Applicant</th><th>Pre-screening</th><th>Status</th><th>Docs</th><th>Applied</th><th>Actions</th></tr></thead><tbody>${currentStall.applicants
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
          : "b-doc-submitted"
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
          <div class="act-btn tt" data-tip="View" onclick="event.stopPropagation();selectApplicant(${i})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg></div>
        </div>
      </td>
    </tr>`
    )
    .join("")}</tbody>`;
}

/* ──────────── SELECT APPLICANT ──────────── */
function selectApplicant(idx) {
  selectedApplicantIdx = idx;
  renderDetailTable();
  const a = currentStall.applicants[idx];
  const docList = [
    {
      name: "Valid Government ID",
      type: "pdf",
      status: "ok",
      meta: "PhilHealth · 2.1MB",
    },
    {
      name: "Selfie with Valid ID",
      type: "img",
      status: "ok",
      meta: "JPEG · 1.4MB",
    },
    {
      name: "Application Form",
      type: "form",
      status: "pend",
      meta: "PDF · 0.8MB",
    },
    {
      name: "Business Permit",
      type: "miss",
      status: "miss",
      meta: "Not yet uploaded",
    },
    {
      name: "Barangay Clearance",
      type: "miss",
      status: "miss",
      meta: "Not yet uploaded",
    },
  ].slice(0, 5);

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

  // Docs panel
  document.getElementById("docsPanel").style.display = "block";
  const requiresReviewStart = a.statusTxt === "Docs Submitted";
  document.getElementById("docsBody").innerHTML = renderApplicationReviewCard();
  const reviewController = initApplicationReviewCard({
    lockStep1: requiresReviewStart,
    applicant: a,
    onApplicantUpdate: () => renderDetailTable(),
  });
  const reviewBtn = document.getElementById("docsReviewBtn");
  if (reviewBtn) {
    if (requiresReviewStart) {
      reviewBtn.textContent = "Review Application";
      reviewBtn.className = "btn primary sm";
      reviewBtn.disabled = false;
      reviewBtn.onclick = () => {
        a.pre = "Under Review";
        renderDetailTable();
        reviewBtn.textContent = "Under Review";
        reviewBtn.className = "btn ghost sm";
        reviewBtn.disabled = true;
        if (reviewController && reviewController.startStep1Review) {
          reviewController.startStep1Review();
        }
      };
    } else {
      reviewBtn.textContent = a.pre === "Passed" ? "Step 1 Passed" : "Under Review";
      reviewBtn.className = "btn ghost sm";
      reviewBtn.disabled = true;
      reviewBtn.onclick = null;
    }
  }

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

function renderApplicationReviewCard() {
  return `
    <div class="ar-card">
      <div class="ar-title">Application Review</div>
      <div id="ar-statusBanner" class="ar-banner ar-bpending">Waiting for identity verification</div>

      <div class="ar-section-header">
        <span class="ar-section-title">Step 1: Identity Verification (Pre-screening)</span>
        <span class="ar-section-badge ar-badge-pending" id="ar-step1-badge">0/2</span>
      </div>
      <div class="ar-progress-wrap">
        <div class="ar-progress-track">
          <div class="ar-progress-fill ar-fill-orange" id="ar-step1-bar" style="width:0%"></div>
        </div>
      </div>

      <div class="ar-item">
        <div class="ar-row">
          <div class="ar-left ar-clickable" id="ar-item-id" data-doc="id" data-url="https://upload.wikimedia.org/wikipedia/commons/6/62/UMID_EMV_sample.png">
            <div class="ar-icon ar-red">📄</div>
            <div><div class="ar-text">Valid Government ID</div><div class="ar-sub" id="ar-sub-id">Click to preview</div></div>
          </div>
          <div id="ar-status-id" class="ar-status ar-pending">Pending</div>
        </div>
      </div>

      <div class="ar-item">
        <div class="ar-row">
          <div class="ar-left ar-clickable" id="ar-item-selfie" data-doc="selfie" data-url="https://backycheck.com.au/assets/img/others/correct-image.jpg">
            <div class="ar-icon ar-blue">📷</div>
            <div><div class="ar-text">Selfie with ID</div><div class="ar-sub" id="ar-sub-selfie">Click to preview</div></div>
          </div>
          <div id="ar-status-selfie" class="ar-status ar-pending">Pending</div>
        </div>
      </div>

      <div class="ar-divider"></div>
      <div id="ar-step1Actions">
        <button id="ar-mainAction" class="ar-btn-disabled" disabled>Waiting for review</button>
      </div>

      <div class="ar-section-header">
        <span class="ar-section-title">Step 2: Qualification Documents</span>
        <span class="ar-section-badge ar-badge-locked" id="ar-step2-badge">Locked</span>
      </div>
      <div class="ar-progress-wrap">
        <div class="ar-progress-track">
          <div class="ar-progress-fill ar-fill-gray" id="ar-step2-bar" style="width:0%"></div>
        </div>
      </div>

      ${[
        ["form", "Application Form"],
        ["permit", "Business Permit"],
        ["clearance", "Barangay Clearance"],
      ]
        .map(
          ([key, label]) => `
      <div class="ar-item">
        <div class="ar-row">
          <div class="ar-left ar-disabled" id="ar-item-${key}" data-doc="${key}" data-url="https://via.placeholder.com/350x200">
            <div class="ar-icon ar-gray">📄</div>
            <div><div class="ar-text">${label}</div><div class="ar-sub" id="ar-sub-${key}">Locked</div></div>
          </div>
          <div id="ar-status-${key}" class="ar-status ar-locked">Locked</div>
        </div>
      </div>`
        )
        .join("")}

      <div class="ar-divider" id="ar-step2Divider" style="display:none"></div>
      <div id="ar-step2Actions" style="display:none">
        <button id="ar-step2Btn" class="ar-btn-disabled" disabled>Waiting for review</button>
      </div>
    </div>

    <div id="ar-modal" class="ar-overlay">
      <div class="ar-modal">
        <div class="ar-modal-header">
          <span id="ar-modalTitle">Preview</span>
          <span class="ar-close" id="ar-closeBtn">✕</span>
        </div>
        <div class="ar-modal-body"><img id="ar-previewImage" src="" alt="Document preview" /></div>
        <div class="ar-modal-actions">
          <button class="ar-btn-verify" id="ar-verifyBtn">Verify</button>
          <button class="ar-btn-reject" id="ar-rejectBtn">Reject</button>
        </div>
      </div>
    </div>`;
}

function initApplicationReviewCard(options = {}) {
  const state = {
    currentDoc: null,
    step2Unlocked: false,
    step2ActionShown: false,
    step1Finalized: false,
    step1Locked: Boolean(options.lockStep1),
    status: {
      id: "pending",
      selfie: "pending",
      form: "locked",
      permit: "locked",
      clearance: "locked",
    },
  };

  const step1Docs = ["id", "selfie"];
  const step2Docs = ["form", "permit", "clearance"];

  function openPreview(doc, url) {
    if (state.status[doc] === "verified") return;
    if (state.step1Locked && step1Docs.includes(doc)) return;
    if (!state.step2Unlocked && step2Docs.includes(doc)) return;
    if (
      step2Docs.includes(doc) &&
      options.applicant &&
      options.applicant.statusTxt === "Pending"
    ) {
      options.applicant.statusTxt = "Docs Submitted";
      options.applicant.status = "b-doc-submitted";
      if (options.onApplicantUpdate) options.onApplicantUpdate();
      const reviewBtn = document.getElementById("docsReviewBtn");
      if (reviewBtn) {
        reviewBtn.textContent = "Review Submitted Documents";
        reviewBtn.className = "btn primary sm";
        reviewBtn.disabled = true;
      }
    }
    state.currentDoc = doc;
    document.getElementById("ar-modal").classList.add("open");
    document.getElementById("ar-previewImage").src = url;
    document.getElementById("ar-modalTitle").textContent = doc.charAt(0).toUpperCase() + doc.slice(1);
  }

  function closeModal() {
    document.getElementById("ar-modal").classList.remove("open");
  }

  function lockItem(doc) {
    const el = document.getElementById("ar-item-" + doc);
    el.classList.remove("ar-clickable");
    el.classList.add("ar-disabled");
    const sub = document.getElementById("ar-sub-" + doc);
    if (sub) sub.textContent = "Locked";
  }

  function enableItem(doc) {
    const el = document.getElementById("ar-item-" + doc);
    el.classList.remove("ar-disabled");
    el.classList.add("ar-clickable");
    const sub = document.getElementById("ar-sub-" + doc);
    if (sub) sub.textContent = "Click to preview";
  }

  function setStatus(doc, text, cls) {
    const el = document.getElementById("ar-status-" + doc);
    el.textContent = text;
    el.className = "ar-status " + cls;
  }

  function updateStep1Progress(finalState) {
    const verified = step1Docs.filter((d) => state.status[d] === "verified").length;
    const rejected = step1Docs.filter((d) => state.status[d] === "rejected").length;
    const actioned = verified + rejected;
    const total = step1Docs.length;
    const pct = Math.round((actioned / total) * 100);
    const bar = document.getElementById("ar-step1-bar");
    const badge = document.getElementById("ar-step1-badge");
    if (state.step1Locked) {
      bar.style.width = "0%";
      bar.className = "ar-progress-fill ar-fill-gray";
      badge.className = "ar-section-badge ar-badge-locked";
      badge.textContent = "Locked";
      return;
    }
    bar.style.width = pct + "%";

    if (finalState === "rejected") {
      bar.className = "ar-progress-fill ar-fill-red";
      badge.className = "ar-section-badge ar-badge-fail";
      badge.textContent = actioned + "/" + total + " — failed";
    } else if (verified === total) {
      bar.className = "ar-progress-fill ar-fill-green";
      badge.className = "ar-section-badge ar-badge-pass";
      badge.textContent = verified + "/" + total + " passed";
    } else if (rejected > 0) {
      bar.className = "ar-progress-fill ar-fill-red";
      badge.className = "ar-section-badge ar-badge-fail";
      badge.textContent = actioned + "/" + total + " reviewed";
    } else {
      bar.className = "ar-progress-fill ar-fill-orange";
      badge.className = "ar-section-badge ar-badge-pending";
      badge.textContent = actioned + "/" + total + " reviewed";
    }
  }

  function updateStep2Progress(finalState) {
    const verified = step2Docs.filter((d) => state.status[d] === "verified").length;
    const rejected = step2Docs.filter((d) => state.status[d] === "rejected").length;
    const actioned = verified + rejected;
    const total = step2Docs.length;
    const pct = state.step2Unlocked ? Math.round((actioned / total) * 100) : 0;
    const bar = document.getElementById("ar-step2-bar");
    const badge = document.getElementById("ar-step2-badge");
    bar.style.width = pct + "%";

    if (!state.step2Unlocked) {
      bar.className = "ar-progress-fill ar-fill-gray";
      badge.className = "ar-section-badge ar-badge-locked";
      badge.textContent = "Locked";
      return;
    }
    if (finalState === "qualified") {
      bar.className = "ar-progress-fill ar-fill-green";
      badge.className = "ar-section-badge ar-badge-pass";
      badge.textContent = verified + "/" + total + " qualified";
    } else if (finalState === "rejected") {
      bar.className = "ar-progress-fill ar-fill-red";
      badge.className = "ar-section-badge ar-badge-fail";
      badge.textContent = actioned + "/" + total + " — rejected";
    } else if (rejected > 0) {
      bar.className = "ar-progress-fill ar-fill-red";
      badge.className = "ar-section-badge ar-badge-fail";
      badge.textContent = actioned + "/" + total + " reviewed";
    } else if (actioned > 0) {
      bar.className = "ar-progress-fill ar-fill-orange";
      badge.className = "ar-section-badge ar-badge-pending";
      badge.textContent = actioned + "/" + total + " reviewed";
    } else {
      bar.className = "ar-progress-fill ar-fill-orange";
      badge.className = "ar-section-badge ar-badge-pending";
      badge.textContent = "0/" + total + " reviewed";
    }
  }

  function updateStep1UI() {
    if (state.step1Finalized) return;
    const banner = document.getElementById("ar-statusBanner");
    const btn = document.getElementById("ar-mainAction");
    const hasRejected = step1Docs.some((d) => state.status[d] === "rejected");
    const allVerified = step1Docs.every((d) => state.status[d] === "verified");
    const anyActioned = step1Docs.some((d) => state.status[d] === "verified" || state.status[d] === "rejected");

    btn.onclick = null;
    btn.className = "ar-btn-disabled";
    btn.disabled = true;
    btn.textContent = "Waiting for review";

    if (state.step1Locked) {
      banner.className = "ar-banner ar-bpending";
      banner.textContent = "Click Review Application to start pre-screening";
      return;
    }

    if (hasRejected) {
      banner.className = "ar-banner ar-reject";
      banner.textContent = "One or more documents rejected";
      btn.textContent = "Reject Application";
      btn.className = "ar-btn-danger";
      btn.disabled = false;
      btn.onclick = () => {
        const applicantName =
          selectedApplicantIdx !== null && currentStall
            ? currentStall.applicants[selectedApplicantIdx].name
            : "this applicant";
        openRejectModal(applicantName, () => {
          state.step1Finalized = true;
          banner.className = "ar-banner ar-reject";
          banner.textContent = "Application rejected";
          btn.disabled = true;
          btn.className = "ar-btn-disabled";
          step1Docs.forEach(lockItem);
          if (options.applicant) {
            options.applicant.pre = "Failed";
            if (options.onApplicantUpdate) options.onApplicantUpdate();
          }
          updateStep1Progress("rejected");
        });
      };
    } else if (allVerified) {
      banner.className = "ar-banner ar-ready";
      banner.textContent = "Pre-screening passed.";
      btn.textContent = "Send Upload Link";
      btn.className = "ar-btn-primary";
      btn.disabled = false;
      btn.onclick = () => openSendLinkModal(selectedApplicantIdx, unlockStep2);
    } else if (anyActioned) {
      banner.className = "ar-banner ar-bpending";
      banner.textContent = "Waiting for remaining documents";
    } else {
      banner.className = "ar-banner ar-bpending";
      banner.textContent = "Waiting for identity verification";
    }
  }

  function unlockStep2() {
    state.step1Finalized = true;
    state.step2Unlocked = true;
    lockItem("id");
    lockItem("selfie");
    step2Docs.forEach(enableItem);
    state.status.form = "pending";
    state.status.permit = "missing";
    state.status.clearance = "missing";
    setStatus("form", "Pending", "ar-pending");
    setStatus("permit", "Missing", "ar-missing");
    setStatus("clearance", "Missing", "ar-missing");
    const banner = document.getElementById("ar-statusBanner");
    banner.className = "ar-banner ar-ready";
    banner.textContent = "Pre-screening passed — waiting for qualification documents";
    document.getElementById("ar-mainAction").style.display = "none";
    if (options.applicant) {
      options.applicant.pre = "Passed";
      options.applicant.statusTxt = "Pending";
      options.applicant.status = "b-doc-pending";
      if (options.onApplicantUpdate) options.onApplicantUpdate();
    }
    const reviewBtn = document.getElementById("docsReviewBtn");
    if (reviewBtn) {
      reviewBtn.textContent = "Pending Uploads";
      reviewBtn.className = "btn ghost sm";
      reviewBtn.disabled = true;
    }
    updateStep1Progress(null);
    updateStep2Progress(null);
  }

  function startStep1Review() {
    if (!state.step1Locked) return;
    state.step1Locked = false;
    step1Docs.forEach(enableItem);
    setStatus("id", "Pending", "ar-pending");
    setStatus("selfie", "Pending", "ar-pending");
    updateStep1Progress(null);
    updateStep1UI();
  }

  function updateStep2UI() {
    const banner = document.getElementById("ar-statusBanner");
    const hasRejected = step2Docs.some((d) => state.status[d] === "rejected");
    const allVerified = step2Docs.every((d) => state.status[d] === "verified");
    const anyActioned = step2Docs.some((d) => state.status[d] === "verified" || state.status[d] === "rejected");

    if (hasRejected) {
      banner.className = "ar-banner ar-reject";
      banner.textContent = "One or more documents rejected";
    } else if (allVerified) {
      banner.className = "ar-banner ar-ready";
      banner.textContent = "All documents verified — ready to qualify";
    } else {
      banner.className = "ar-banner ar-bpending";
      banner.textContent = "Waiting for document verification";
    }

    if (anyActioned && !state.step2ActionShown) {
      state.step2ActionShown = true;
      document.getElementById("ar-step2Divider").style.display = "block";
      document.getElementById("ar-step2Actions").style.display = "block";
    }

    if (!anyActioned) return;

    const btn = document.getElementById("ar-step2Btn");
    btn.onclick = null;

    if (hasRejected) {
      btn.textContent = "Reject Application";
      btn.className = "ar-btn-danger";
      btn.disabled = false;
      btn.onclick = () => {
        const applicantName =
          selectedApplicantIdx !== null && currentStall
            ? currentStall.applicants[selectedApplicantIdx].name
            : "this applicant";
        openRejectModal(applicantName, () => {
          banner.className = "ar-banner ar-reject";
          banner.textContent = "Application rejected";
          btn.disabled = true;
          btn.className = "ar-btn-disabled";
          step2Docs.forEach(lockItem);
          updateStep2Progress("rejected");
        });
      };
    } else if (allVerified) {
      btn.textContent = "Mark as Qualified";
      btn.className = "ar-btn-success";
      btn.disabled = false;
      btn.onclick = () => {
        banner.className = "ar-banner ar-ready";
        banner.textContent = "Application approved — applicant is qualified";
        btn.disabled = true;
        btn.className = "ar-btn-disabled";
        step2Docs.forEach(lockItem);
        updateStep2Progress("qualified");
      };
    } else {
      btn.textContent = "Waiting for review";
      btn.className = "ar-btn-disabled";
      btn.disabled = true;
    }
  }

  function verifyDoc() {
    if (!state.currentDoc) return;
    state.status[state.currentDoc] = "verified";
    setStatus(state.currentDoc, "Verified", "ar-verified");
    lockItem(state.currentDoc);
    closeModal();
    if (!state.step2Unlocked) {
      updateStep1Progress(null);
      updateStep1UI();
    } else {
      updateStep2Progress(null);
      updateStep2UI();
    }
  }

  function rejectDoc() {
    if (!state.currentDoc) return;
    state.status[state.currentDoc] = "rejected";
    setStatus(state.currentDoc, "Rejected", "ar-rejected");
    closeModal();
    if (!state.step2Unlocked) {
      updateStep1Progress(null);
      updateStep1UI();
    } else {
      updateStep2Progress(null);
      updateStep2UI();
    }
  }

  document.querySelectorAll(".ar-left").forEach((item) => {
    item.addEventListener("click", () => {
      const doc = item.dataset.doc;
      openPreview(doc, item.dataset.url);
    });
  });
  document.getElementById("ar-closeBtn").addEventListener("click", closeModal);
  document.getElementById("ar-modal").addEventListener("click", (e) => {
    if (e.target.id === "ar-modal") closeModal();
  });
  document.getElementById("ar-verifyBtn").addEventListener("click", verifyDoc);
  document.getElementById("ar-rejectBtn").addEventListener("click", rejectDoc);

  if (state.step1Locked) {
    step1Docs.forEach(lockItem);
    setStatus("id", "Locked", "ar-locked");
    setStatus("selfie", "Locked", "ar-locked");
  }

  updateStep1Progress(null);
  updateStep1UI();
  updateStep2Progress(null);

  return {
    startStep1Review,
  };
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
