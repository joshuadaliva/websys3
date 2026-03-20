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
  ["login", "forgot", "otp", "reset"].forEach(
    (s) =>
      (document.getElementById("screen-" + s).style.display =
        s === name ? "block" : "none")
  );
  currentScreen = name;
}

/* ══ LOGIN SCREEN ══ */
function renderLogin(msg) {
  document.getElementById("screen-login").innerHTML = `
<div class="form-eyebrow">vendor Portal</div>
<div class="form-title">Welcome back</div>
<div class="form-sub">Sign in to your vendor account to continue.</div>

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
<input class="fc has-icon" id="inp-email" type="text" placeholder="vendor@lgu.gov.ph" value="vendor" autocomplete="username" onkeydown="if(event.key==='Enter')document.getElementById('inp-pw').focus()"/>
</div>
</div>

<div class="fg">
<label class="fl" for="inp-pw">
Password
<a onclick="showScreen('forgot')">Forgot password?</a>
</label>
<div class="field-wrap">
<span class="fi-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
<input class="fc has-icon has-right" id="inp-pw" type="password" placeholder="Enter your password" value="vendor123" autocomplete="current-password" onkeydown="if(event.key==='Enter')doLogin()"/>
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
    // Demo: accept vendor/vendor123 or any non-empty
    if ((email === "vendor" || email.includes("@")) && pw.length >= 6) {
      renderLogin({
        type: "suc",
        text: "Login successful! Redirecting to dashboard…",
      });
      setTimeout(() => {
        // In production: redirect to dashboard
        window.location.href = "arkipaisi-vendor-dashboard.html";
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

/* ══ FORGOT PASSWORD ══ */
function renderForgot(msg) {
  document.getElementById("screen-forgot").innerHTML = `
<div style="margin-bottom:24px">
<button onclick="showScreen('login');renderLogin()" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--t3);background:none;border:none;cursor:pointer;padding:0;font-family:'DM Sans',sans-serif;transition:color .14s" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t3)'">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="15 18 9 12 15 6"/></svg>
Back to sign in
</button>
</div>
<div class="form-eyebrow">Account Recovery</div>
<div class="form-title">Reset your<br/>password</div>
<div class="form-sub">Enter your email address and we'll send you a one-time code to reset your password.</div>

${
  msg
    ? `<div class="chip ${msg.type}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>${msg.text}</div>`
    : ""
}

<div class="fg">
<label class="fl">Email Address</label>
<div class="field-wrap">
<span class="fi-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></span>
<input class="fc has-icon" id="inp-forgot-email" type="email" placeholder="vendor@lgu.gov.ph" autocomplete="email" onkeydown="if(event.key==='Enter')doForgot()"/>
</div>
</div>

<button class="btn-submit" id="btn-forgot" onclick="doForgot()">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
<span>Send Recovery Code</span>
</button>

<div class="form-note">Code expires after 10 minutes. Check your spam folder if you don't receive it.</div>`;
  document.getElementById("inp-forgot-email")?.focus();
}

function doForgot() {
  const email = (
    document.getElementById("inp-forgot-email")?.value || ""
  ).trim();
  const btn = document.getElementById("btn-forgot");
  if (!email || !email.includes("@")) {
    renderForgot({ type: "err", text: "Please enter a valid email address." });
    return;
  }
  btn.classList.add("loading");
  btn.innerHTML = '<div class="spin"></div><span>Sending code…</span>';
  setTimeout(() => {
    showScreen("otp");
    renderOTP(email);
  }, 1000);
}

/* ══ OTP SCREEN ══ */
function renderOTP(email) {
  document.getElementById("screen-otp").innerHTML = `
<div style="margin-bottom:24px">
<button onclick="showScreen('forgot');renderForgot()" style="display:inline-flex;align-items:center;gap:6px;font-size:13px;font-weight:600;color:var(--t3);background:none;border:none;cursor:pointer;padding:0;font-family:'DM Sans',sans-serif" onmouseover="this.style.color='var(--t1)'" onmouseout="this.style.color='var(--t3)'">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" width="14" height="14"><polyline points="15 18 9 12 15 6"/></svg>
Change email
</button>
</div>

<div style="text-align:center;margin-bottom:28px">
<div style="width:56px;height:56px;border-radius:50%;background:linear-gradient(135deg,var(--or),var(--or3));display:grid;place-items:center;margin:0 auto 14px;box-shadow:0 6px 20px rgba(196,92,10,.4)">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#fff" stroke-width="2" width="24" height="24"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
</div>
<div class="form-title" style="font-size:22px">Check your email</div>
<div class="form-sub" style="margin-bottom:0">We sent a 6-digit code to<br/><strong style="color:var(--t1)">${email}</strong></div>
</div>

<div class="otp-wrap" id="otp-wrap">
<input class="otp-inp" maxlength="1" type="text" inputmode="numeric" id="otp-0" oninput="otpInput(this,0)"/>
<input class="otp-inp" maxlength="1" type="text" inputmode="numeric" id="otp-1" oninput="otpInput(this,1)"/>
<input class="otp-inp" maxlength="1" type="text" inputmode="numeric" id="otp-2" oninput="otpInput(this,2)"/>
<input class="otp-inp" maxlength="1" type="text" inputmode="numeric" id="otp-3" oninput="otpInput(this,3)"/>
<input class="otp-inp" maxlength="1" type="text" inputmode="numeric" id="otp-4" oninput="otpInput(this,4)"/>
<input class="otp-inp" maxlength="1" type="text" inputmode="numeric" id="otp-5" oninput="otpInput(this,5)"/>
</div>

<div id="otp-msg"></div>

<button class="btn-submit" id="btn-otp" onclick="doOTP()">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg>
<span>Verify Code</span>
</button>

<div class="form-note">
Didn't receive it? <a onclick="showToast('New code sent!')">Resend code</a>
&nbsp;·&nbsp;Code: <strong style="font-family:'DM Mono',monospace;letter-spacing:1px;color:var(--t2)">123456</strong> (demo)
</div>`;
  document.getElementById("otp-0")?.focus();
}

