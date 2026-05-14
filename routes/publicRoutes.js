const express = require("express");
const router = express.Router();
const { pool } = require("../config/database");
const upload = require("../config/upload");
const crypto = require("crypto");

// Public landing page
router.get("/", async (req, res) => {
  try {
    const [stalls] = await pool.query(
      "SELECT * FROM stalls WHERE status = 'posted' AND is_archived = 0 ORDER BY posted_at DESC"
    );
    const [raffles] = await pool.query(
      "SELECT r.*, s.stall_number FROM raffles r JOIN stalls s ON r.stall_id = s.id WHERE r.status IN ('scheduled','live') ORDER BY r.created_at DESC LIMIT 1"
    );

    const raffleState = raffles[0] ? {
      stallId: raffles[0].stall_id,
      stallName: raffles[0].stall_name || raffles[0].stall_number,
      drawDate: raffles[0].draw_date,
      drawTime: raffles[0].draw_time,
      status: raffles[0].status,
      scheduleISO: raffles[0].draw_date && raffles[0].draw_time
        ? new Date(`${raffles[0].draw_date}T${raffles[0].draw_time}`).toISOString()
        : null,
      hasStarted: raffles[0].status !== 'waiting' && raffles[0].status !== 'scheduled',
    } : { scheduleISO: null, status: 'waiting', hasStarted: false };

    const hasSchedule = Boolean(raffleState.scheduleISO);
    res.render("index", { raffleState, hasSchedule, stalls });
  } catch (error) {
    console.error('Public page error:', error);
    res.render("index", {
      raffleState: { scheduleISO: null, status: 'waiting', hasStarted: false },
      hasSchedule: false,
      stalls: []
    });
  }
});

