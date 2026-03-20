let SB_OPEN = window.innerWidth >= 768;
let DARK = false;
let ACTIVE_TAB = "all";

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

/* ═══ ICONS ═══ */
const ICONS = {
  payment: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>`,
  overdue: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>`,
  system: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>`,
};

const TAG_LABELS = { payment: "Payment", overdue: "Overdue", system: "System" };

function getFiltered() {
  return NOTIFS.filter((n) => {
    if (ACTIVE_TAB === "all") return true;
    if (ACTIVE_TAB === "unread") return !n.read;
    return n.type === ACTIVE_TAB;
  });
}

function render() {
  const list = getFiltered();
  const wrap = document.getElementById("notifList");
  const unread = NOTIFS.filter((n) => !n.read).length;

  document.getElementById("cntAll").textContent = NOTIFS.length;
  document.getElementById("cntUnread").textContent = unread;
  document.getElementById("visibleCount").textContent = list.length;

  if (!list.length) {
    wrap.innerHTML = `<div class="notif-empty">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"/><path d="M13.73 21a2 2 0 0 1-3.46 0"/></svg>
      <p>No notifications here</p><span>You are all caught up</span>
    </div>`;
    return;
  }

  wrap.innerHTML = list
    .map(
      (n) => `
    <div class="notif-item${n.read ? "" : " unread"}" onclick="markRead(${
        n.id
      })">
      <div class="notif-ico ${n.type}">${ICONS[n.type] || ICONS.system}</div>
      <div class="notif-body">
        <div class="notif-title">${n.title}</div>
        <div class="notif-desc">${n.desc}</div>
        <div class="notif-meta">
          <span class="notif-time">${n.time}</span>
          <span class="notif-tag ${n.tag}">${TAG_LABELS[n.tag] || n.tag}</span>
        </div>
      </div>
      <div class="notif-right">
        <svg class="notif-chevron" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="9 18 15 12 9 6"/></svg>
      </div>
    </div>
  `
    )
    .join("");
}

function setTab(tab, el) {
  ACTIVE_TAB = tab;
  document.querySelectorAll(".ntab").forEach((t) => t.classList.remove("on"));
  if (el) el.classList.add("on");
  render();
}

function markRead(id) {
  const n = NOTIFS.find((x) => x.id === id);
  if (n) n.read = true;
  render();
}

function markAllRead() {
  NOTIFS.forEach((n) => {
    n.read = true;
  });
  render();
  showToast("All notifications marked as read");
}

/* ═══ TOAST ═══ */
let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}

/* ═══ INIT ═══ */
render();
