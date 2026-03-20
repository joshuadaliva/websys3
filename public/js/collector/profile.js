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

/* ═══ TOGGLE (security section) ═══ */
const TOGGLES = {
  notifPay: SECURITY.notifPrefs.paymentReceived,
  notifOver: SECURITY.notifPrefs.overdueAlerts,
  notifSys: SECURITY.notifPrefs.systemAnnouncements,
};

function toggleSwitch(id) {
  TOGGLES[id] = !TOGGLES[id];
  document.getElementById("tog-" + id)?.classList.toggle("on", TOGGLES[id]);
}

/* ═══ SECTION RENDERERS ═══ */
const SECTIONS = {
  info() {
    return `<div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
        Personal Information
      </div></div>
      <div style="padding:18px">
        <div class="fgrid2">
          <div class="fg"><label>First Name</label><input class="finp" value="${USER.firstName}"/></div>
          <div class="fg"><label>Last Name</label><input class="finp" value="${USER.lastName}"/></div>
        </div>
        <div class="fgrid2">
          <div class="fg"><label>Middle Name</label><input class="finp" value="${USER.middleName}"/></div>
          <div class="fg"><label>Employee ID</label><input class="finp" value="${USER.employeeId}" readonly/></div>
        </div>
        <div class="fgrid2">
          <div class="fg"><label>Phone Number</label><input class="finp" value="${USER.phone}"/></div>
          <div class="fg"><label>Email Address</label><input class="finp" value="${USER.email}"/></div>
        </div>
        <div class="fg"><label>Home Address</label><input class="finp" value="${USER.address}"/></div>
        <div style="display:flex;justify-content:flex-end;gap:8px;margin-top:6px">
          <button class="btn gh" onclick="showToast('Changes discarded')">Cancel</button>
          <button class="btn pri" onclick="showToast('Profile saved')">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"/></svg>
            Save Changes
          </button>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
        Employment Details
      </div></div>
      <div class="info-row"><span class="info-lbl">Position</span><span class="info-val">${EMPLOYMENT.position}</span></div>
      <div class="info-row"><span class="info-lbl">Department</span><span class="info-val">${EMPLOYMENT.department}</span></div>
      <div class="info-row"><span class="info-lbl">Date Hired</span><span class="info-val">${EMPLOYMENT.dateHired}</span></div>
      <div class="info-row"><span class="info-lbl">Assigned Market</span><span class="info-val">${EMPLOYMENT.assignedMarket}</span></div>
      <div class="info-row"><span class="info-lbl">Supervisor</span><span class="info-val">${EMPLOYMENT.supervisor}</span></div>
      <div class="info-row"><span class="info-lbl">Employee ID</span><span class="info-val mono blue">${USER.employeeId}</span></div>
    </div>`;
  },

  assignment() {
    return `<div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
        Collection Route
      </div></div>
      <div class="info-row"><span class="info-lbl">Total Assigned Stalls</span><span class="info-val blue">${ASSIGNMENT.totalStalls} stalls</span></div>
      <div class="info-row"><span class="info-lbl">Ground Floor</span><span class="info-val">${ASSIGNMENT.groundFloorStalls} stalls</span></div>
      <div class="info-row"><span class="info-lbl">Second Floor</span><span class="info-val">${ASSIGNMENT.secondFloorStalls} stalls</span></div>
      <div class="info-row"><span class="info-lbl">Route Updated</span><span class="info-val">${ASSIGNMENT.routeUpdated}</span></div>
      <div class="info-row"><span class="info-lbl">Collection Schedule</span><span class="info-val">${ASSIGNMENT.collectionSchedule}</span></div>
      <div class="info-row"><span class="info-lbl">Collection Hours</span><span class="info-val">${ASSIGNMENT.collectionHours}</span></div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
        March 2026 Performance
      </div></div>
      <div class="info-row"><span class="info-lbl">Total Collected</span><span class="info-val blue">${PERFORMANCE.totalCollected}</span></div>
      <div class="info-row"><span class="info-lbl">Collection Rate</span><span class="info-val">${PERFORMANCE.collectionRate}</span></div>
      <div class="info-row"><span class="info-lbl">ORs Issued (Month)</span><span class="info-val">${PERFORMANCE.orsIssuedMonth}</span></div>
      <div class="info-row"><span class="info-lbl">Outstanding Accounts</span><span class="info-val">${PERFORMANCE.outstandingAccts}</span></div>
      <div class="info-row"><span class="info-lbl">On-time Collection Rate</span><span class="info-val blue">${PERFORMANCE.onTimeRate}</span></div>
    </div>`;
  },

  activity() {
    const items = ACTIVITY_LOG.map(
      (a) =>
        `<div class="act-item">
        <div class="act-dot"></div>
        <div class="act-body">
          <div class="act-text">${a.text}</div>
          <div class="act-time">${a.time}</div>
        </div>
      </div>`
    ).join("");
    return `<div class="panel">
      <div class="ph">
        <div class="ph-title">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>
          Recent Activity
        </div>
        <button class="btn gh sm" onclick="showToast('Exporting log...')">Export</button>
      </div>
      ${items}
    </div>`;
  },

  security() {
    return `<div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
        Change Password
      </div></div>
      <div style="padding:18px">
        <div class="fg"><label>Current Password</label><input class="finp" type="password" placeholder="Enter current password"/></div>
        <div class="fgrid2">
          <div class="fg"><label>New Password</label><input class="finp" type="password" placeholder="Min. 8 characters"/></div>
          <div class="fg"><label>Confirm New Password</label><input class="finp" type="password" placeholder="Repeat new password"/></div>
        </div>
        <div style="display:flex;justify-content:flex-end;margin-top:6px">
          <button class="btn pri" onclick="showToast('Password updated successfully')">Update Password</button>
        </div>
      </div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
        Notification Preferences
      </div></div>
      <div class="sec-item">
        <div class="sec-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg></div>
        <div style="flex:1"><div class="sec-lbl">Payment Received</div><div class="sec-sub">Notify when a vendor payment is auto-posted</div></div>
        <div class="toggle ${
          TOGGLES.notifPay ? "on" : ""
        }" id="tog-notifPay" onclick="toggleSwitch('notifPay')"></div>
      </div>
      <div class="sec-item">
        <div class="sec-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg></div>
        <div style="flex:1"><div class="sec-lbl">Overdue Alerts</div><div class="sec-sub">Daily reminder for unpaid accounts on your route</div></div>
        <div class="toggle ${
          TOGGLES.notifOver ? "on" : ""
        }" id="tog-notifOver" onclick="toggleSwitch('notifOver')"></div>
      </div>
      <div class="sec-item">
        <div class="sec-icon"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg></div>
        <div style="flex:1"><div class="sec-lbl">System Announcements</div><div class="sec-sub">Route changes, admin updates, and maintenance</div></div>
        <div class="toggle ${
          TOGGLES.notifSys ? "on" : ""
        }" id="tog-notifSys" onclick="toggleSwitch('notifSys')"></div>
      </div>
    </div>
    <div class="panel">
      <div class="ph"><div class="ph-title">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" y1="12" x2="9" y2="12"/></svg>
        Session
      </div></div>
      <div class="info-row"><span class="info-lbl">Last Login</span><span class="info-val">${
        SECURITY.lastLogin
      }</span></div>
      <div class="info-row"><span class="info-lbl">Device</span><span class="info-val">${
        SECURITY.device
      }</span></div>
      <div style="padding:14px 18px">
        <button class="btn danger" onclick="showToast('Signed out from all devices')">Sign out all devices</button>
      </div>
    </div>`;
  },
};

let activeSection = "info";

function setSection(key) {
  activeSection = key;
  ["info", "assignment", "activity", "security"].forEach((k) => {
    document.getElementById("nav-" + k)?.classList.toggle("on", k === key);
  });
  document.getElementById("sectionContent").innerHTML = SECTIONS[key]();
}

setSection("info");

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}
