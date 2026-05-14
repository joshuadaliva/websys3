const express = require("express");
const router = express.Router();
const { pool } = require("../config/database");
const { isAuthenticated } = require("../middlewares/auth");

// Get stalls (public)
router.get("/stalls", async (req, res) => {
  try {
    const status = req.query.status;
    let query = "SELECT * FROM stalls WHERE is_archived = 0";
    const params = [];
    if (status) {
      query += " AND status = ?";
      params.push(status);
    }
    query += " ORDER BY stall_number";
    const [stalls] = await pool.query(query, params);
    res.json({ ok: true, stalls });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to fetch stalls' });
  }
});

// Get stall by id (public)
router.get("/stalls/:id", async (req, res) => {
  try {
    const [stalls] = await pool.query("SELECT * FROM stalls WHERE id = ?", [req.params.id]);
    if (stalls.length === 0) return res.status(404).json({ ok: false, message: 'Stall not found' });
    res.json({ ok: true, stall: stalls[0] });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to fetch stall' });
  }
});

// Get notifications (authenticated)
router.get("/notifications", isAuthenticated, async (req, res) => {
  try {
    const [notifications] = await pool.query(
      "SELECT * FROM notifications WHERE recipient_id = ? ORDER BY created_at DESC LIMIT 20",
      [req.session.user.id]
    );
    const [unreadCount] = await pool.query(
      "SELECT COUNT(*) as count FROM notifications WHERE recipient_id = ? AND is_read = 0",
      [req.session.user.id]
    );
    res.json({ ok: true, notifications, unreadCount: unreadCount[0].count });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to fetch notifications' });
  }
});

// Mark all notifications read
router.put("/notifications/read-all", isAuthenticated, async (req, res) => {
  try {
    await pool.query(
      "UPDATE notifications SET is_read = 1, read_at = NOW() WHERE recipient_id = ? AND is_read = 0",
      [req.session.user.id]
    );
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
});

// Get vendors (admin only)
router.get("/vendors", isAuthenticated, async (req, res) => {
  try {
    const [vendors] = await pool.query(
      `SELECT v.*, s.stall_number FROM vendors v
       LEFT JOIN stalls s ON v.stall_id = s.id
       WHERE v.is_archived = 0 ORDER BY v.first_name`
    );
    res.json({ ok: true, vendors });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to fetch vendors' });
  }
});

// Get applications (admin only)
router.get("/applications", isAuthenticated, async (req, res) => {
  try {
    const stallId = req.query.stallId;
    let query = `SELECT a.*, s.stall_number, s.section FROM applications a
                 LEFT JOIN stalls s ON a.preferred_stall_id = s.id WHERE a.is_archived = 0`;
    const params = [];
    if (stallId) {
      query += " AND a.preferred_stall_id = ?";
      params.push(stallId);
    }
    query += " ORDER BY a.created_at DESC";
    const [applications] = await pool.query(query, params);
    res.json({ ok: true, applications });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to fetch applications' });
  }
});

// Get application details
router.get("/applications/:id", isAuthenticated, async (req, res) => {
  try {
    const [apps] = await pool.query(
      `SELECT a.*, s.stall_number, s.section FROM applications a
       LEFT JOIN stalls s ON a.preferred_stall_id = s.id WHERE a.id = ?`,
      [req.params.id]
    );
    if (apps.length === 0) return res.status(404).json({ ok: false, message: 'Application not found' });

    const [docs] = await pool.query(
      "SELECT * FROM application_documents WHERE application_id = ?",
      [req.params.id]
    );
    res.json({ ok: true, application: apps[0], documents: docs });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to fetch application' });
  }
});

// Get raffle state (public)
router.get("/raffle/state", async (req, res) => {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles WHERE status IN ('scheduled','live','completed') ORDER BY created_at DESC LIMIT 1"
    );
    if (raffles.length === 0) return res.json({ ok: true, raffleState: { status: 'waiting' } });
    const [participants] = await pool.query("SELECT * FROM raffle_participants WHERE raffle_id = ?", [raffles[0].id]);

    const raffle = raffles[0];
    res.json({
      ok: true,
      raffleState: {
        stallName: raffle.stall_name,
        drawDate: raffle.draw_date,
        drawTime: raffle.draw_time,
        status: raffle.status,
        hasStarted: raffle.status !== 'waiting' && raffle.status !== 'scheduled',
        scheduleISO: raffle.draw_date && raffle.draw_time
          ? new Date(`${raffle.draw_date}T${raffle.draw_time}`).toISOString() : null,
        winner: raffle.winner_name ? { raffleNumber: raffle.winner_raffle_number, name: raffle.winner_name } : null,
        participants: participants.map(p => ({ raffleNumber: p.raffle_number, name: p.name })),
      }
    });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
});

// Get payment methods (public)
router.get("/payment-methods", async (req, res) => {
  try {
    const [methods] = await pool.query("SELECT * FROM payment_methods WHERE is_active = 1");
    res.json({ ok: true, methods });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
});

module.exports = router;
