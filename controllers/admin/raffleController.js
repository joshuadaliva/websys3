const { raffleState, maskName } = require("../../services/raffleState");

const qualifiedApplicants = [
  { id: 1, name: "Ramon A. Flores" },
  { id: 2, name: "Juan Dela Cruz" },
  { id: 3, name: "Ana M. Reyes" },
];

exports.scheduleRaffle = (req, res) => {
  const { stallId, stallName, drawDate, drawTime } = req.body;
  const today = new Date();
  const inputDate = new Date(`${drawDate}T00:00:00`);
  if (inputDate < new Date(today.getFullYear(), today.getMonth(), today.getDate())) {
    return res.status(400).json({ ok: false, message: "Draw date must be today or later." });
  }
  const scheduleISO = new Date(`${drawDate}T${drawTime}:00`).toISOString();
  raffleState.stallId = stallId;
  raffleState.stallName = stallName;
  raffleState.scheduleISO = scheduleISO;
  raffleState.status = "waiting";
  raffleState.winner = null;
  raffleState.drawTimestamp = null;
  raffleState.logs = [`Scheduled ${scheduleISO}`];
  raffleState.lockedApplicants = [];
  req.app.get("io").emit("raffle:update", raffleState);
  res.json({ ok: true, raffleState });
};

exports.startRaffle = (req, res) => {
  const io = req.app.get("io");
  raffleState.lockedApplicants = qualifiedApplicants.map((a, i) => ({ ...a, raffleNumber: i + 1, masked: maskName(a.name) }));
  raffleState.status = "live";
  raffleState.logs.push(`Draw started ${new Date().toISOString()}`);
  io.emit("raffle:update", raffleState);

  setTimeout(() => {
    const winner = raffleState.lockedApplicants[Math.floor(Math.random() * raffleState.lockedApplicants.length)];
    raffleState.winner = winner;
    raffleState.status = "completed";
    raffleState.drawTimestamp = new Date().toISOString();
    raffleState.logs.push(`Winner ${winner.name} at ${raffleState.drawTimestamp}`);
    io.emit("raffle:update", raffleState);
  }, 2500);

  res.json({ ok: true, raffleState });
};

exports.getRaffleState = (req, res) => {
  res.json({ raffleState, qualifiedApplicants: qualifiedApplicants.map((a, i) => ({ ...a, raffleNumber: i + 1, masked: maskName(a.name) })) });
};

exports.showPublicRaffle = (req, res) => {
  res.render("pages/public/raffle", { raffleState, qualifiedApplicants: qualifiedApplicants.map((a, i) => ({ ...a, raffleNumber: i + 1, masked: maskName(a.name) })) });
};
