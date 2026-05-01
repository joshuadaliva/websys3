/* ═══ DATA ═══ */
const STALLS = [
  {
    no: "#02",
    section: "A",
    size: "4×4m",
    type: "medium",
    rate: 1500,
    status: "open",
    desc: "Corner stall with good foot traffic near the main entrance. Suitable for dry goods, clothing, or accessories.",
    amenities: ["Near entrance", "Corner position", "Water access"],
  },
  {
    no: "#04",
    section: "A",
    size: "3×3m",
    type: "small",
    rate: 1200,
    status: "open",
    desc: "Compact stall in Section A, ideal for small merchandise, snacks, or personal care products.",
    amenities: ["Section A", "Water access"],
  },
  {
    no: "#05",
    section: "A",
    size: "3×3m",
    type: "small",
    rate: 1200,
    status: "open",
    desc: "Adjacent to Stall #04. Well-lit area with steady pedestrian flow.",
    amenities: ["Section A", "Well-lit", "Near aisle"],
  },
  {
    no: "#08",
    section: "B",
    size: "4×4m",
    type: "medium",
    rate: 1500,
    status: "open",
    desc: "Central market position in Section B. High visibility from two aisles.",
    amenities: ["Center position", "Double aisle", "Electricity"],
  },
  {
    no: "#10",
    section: "B",
    size: "4×4m",
    type: "medium",
    rate: 1500,
    status: "open",
    desc: "Section B stall near the wet market section. Suitable for vegetables or cooked food.",
    amenities: ["Near wet market", "Water access", "Drainage"],
  },
  {
    no: "#12",
    section: "B",
    size: "5×5m",
    type: "large",
    rate: 2000,
    status: "open",
    desc: "Largest available stall in Section B. Ideal for general merchandise or multi-category goods.",
    amenities: ["Corner position", "Large footprint", "Storage room"],
  },
  {
    no: "#13",
    section: "C",
    size: "4×4m",
    type: "medium",
    rate: 1500,
    status: "soon",
    desc: "Currently being prepared. Expected to be available for application next month.",
    amenities: ["Section C", "Renovated"],
  },
  {
    no: "#14",
    section: "C",
    size: "3×3m",
    type: "small",
    rate: 1200,
    status: "soon",
    desc: "Small stall in Section C. Applications are being accepted ahead of availability.",
    amenities: ["Section C"],
  },
];

const ICONS = {
  small:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="5" y="5" width="14" height="14" rx="1"/></svg>',
  medium:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>',
  large:
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>',
};

const BG_COLORS = {
  A: "#e8f0e0",
  B: "#e0eaf0",
  C: "#f0e8e0",
  D: "#eae0f0",
};

const FAQS = [
  {
    q: "Who can apply for a stall?",
    a: "Any Filipino citizen who meets the requirements set by the local government unit (LGU) may apply. Applicants must submit a valid government ID and a selfie holding the ID as part of the pre-screening process.",
  },
  {
    q: "How are stalls awarded if there are multiple applicants?",
    a: "If only one qualified applicant applies for a stall, they are automatically selected as the awardee. If multiple qualified applicants apply for the same stall, the AMRC (Awards and Monitoring Review Committee) conducts a raffle. Results are announced publicly and all applicants are notified via SMS and email.",
  },
  {
    q: "What documents do I need for the online application?",
    a: "For the online pre-screening form, you only need a photo of a valid government ID and a selfie holding your ID. Additional documents (business permit, etc.) may be required at a later stage of the process.",
  },
  {
    q: "How long does the application process take?",
    a: "The review process typically takes 5–10 business days from the application submission deadline. You will receive real-time SMS and email notifications as your application moves through each stage.",
  },
  {
    q: "Can I apply for more than one stall?",
    a: "Yes, you may apply for multiple stalls. However, the system limits one application per stall per applicant.",
  },
  {
    q: "What happens after I submit the online form?",
    a: "You will receive an Application Number via SMS and email. You can use this number to track your application status on this website. The market office staff will review your submission and contact you for any additional requirements.",
  },
];

