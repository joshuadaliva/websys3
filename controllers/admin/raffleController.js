const { pool } = require('../../config/database');

function toPublicRaffleState(raffle, participants) {
  if (!raffle) {
    return { stallId: null, stallName: '', drawDate: null, drawTime: null, status: 'waiting',
      participants: [], winner: null, winnerId: null, drawnAt: null, hasStarted: false,
      scheduleISO: null, drawTimestamp: null, logs: [], lockedApplicants: null, wasRescheduled: false };
  }
  const scheduleISO = raffle.draw_date && raffle.draw_time
    ? new Date(`${raffle.draw_date}T${raffle.draw_time}`).toISOString() : null;
  const logs = raffle.logs ? (typeof raffle.logs === 'string' ? JSON.parse(raffle.logs) : raffle.logs) : [];

  return {
    stallId: raffle.stall_id,
    stallName: raffle.stall_name,
    drawDate: raffle.draw_date,
    drawTime: raffle.draw_time,
    status: raffle.status,
    participants: (participants || []).map(p => ({ raffleNumber: p.raffle_number, name: p.name })),
    winner: raffle.winner_name ? { raffleNumber: raffle.winner_raffle_number, name: raffle.winner_name } : null,
    winnerId: raffle.winner_raffle_number,
    drawnAt: raffle.drawn_at,
    hasStarted: raffle.status !== 'waiting' && raffle.status !== 'scheduled',
    scheduleISO,
    drawTimestamp: raffle.drawn_at,
    logs,
    wasRescheduled: raffle.was_rescheduled,
  };
}

exports.toPublicRaffleState = async function() {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles WHERE status IN ('scheduled','live','completed') ORDER BY created_at DESC LIMIT 1"
    );
    if (raffles.length === 0) return toPublicRaffleState(null, []);
    const [participants] = await pool.query("SELECT * FROM raffle_participants WHERE raffle_id = ?", [raffles[0].id]);
    return toPublicRaffleState(raffles[0], participants);
  } catch {
    return toPublicRaffleState(null, []);
  }
};

exports.showPublicRaffle = async (req, res) => {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles WHERE status IN ('scheduled','live','completed') ORDER BY created_at DESC LIMIT 1"
    );
    const raffle = raffles[0] || null;
    let participants = [];
    if (raffle) {
      const [parts] = await pool.query("SELECT * FROM raffle_participants WHERE raffle_id = ?", [raffle.id]);
      participants = parts;
    }
    const raffleState = toPublicRaffleState(raffle, participants);
    const qualifiedApplicants = participants.map(p => ({ raffleNumber: p.raffle_number, masked: p.name }));
    res.render('pages/public/raffle', { raffleState, qualifiedApplicants });
  } catch (error) {
    console.error('Raffle page error:', error);
    res.render('pages/public/raffle', {
      raffleState: toPublicRaffleState(null, []),
      qualifiedApplicants: []
    });
  }
};

exports.scheduleRaffle = async (req, res) => {
  const { stallId, stallName, drawDate, drawTime, applicationDeadline, qualifiedApplicants } = req.body || {};
  if (!drawDate || !drawTime) {
    return res.status(400).json({ ok: false, message: "Draw date and time are required." });
  }

  try {
    // Check for existing active raffle for this stall
    const [existing] = await pool.query(
      "SELECT id FROM raffles WHERE stall_id = ? AND status IN ('scheduled','live')", [stallId]
    );

    let raffleId;
    const logs = JSON.stringify([
      `Raffle scheduled for ${drawDate} ${drawTime}.`,
      `Qualified applicants locked.`
    ]);

    if (existing.length > 0) {
      raffleId = existing[0].id;
      await pool.query(
        `UPDATE raffles SET draw_date = ?, draw_time = ?, status = 'scheduled',
         stall_name = ?, was_rescheduled = 1, logs = ?, winner_name = NULL,
         winner_raffle_number = NULL, drawn_at = NULL WHERE id = ?`,
        [drawDate, drawTime, stallName || '', logs, raffleId]
      );
      await pool.query("DELETE FROM raffle_participants WHERE raffle_id = ?", [raffleId]);
    } else {
      const [result] = await pool.query(
        `INSERT INTO raffles (stall_id, stall_name, draw_date, draw_time, status, logs)
         VALUES (?, ?, ?, ?, 'scheduled', ?)`,
        [stallId, stallName || '', drawDate, drawTime, logs]
      );
      raffleId = result.insertId;
    }

    // Add participants
    if (Array.isArray(qualifiedApplicants)) {
      for (let i = 0; i < qualifiedApplicants.length; i++) {
        const name = typeof qualifiedApplicants[i] === 'string' ? qualifiedApplicants[i] : qualifiedApplicants[i].name;
        const appId = typeof qualifiedApplicants[i] === 'object' ? qualifiedApplicants[i].applicationId : null;
        await pool.query(
          "INSERT INTO raffle_participants (raffle_id, raffle_number, name, application_id) VALUES (?, ?, ?, ?)",
          [raffleId, i + 1, name, appId]
        );
      }
    }

    const [raffle] = await pool.query("SELECT * FROM raffles WHERE id = ?", [raffleId]);
    const [parts] = await pool.query("SELECT * FROM raffle_participants WHERE raffle_id = ?", [raffleId]);
    const payload = toPublicRaffleState(raffle[0], parts);
    const io = req.app.get("io");
    io.emit("raffle:update", payload);
    return res.json({ ok: true, raffleState: payload });
  } catch (error) {
    console.error('Schedule raffle error:', error);
    return res.status(500).json({ ok: false, message: 'Failed to schedule raffle' });
  }
};

