let selectedDocument = null;
let SB_OPEN = window.innerWidth >= 768;
let DARK = false;

function openSB() {
  SB_OPEN = true;
  const sb = document.getElementById("sb");
  const veil = document.getElementById("veil");
  const main = document.getElementById("main");
  if (sb) sb.style.transform = "translateX(0)";
  if (window.innerWidth < 768) {
    if (veil) veil.style.display = "block";
    if (main) main.style.marginLeft = "0";
  } else {
    if (veil) veil.style.display = "none";
    if (main) main.style.marginLeft = "var(--sidebar-w)";
  }
}

function closeSB() {
  const veil = document.getElementById("veil");
  const sb = document.getElementById("sb");
  const main = document.getElementById("main");
  SB_OPEN = false;
  if (veil) veil.style.display = "none";
  if (sb) sb.style.transform = "translateX(calc(-1 * var(--sidebar-w)))";
  if (main && window.innerWidth < 768) main.style.marginLeft = "0";
}

function toggleSB() {
  SB_OPEN ? closeSB() : openSB();
}

function toggleTheme() {
  DARK = !DARK;
  document.documentElement.classList.toggle("dark", DARK);
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
  document.getElementById("docModal").classList.add("show");
}

function closeDocModal() {
  document.getElementById("docModal").classList.remove("show");
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

(function initLayout() {
  if (window.innerWidth < 768) closeSB();
  else openSB();
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      if (SB_OPEN) openSB();
    } else if (!SB_OPEN) {
      closeSB();
    }
  });
})();
