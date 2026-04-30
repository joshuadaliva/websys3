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
  drawnAt: null,
  updatedAt: null,
  logs: [],
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

exports.showPublicRaffle = (req, res) => {
  const qualifiedApplicants = raffleState.participants.map((participant) => ({
    raffleNumber: participant.raffleNumber,
    masked: participant.name,
  }));

  res.render('pages/public/raffle', { raffleState: toPublicRaffleState(), qualifiedApplicants });
};

exports.scheduleRaffle = (req, res) => {
  const { stallId, stallName, drawDate, drawTime } = req.body || {};
  raffleState.stallId = stallId || raffleState.stallId;
  raffleState.stallName = stallName || raffleState.stallName;
  raffleState.drawDate = drawDate;
  raffleState.drawTime = drawTime;
  raffleState.status = 'scheduled';
  raffleState.winner = null;
  raffleState.drawnAt = null;
  raffleState.updatedAt = new Date().toISOString();
  raffleState.logs = [
    `Raffle scheduled for ${raffleState.drawDate} ${raffleState.drawTime}.`,
  ];

  const payload = toPublicRaffleState();
  const io = req.app.get("io");
  io.emit("raffle:update", payload);
  return res.json({ ok: true, raffleState: payload });
};

exports.startRaffle = (req, res) => {
  raffleState.status = 'live';
  const winner = raffleState.participants[Math.floor(Math.random() * raffleState.participants.length)];
  raffleState.winner = winner;
  raffleState.status = 'completed';
  raffleState.drawnAt = new Date().toISOString();
  raffleState.updatedAt = new Date().toISOString();
  raffleState.logs = [
    ...(raffleState.logs || []),
    `Raffle started.`,
    `Winner: ${winner.name} (Raffle #${winner.raffleNumber}).`,
  ];

  const payload = toPublicRaffleState();
  const io = req.app.get("io");
  io.emit("raffle:update", payload);
  return res.json({ ok: true, raffleState: payload });
};

exports.getRaffleState = (req, res) => {
  return res.json({ ok: true, raffleState: toPublicRaffleState() });
};
