const REVIEW_STATUS_STORAGE_KEY = "application_review_status_map";

function getParams() {
  const qs = new URLSearchParams(location.search);
  return {
    stallId: qs.get("stallId") || "",
    applicant: qs.get("applicant") || "",
  };
}

function readMap() {
  try {
    return JSON.parse(localStorage.getItem(REVIEW_STATUS_STORAGE_KEY) || "{}");
  } catch (err) {
    return {};
  }
}

function writeMap(map) {
  localStorage.setItem(REVIEW_STATUS_STORAGE_KEY, JSON.stringify(map));
}

function keyOf(stallId, applicant) {
  return `${stallId}::${applicant}`;
}

function renderDocs(targetId, docs) {
  const list = document.getElementById(targetId);
  list.innerHTML = docs
    .map(
      (d, i) => `<div class="doc">
      <span>${d}</span>
      <select id="${targetId}-${i}">
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>`
    )
    .join("");
}

(function init() {
  const { stallId, applicant } = getParams();
  const key = keyOf(stallId, applicant);
  const map = readMap();
  const current = map[key] || {
    pre: "Docs Submitted",
    status: "b-submitted",
    statusTxt: "Locked",
  };

  document.getElementById(
    "contextLine"
  ).textContent = `${applicant} · Stall ${stallId}`;

  renderDocs("step1Docs", ["Valid Government ID", "Selfie with ID"]);
  renderDocs("step2Docs", [
    "Application Form",
    "Business Permit",
    "Barangay Clearance",
  ]);

  document.getElementById("step1FailBtn").onclick = () => {
    current.pre = "Failed";
    current.status = "b-submitted";
    current.statusTxt = "Locked";
    map[key] = current;
    writeMap(map);
    alert("Step 1 marked as failed.");
  };

  document.getElementById("step1PassBtn").onclick = () => {
    current.pre = "Passed";
    current.status = "b-doc-pending";
    current.statusTxt = "Pending";
    map[key] = current;
    writeMap(map);
    alert("Step 1 passed. Qualification is now Pending.");
  };

  document.getElementById("step2FailBtn").onclick = () => {
    current.status = "b-rejected";
    current.statusTxt = "Rejected";
    map[key] = current;
    writeMap(map);
    alert("Step 2 marked as failed.");
  };

  document.getElementById("step2PassBtn").onclick = () => {
    current.status = "b-qualified";
    current.statusTxt = "Qualified";
    map[key] = current;
    writeMap(map);
    alert("Step 2 passed.");
  };

  document.getElementById("finalRejectBtn").onclick = () => {
    current.status = "b-rejected";
    current.statusTxt = "Rejected";
    map[key] = current;
    writeMap(map);
    alert("Application rejected.");
  };

  document.getElementById("finalApproveBtn").onclick = () => {
    current.status = "b-qualified";
    current.statusTxt = "Qualified";
    map[key] = current;
    writeMap(map);
    alert("Application approved.");
  };
})();
