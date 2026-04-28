const REVIEW_STATUS_STORAGE_KEY = "application_review_status_map";

function getParams() {
  const qs = new URLSearchParams(location.search);
  return {
    stallId: qs.get("stallId") || "",
    applicant: qs.get("applicant") || "",
    step: qs.get("step") || "step1",
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

function renderDocs(step) {
  const list = document.getElementById("docsList");
  const docs =
    step === "step1"
      ? ["Valid Government ID", "Selfie with ID"]
      : ["Application Form", "Business Permit", "Barangay Clearance"];

  list.innerHTML = docs
    .map(
      (d, i) => `<div class="doc">
      <span>${d}</span>
      <select id="doc-${i}">
        <option value="approved">Approved</option>
        <option value="rejected">Rejected</option>
      </select>
    </div>`
    )
    .join("");
}

(function init() {
  const { stallId, applicant, step } = getParams();
  const key = keyOf(stallId, applicant);
  const map = readMap();
  const current = map[key] || { pre: "Docs Submitted", status: "b-submitted", statusTxt: "Locked" };

  document.getElementById("contextLine").textContent = `${applicant} · Stall ${stallId}`;
  document.getElementById("stepTitle").textContent =
    step === "step1"
      ? "Step 1: Identity Verification (Pre-screening)"
      : "Step 2: Qualification Documents";
  renderDocs(step);

  document.getElementById("failBtn").onclick = () => {
    if (step === "step1") {
      current.pre = "Failed";
      current.status = "b-submitted";
      current.statusTxt = "Locked";
    } else {
      current.status = "b-rejected";
      current.statusTxt = "Rejected";
    }
    map[key] = current;
    writeMap(map);
    alert("Marked as failed.");
  };

  document.getElementById("passBtn").onclick = () => {
    if (step === "step1") {
      current.pre = "Passed";
      current.status = "b-doc-pending";
      current.statusTxt = "Pending";
    } else {
      current.status = "b-qualified";
      current.statusTxt = "Qualified";
    }
    map[key] = current;
    writeMap(map);
    alert("Marked as passed.");
  };
})();
