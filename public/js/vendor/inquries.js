let SB_OPEN = window.innerWidth >= 768,
  isDark = false;
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
  isDark = !isDark;
  document.documentElement.classList.toggle("dark", isDark);
  const i = document.getElementById("themeIcon");
  i.innerHTML = isDark
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

let ACTIVE_ID = null;
const STATUS_CFG = {
  open: { label: "Open", cls: "open" },
  waiting: { label: "Awaiting Reply", cls: "waiting" },
  resolved: { label: "Resolved", cls: "resolved" },
  closed: { label: "Closed", cls: "closed" },
};
const PROGRESS_STEPS = ["Submitted", "Under Review", "Replied", "Resolved"];
function getStepIdx(status) {
  return { open: 1, waiting: 2, resolved: 3, closed: 3 }[status] || 0;
}

function renderCards() {
  const q = (document.getElementById("searchInp").value || "").toLowerCase();
  const stFil = document.getElementById("statusFil").value;
  const catFil = document.getElementById("catFil").value;
  const filtered = TICKETS.filter((t) => {
    if (stFil && t.status !== stFil) return false;
    if (catFil && t.category !== catFil) return false;
    if (
      q &&
      !t.subject.toLowerCase().includes(q) &&
      !t.category.toLowerCase().includes(q)
    )
      return false;
    return true;
  });
  const grid = document.getElementById("cardsGrid");
  const openCount = TICKETS.filter(
    (t) => t.status === "open" || t.status === "waiting"
  ).length;
  const badge = document.getElementById("sbBadge");
  if (badge) badge.textContent = openCount;
  if (!filtered.length) {
    grid.innerHTML =
      '<div class="inq-empty" style="grid-column:1/-1"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg><p>No inquiries found</p><span>Try adjusting your filters or create a new inquiry.</span></div>';
    return;
  }
  grid.innerHTML = filtered
    .map((t) => {
      const sc = STATUS_CFG[t.status] || STATUS_CFG.open;
      const last = t.messages[t.messages.length - 1];
      const preview = last
        ? last.from === "system"
          ? "— " + last.text
          : last.name + ": " + last.text
        : "";
      return `<div class="ticket-card status-${
        t.status
      }" onclick="openMessenger(${t.id})">
      <div class="tc-top"><div class="tc-subject">${t.subject}</div>${
        t.unread ? '<div class="tc-unread"></div>' : ""
      }</div>
      <div class="tc-preview">${preview}</div>
      <div class="tc-bottom">
        <div class="tc-meta"><span class="tc-status ${sc.cls}">${
        sc.label
      }</span><span class="tc-cat">${t.category}</span></div>
        <div style="display:flex;align-items:center;gap:10px">
          <div class="tc-msgs"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>${
            t.messages.length
          }</div>
          <div class="tc-time">${t.createdAt}</div>
        </div>
      </div>
    </div>`;
    })
    .join("");
}

function openMessenger(id) {
  const t = TICKETS.find((x) => x.id === id);
  if (!t) return;
  ACTIVE_ID = id;
  t.unread = false;
  document.getElementById("mmSubject").textContent = t.subject;
  const stEl = document.getElementById("mmStatus");
  stEl.textContent = STATUS_CFG[t.status].label;
  stEl.className = "mm-status " + STATUS_CFG[t.status].cls;
  document.getElementById("mmCat").textContent = " " + t.category;
  const stepIdx = getStepIdx(t.status);
  document.getElementById("progSteps").innerHTML = PROGRESS_STEPS.map(
    (label, i) => {
      const done = i < stepIdx,
        active = i === stepIdx,
        state = done ? "done" : active ? "active" : "pending";
      const lineHtml =
        i < PROGRESS_STEPS.length - 1
          ? `<div class="prog-line ${i < stepIdx ? "done" : "pending"}"></div>`
          : "";
      return `<div class="prog-step"><div class="prog-step-wrap"><div class="prog-dot ${state}">${
        i + 1
      }</div><div class="prog-lbl ${state}">${label}</div></div>${lineHtml}</div>`;
    }
  ).join("");
  renderMessages(t);
  const inp = document.getElementById("mmInput"),
    btn = document.getElementById("sendBtn"),
    hint = document.getElementById("mmHint");
  if (t.status === "resolved" || t.status === "closed") {
    inp.disabled = true;
    btn.disabled = true;
    inp.placeholder =
      "This ticket is " + t.status + ". Create a new inquiry to continue.";
    hint.textContent = "";
  } else {
    inp.disabled = false;
    btn.disabled = false;
    inp.placeholder = "Type your message...";
    hint.textContent = "Press Enter to send \u2022 Shift+Enter for new line";
  }
  document.getElementById("messengerOv").classList.add("open");
  renderCards();
  setTimeout(() => {
    const msgs = document.getElementById("mmMsgs");
    msgs.scrollTop = msgs.scrollHeight;
    if (!inp.disabled) inp.focus();
  }, 80);
}

