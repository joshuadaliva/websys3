const { pool } = require('../../config/database');

const showNotificationManagement = async (req, res) => {
  try {
    const [notifications] = await pool.query(
      "SELECT * FROM notifications WHERE recipient_role = 'admin' ORDER BY created_at DESC LIMIT 50"
    );

    const [messageLogs] = await pool.query(
      `SELECT ml.*, u.username as sent_by_name FROM message_logs ml
       LEFT JOIN users u ON ml.sent_by = u.id
       ORDER BY ml.sent_at DESC LIMIT 50`
    );

    const [inquiryTickets] = await pool.query(
      `SELECT it.*, v.first_name, v.last_name, v.business_name
       FROM inquiry_tickets it
       LEFT JOIN vendors v ON it.vendor_id = v.id
       ORDER BY it.created_at DESC`
    );

    res.render("pages/admin/notification-management", {
      notifications, messageLogs, inquiryTickets
    });
  } catch (error) {
    console.error('Notification management error:', error);
    res.render("pages/admin/notification-management", {
      notifications: [], messageLogs: [], inquiryTickets: []
    });
  }
};

const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("UPDATE notifications SET is_read = 1, read_at = NOW() WHERE id = ?", [id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to mark as read' });
  }
};

const sendMessage = async (req, res) => {
  try {
    const { type, recipient, recipientName, subject, message } = req.body;
    await pool.query(
      `INSERT INTO message_logs (type, recipient, recipient_name, subject, message, status, sent_by)
       VALUES (?, ?, ?, ?, ?, 'sent', ?)`,
      [type, recipient, recipientName || null, subject || null, message, req.session.user.id]
    );
    res.json({ ok: true, message: 'Message sent' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to send message' });
  }
};

const updateInquiryStatus = async (req, res) => {
  try {
    const { id } = req.params;
    const { status, severity } = req.body;
    const updates = [];
    const values = [];

    if (status) {
      updates.push('status = ?');
      values.push(status);
      if (status === 'resolved') { updates.push('resolved_at = NOW()'); }
      if (status === 'closed') { updates.push('closed_at = NOW()'); }
    }
    if (severity) {
      updates.push('severity = ?');
      values.push(severity);
    }
    values.push(id);

    await pool.query(`UPDATE inquiry_tickets SET ${updates.join(', ')} WHERE id = ?`, values);
    res.json({ ok: true, message: 'Inquiry updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update inquiry' });
  }
};

const replyToInquiry = async (req, res) => {
  try {
    const { id } = req.params;
    const { message } = req.body;
    await pool.query(
      `INSERT INTO inquiry_messages (ticket_id, sender_id, sender_role, message)
       VALUES (?, ?, 'admin', ?)`,
      [id, req.session.user.id, message]
    );

    await pool.query("UPDATE inquiry_tickets SET status = 'in_progress' WHERE id = ? AND status = 'open'", [id]);
    res.json({ ok: true, message: 'Reply sent' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to reply' });
  }
};

const resendMessage = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("UPDATE message_logs SET status = 'sent', sent_at = NOW() WHERE id = ?", [id]);
    res.json({ ok: true, message: 'Message resent' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to resend' });
  }
};

module.exports = {
  showNotificationManagement, markAsRead, sendMessage,
  updateInquiryStatus, replyToInquiry, resendMessage
};
