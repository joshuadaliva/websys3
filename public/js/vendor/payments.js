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

const MBDG = {
  Cash: '<span class="mbdg cash">Cash</span>',
  GCash: '<span class="mbdg gcash">&loz; GCash</span>',
  Maya: '<span class="mbdg maya">&loz; Maya</span>',
};

function renderTable() {
  const tbody = document.getElementById("payTable");
  const info = document.getElementById("tblInfo");
  const paid = PAYMENTS.filter((p) => p.status === "paid");
  const total = paid.reduce((s, p) => s + p.amount, 0);
  info.textContent = `${
    PAYMENTS.length
  } records — Total paid 2026: PHP ${total.toLocaleString()}`;
  tbody.innerHTML = PAYMENTS.map((p) => {
    let statusCell, actionCell;
    if (p.status === "paid") {
      statusCell = '<span class="bdg gr">Paid</span>';
      actionCell = `<button class="btn gh sm" onclick="showToast('Downloading OR...')"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="12" height="12"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>OR</button>`;
    } else if (p.status === "unpaid") {
      statusCell = '<span class="bdg rd">Unpaid</span>';
      actionCell = `<button class="pay-action-btn unpaid" onclick="openPayModal(${p.id})"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>Pay Now</button>`;
    } else {
      statusCell = '<span class="bdg am">Overdue</span>';
      actionCell = `<button class="pay-action-btn overdue" onclick="openPayModal(${p.id})">Pay Overdue</button>`;
    }
    return `<tr>
      <td style="font-weight:700">${p.period}</td>
      <td style="font-family:'DM Mono',monospace;font-size:12px;font-weight:700;color:var(--ac)">${
        p.or || '<span style="color:var(--t3)">Not yet issued</span>'
      }</td>
      <td style="font-family:'DM Mono',monospace;font-weight:700;color:${
        p.status === "paid" ? "var(--gr)" : "var(--rd)"
      }">&#8369;${p.amount.toLocaleString()}</td>
      <td>${
        p.method
          ? MBDG[p.method] || p.method
          : '<span style="color:var(--t3)">--</span>'
      }</td>
      <td style="font-size:12px;color:var(--t2)">${p.issuedBy || "--"}</td>
      <td style="font-size:12px;color:var(--t3)">${p.date || "--"}</td>
      <td>${statusCell}</td>
      <td>${actionCell}</td>
    </tr>`;
  }).join("");
}

let ACTIVE_PAYMENT_ID = null,
  SELECTED_METHOD = null;

function openPayModal(payId) {
  ACTIVE_PAYMENT_ID = payId;
  SELECTED_METHOD = null;
  const p = payId !== null ? PAYMENTS.find((x) => x.id === payId) : null;
  document.getElementById("pmPeriod").textContent =
    (p ? p.period : "March 2026") +
    " — PHP " +
    (p ? p.amount.toLocaleString() : "1,200");
  ["gcash", "maya", "cash"].forEach((m) => {
    document.getElementById("mc-" + m).classList.remove("selected");
    document.getElementById("mr-" + m).classList.remove("selected");
  });
  document.getElementById("refPanel").classList.remove("show");
  document.getElementById("cashPanel").classList.remove("show");
  const btn = document.getElementById("pmConfirmBtn");
  btn.disabled = true;
  btn.style.opacity = ".4";
  btn.style.cursor = "not-allowed";
  document.getElementById("payModalOv").classList.add("open");
}

function closePayModal() {
  document.getElementById("payModalOv").classList.remove("open");
  ACTIVE_PAYMENT_ID = null;
  SELECTED_METHOD = null;
}

function selectMethod(m) {
  SELECTED_METHOD = m;
  ["gcash", "maya", "cash"].forEach((x) => {
    document.getElementById("mc-" + x).classList.toggle("selected", x === m);
    document.getElementById("mr-" + x).classList.toggle("selected", x === m);
  });
  document.getElementById("refPanel").classList.remove("show");
  document.getElementById("cashPanel").classList.remove("show");
  if (m === "gcash") {
    document.getElementById("refPanel").classList.add("show");
    document.getElementById("rpLabel").textContent = "GCash Payment Reference";
    document.getElementById("rpHint").textContent =
      "Open GCash → Send Money → paste this reference. Your payment will be auto-detected and posted within minutes.";
  } else if (m === "maya") {
    document.getElementById("refPanel").classList.add("show");
    document.getElementById("rpLabel").textContent = "Maya Payment Reference";
    document.getElementById("rpHint").textContent =
      "Open Maya → Send Money → paste this reference. Your payment will be auto-detected and posted immediately.";
  } else {
    document.getElementById("cashPanel").classList.add("show");
  }
  const btn = document.getElementById("pmConfirmBtn");
  btn.disabled = false;
  btn.style.opacity = "1";
  btn.style.cursor = "pointer";
}

function confirmPayment() {
  if (!SELECTED_METHOD) return;
  closePayModal();
  if (SELECTED_METHOD === "gcash" || SELECTED_METHOD === "maya") {
    showToast(
      "Reference code ready — complete payment in " +
        (SELECTED_METHOD === "gcash" ? "GCash" : "Maya")
    );
  } else {
    showToast("Noted! Pay your collector or visit the market office.");
  }
}

function copyRef() {
  navigator.clipboard.writeText(REF_CODE).catch(() => {});
  showToast("Reference code copied!");
}

renderTable();

let toastTimer = null;
function showToast(m) {
  const t = document.getElementById("toast");
  t.textContent = m;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2500);
}
