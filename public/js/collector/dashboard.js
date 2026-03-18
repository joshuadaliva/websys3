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
  var ico = document.getElementById("themeIco");
  ico.innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ── CLOCK ── */
function updateClock() {
  var now = new Date();
  var h = now.getHours(),
    m = now.getMinutes();
  var ampm = h >= 12 ? "PM" : "AM";
  h = h % 12 || 12;
  document.getElementById("liveClock").textContent =
    h + ":" + (m < 10 ? "0" : "") + m + " " + ampm;
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("liveDate").textContent =
    days[now.getDay()] +
    ", " +
    months[now.getMonth()] +
    " " +
    now.getDate() +
    ", " +
    now.getFullYear();
  var greet =
    h < 12 ? "Good morning" : h < 17 ? "Good afternoon" : "Good evening";
  document.querySelector(".db-greeting").textContent = greet;
}
updateClock();
setInterval(updateClock, 30000);

/* ── CALENDAR ── */
var calDate = new Date(2026, 2, 1);
var events = [5, 10, 12, 15, 18, 20, 25];

function renderCalendar() {
  var months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  document.getElementById("calMonth").textContent =
    months[calDate.getMonth()] + " " + calDate.getFullYear();
  var grid = document.getElementById("calGrid");
  var days = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
  var html = days
    .map(function (d) {
      return '<div class="cal-day-hdr">' + d + "</div>";
    })
    .join("");
  var first = new Date(calDate.getFullYear(), calDate.getMonth(), 1).getDay();
  var total = new Date(
    calDate.getFullYear(),
    calDate.getMonth() + 1,
    0
  ).getDate();
  var today = new Date();
  var isThisMonth =
    today.getMonth() === calDate.getMonth() &&
    today.getFullYear() === calDate.getFullYear();
  for (var i = 0; i < first; i++) {
    var prev = new Date(
      calDate.getFullYear(),
      calDate.getMonth(),
      -first + i + 1
    ).getDate();
    html += '<div class="cal-day other-month">' + prev + "</div>";
  }
  for (var d = 1; d <= total; d++) {
    var cls = "cal-day";
    var dow = (first + d - 1) % 7;
    if (dow === 0 || dow === 6) cls += " weekend";
    if (isThisMonth && d === today.getDate()) cls += " today";
    if (events.indexOf(d) !== -1) cls += " has-event";
    html +=
      '<div class="' +
      cls +
      '" onclick="showToast(\'March ' +
      d +
      "')\">" +
      d +
      "</div>";
  }
  grid.innerHTML = html;
}

function changeMonth(dir) {
  calDate.setMonth(calDate.getMonth() + dir);
  renderCalendar();
}
renderCalendar();

/* ── TASK TOGGLE ── */
function toggleTask(cb) {
  cb.classList.toggle("done");
  var lbl = cb.parentElement.querySelector(".task-lbl");
  if (lbl) lbl.classList.toggle("done");
}

/* ── MODAL ── */
var OR_COUNTER = 846;
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

function openPaymentModal() {
  var today = new Date();
  var yyyy = today.getFullYear();
  var mm = String(today.getMonth() + 1).padStart(2, "0");
  var dd = String(today.getDate()).padStart(2, "0");
  document.getElementById("pm-date").value = yyyy + "-" + mm + "-" + dd;
  document.getElementById("pm-or").value = "OR-" + yyyy + "-0" + OR_COUNTER;
  document.getElementById("pm-vendor").value = "";
  document.getElementById("pm-amount").value = "";
  document.getElementById("pm-remarks").value = "";
  openModal("paymentModal");
}

function savePayment() {
  var vendor = document.getElementById("pm-vendor").value;
  var amount = document.getElementById("pm-amount").value;
  if (!vendor) {
    showToast("Please select a vendor");
    return;
  }
  if (!amount || parseFloat(amount) <= 0) {
    showToast("Please enter a valid amount");
    return;
  }
  var or = document.getElementById("pm-or").value;
  OR_COUNTER++;
  closeModal("paymentModal");
  showToast("Payment saved! " + or + " issued");
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
