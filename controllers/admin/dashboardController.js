const { pool } = require('../../config/database');

const showDashboard = async (req, res) => {
  try {
    const [vendorCount] = await pool.query("SELECT COUNT(*) as count FROM vendors WHERE is_archived = 0");
    const [stallCount] = await pool.query("SELECT COUNT(*) as count FROM stalls WHERE is_archived = 0");
    const [vacantCount] = await pool.query("SELECT COUNT(*) as count FROM stalls WHERE status = 'vacant' AND is_archived = 0");
    const [monthlyCollection] = await pool.query(
      "SELECT COALESCE(SUM(amount), 0) as total FROM payments WHERE MONTH(payment_date) = MONTH(CURDATE()) AND YEAR(payment_date) = YEAR(CURDATE()) AND status = 'paid'"
    );
    const [recentPayments] = await pool.query(
      `SELECT p.*, v.first_name, v.last_name, s.stall_number
       FROM payments p
       LEFT JOIN vendors v ON p.vendor_id = v.id
       LEFT JOIN stalls s ON p.stall_id = s.id
       ORDER BY p.created_at DESC LIMIT 5`
    );
    const [recentActivity] = await pool.query(
      "SELECT * FROM activity_logs ORDER BY created_at DESC LIMIT 10"
    );
    const [collectionSummary] = await pool.query(
      `SELECT payment_method, SUM(amount) as total, COUNT(*) as count
       FROM payments WHERE MONTH(payment_date) = MONTH(CURDATE()) AND YEAR(payment_date) = YEAR(CURDATE()) AND status = 'paid'
       GROUP BY payment_method`
    );

    res.render("pages/admin/dashboard", {
      totalVendors: vendorCount[0].count,
      totalStalls: stallCount[0].count,
      vacantStalls: vacantCount[0].count,
      monthlyCollection: monthlyCollection[0].total,
      recentPayments,
      recentActivity,
      collectionSummary
    });
  } catch (error) {
    console.error('Dashboard error:', error);
    res.render("pages/admin/dashboard", {
      totalVendors: 0, totalStalls: 0, vacantStalls: 0,
      monthlyCollection: 0, recentPayments: [], recentActivity: [],
      collectionSummary: []
    });
  }
};

module.exports = { showDashboard };