/* Fake tracking data */
const TRACKING = {
  "APP-2026-001": {
    name: "Juan Dela Cruz",
    stall: "#08 — Section B",
    submitted: "Mar 1, 2026",
    status: "qualified",
    steps: [
      {
        title: "Application Submitted",
        sub: "Pre-screening form received",
        date: "Mar 1, 2026 · 9:14 AM",
        state: "done",
      },
      {
        title: "Documents Verified",
        sub: "ID and selfie verified by staff",
        date: "Mar 3, 2026 · 2:30 PM",
        state: "done",
      },
      {
        title: "Under Review",
        sub: "AMRC committee is reviewing qualified applicants",
        date: "Mar 5, 2026 · 10:00 AM",
        state: "active",
      },
      {
        title: "Raffle / Selection",
        sub: "Awaiting committee decision",
        date: "Expected Mar 15, 2026",
        state: "pending",
      },
      {
        title: "Awarding & Contract",
        sub: "Stall contract signing",
        date: "—",
        state: "pending",
      },
    ],
  },
  "APP-2026-002": {
    name: "Maria Santos",
    stall: "#02 — Section A",
    submitted: "Feb 28, 2026",
    status: "awarded",
    steps: [
      {
        title: "Application Submitted",
        sub: "Pre-screening form received",
        date: "Feb 28, 2026 · 11:00 AM",
        state: "done",
      },
      {
        title: "Documents Verified",
        sub: "ID and selfie verified by staff",
        date: "Mar 2, 2026 · 9:45 AM",
        state: "done",
      },
      {
        title: "Under Review",
        sub: "AMRC committee reviewed your application",
        date: "Mar 5, 2026 · 10:00 AM",
        state: "done",
      },
      {
        title: "Raffle / Selection",
        sub: "Applicant selected as stall awardee",
        date: "Mar 8, 2026 · 3:00 PM",
        state: "done",
      },
      {
        title: "Awarding & Contract",
        sub: "Please visit the Market Office to sign the contract",
        date: "Scheduled Mar 18, 2026",
        state: "active",
      },
    ],
  },
  "APP-2026-003": {
    name: "Pedro Reyes",
    stall: "#04 — Section A",
    submitted: "Mar 2, 2026",
    status: "submitted",
    steps: [
      {
        title: "Application Submitted",
        sub: "Pre-screening form received",
        date: "Mar 2, 2026 · 3:20 PM",
        state: "done",
      },
      {
        title: "Documents Verified",
        sub: "Pending document review by staff",
        date: "—",
        state: "active",
      },
      { title: "Under Review", sub: "", date: "", state: "pending" },
      { title: "Raffle / Selection", sub: "", date: "", state: "pending" },
      { title: "Awarding & Contract", sub: "", date: "", state: "pending" },
    ],
  },
};

/* ══ STATE ══ */
let currentFilter = "all",
  currentStall = null,
  applyStep = 1,
  mobOpen = false;

/* ══ UTILS ══ */
function fmt(n) {
  return "₱" + n.toLocaleString();
}
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

/* ══ MOBILE NAV ══ */
function toggleMob() {
  mobOpen = !mobOpen;
  document.getElementById("mob-menu").classList.toggle("open", mobOpen);
  document.getElementById("burger-ico").innerHTML = mobOpen
    ? '<line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>'
    : '<line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/>';
}
function scrollTo(id) {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
}

/* ══ FILTER ══ */
function setFilter(btn) {
  document.querySelectorAll(".fpill").forEach((p) => p.classList.remove("on"));
  btn.classList.add("on");
  currentFilter = btn.dataset.f;
  renderStalls();
}

