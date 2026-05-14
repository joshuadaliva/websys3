const { pool } = require('../../config/database');
const crypto = require('crypto');

const showApplicationManagement = async (req, res) => {
  try {
    // Get posted stalls with applicant counts
    const [postedStalls] = await pool.query(
      `SELECT s.*,
        (SELECT COUNT(*) FROM applications a WHERE a.preferred_stall_id = s.id AND a.is_archived = 0) as applicant_count,
        (SELECT COUNT(*) FROM applications a WHERE a.preferred_stall_id = s.id AND a.qualification_status = 'qualified' AND a.is_archived = 0) as qualified_count
       FROM stalls s WHERE s.status = 'posted' AND s.is_archived = 0 ORDER BY s.posted_at DESC`
    );

    // Get all applications with stall info
    const [applications] = await pool.query(
      `SELECT a.*, s.stall_number, s.section, s.stall_type,
        (SELECT COUNT(*) FROM application_documents ad WHERE ad.application_id = a.id) as document_count
       FROM applications a
       LEFT JOIN stalls s ON a.preferred_stall_id = s.id
       WHERE a.is_archived = 0
       ORDER BY a.created_at DESC`
    );

    res.render("pages/admin/application-management", { postedStalls, applications });
  } catch (error) {
    console.error('Application management error:', error);
    res.render("pages/admin/application-management", { postedStalls: [], applications: [] });
  }
};

const showApplicationValidation = async (req, res) => {
  try {
    const [applications] = await pool.query(
      `SELECT a.*, s.stall_number, s.section
       FROM applications a LEFT JOIN stalls s ON a.preferred_stall_id = s.id
       WHERE a.pre_screening_status = 'pending' AND a.is_archived = 0
       ORDER BY a.created_at ASC`
    );
    res.render("pages/admin/application-validation", { applications });
  } catch (error) {
    res.render("pages/admin/application-validation", { applications: [] });
  }
};

const showDocumentSubmission = async (req, res) => {
  try {
    const appId = req.query.applicationId;
    let application = null;
    let documents = [];

    if (appId) {
      const [apps] = await pool.query(
        `SELECT a.*, s.stall_number FROM applications a
         LEFT JOIN stalls s ON a.preferred_stall_id = s.id WHERE a.id = ?`,
        [appId]
      );
      application = apps[0] || null;

      if (application) {
        const [docs] = await pool.query(
          "SELECT * FROM application_documents WHERE application_id = ? ORDER BY uploaded_at DESC",
          [appId]
        );
        documents = docs;
      }
    }
    res.render("pages/admin/document-submission", { application, documents });
  } catch (error) {
    res.render("pages/admin/document-submission", { application: null, documents: [] });
  }
};

const updatePreScreening = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await pool.query(
      "UPDATE applications SET pre_screening_status = ? WHERE id = ?",
      [status, id]
    );

    if (status === 'passed') {
      await pool.query(
        "UPDATE applications SET qualification_status = 'awaiting_documents' WHERE id = ?",
        [id]
      );
    }

    // Log activity
    await pool.query(
      "INSERT INTO activity_logs (user_id, action, description, category) VALUES (?, ?, ?, 'application')",
      [req.session.user.id, 'pre_screening_review', `Pre-screening ${status} for application #${id}`]
    );

    res.json({ ok: true, message: `Pre-screening ${status}` });
  } catch (error) {
    console.error('Pre-screening error:', error);
    res.status(500).json({ ok: false, message: 'Failed to update pre-screening' });
  }
};

const updateQualification = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await pool.query("UPDATE applications SET qualification_status = ? WHERE id = ?", [status, id]);
    res.json({ ok: true, message: `Qualification status updated to ${status}` });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update qualification' });
  }
};

const updateSelection = async (req, res) => {
  try {
    const { id } = req.params;
    const { status } = req.body;
    await pool.query("UPDATE applications SET selection_status = ? WHERE id = ?", [status, id]);
    res.json({ ok: true, message: `Selection status updated to ${status}` });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update selection' });
  }
};

const sendUploadLink = async (req, res) => {
  try {
    const { id } = req.params;
    const token = crypto.randomBytes(32).toString('hex');
    const expiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000); // 7 days

    await pool.query(
      "UPDATE applications SET upload_token = ?, upload_token_expiry = ?, qualification_status = 'awaiting_documents' WHERE id = ?",
      [token, expiry, id]
    );

    const [apps] = await pool.query("SELECT * FROM applications WHERE id = ?", [id]);
    if (apps[0]) {
      const uploadUrl = `${req.protocol}://${req.get('host')}/document-upload/${token}`;
      await pool.query(
        `INSERT INTO message_logs (type, recipient, recipient_name, subject, message, status, related_type, related_id, sent_by)
         VALUES ('email', ?, ?, 'Document Upload Link', ?, 'sent', 'application', ?, ?)`,
        [apps[0].email, `${apps[0].first_name} ${apps[0].last_name}`,
         `Please upload your documents here: ${uploadUrl}`, id, req.session.user.id]
      );
    }

    res.json({ ok: true, message: 'Upload link sent', token });
  } catch (error) {
    console.error('Send upload link error:', error);
    res.status(500).json({ ok: false, message: 'Failed to send upload link' });
  }
};

const reviewDocument = async (req, res) => {
  try {
    const { docId } = req.params;
    const { status, reviewNotes } = req.body;
    await pool.query(
      "UPDATE application_documents SET status = ?, reviewed_at = NOW(), review_notes = ? WHERE id = ?",
      [status, reviewNotes || null, docId]
    );
    res.json({ ok: true, message: `Document ${status}` });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to review document' });
  }
};

module.exports = {
  showApplicationManagement, showApplicationValidation, showDocumentSubmission,
  updatePreScreening, updateQualification, updateSelection, sendUploadLink, reviewDocument
};
