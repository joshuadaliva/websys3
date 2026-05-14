const { pool } = require('../../config/database');

const showDashboard = async (req, res) => {
  try {
    const collectorId = req.session.user.collectorId;

    // Today's collections
    const [todayCollections] = await pool.query(
      `SELECT COALESCE(SUM(p.amount), 0) as total, COUNT(p.id) as count
       FROM payments p WHERE p.collector_id = ? AND DATE(p.payment_date) = CURDATE() AND p.status = 'paid'`,
      [collectorId]
    );

    // Recent collections
    const [recentCollections] = await pool.query(
      `SELECT p.*, v.first_name, v.last_name, s.stall_number
       FROM payments p
       LEFT JOIN vendors v ON p.vendor_id = v.id
       LEFT JOIN stalls s ON p.stall_id = s.id
       WHERE p.collector_id = ? AND p.status = 'paid'
       ORDER BY p.created_at DESC LIMIT 5`,
      [collectorId]
    );

    // Assigned stalls count
    const [assignedCount] = await pool.query(
      "SELECT COUNT(*) as count FROM collector_assignments WHERE collector_id = ? AND is_active = 1",
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
       ORDER BY p.payment_date ASC LIMIT 10`,
      [collectorId]
    );

    // Recent activity
    const [recentActivity] = await pool.query(
      "SELECT * FROM activity_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 10",
      [req.session.user.id]
    );

    res.render("pages/collector/dashboard", {
      todayTotal: todayCollections[0].total,
      todayCount: todayCollections[0].count,
      recentCollections,
      assignedStalls: assignedCount[0].count,
      overdueAccounts,
      recentActivity
    });
  } catch (error) {
    console.error('Collector dashboard error:', error);
    res.render("pages/collector/dashboard", {
      todayTotal: 0, todayCount: 0, recentCollections: [],
      assignedStalls: 0, overdueAccounts: [], recentActivity: []
    });
  }
};

module.exports = { showDashboard };