/* ══ RENDER STALLS ══ */
function renderStalls() {
  const q = (document.getElementById("stall-search").value || "").toLowerCase();
  const sort = document.getElementById("sort-sel").value;
  let list = STALLS.filter((s) => {
    if (currentFilter === "open" && s.status !== "open") return false;
    if (currentFilter === "small" && s.type !== "small") return false;
    if (currentFilter === "medium" && s.type !== "medium") return false;
    if (currentFilter === "large" && s.type !== "large") return false;
    if (
      q &&
      !s.no.toLowerCase().includes(q) &&
      !s.section.toLowerCase().includes(q) &&
      !s.size.toLowerCase().includes(q)
    )
      return false;
    return true;
  });
  if (sort === "rate-low") list.sort((a, b) => a.rate - b.rate);
  else if (sort === "rate-high") list.sort((a, b) => b.rate - a.rate);
  else if (sort === "section")
    list.sort((a, b) => a.section.localeCompare(b.section));

  const grid = document.getElementById("stall-grid");
  grid.innerHTML = "";

  if (!list.length) {
    grid.innerHTML = `<div class="stall-empty"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg><p>No stalls match your filters.</p></div>`;
    return;
  }

  list.forEach((s, i) => {
    const bg = BG_COLORS[s.section] || "#f0f0f0";
    const isOpen = s.status === "open";
    const card = document.createElement("div");
    card.className = "stall-card";
    card.style.animationDelay = i * 0.05 + "s";
    card.innerHTML = `
      <div class="stall-card-img" style="background:${bg}">
        <div class="stall-num">${s.no}</div>
        <div class="stall-icon">${ICONS[s.type]}</div>
        <div class="stall-badge"><span class="status-pill ${
          s.status === "open" ? "open" : "soon"
        }">${
      s.status === "open" ? "Open for Application" : "Coming Soon"
    }</span></div>
      </div>
      <div class="stall-card-body">
        <div class="stall-card-no">Stall ${s.no} · Section ${s.section}</div>
        <div class="stall-card-name">${s.size} ${
      s.type === "large" ? "Large" : s.type === "medium" ? "Medium" : "Small"
    } Stall</div>
        <div class="stall-card-meta">
          <span class="meta-chip"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>Section ${
            s.section
          }</span>
          <span class="meta-chip"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>${
            s.size
          }</span>
        </div>
        <div class="stall-card-rate"><span class="rate-val">${fmt(
          s.rate
        )}</span><span class="rate-period">/ month</span></div>
        <button class="stall-card-cta${isOpen ? "" : " disabled"}" onclick="${
      isOpen
        ? `openStall('${s.no}');event.stopPropagation()`
        : "event.stopPropagation()"
    }">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><${
            isOpen
              ? 'path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"'
              : 'path d="M12 8v4l3 3"/><circle cx="12" cy="12" r="10"'
          }/>
          </svg>${isOpen ? "View & Apply" : "Notify Me When Available"}</button>
      </div>`;
    if (isOpen) card.addEventListener("click", () => openStall(s.no));
    grid.appendChild(card);
  });

  // Update hero stat
  const avail = STALLS.filter((s) => s.status === "open").length;
  document.getElementById("stat-available").textContent = avail;
}

