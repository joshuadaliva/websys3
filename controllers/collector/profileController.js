const { pool } = require('../../config/database');

const showProfile = async (req, res) => {
  try {
    const [collectors] = await pool.query(
      `SELECT c.*, u.username, u.last_login, u.email as user_email
       FROM collectors c JOIN users u ON c.user_id = u.id
       WHERE c.user_id = ?`,
      [req.session.user.id]
    );

    const [activityLog] = await pool.query(
      "SELECT * FROM activity_logs WHERE user_id = ? ORDER BY created_at DESC LIMIT 20",
      [req.session.user.id]
    );

    // Performance stats
    const [performance] = await pool.query(
      `SELECT COUNT(*) as total_payments, COALESCE(SUM(amount), 0) as total_amount
       FROM payments WHERE collector_id = ? AND status = 'paid'`,
      [req.session.user.collectorId]
    );

    res.render("pages/collector/profile", {
      collector: collectors[0] || {}, activityLog, performance: performance[0]
    });
  } catch (error) {
    res.render("pages/collector/profile", { collector: {}, activityLog: [], performance: {} });
  }
};

module.exports = { showProfile };
