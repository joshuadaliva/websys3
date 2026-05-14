const { pool } = require('../../config/database');
const upload = require('../../config/upload');

const showPaymentManagement = async (req, res) => {
  try {
    const [payments] = await pool.query(
      `SELECT p.*, v.first_name, v.last_name, v.business_name, s.stall_number, s.section,
        u.username as collected_by_name
       FROM payments p
       LEFT JOIN vendors v ON p.vendor_id = v.id
       LEFT JOIN stalls s ON p.stall_id = s.id
       LEFT JOIN users u ON p.collected_by = u.id
       WHERE p.is_archived = 0
       ORDER BY p.created_at DESC`
    );

    // Vendor ledger summary
    const [ledger] = await pool.query(
      `SELECT v.id, v.first_name, v.last_name, v.business_name, v.monthly_rate, s.stall_number,
        COALESCE(SUM(CASE WHEN p.status = 'paid' THEN p.amount ELSE 0 END), 0) as total_paid,
        v.current_balance
       FROM vendors v
       LEFT JOIN stalls s ON v.stall_id = s.id
       LEFT JOIN payments p ON p.vendor_id = v.id
       WHERE v.is_archived = 0
       GROUP BY v.id`
    );

    // Collection summary
    const [collectionSummary] = await pool.query(
      `SELECT
        COALESCE(SUM(CASE WHEN status = 'paid' THEN amount ELSE 0 END), 0) as total_collected,
        COALESCE(SUM(CASE WHEN payment_method = 'cash' AND status = 'paid' THEN amount ELSE 0 END), 0) as cash_collected,
        COALESCE(SUM(CASE WHEN payment_method != 'cash' AND status = 'paid' THEN amount ELSE 0 END), 0) as online_collected,
        COUNT(CASE WHEN status = 'overdue' THEN 1 END) as overdue_count
       FROM payments
       WHERE MONTH(payment_date) = MONTH(CURDATE()) AND YEAR(payment_date) = YEAR(CURDATE())`
    );

    const [vendors] = await pool.query(
      "SELECT v.*, s.stall_number FROM vendors v LEFT JOIN stalls s ON v.stall_id = s.id WHERE v.is_archived = 0"
    );

    res.render("pages/admin/payment-management", {
      payments, ledger, collectionSummary: collectionSummary[0], vendors
    });
  } catch (error) {
    console.error('Payment management error:', error);
    res.render("pages/admin/payment-management", {
      payments: [], ledger: [], collectionSummary: {}, vendors: []
    });
  }
};

const recordPayment = async (req, res) => {
  try {
    const { orNumber, vendorId, amount, paymentDate, paymentMethod, periodFrom, periodTo, notes } = req.body;

    // Get vendor's stall
    const [vendors] = await pool.query("SELECT stall_id FROM vendors WHERE id = ?", [vendorId]);
    const stallId = vendors[0] ? vendors[0].stall_id : null;

    await pool.query(
      `INSERT INTO payments (or_number, vendor_id, stall_id, amount, payment_date, payment_method,
       status, period_from, period_to, collected_by, notes)
       VALUES (?, ?, ?, ?, ?, ?, 'paid', ?, ?, ?, ?)`,
      [orNumber || null, vendorId, stallId, amount, paymentDate, paymentMethod || 'cash',
       periodFrom || null, periodTo || null, req.session.user.id, notes || null]
    );

    // Update vendor total
    await pool.query(
      "UPDATE vendors SET total_paid = total_paid + ? WHERE id = ?",
      [amount, vendorId]
    );

    // Update stall payment status
    if (stallId) {
      await pool.query("UPDATE stalls SET payment_status = 'paid' WHERE id = ?", [stallId]);
    }

    // Log activity
    await pool.query(
      "INSERT INTO activity_logs (user_id, action, description, category) VALUES (?, 'record_payment', ?, 'payment')",
      [req.session.user.id, `Payment of ${amount} recorded for vendor #${vendorId}`]
    );

    res.json({ ok: true, message: 'Payment recorded successfully' });
  } catch (error) {
    console.error('Record payment error:', error);
    res.status(500).json({ ok: false, message: error.code === 'ER_DUP_ENTRY' ? 'OR number already exists' : 'Failed to record payment' });
  }
};

const sendReminder = async (req, res) => {
  try {
    const { vendorId, message } = req.body;
    const [vendors] = await pool.query(
      "SELECT v.*, u.id as userId FROM vendors v LEFT JOIN users u ON v.user_id = u.id WHERE v.id = ?",
      [vendorId]
    );

    if (vendors.length === 0) {
      return res.status(404).json({ ok: false, message: 'Vendor not found' });
    }

    const vendor = vendors[0];
    await pool.query(
      `INSERT INTO message_logs (type, recipient, recipient_name, subject, message, status, related_type, related_id, sent_by)
       VALUES ('sms', ?, ?, 'Payment Reminder', ?, 'sent', 'reminder', ?, ?)`,
      [vendor.mobile || vendor.email, `${vendor.first_name} ${vendor.last_name}`,
       message || 'Your payment is overdue. Please settle your balance.', vendor.id, req.session.user.id]
    );

    if (vendor.userId) {
      await pool.query(
        `INSERT INTO notifications (title, message, type, recipient_id, recipient_role)
         VALUES ('Payment Reminder', ?, 'reminder', ?, 'vendor')`,
        [message || 'Your payment is overdue. Please settle your balance.', vendor.userId]
      );
    }

    res.json({ ok: true, message: 'Reminder sent' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to send reminder' });
  }
};

module.exports = { showPaymentManagement, recordPayment, sendReminder };
