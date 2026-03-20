/* ══ THEME ══ */
let dark = false;
function toggleTheme() {
  dark = !dark;
  document.documentElement.classList.toggle("dark", dark);
  document.getElementById("themeIco").innerHTML = dark
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

/* ══ MOBILE BRAND: hide on desktop ══ */
function updateMobileBrand() {
  const el = document.getElementById("mobile-brand");
  if (el) el.style.display = window.innerWidth < 900 ? "flex" : "none";
}
updateMobileBrand();
window.addEventListener("resize", updateMobileBrand);

/* ══ STATE ══ */
let showPw = false,
  remember = false,
  currentScreen = "login";

/* ══ SCREENS ══ */
function showScreen(name) {
  ["login"].forEach(
    (s) =>
      (document.getElementById("screen-" + s).style.display =
        s === name ? "block" : "none")
  );
  currentScreen = name;
}

/* ══ LOGIN SCREEN ══ */
function renderLogin(msg) {
  document.getElementById("screen-login").innerHTML = `
<div class="form-eyebrow">Administrator Portal</div>
<div class="form-title">Welcome back</div>
<div class="form-sub">Sign in to your admin account to continue.</div>

${
  msg
    ? `<div class="chip ${msg.type}">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
${
  msg.type === "err"
    ? '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
    : '<polyline points="9 11 12 14 22 4"/>'
}
</svg>${msg.text}
</div>`
    : ""
}

<div class="fg">
<label class="fl" for="inp-email">Username or Email</label>
<div class="field-wrap">
<span class="fi-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg></span>
<input class="fc has-icon" id="inp-email" type="text" placeholder="admin@lgu.gov.ph" value="admin" autocomplete="username" onkeydown="if(event.key==='Enter')document.getElementById('inp-pw').focus()"/>
</div>
</div>

<div class="fg">
<label class="fl" for="inp-pw">
Password
</label>
<div class="field-wrap">
<span class="fi-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
<input class="fc has-icon has-right" id="inp-pw" type="password" placeholder="Enter your password" value="admin123" autocomplete="current-password" onkeydown="if(event.key==='Enter')doLogin()"/>
<button class="fi-right" onclick="togglePw()" id="pw-eye" title="Show/hide password">
  <svg id="eye-ico" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
</button>
</div>
</div>

<div class="remember-row">
<label class="chk-label" onclick="toggleRemember()">
<div class="chk-box" id="chk-remember"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg></div>
Keep me signed in
</label>
</div>

<button class="btn-submit" id="btn-login" onclick="doLogin()">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4"/><polyline points="10 17 15 12 10 7"/><line x1="15" y1="12" x2="3" y2="12"/></svg>
<span>Sign In to Dashboard</span>
</button>

<div class="form-note">
Protected system · Unauthorised access is prohibited.<br/>
<a href="/">← Back to public site</a>
</div>`;
}

function togglePw() {
  showPw = !showPw;
  const inp = document.getElementById("inp-pw");
  if (inp) inp.type = showPw ? "text" : "password";
  const ico = document.getElementById("eye-ico");
  if (ico)
    ico.innerHTML = showPw
      ? '<path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/><path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/><line x1="1" y1="1" x2="23" y2="23"/>'
      : '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>';
}

function toggleRemember() {
  remember = !remember;
  const box = document.getElementById("chk-remember");
  if (box) box.classList.toggle("on", remember);
}

function doLogin() {
  const email = (document.getElementById("inp-email")?.value || "").trim();
  const pw = (document.getElementById("inp-pw")?.value || "").trim();
  const btn = document.getElementById("btn-login");

  if (!email || !pw) {
    renderLogin({
      type: "err",
      text: "Please enter your username and password.",
    });
    document
      .getElementById("screen-login")
      .querySelector(".fg .field-wrap .fc")
      ?.focus();
    return;
  }

  // Loading state
  btn.classList.add("loading");
  btn.innerHTML = '<div class="spin"></div><span>Signing in…</span>';

  setTimeout(() => {
    // Demo: accept admin/admin123 or any non-empty
    if ((email === "admin" || email.includes("@")) && pw.length >= 6) {
      renderLogin({
        type: "suc",
        text: "Login successful! Redirecting to dashboard…",
      });
      setTimeout(() => {
        // In production: redirect to dashboard
        window.location.href = "dashboard";
      }, 1200);
    } else {
      renderLogin({
        type: "err",
        text: "Invalid credentials. Please check your username and password.",
      });
      // Shake the form
      document.getElementById("screen-login").classList.add("shake");
      setTimeout(
        () => document.getElementById("screen-login").classList.remove("shake"),
        400
      );
    }
  }, 900);
}

/* ══ TOAST ══ */
function showToast(msg) {
  let t = document.getElementById("_toast");
  if (!t) {
    t = document.createElement("div");
    t.id = "_toast";
    t.style.cssText =
      'position:fixed;bottom:24px;left:50%;transform:translateX(-50%);z-index:9999;padding:11px 20px;border-radius:10px;font-size:13px;font-weight:600;box-shadow:0 8px 28px rgba(0,0,0,.18);transition:opacity .3s;pointer-events:none;display:flex;align-items:center;gap:8px;background:#1a0d00;color:#fff;font-family:"DM Sans",sans-serif;white-space:nowrap';
    document.body.appendChild(t);
  }
  t.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" width="14" height="14"><polyline points="20 6 9 17 4 12"/></svg>${msg}`;
  t.style.opacity = "1";
  clearTimeout(t._t);
  t._t = setTimeout(() => (t.style.opacity = "0"), 2800);
}

/* ══ KEYBOARD NAV ══ */
document.addEventListener("keydown", (e) => {
  if (e.key === "Enter" && currentScreen === "login") doLogin();
});

/* ══ INIT ══ */
showScreen("login");
renderLogin();
