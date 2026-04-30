let selectedDocument = null;
let SB_IS_OPEN = window.innerWidth >= 768;
let DARK = false;

function openSB() {
  SB_IS_OPEN = true;
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
  SB_IS_OPEN = false;
  document.getElementById("sb").style.transform = "translateX(calc(-1 * var(--sidebar-w)))";
  document.getElementById("veil").style.display = "none";
  document.getElementById("main").style.marginLeft = "0";
}

function toggleSB() {
  if (SB_IS_OPEN) closeSB();
  else openSB();
}

function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
  document.getElementById("themeIco").innerHTML = DARK
    ? '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>'
    : '<circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>';
}

function renderStats(list) {
  const counts = {
    "Application Documents": 0,
    "Vendor Documents": 0,
    "OR Documentation Storage": 0,
  };
  list.forEach((d) => (counts[d.category] = (counts[d.category] || 0) + 1));
  document.getElementById("appCount").textContent = counts["Application Documents"];
  document.getElementById("vendorCount").textContent = counts["Vendor Documents"];
  document.getElementById("orCount").textContent = counts["OR Documentation Storage"];
}

function viewDocument(id) {
  selectedDocument = DOCUMENTS.find((d) => d.id === id);
  if (!selectedDocument) return;
  document.getElementById("modalTitle").textContent = selectedDocument.fileName;
  document.getElementById("modalMeta").textContent = `${selectedDocument.category} • ${selectedDocument.owner} • ${selectedDocument.size}`;
  document.getElementById("docModal").classList.add("open");
}

function closeDocModal() {
  document.getElementById("docModal").classList.remove("open");
}

function downloadSelected() {
  if (!selectedDocument) return;
  alert(`Downloading ${selectedDocument.fileName}`);
}

function renderDocuments() {
  const q = document.getElementById("docSearch").value.trim().toLowerCase();
  const category = document.getElementById("docCategory").value;
  const status = document.getElementById("docStatus").value;

  const list = DOCUMENTS.filter((d) => {
    if (category && d.category !== category) return false;
    if (status && d.status !== status) return false;
    if (!q) return true;
    return [d.fileName, d.owner, d.relatedTo, d.id].join(" ").toLowerCase().includes(q);
  });

  const body = document.getElementById("docBody");
  body.innerHTML = list
    .map((d) => `<tr>
      <td><div style="font-weight:600">${d.fileName}</div><div style="color:var(--t3)">${d.id} • ${d.type}</div></td>
      <td>${d.category}</td>
      <td>${d.owner}</td>
      <td>${d.relatedTo}</td>
      <td>${d.uploadedAt}</td>
      <td><span class="badge ${d.status === "Verified" ? "ok" : "pending"}">${d.status}</span></td>
      <td><button class="btn" onclick="viewDocument('${d.id}')">View</button></td>
    </tr>`)
    .join("");

  if (!list.length) {
    body.innerHTML = '<tr><td colspan="7" style="text-align:center;color:var(--t3)">No documents found.</td></tr>';
  }

  renderStats(list);
}

renderDocuments();
(function () {
  if (window.innerWidth < 768) closeSB();
  else openSB();
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      document.getElementById("veil").style.display = "none";
      if (SB_IS_OPEN) document.getElementById("main").style.marginLeft = "var(--sidebar-w)";
    } else {
      document.getElementById("main").style.marginLeft = "0";
      if (SB_IS_OPEN) document.getElementById("veil").style.display = "block";
    }
  });
})();