// Application submission
router.post("/apply", upload.fields([
  { name: 'governmentIdPhoto', maxCount: 1 },
  { name: 'selfieWithId', maxCount: 1 }
]), async (req, res) => {
  try {
    const {
      firstName, lastName, mobile, email, address, age,
      preferredStall, secondChoiceStall, intendedBusiness, previousExperience
    } = req.body;

    // Generate application number
    const [countResult] = await pool.query("SELECT COUNT(*) as count FROM applications");
    const year = new Date().getFullYear();
    const appNumber = `APP-${year}-${String(countResult[0].count + 1).padStart(3, '0')}`;

    const govIdPath = req.files['governmentIdPhoto'] ? '/uploads/ids/' + req.files['governmentIdPhoto'][0].filename : null;
    const selfiePath = req.files['selfieWithId'] ? '/uploads/selfies/' + req.files['selfieWithId'][0].filename : null;

    await pool.query(
      `INSERT INTO applications (application_number, first_name, last_name, mobile, email, address, age,
       preferred_stall_id, second_choice_stall_id, intended_business, previous_experience,
       government_id_photo, selfie_with_id) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
      [appNumber, firstName, lastName, mobile, email, address, age,
       preferredStall, secondChoiceStall || null, intendedBusiness, previousExperience || null,
       govIdPath, selfiePath]
    );

    // Create notification for admin
    const [admins] = await pool.query("SELECT id FROM users WHERE role = 'admin' LIMIT 1");
    if (admins[0]) {
      await pool.query(
        `INSERT INTO notifications (title, message, type, recipient_id, recipient_role)
         VALUES (?, ?, 'application', ?, 'admin')`,
        ['New Application', `New application ${appNumber} from ${firstName} ${lastName}`, admins[0].id]
      );
    }

    res.json({ ok: true, applicationNumber: appNumber });
  } catch (error) {
    console.error('Application submit error:', error);
    res.status(500).json({ ok: false, message: 'Failed to submit application' });
  }
});

// Track application
router.get("/track/:applicationNumber", async (req, res) => {
  try {
    const [apps] = await pool.query(
      `SELECT a.*, s.stall_number, s.section FROM applications a
       LEFT JOIN stalls s ON a.preferred_stall_id = s.id
       WHERE a.application_number = ?`,
      [req.params.applicationNumber]
    );
    if (apps.length === 0) {
      return res.json({ ok: false, message: 'Application not found' });
    }
    const app = apps[0];
    res.json({
      ok: true,
      application: {
        applicationNumber: app.application_number,
        name: `${app.first_name} ${app.last_name}`,
        stallNumber: app.stall_number,
        section: app.section,
        preScreeningStatus: app.pre_screening_status,
        qualificationStatus: app.qualification_status,
        selectionStatus: app.selection_status,
        submittedAt: app.created_at
      }
    });
  } catch (error) {
    console.error('Track error:', error);
    res.status(500).json({ ok: false, message: 'Error tracking application' });
  }
});

// Document upload by applicant (via token)
router.post("/upload-documents/:token", upload.array('documents', 5), async (req, res) => {
  try {
    const [apps] = await pool.query(
      "SELECT * FROM applications WHERE upload_token = ? AND upload_token_expiry > NOW()",
      [req.params.token]
    );
    if (apps.length === 0) {
      return res.status(400).json({ ok: false, message: 'Invalid or expired upload link' });
    }

    const appId = apps[0].id;
    for (const file of req.files) {
      await pool.query(
        `INSERT INTO application_documents (application_id, name, file_path, status)
         VALUES (?, ?, ?, 'pending')`,
        [appId, file.originalname, '/uploads/documents/' + file.filename]
      );
    }

    await pool.query(
      "UPDATE applications SET qualification_status = 'under_review' WHERE id = ?",
      [appId]
    );

    res.json({ ok: true, message: 'Documents uploaded successfully' });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ ok: false, message: 'Upload failed' });
  }
});

// Document submission page
router.get("/document-upload/:token", async (req, res) => {
  try {
    const [apps] = await pool.query(
      "SELECT a.*, s.stall_number FROM applications a LEFT JOIN stalls s ON a.preferred_stall_id = s.id WHERE a.upload_token = ? AND a.upload_token_expiry > NOW()",
      [req.params.token]
    );
    if (apps.length === 0) {
      return res.status(400).send('Invalid or expired upload link');
    }
    res.render("pages/admin/document-submission", {
      application: apps[0],
      token: req.params.token
    });
  } catch (error) {
    res.status(500).send('Error loading page');
  }
});

// Public raffle page
router.get("/raffle/live", async (req, res) => {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles WHERE status IN ('scheduled','live','completed') ORDER BY created_at DESC LIMIT 1"
    );
    if (raffles.length === 0) {
      return res.render("pages/public/raffle", {
        raffleState: { status: 'waiting', stallName: '', scheduleISO: null, hasStarted: false, logs: [] },
        qualifiedApplicants: []
      });
    }

    const raffle = raffles[0];
    const [participants] = await pool.query(
      "SELECT * FROM raffle_participants WHERE raffle_id = ? ORDER BY raffle_number",
      [raffle.id]
    );

    const raffleState = {
      stallId: raffle.stall_id,
      stallName: raffle.stall_name,
      drawDate: raffle.draw_date,
      drawTime: raffle.draw_time,
      status: raffle.status,
      winner: raffle.winner_name ? { raffleNumber: raffle.winner_raffle_number, name: raffle.winner_name } : null,
      winnerId: raffle.winner_raffle_number,
      drawnAt: raffle.drawn_at,
      hasStarted: raffle.status !== 'waiting' && raffle.status !== 'scheduled',
      scheduleISO: raffle.draw_date && raffle.draw_time
        ? new Date(`${raffle.draw_date}T${raffle.draw_time}`).toISOString() : null,
      drawTimestamp: raffle.drawn_at,
      logs: raffle.logs ? (typeof raffle.logs === 'string' ? JSON.parse(raffle.logs) : raffle.logs) : [],
      participants: participants.map(p => ({ raffleNumber: p.raffle_number, name: p.name })),
    };

    const qualifiedApplicants = participants.map(p => ({
      raffleNumber: p.raffle_number,
      masked: p.name
    }));

    res.render("pages/public/raffle", { raffleState, qualifiedApplicants });
  } catch (error) {
    console.error('Raffle page error:', error);
    res.render("pages/public/raffle", {
      raffleState: { status: 'waiting', stallName: '', scheduleISO: null, hasStarted: false, logs: [] },
      qualifiedApplicants: []
    });
  }
});

// Raffle state API
router.get("/api/raffle/state", async (req, res) => {
  try {
    const [raffles] = await pool.query(
      "SELECT * FROM raffles WHERE status IN ('scheduled','live','completed') ORDER BY created_at DESC LIMIT 1"
    );
    if (raffles.length === 0) {
      return res.json({ ok: true, raffleState: { status: 'waiting' } });
    }
    const raffle = raffles[0];
    const [participants] = await pool.query(
      "SELECT * FROM raffle_participants WHERE raffle_id = ?",
      [raffle.id]
    );

    res.json({
      ok: true,
      raffleState: {
        stallId: raffle.stall_id,
        stallName: raffle.stall_name,
        drawDate: raffle.draw_date,
        drawTime: raffle.draw_time,
        status: raffle.status,
        winner: raffle.winner_name ? { raffleNumber: raffle.winner_raffle_number, name: raffle.winner_name } : null,
        hasStarted: raffle.status !== 'waiting' && raffle.status !== 'scheduled',
        scheduleISO: raffle.draw_date && raffle.draw_time
          ? new Date(`${raffle.draw_date}T${raffle.draw_time}`).toISOString() : null,
        logs: raffle.logs ? (typeof raffle.logs === 'string' ? JSON.parse(raffle.logs) : raffle.logs) : [],
        participants: participants.map(p => ({ raffleNumber: p.raffle_number, name: p.name })),
      }
    });
  } catch (error) {
    console.error('Raffle state error:', error);
    res.status(500).json({ ok: false });
  }
});

module.exports = router;