/* ══ STALL DETAIL MODAL ══ */
function openStall(no) {
  const s = STALLS.find((x) => x.no === no);
  if (!s) return;
  currentStall = s;
  document.getElementById(
    "stall-modal-title"
  ).textContent = `Stall ${s.no} — Section ${s.section}`;
  document.getElementById("stall-modal-body").innerHTML = `
    <div class="stall-detail-header">
      <div class="sdh-no">STALL ${s.no} · SECTION ${s.section}</div>
      <div class="sdh-name">${s.size} ${
    s.type === "large" ? "Large" : s.type === "medium" ? "Medium" : "Small"
  } Stall</div>
      <div class="sdh-metas">
        <div class="sdh-meta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><rect x="3" y="3" width="18" height="18" rx="1"/></svg>${
          s.size
        }</div>
        <div class="sdh-meta"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>Section ${
          s.section
        }</div>
        <div class="sdh-meta" style="color:var(--or3)"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><polyline points="9 11 12 14 22 4"/></svg>Open for Application</div>
      </div>
      <div class="sdh-rate">${fmt(
        s.rate
      )}<span style="font-size:14px;font-family:'Poppins',sans-serif;font-weight:500;color:rgba(255,255,255,.5)">/mo</span></div>
    </div>
    <div style="margin-bottom:16px">
      <div style="font-size:11.5px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Description</div>
      <p style="font-size:13.5px;color:var(--t2);line-height:1.65">${s.desc}</p>
    </div>
    <div style="margin-bottom:20px">
      <div style="font-size:11.5px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Features & Amenities</div>
      <div style="display:flex;flex-wrap:wrap;gap:7px">${s.amenities
        .map(
          (a) =>
            `<span style="background:var(--cream);border:1px solid var(--brd);border-radius:5px;padding:4px 10px;font-size:12px;font-weight:600;color:var(--or)">✓ ${a}</span>`
        )
        .join("")}</div>
    </div>
    <div class="chip-info amber">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
      <div>You will need a <strong>valid government ID</strong> and a <strong>selfie holding the ID</strong> to complete the application form.</div>
    </div>`;
  document.getElementById("stall-modal-footer").innerHTML = "";
  const footDiv = document.getElementById("stall-modal-footer");
  const closeBtn = document.createElement("button");
  closeBtn.className = "btn gh";
  closeBtn.textContent = "Close";
  closeBtn.onclick = () => closeM("stallModal");
  const applyBtn = document.createElement("button");
  applyBtn.className = "btn am";
  applyBtn.innerHTML =
    '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/><polyline points="14 2 14 8 20 8"/><line x1="12" y1="18" x2="12" y2="12"/><line x1="9" y1="15" x2="15" y2="15"/></svg>Apply for This Stall';
  applyBtn.onclick = () => {
    closeM("stallModal");
    openApply(s);
  };
  footDiv.appendChild(closeBtn);
  footDiv.appendChild(applyBtn);
  openM("stallModal");
}

/* ══ APPLY MULTI-STEP ══ */
function openApply(stall) {
  applyStep = 1;
  currentStall = stall || currentStall || STALLS[0];
  renderApplyStep();
  openM("applyModal");
}