function renderMessages(t) {
  const msgs = document.getElementById("mmMsgs");
  msgs.innerHTML = t.messages
    .map((m) => {
      if (m.from === "system")
        return `<div class="sys-pill">${m.text} &bull; ${m.time}</div>`;
      const mine = m.from === "vendor";
      return `<div class="msg-group ${
        mine ? "mine" : "theirs"
      }"><div class="msg-sender-lbl">${m.name} &bull; ${
        m.time
      }</div><div class="bubble">${m.text}</div></div>`;
    })
    .join("");
  setTimeout(() => {
    msgs.scrollTop = msgs.scrollHeight;
  }, 20);
}

function closeMessenger() {
  document.getElementById("messengerOv").classList.remove("open");
  ACTIVE_ID = null;
  renderCards();
}

function sendMessage() {
  if (ACTIVE_ID === null) return;
  const t = TICKETS.find((x) => x.id === ACTIVE_ID);
  const inp = document.getElementById("mmInput");
  const txt = inp.value.trim();
  if (!txt || !t || t.status === "resolved" || t.status === "closed") return;
  const now = new Date(),
    hh = now.getHours(),
    mm = now.getMinutes(),
    ap = hh >= 12 ? "PM" : "AM";
  const ts =
    "Today, " + (hh % 12 || 12) + ":" + (mm < 10 ? "0" + mm : mm) + " " + ap;
  t.messages.push({ from: "vendor", name: VENDOR_NAME, text: txt, time: ts });
  t.status = "waiting";
  t.unread = false;
  inp.value = "";
  inp.style.height = "";
  renderMessages(t);
  setTimeout(() => {
    t.messages.push({
      from: "office",
      name: "Market Office",
      text: "Thank you for your message. We have received it and will respond within 1 to 2 business days.",
      time: ts,
    });
    if (ACTIVE_ID === t.id) renderMessages(t);
    renderCards();
  }, 2000);
}

function onMsgKey(e) {
  if (e.key === "Enter" && !e.shiftKey) {
    e.preventDefault();
    sendMessage();
  }
}
function autoGrow(el) {
  el.style.height = "";
  el.style.height = Math.min(el.scrollHeight, 100) + "px";
}
function openNewTicket() {
  document.getElementById("ntModalOv").classList.add("open");
}
function closeNewTicket() {
  document.getElementById("ntModalOv").classList.remove("open");
}

function submitTicket() {
  const cat = document.getElementById("ntCat").value,
    subj = document.getElementById("ntSubject").value.trim(),
    msg = document.getElementById("ntMsg").value.trim();
  if (!cat) {
    showToast("Please select a category");
    return;
  }
  if (!subj) {
    showToast("Please enter a subject");
    return;
  }
  if (!msg) {
    showToast("Please enter a message");
    return;
  }
  const now = new Date(),
    hh = now.getHours(),
    mm = now.getMinutes(),
    ap = hh >= 12 ? "PM" : "AM";
  const ts =
    "Today, " + (hh % 12 || 12) + ":" + (mm < 10 ? "0" + mm : mm) + " " + ap;
  const newId = TICKETS.length;
  TICKETS.unshift({
    id: newId,
    subject: subj,
    category: cat,
    status: "open",
    unread: false,
    createdAt: ts,
    messages: [
      { from: "vendor", name: VENDOR_NAME, text: msg, time: ts },
      {
        from: "system",
        text: "Inquiry submitted. The market office will respond within 1-2 business days.",
        time: ts,
      },
    ],
  });
  TICKETS.forEach((t, i) => {
    t.id = i;
  });
  document.getElementById("ntCat").value = "";
  document.getElementById("ntSubject").value = "";
  document.getElementById("ntMsg").value = "";
  closeNewTicket();
  renderCards();
  showToast("Inquiry submitted successfully");
  setTimeout(() => {
    openMessenger(0);
  }, 300);
}

renderCards();
let toastTimer = null;
function showToast(m) {
  const t = document.getElementById("toast");
  t.textContent = m;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}
