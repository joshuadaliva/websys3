const { pool } = require('../../config/database');
const bcrypt = require('bcryptjs');

const showDashboard = async (req, res) => {
  try {
    const vendorId = req.session.user.vendorId;
    const [vendors] = await pool.query(
      `SELECT v.*, s.stall_number, s.section, s.stall_type FROM vendors v
       LEFT JOIN stalls s ON v.stall_id = s.id WHERE v.id = ?`,
      [vendorId]
    );
    const vendor = vendors[0] || {};

    const [recentPayments] = await pool.query(
      "SELECT * FROM payments WHERE vendor_id = ? ORDER BY payment_date DESC LIMIT 5",
      [vendorId]
    );

    const [openInquiries] = await pool.query(
      "SELECT COUNT(*) as count FROM inquiry_tickets WHERE vendor_id = ? AND status IN ('open','in_progress')",
      [vendorId]
    );

    const [notifications] = await pool.query(
      "SELECT * FROM notifications WHERE recipient_id = ? AND is_read = 0 ORDER BY created_at DESC LIMIT 5",
      [req.session.user.id]
    );

    res.render("pages/vendor/dashboard", {
      vendor, recentPayments, openInquiries: openInquiries[0].count, notifications
    });
  } catch (error) {
    console.error('Vendor dashboard error:', error);
    res.render("pages/vendor/dashboard", {
      vendor: {}, recentPayments: [], openInquiries: 0, notifications: []
    });
  }
};

const showPayments = async (req, res) => {
  try {
    const vendorId = req.session.user.vendorId;
    const [payments] = await pool.query(
      `SELECT p.*, s.stall_number FROM payments p
       LEFT JOIN stalls s ON p.stall_id = s.id
       WHERE p.vendor_id = ? ORDER BY p.payment_date DESC`,
      [vendorId]
    );

    const [paymentMethods] = await pool.query(
      "SELECT * FROM payment_methods WHERE is_active = 1"
    );

    const [vendor] = await pool.query("SELECT * FROM vendors WHERE id = ?", [vendorId]);

    res.render("pages/vendor/payments", { payments, paymentMethods, vendor: vendor[0] || {} });
  } catch (error) {
    res.render("pages/vendor/payments", { payments: [], paymentMethods: [], vendor: {} });
  }
};

const makePayment = async (req, res) => {
  try {
    const vendorId = req.session.user.vendorId;
    const { amount, paymentMethod, periodFrom, periodTo, notes } = req.body;

    const [vendors] = await pool.query("SELECT stall_id FROM vendors WHERE id = ?", [vendorId]);
    const stallId = vendors[0] ? vendors[0].stall_id : null;

    await pool.query(
      `INSERT INTO payments (vendor_id, stall_id, amount, payment_date, payment_method, status,
       period_from, period_to, notes)
       VALUES (?, ?, ?, CURDATE(), ?, 'under_review', ?, ?, ?)`,
      [vendorId, stallId, amount, paymentMethod, periodFrom || null, periodTo || null, notes || null]
    );

    res.json({ ok: true, message: 'Payment submitted for review' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to submit payment' });
  }
};

const showInquiries = async (req, res) => {
  try {
    const vendorId = req.session.user.vendorId;
    const [tickets] = await pool.query(
      "SELECT * FROM inquiry_tickets WHERE vendor_id = ? ORDER BY created_at DESC",
      [vendorId]
    );
    res.render("pages/vendor/inquries", { tickets });
  } catch (error) {
    res.render("pages/vendor/inquries", { tickets: [] });
  }
};

const createInquiry = async (req, res) => {
  try {
    const vendorId = req.session.user.vendorId;
    const { subject, category, message } = req.body;

    const [countResult] = await pool.query("SELECT COUNT(*) as count FROM inquiry_tickets");
    const ticketNumber = `TKT-${String(countResult[0].count + 1).padStart(4, '0')}`;

    const [result] = await pool.query(
      `INSERT INTO inquiry_tickets (ticket_number, vendor_id, user_id, subject, category, status)
       VALUES (?, ?, ?, ?, ?, 'open')`,
      [ticketNumber, vendorId, req.session.user.id, subject, category || 'general']
    );

    if (message) {
      await pool.query(
        "INSERT INTO inquiry_messages (ticket_id, sender_id, sender_role, message) VALUES (?, ?, 'vendor', ?)",
        [result.insertId, req.session.user.id, message]
      );
    }

    // Notify admin
    const [admins] = await pool.query("SELECT id FROM users WHERE role = 'admin' AND is_active = 1 LIMIT 1");
    if (admins[0]) {
      await pool.query(
        `INSERT INTO notifications (title, message, type, recipient_id, recipient_role, related_type, related_id)
         VALUES ('New Inquiry', ?, 'inquiry', ?, 'admin', 'inquiry', ?)`,
        [`New inquiry ${ticketNumber}: ${subject}`, admins[0].id, result.insertId]
      );
    }

    res.json({ ok: true, message: 'Inquiry submitted', ticketNumber });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to create inquiry' });
  }
};

const getInquiryMessages = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const [messages] = await pool.query(
      `SELECT im.*, u.first_name, u.last_name FROM inquiry_messages im
       LEFT JOIN users u ON im.sender_id = u.id
       WHERE im.ticket_id = ? ORDER BY im.sent_at ASC`,
      [ticketId]
    );
    res.json({ ok: true, messages });
  } catch (error) {
    res.status(500).json({ ok: false, messages: [] });
  }
};