function renderApplyStep() {
  const stepNames = ["Personal Info", "Stall Choice", "Documents", "Confirm"];
  const nav = `<div class="step-nav">${stepNames
    .map(
      (n, i) =>
        `<div class="step-nav-item ${
          i + 1 === applyStep ? "active" : i + 1 < applyStep ? "done" : ""
        }">${i + 1 < applyStep ? "✓ " : "" + (i + 1) + ". "}${n}</div>`
    )
    .join("")}</div>`;

  let body = "",
    footer = "";

  if (applyStep === 1) {
    body = `${nav}
      <div class="chip-info blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>This is a pre-screening form. Submitting does not guarantee stall awarding.</div>
      <div class="frow2"><div class="fg"><label class="fl">First Name *</label><input class="fc" placeholder="e.g. Juan" id="app-fname"/></div><div class="fg"><label class="fl">Last Name *</label><input class="fc" placeholder="e.g. Dela Cruz" id="app-lname"/></div></div>
      <div class="frow2"><div class="fg"><label class="fl">Mobile Number *</label><input class="fc" placeholder="09XX XXX XXXX" id="app-mobile" type="tel"/></div><div class="fg"><label class="fl">Email Address</label><input class="fc" placeholder="optional" id="app-email" type="email"/></div></div>
      <div class="fg"><label class="fl">Complete Address *</label><input class="fc" placeholder="Street, Barangay, Municipality" id="app-address"/></div>
      <div class="fg"><label class="fl">Age *</label><input class="fc" placeholder="e.g. 35" id="app-age" type="number" style="max-width:120px"/></div>`;
    footer = `<button class="btn gh" onclick="closeM('applyModal')">Cancel</button><button class="btn am" onclick="applyNext()">Next: Stall Choice <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>`;
  } else if (applyStep === 2) {
    body = `${nav}
      <div class="fg"><label class="fl">Preferred Stall *</label>
        <select class="fc" id="app-stall">
          ${STALLS.filter((s) => s.status === "open")
            .map(
              (s) =>
                `<option value="${s.no}" ${
                  currentStall && s.no === currentStall.no ? "selected" : ""
                }>${s.no} — Section ${s.section} · ${s.size} · ${fmt(
                  s.rate
                )}/mo</option>`
            )
            .join("")}
        </select>
      </div>
      <div class="fg"><label class="fl">2nd Choice (optional)</label>
        <select class="fc" id="app-stall2"><option value="">None</option>${STALLS.filter(
          (s) => s.status === "open"
        )
          .map(
            (s) =>
              `<option value="${s.no}">${s.no} — Section ${s.section} · ${
                s.size
              } · ${fmt(s.rate)}/mo</option>`
          )
          .join("")}</select>
      </div>
      <div class="fg"><label class="fl">Intended Business / Products *</label><input class="fc" placeholder="e.g. Vegetables, Dry goods, Clothing…" id="app-business"/></div>
      <div class="fg"><label class="fl">Previous Market Experience</label>
        <select class="fc" id="app-exp"><option>None</option><option>Less than 1 year</option><option>1–3 years</option><option>More than 3 years</option></select>
      </div>`;
    footer = `<button class="btn gh" onclick="applyStep=1;renderApplyStep()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button><button class="btn am" onclick="applyNext()">Next: Documents <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>`;
  } else if (applyStep === 3) {
    body = `${nav}
      <div class="chip-info amber"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>Please prepare both documents before submitting. Low-quality or unclear images may delay your application.</div>
      <div class="fg"><label class="fl">Valid Government ID (photo) *</label>
        <div class="upload-box" onclick="showToast('File upload ready — connect to backend','a')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
          <p>Tap to upload · <strong>JPG, PNG</strong> up to 5 MB</p>
        </div>
      </div>
      <div class="fg"><label class="fl">Selfie holding your ID *</label>
        <div class="upload-box" onclick="showToast('File upload ready — connect to backend','a')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z"/><circle cx="12" cy="13" r="4"/></svg>
          <p>Tap to upload · <strong>JPG, PNG</strong> up to 5 MB</p>
        </div>
      </div>`;
    footer = `<button class="btn gh" onclick="applyStep=2;renderApplyStep()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button><button class="btn am" onclick="applyNext()">Review & Confirm <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>`;
  } else if (applyStep === 4) {
    const stallChoice = currentStall
      ? `Stall ${currentStall.no} — Section ${currentStall.section}`
      : "Selected stall";
    body = `${nav}
      <div style="background:var(--cream);border:1.5px solid var(--brd2);border-radius:10px;padding:16px;margin-bottom:18px">
        <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:10px">Application Summary</div>
        <div style="display:flex;flex-direction:column;gap:7px">
          ${[
            ["Applicant", "Juan Dela Cruz"],
            ["Mobile", "0912 345 6789"],
            ["Preferred Stall", stallChoice],
            ["Business Type", "Dry goods / Clothing"],
            ["Documents", "Government ID + Selfie with ID"],
          ]
            .map(
              ([l, v]) =>
                `<div style="display:flex;justify-content:space-between;gap:12px;font-size:13px"><span style="color:var(--t3);font-weight:600">${l}</span><span style="font-weight:700;text-align:right">${v}</span></div>`
            )
            .join("")}
        </div>
      </div>
      <div class="chip-info blue"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg><div>By submitting, you confirm that all information is accurate. An <strong>Application Number</strong> will be sent to your mobile number and email.</div></div>`;
    footer = `<button class="btn gh" onclick="applyStep=3;renderApplyStep()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg> Back</button><button class="btn tl" onclick="submitApplication()"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg>Submit Application</button>`;
  }

  document.getElementById("apply-body").innerHTML = body;
  document.getElementById("apply-footer").innerHTML = footer;
}