exports.startRaffle = async (req, res) => {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles WHERE status = 'scheduled' ORDER BY created_at DESC LIMIT 1"
    );
    if (raffles.length === 0) {
      return res.status(400).json({ ok: false, message: "No scheduled raffle found." });
    }

    const raffle = raffles[0];
    if (raffle.status === 'completed' && raffle.winner_name) {
      return res.status(409).json({ ok: false, message: "Raffle already completed." });
    }

    const scheduledAt = new Date(`${raffle.draw_date}T${raffle.draw_time}`).getTime();
    if (Date.now() < scheduledAt) {
      return res.status(400).json({ ok: false, message: "Raffle can only start at or after the scheduled time." });
    }

    // Set to live
    const liveLogs = JSON.stringify([
      ...(raffle.logs ? (typeof raffle.logs === 'string' ? JSON.parse(raffle.logs) : raffle.logs) : []),
      `Live drawing started at ${new Date().toLocaleTimeString()}.`
    ]);
    await pool.query("UPDATE raffles SET status = 'live', logs = ? WHERE id = ?", [liveLogs, raffle.id]);

    const [participants] = await pool.query("SELECT * FROM raffle_participants WHERE raffle_id = ?", [raffle.id]);
    const io = req.app.get("io");

    // Emit live state
    const [liveRaffle] = await pool.query("SELECT * FROM raffles WHERE id = ?", [raffle.id]);
    io.emit("raffle:update", toPublicRaffleState(liveRaffle[0], participants));

    // Simulate draw delay
    await new Promise(resolve => setTimeout(resolve, 2500));

    // Pick winner
    const winner = participants[Math.floor(Math.random() * participants.length)];
    const completedLogs = JSON.stringify([
      ...(typeof liveLogs === 'string' ? JSON.parse(liveLogs) : liveLogs),
      `Raffle started.`,
      `Winner: ${winner.name} (Raffle #${winner.raffle_number}).`
    ]);

    await pool.query(
      `UPDATE raffles SET status = 'completed', winner_name = ?, winner_raffle_number = ?,
       winner_application_id = ?, drawn_at = NOW(), logs = ? WHERE id = ?`,
      [winner.name, winner.raffle_number, winner.application_id, completedLogs, raffle.id]
    );

    // Update application selection status
    if (winner.application_id) {
      await pool.query("UPDATE applications SET selection_status = 'selected' WHERE id = ?", [winner.application_id]);
      // Mark others as not selected
      const otherParticipants = participants.filter(p => p.application_id && p.application_id !== winner.application_id);
      for (const p of otherParticipants) {
        await pool.query("UPDATE applications SET selection_status = 'not_selected' WHERE id = ?", [p.application_id]);
      }
    }

    const [completedRaffle] = await pool.query("SELECT * FROM raffles WHERE id = ?", [raffle.id]);
    const payload = toPublicRaffleState(completedRaffle[0], participants);
    io.emit("raffle:update", payload);
    return res.json({ ok: true, raffleState: payload });
  } catch (error) {
    console.error('Start raffle error:', error);
    return res.status(500).json({ ok: false, message: 'Failed to start raffle' });
  }
};

exports.getRaffleState = async (req, res) => {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles ORDER BY created_at DESC LIMIT 1"
    );
    if (raffles.length === 0) {
      return res.json({ ok: true, raffleState: toPublicRaffleState(null, []) });
    }
    const [participants] = await pool.query("SELECT * FROM raffle_participants WHERE raffle_id = ?", [raffles[0].id]);
    return res.json({ ok: true, raffleState: toPublicRaffleState(raffles[0], participants) });
  } catch (error) {
    return res.status(500).json({ ok: false });
  }
};
