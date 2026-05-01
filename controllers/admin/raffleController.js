const raffleState = {
  stallId: '#06',
  stallName: 'Dry Goods',
  drawDate: null,
  drawTime: null,
  status: 'waiting',
  participants: [
    { raffleNumber: 1, name: "Ramon A. Flores" },
    { raffleNumber: 2, name: "Juan Dela Cruz" },
    { raffleNumber: 3, name: "Ana M. Reyes" },
  ],
  winner: null,
  winnerId: null,
  drawnAt: null,
  updatedAt: null,
  logs: [],
  lockedApplicants: null,
};

function toPublicRaffleState() {
  const scheduleISO =
    raffleState.drawDate && raffleState.drawTime
      ? new Date(`${raffleState.drawDate}T${raffleState.drawTime}`).toISOString()
      : null;

  return {
    ...raffleState,
    hasStarted: raffleState.status !== "waiting" && raffleState.status !== "scheduled",
    scheduleISO,
    drawTimestamp: raffleState.drawnAt,
    logs: raffleState.logs || [],
  };
}
exports.toPublicRaffleState = toPublicRaffleState;

exports.showPublicRaffle = (req, res) => {
  const qualifiedApplicants = raffleState.participants.map((participant) => ({
    raffleNumber: participant.raffleNumber,
    masked: participant.name,
  }));

  res.render('pages/public/raffle', { raffleState: toPublicRaffleState(), qualifiedApplicants });
};

exports.scheduleRaffle = (req, res) => {
  const { stallId, stallName, drawDate, drawTime, applicationDeadline, qualifiedApplicants } = req.body || {};
  if (!drawDate || !drawTime) {
    return res.status(400).json({ ok: false, message: "Draw date and time are required." });
  }
  if (applicationDeadline && new Date(drawDate) <= new Date(applicationDeadline)) {
    return res.status(400).json({ ok: false, message: "Raffle can only be scheduled after application deadline." });
  }

  raffleState.stallId = stallId || raffleState.stallId;
  raffleState.stallName = stallName || raffleState.stallName;
  raffleState.drawDate = drawDate;
  raffleState.drawTime = drawTime;
  raffleState.status = 'scheduled';
  raffleState.winner = null;
  raffleState.winnerId = null;
  raffleState.drawnAt = null;
  raffleState.updatedAt = new Date().toISOString();
  if (Array.isArray(qualifiedApplicants) && qualifiedApplicants.length) {
    raffleState.participants = qualifiedApplicants.map((name, idx) => ({
      raffleNumber: idx + 1,
      name,
    }));
  }
  raffleState.lockedApplicants = raffleState.participants.map((p) => ({ ...p }));
  raffleState.logs = [
    `Raffle scheduled for ${raffleState.drawDate} ${raffleState.drawTime}.`,
    `Qualified applicants locked: ${raffleState.lockedApplicants.length} participant(s).`,
  ];

  const payload = toPublicRaffleState();
  const io = req.app.get("io");
  io.emit("raffle:update", payload);
  return res.json({ ok: true, raffleState: payload });
};

exports.startRaffle = async (req, res) => {
  if (raffleState.status === "completed" && raffleState.winner) {
    return res.status(409).json({ ok: false, message: "Raffle already completed. Redraw is not allowed.", raffleState: toPublicRaffleState() });
  }
  if (raffleState.status === "live") {
    return res.status(409).json({ ok: false, message: "Raffle draw is already in progress.", raffleState: toPublicRaffleState() });
  }
  if (!raffleState.drawDate || !raffleState.drawTime) {
    return res.status(400).json({ ok: false, message: "Raffle must be scheduled before it can start." });
  }
  const scheduledAt = new Date(`${raffleState.drawDate}T${raffleState.drawTime}`).getTime();
  if (Date.now() < scheduledAt) {
    return res.status(400).json({ ok: false, message: "Raffle can only start at or after the scheduled time." });
  }

  raffleState.status = 'live';
  raffleState.winner = null;
  raffleState.winnerId = null;
  raffleState.drawnAt = null;
  raffleState.logs = [
    ...(raffleState.logs || []),
    `Live drawing started at ${new Date().toLocaleTimeString()}.`,
  ];
  const io = req.app.get("io");
  io.emit("raffle:update", toPublicRaffleState());

  await new Promise((resolve) => setTimeout(resolve, 2500));

  const lockedList = raffleState.lockedApplicants && raffleState.lockedApplicants.length
    ? raffleState.lockedApplicants
    : raffleState.participants;
  const winner = lockedList[Math.floor(Math.random() * lockedList.length)];
  raffleState.winner = winner;
  raffleState.winnerId = winner.raffleNumber;
  raffleState.status = 'completed';
  raffleState.drawnAt = new Date().toISOString();
  raffleState.updatedAt = new Date().toISOString();
  raffleState.logs = [
    ...(raffleState.logs || []),
    `Raffle started.`,
    `Winner: ${winner.name} (Raffle #${winner.raffleNumber}).`,
  ];

  const payload = toPublicRaffleState();
  io.emit("raffle:update", payload);
  return res.json({ ok: true, raffleState: payload });
};

exports.getRaffleState = (req, res) => {
  return res.json({ ok: true, raffleState: toPublicRaffleState() });
};
