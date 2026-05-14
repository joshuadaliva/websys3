const { pool } = require('../../config/database');

const showMonthlySummary = async (req, res) => {
  try {
    const collectorId = req.session.user.collectorId;
    const month = req.query.month || new Date().toISOString().slice(0, 7);

    const [summary] = await pool.query(
      `SELECT
        COALESCE(SUM(CASE WHEN p.status = 'paid' THEN p.amount ELSE 0 END), 0) as total_collected,
        COALESCE(SUM(CASE WHEN p.payment_method = 'cash' AND p.status = 'paid' THEN p.amount ELSE 0 END), 0) as cash_collected,
        COALESCE(SUM(CASE WHEN p.payment_method != 'cash' AND p.status = 'paid' THEN p.amount ELSE 0 END), 0) as online_collected,
        COUNT(CASE WHEN p.status = 'paid' THEN 1 END) as paid_count,
        COUNT(CASE WHEN p.status = 'overdue' THEN 1 END) as overdue_count
       FROM payments p
       WHERE p.collector_id = ? AND DATE_FORMAT(p.payment_date, '%Y-%m') = ?`,
      [collectorId, month]
    );

    // Collection by section
    const [bySection] = await pool.query(
      `SELECT s.section, SUM(p.amount) as total, COUNT(p.id) as count
       FROM payments p
       JOIN stalls s ON p.stall_id = s.id
       WHERE p.collector_id = ? AND DATE_FORMAT(p.payment_date, '%Y-%m') = ? AND p.status = 'paid'
       GROUP BY s.section`,
      [collectorId, month]
    );

    // Outstanding balance
    const [outstanding] = await pool.query(
      `SELECT COALESCE(SUM(v.current_balance), 0) as total
       FROM vendors v
       JOIN stalls s ON v.stall_id = s.id
       JOIN collector_assignments ca ON ca.stall_id = s.id AND ca.collector_id = ?
       WHERE v.current_balance > 0`,
      [collectorId]
    );

    res.render("pages/collector/monthly-summary", {
      summary: summary[0], bySection, outstanding: outstanding[0].total, month
    });
  } catch (error) {
    console.error('Monthly summary error:', error);
    res.render("pages/collector/monthly-summary", {
      summary: {}, bySection: [], outstanding: 0, month: ''
    });
  }
};

module.exports = { showMonthlySummary };