function applyNext() {
  if (applyStep < 4) {
    applyStep++;
    renderApplyStep();
  }
}

function submitApplication() {
  closeM("applyModal");
  // Success message
  const successDiv = document.createElement("div");
  successDiv.innerHTML = `
    <div style="text-align:center;padding:20px 0">
      <div style="width:64px;height:64px;border-radius:50%;background:var(--grl);display:grid;place-items:center;margin:0 auto 16px">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="var(--gr)" stroke-width="2.5" width="28" height="28"><polyline points="20 6 9 17 4 12"/></svg>
      </div>
      <div style="font-family:'Poppins',sans-serif;font-size:22px;font-weight:800;margin-bottom:8px">Application Submitted!</div>
      <div style="font-size:13.5px;color:var(--t2);margin-bottom:18px;line-height:1.6">Your application has been received. Check your mobile for your Application Number.</div>
      <div style="background:var(--cream);border:1.5px solid var(--brd2);border-radius:10px;padding:14px 20px;display:inline-block">
        <div style="font-size:11px;font-weight:700;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:4px">Your Application Number</div>
        <div style="font-family:'DM Mono',monospace;font-size:22px;font-weight:600;color:var(--navy);letter-spacing:2px">APP-2026-00${
          Math.floor(Math.random() * 9) + 4
        }</div>
      </div>
      <div style="font-size:12.5px;color:var(--t3);margin-top:14px">Use this number to track your application status on this page.</div>
    </div>`;
  document.getElementById("apply-body").innerHTML = successDiv.innerHTML;
  document.getElementById(
    "apply-footer"
  ).innerHTML = `<button class="btn gh" onclick="closeM('applyModal')">Close</button><button class="btn tl" onclick="closeM('applyModal');openM('trackModal')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>Track Application</button>`;
  openM("applyModal");
}

/* ══ TRACK ══ */
function renderTrackUI(prefill) {
  document.getElementById("track-body").innerHTML = `
    <div class="fg" style="margin-bottom:14px">
      <label class="fl">Application Number</label>
      <input class="fc" id="track-no-input" placeholder="APP-2026-001" value="${
        prefill || ""
      }" style="font-family:'DM Mono',monospace;letter-spacing:.5px"/>
    </div>
    <button class="btn tl" style="width:100%;justify-content:center;margin-bottom:16px" onclick="runTrack()">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/></svg>
      Check Status
    </button>
    <div style="font-size:12px;color:var(--t3);text-align:center;margin-bottom:14px">Try: APP-2026-001 · APP-2026-002 · APP-2026-003</div>
    <div id="track-result"></div>`;
  if (prefill) setTimeout(runTrack, 80);
}