const replyToInquiry = async (req, res) => {
  try {
    const { ticketId } = req.params;
    const { message } = req.body;
    await pool.query(
      "INSERT INTO inquiry_messages (ticket_id, sender_id, sender_role, message) VALUES (?, ?, 'vendor', ?)",
      [ticketId, req.session.user.id, message]
    );
    res.json({ ok: true, message: 'Reply sent' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to reply' });
  }
};

const showProfile = async (req, res) => {
  try {
    const vendorId = req.session.user.vendorId;
    const [vendors] = await pool.query(
      `SELECT v.*, s.stall_number, s.section, s.stall_type, s.size FROM vendors v
       LEFT JOIN stalls s ON v.stall_id = s.id WHERE v.id = ?`,
      [vendorId]
    );

    const [paymentStats] = await pool.query(
      `SELECT COUNT(*) as total_payments, COALESCE(SUM(amount), 0) as total_paid
       FROM payments WHERE vendor_id = ? AND status = 'paid'`,
      [vendorId]
    );

    const [inquiryStats] = await pool.query(
      `SELECT COUNT(*) as total, COUNT(CASE WHEN status = 'open' THEN 1 END) as open_count,
       COUNT(CASE WHEN status = 'resolved' THEN 1 END) as resolved_count
       FROM inquiry_tickets WHERE vendor_id = ?`,
      [vendorId]
    );

    res.render("pages/vendor/profile", {
      vendor: vendors[0] || {}, paymentStats: paymentStats[0], inquiryStats: inquiryStats[0]
    });
  } catch (error) {
    res.render("pages/vendor/profile", { vendor: {}, paymentStats: {}, inquiryStats: {} });
  }
};

const showSettings = async (req, res) => {
  try {
    const [preferences] = await pool.query(
      "SELECT * FROM user_preferences WHERE user_id = ?",
      [req.session.user.id]
    );
    res.render("pages/vendor/settings", { preferences: preferences[0] || {} });
  } catch (error) {
    res.render("pages/vendor/settings", { preferences: {} });
  }
};

const updateSettings = async (req, res) => {
  try {
    const { theme, notificationsEnabled, emailNotifications, smsNotifications, showProfile: sp, showActivity } = req.body;
    await pool.query(
      `INSERT INTO user_preferences (user_id, theme, notifications_enabled, email_notifications, sms_notifications, show_profile, show_activity)
       VALUES (?, ?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE theme = VALUES(theme), notifications_enabled = VALUES(notifications_enabled),
       email_notifications = VALUES(email_notifications), sms_notifications = VALUES(sms_notifications),
       show_profile = VALUES(show_profile), show_activity = VALUES(show_activity)`,
      [req.session.user.id, theme || 'light', notificationsEnabled ? 1 : 0,
       emailNotifications ? 1 : 0, smsNotifications ? 1 : 0, sp ? 1 : 0, showActivity ? 1 : 0]
    );
    res.json({ ok: true, message: 'Settings updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update settings' });
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const [users] = await pool.query("SELECT password FROM users WHERE id = ?", [req.session.user.id]);
    if (users.length === 0) return res.status(404).json({ ok: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, users[0].password);
    if (!isMatch) return res.status(400).json({ ok: false, message: 'Current password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query("UPDATE users SET password = ? WHERE id = ?", [hashed, req.session.user.id]);
    res.json({ ok: true, message: 'Password changed' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to change password' });
  }
};

module.exports = {
  showDashboard, showPayments, makePayment, showInquiries,
  createInquiry, getInquiryMessages, replyToInquiry,
  showProfile, showSettings, updateSettings, changePassword
};
