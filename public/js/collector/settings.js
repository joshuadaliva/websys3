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

function tog(id) {
  const el = document.getElementById("tog-" + id);
  if (el) {
    el.classList.toggle("on");
    showToast("Setting saved");
  }
}

function setTheme(t) {
  ["light", "dark", "auto"].forEach((x) => {
    document.getElementById("th-" + x)?.classList.toggle("on", x === t);
  });
  DARK = t === "dark";
  document.documentElement.classList.toggle("dark", DARK);
  showToast("Theme set to " + t);
}

function setFontSize(s) {
  ["sm", "md", "lg"].forEach((x) =>
    document.getElementById("fs-" + x)?.classList.toggle("on", x === s)
  );
  showToast("Font size set to " + s);
}

function setORFormat(f) {
  ["num", "dash"].forEach((x) =>
    document.getElementById("orf-" + x)?.classList.toggle("on", x === f)
  );
  showToast("OR format saved");
}

let toastTimer = null;
function showToast(msg) {
  const t = document.getElementById("toast");
  t.textContent = msg;
  t.classList.add("show");
  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => t.classList.remove("show"), 2400);
}