function runTrack() {
  const no = (document.getElementById("track-no-input")?.value || "")
    .trim()
    .toUpperCase();
  const result = document.getElementById("track-result");
  if (!no) {
    result.innerHTML = `<div style="color:var(--rd);font-size:13px;text-align:center">Please enter an Application Number.</div>`;
    return;
  }
  const data = TRACKING[no];
  if (!data) {
    result.innerHTML = `<div style="background:var(--rdl);border:1px solid var(--rds);border-radius:8px;padding:14px;font-size:13px;color:var(--rd);text-align:center"><strong>No application found</strong> for "${no}".<br/><span style="font-size:12px;color:var(--t3)">Please check the number and try again.</span></div>`;
    return;
  }

  const statusColors = {
    submitted: "var(--or)",
    qualified: "var(--amber)",
    awarded: "var(--gr)",
    rejected: "var(--rd)",
  };
  const statusLabels = {
    submitted: "Submitted",
    qualified: "Under Review",
    awarded: "Awarded",
    rejected: "Rejected",
  };

  result.innerHTML = `<div class="track-result">
    <div style="background:var(--cream);border:1.5px solid var(--brd2);border-radius:10px;padding:14px;margin-bottom:18px">
      <div style="font-size:11px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:8px">Application Info</div>
      <div style="font-size:15px;font-weight:800;color:var(--t1);margin-bottom:4px">${
        data.name
      }</div>
      <div style="font-size:12.5px;color:var(--t2);margin-bottom:8px">Applied for: ${
        data.stall
      }</div>
      <div style="display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:8px">
        <span style="font-size:11.5px;color:var(--t3)">Submitted ${
          data.submitted
        }</span>
        <span style="background:${statusColors[data.status]}22;color:${
    statusColors[data.status]
  };font-size:11px;font-weight:800;padding:3px 10px;border-radius:20px;border:1px solid ${
    statusColors[data.status]
  }44">${statusLabels[data.status]}</span>
      </div>
    </div>
    <div style="font-size:11.5px;font-weight:800;color:var(--t3);text-transform:uppercase;letter-spacing:.5px;margin-bottom:14px">Application Progress</div>
    <div class="track-status-bar">
      ${data.steps
        .map(
          (s) => `<div class="ts-step">
        <div class="ts-dot ${s.state}">
          ${
            s.state === "done"
              ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>'
              : s.state === "active"
              ? '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4"/></svg>'
              : '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="4" fill="none" stroke-dasharray="2 3"/></svg>'
          }
        </div>
        <div class="ts-body">
          <div class="ts-title">${s.title}</div>
          ${s.sub ? `<div class="ts-sub">${s.sub}</div>` : ""}
          ${s.date ? `<div class="ts-date">${s.date}</div>` : ""}
        </div>
      </div>`
        )
        .join("")}
    </div>
  </div>`;
}

function doHeroTrack() {
  const no = document.getElementById("hero-track-input").value.trim();
  renderTrackUI(no);
  openM("trackModal");
}

/* ══ FAQ ══ */
function renderFAQ() {
  const list = document.getElementById("faq-list");
  FAQS.forEach((f, i) => {
    const item = document.createElement("div");
    item.className = "faq-item";
    item.innerHTML = `<div class="faq-q" onclick="toggleFAQ(${i})"><div class="faq-q-text">${f.q}</div><div class="faq-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="6 9 12 15 18 9"/></svg></div></div><div class="faq-a">${f.a}</div>`;
    list.appendChild(item);
  });
}
function toggleFAQ(i) {
  const items = document.querySelectorAll(".faq-item");
  items[i].classList.toggle("open");
}

/* ══ TOAST ══ */
function showToast(msg, type = "g") {
  let t = document.getElementById("_toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "_toast";
    t.style.cssText =
      'position:fixed;bottom:24px;right:24px;z-index:9999;padding:12px 18px;border-radius:10px;font-size:13px;font-weight:600;box-shadow:0 8px 32px rgba(0,0,0,.2);transition:opacity .3s;pointer-events:none;display:flex;align-items:center;gap:8px;max-width:320px;font-family:"Poppins",sans-serif';
    document.body.appendChild(t);
  }
  const C = {
    g: "background:#166534;color:#fff",
    r: "background:#991b1b;color:#fff",
    a: "background:#92400e;color:#fff",
  };
  t.setAttribute("style", t.style.cssText + ";" + (C[type] || C.g));
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="15" height="15"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(() => {
    t.style.opacity = "0";
  }, 3400);
}

/* ══ INIT ══ */
renderStalls();
renderFAQ();
renderTrackUI("");

function closeRaffleAnnouncement() {
  const el = document.getElementById('raffleAnnouncement');
  if (!el) return;
  el.style.display = 'none';
  localStorage.setItem('raffleAnnouncementClosed', el.dataset.scheduleKey || '1');
}

(function initRaffleAnnouncement(){
  const el = document.getElementById('raffleAnnouncement');
  if (!el) return;
  const closedFor = localStorage.getItem('raffleAnnouncementClosed');
  const scheduleKey = el.dataset.scheduleKey || '';
  if (closedFor && closedFor === scheduleKey) el.style.display = 'none';
})();
