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
};

exports.showPublicRaffle = (req, res) => {
  res.render('pages/public/raffle', {raffleState})
} 

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
  return res.json({ ok: true, raffleState });
};

exports.startRaffle = (req, res) => {
  raffleState.status = 'live';
  const winner = raffleState.participants[Math.floor(Math.random() * raffleState.participants.length)];
  raffleState.winner = winner;
  raffleState.status = 'completed';
  raffleState.drawnAt = new Date().toISOString();
  raffleState.updatedAt = new Date().toISOString();
  return res.json({ ok: true, raffleState });
};

exports.getRaffleState = (req, res) => {
  return res.json({ ok: true, raffleState });
};
