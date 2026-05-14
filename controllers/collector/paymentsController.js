const { pool } = require('../../config/database');

const showPayments = async (req, res) => {
  try {
    const collectorId = req.session.user.collectorId;

    // Online payments awaiting OR assignment
    const [pendingOnline] = await pool.query(
      `SELECT p.*, v.first_name, v.last_name, s.stall_number
       FROM payments p
       JOIN vendors v ON p.vendor_id = v.id
       JOIN stalls s ON p.stall_id = s.id
       JOIN collector_assignments ca ON ca.stall_id = s.id AND ca.collector_id = ?
       WHERE p.status = 'under_review' AND p.payment_method != 'cash'
       ORDER BY p.created_at DESC`,
      [collectorId]
    );

    // Payment history
    const [paymentHistory] = await pool.query(
      `SELECT p.*, v.first_name, v.last_name, s.stall_number
       FROM payments p
       LEFT JOIN vendors v ON p.vendor_id = v.id
       LEFT JOIN stalls s ON p.stall_id = s.id
       WHERE p.collector_id = ?
       ORDER BY p.created_at DESC LIMIT 50`,
      [collectorId]
    );

    // Overdue accounts
    const [overdueAccounts] = await pool.query(
      `SELECT p.*, v.first_name, v.last_name, s.stall_number
       FROM payments p
       JOIN vendors v ON p.vendor_id = v.id
       JOIN stalls s ON p.stall_id = s.id
       JOIN collector_assignments ca ON ca.stall_id = s.id AND ca.collector_id = ?
       WHERE p.status = 'overdue'
       ORDER BY p.payment_date ASC`,
      [collectorId]
    );

    // Vendors for cash payment recording
    const [assignedVendors] = await pool.query(
      `SELECT v.*, s.stall_number
       FROM vendors v
       JOIN stalls s ON v.stall_id = s.id
       JOIN collector_assignments ca ON ca.stall_id = s.id AND ca.collector_id = ?
       WHERE v.is_archived = 0 AND ca.is_active = 1`,
      [collectorId]
    );

    res.render("pages/collector/payments", {
      pendingOnline, paymentHistory, overdueAccounts, assignedVendors
    });
  } catch (error) {
    console.error('Collector payments error:', error);
    res.render("pages/collector/payments", {
      pendingOnline: [], paymentHistory: [], overdueAccounts: [], assignedVendors: []
    });
  }
};

const recordCashPayment = async (req, res) => {
  try {
    const { orNumber, vendorId, amount, paymentDate, periodFrom, periodTo, notes } = req.body;
    const collectorId = req.session.user.collectorId;

    const [vendors] = await pool.query("SELECT stall_id FROM vendors WHERE id = ?", [vendorId]);
    const stallId = vendors[0] ? vendors[0].stall_id : null;

    await pool.query(
      `INSERT INTO payments (or_number, vendor_id, stall_id, amount, payment_date, payment_method,
       status, period_from, period_to, collected_by, collector_id, notes)
       VALUES (?, ?, ?, ?, ?, 'cash', 'paid', ?, ?, ?, ?, ?)`,
      [orNumber || null, vendorId, stallId, amount, paymentDate || new Date(),
       periodFrom || null, periodTo || null, req.session.user.id, collectorId, notes || null]
    );

    await pool.query("UPDATE vendors SET total_paid = total_paid + ? WHERE id = ?", [amount, vendorId]);
    if (stallId) {
      await pool.query("UPDATE stalls SET payment_status = 'paid' WHERE id = ?", [stallId]);
    }

    // Update collector total
    await pool.query("UPDATE collectors SET total_collected = total_collected + ? WHERE id = ?", [amount, collectorId]);

    res.json({ ok: true, message: 'Cash payment recorded' });
  } catch (error) {
    console.error('Record cash payment error:', error);
    res.status(500).json({ ok: false, message: 'Failed to record payment' });
  }
};

const assignOR = async (req, res) => {
  try {
    const { paymentId, orNumber } = req.body;
    await pool.query(
      "UPDATE payments SET or_number = ?, status = 'paid', collected_by = ? WHERE id = ?",
      [orNumber, req.session.user.id, paymentId]
    );
    res.json({ ok: true, message: 'OR assigned successfully' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to assign OR' });
  }
};

module.exports = { showPayments, recordCashPayment, assignOR };
