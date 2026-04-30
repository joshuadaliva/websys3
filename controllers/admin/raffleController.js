const raffleState = {
  stallId: '#06',
  stallName: 'Dry Goods',
  drawDate: null,
  drawTime: null,
  status: 'waiting',
  updatedAt: null,
};

exports.scheduleRaffle = (req, res) => {
  const { stallId, stallName, drawDate, drawTime } = req.body || {};
  raffleState.stallId = stallId || raffleState.stallId;
  raffleState.stallName = stallName || raffleState.stallName;
  raffleState.drawDate = drawDate;
  raffleState.drawTime = drawTime;
  raffleState.status = 'scheduled';
  raffleState.updatedAt = new Date().toISOString();
  return res.json({ ok: true, raffleState });
};

exports.startRaffle = (req, res) => {
  raffleState.status = 'live';
  raffleState.updatedAt = new Date().toISOString();
  return res.json({ ok: true, raffleState });
};

exports.getRaffleState = (req, res) => {
  return res.json({ ok: true, raffleState });
};
