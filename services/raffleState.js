const raffleState = {
  stallId: "#06",
  stallName: "Dry Goods",
  scheduleISO: null,
  status: "waiting",
  lockedApplicants: [],
  winner: null,
  drawTimestamp: null,
  hasStarted: false,
  logs: [],
};

function maskName(name) {
  const parts = name.split(" ");
  return parts.map((p) => (p.length <= 1 ? p : p[0] + "*".repeat(Math.max(1, p.length - 1)))).join(" ");
}

module.exports = { raffleState, maskName };