function otpInput(el, idx) {
  el.value = el.value.replace(/\D/g, "");
  if (el.value && idx < 5) {
    document.getElementById("otp-" + (idx + 1))?.focus();
  }
  // auto-submit when all filled
  const all = [...Array(6)]
    .map((_, i) => document.getElementById("otp-" + i)?.value || "")
    .join("");
  if (all.length === 6) setTimeout(doOTP, 120);
}

function doOTP() {
  const code = [...Array(6)]
    .map((_, i) => document.getElementById("otp-" + i)?.value || "")
    .join("");
  const btn = document.getElementById("btn-otp");
  if (code.length < 6) {
    document.getElementById(
      "otp-msg"
    ).innerHTML = `<div class="chip err"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Enter all 6 digits.</div>`;
    return;
  }
  btn.classList.add("loading");
  btn.innerHTML = '<div class="spin"></div><span>Verifying…</span>';
  setTimeout(() => {
    if (code === "123456") {
      showScreen("reset");
      renderReset();
    } else {
      document.getElementById(
        "otp-msg"
      ).innerHTML = `<div class="chip err"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>Incorrect code. Try 123456 (demo).</div>`;
      btn.classList.remove("loading");
      btn.innerHTML =
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg><span>Verify Code</span>';
      [...Array(6)].forEach((_, i) => {
        const el = document.getElementById("otp-" + i);
        if (el) {
          el.value = "";
          el.style.borderColor = "var(--rd)";
        }
      });
      setTimeout(
        () =>
          [...Array(6)].forEach((_, i) => {
            const el = document.getElementById("otp-" + i);
            if (el) el.style.borderColor = "";
          }),
        1200
      );
      document.getElementById("otp-0")?.focus();
    }
  }, 900);
}

/* ══ RESET PASSWORD ══ */
function renderReset(msg) {
  document.getElementById("screen-reset").innerHTML = `
<div class="form-eyebrow">Almost done</div>
<div class="form-title">Set new password</div>
<div class="form-sub">Choose a strong password for your vendor account.</div>

${
  msg
    ? `<div class="chip ${
        msg.type
      }"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">${
        msg.type === "err"
          ? '<circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>'
          : '<polyline points="9 11 12 14 22 4"/>'
      }</svg>${msg.text}</div>`
    : ""
}

<div class="fg">
<label class="fl">New Password</label>
<div class="field-wrap">
<span class="fi-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
<input class="fc has-icon" id="inp-newpw" type="password" placeholder="Minimum 8 characters" oninput="checkStrength(this.value)"/>
</div>
<div class="pw-strength" id="pw-strength">
<div class="pw-bars"><div class="pw-bar" id="pb1"></div><div class="pw-bar" id="pb2"></div><div class="pw-bar" id="pb3"></div><div class="pw-bar" id="pb4"></div></div>
<div class="pw-lbl" id="pw-lbl">Enter a password</div>
</div>
</div>

<div class="fg">
<label class="fl">Confirm Password</label>
<div class="field-wrap">
<span class="fi-left"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg></span>
<input class="fc has-icon" id="inp-confirmpw" type="password" placeholder="Re-enter your password" onkeydown="if(event.key==='Enter')doReset()"/>
</div>
</div>

<button class="btn-submit" id="btn-reset" onclick="doReset()">
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 11 12 14 22 4"/></svg>
<span>Update Password</span>
</button>`;
  document.getElementById("inp-newpw")?.focus();
}

function checkStrength(val) {
  const el = document.getElementById("pw-strength");
  if (!el) return;
  el.classList.toggle("show", val.length > 0);
  const bars = [1, 2, 3, 4].map((i) => document.getElementById("pb" + i));
  const lbl = document.getElementById("pw-lbl");
  let score = 0;
  if (val.length >= 8) score++;
  if (/[A-Z]/.test(val)) score++;
  if (/[0-9]/.test(val)) score++;
  if (/[^A-Za-z0-9]/.test(val)) score++;
  bars.forEach((b, i) => {
    b.className = "pw-bar";
    if (i < score) b.classList.add(score <= 1 ? "w" : score <= 2 ? "m" : "s");
  });
  if (lbl)
    lbl.textContent = [
      "Too short",
      "Weak — add uppercase or numbers",
      "Fair — add symbols",
      "Strong password",
      "Very strong!",
    ][score];
}

function doReset() {
  const pw = document.getElementById("inp-newpw")?.value || "";
  const confirm = document.getElementById("inp-confirmpw")?.value || "";
  const btn = document.getElementById("btn-reset");
  if (pw.length < 8) {
    renderReset({
      type: "err",
      text: "Password must be at least 8 characters.",
    });
    return;
  }
  if (pw !== confirm) {
    renderReset({ type: "err", text: "Passwords do not match." });
    return;
  }
  btn.classList.add("loading");
  btn.innerHTML = '<div class="spin"></div><span>Updating…</span>';
  setTimeout(() => {
    showScreen("login");
    renderLogin({
      type: "suc",
      text: "Password updated successfully. Please sign in with your new password.",
    });
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
