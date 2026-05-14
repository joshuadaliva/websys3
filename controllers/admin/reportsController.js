const { pool } = require('../../config/database');

const showReports = async (req, res) => {
  try {
    // Payment reports
    const [paymentsByMonth] = await pool.query(
      `SELECT DATE_FORMAT(payment_date, '%Y-%m') as month,
        SUM(amount) as total, COUNT(*) as count
       FROM payments WHERE status = 'paid'
       GROUP BY DATE_FORMAT(payment_date, '%Y-%m')
       ORDER BY month DESC LIMIT 12`
    );

    // Vendor stats
    const [vendorStats] = await pool.query(
      `SELECT status, COUNT(*) as count FROM vendors WHERE is_archived = 0 GROUP BY status`
    );

    // Stall stats
    const [stallStats] = await pool.query(
      `SELECT status, COUNT(*) as count FROM stalls WHERE is_archived = 0 GROUP BY status`
    );

    // Collection by payment method
    const [collectionByMethod] = await pool.query(
      `SELECT payment_method, SUM(amount) as total, COUNT(*) as count
       FROM payments WHERE status = 'paid'
       GROUP BY payment_method`
    );

    // Collection by section
    const [collectionBySection] = await pool.query(
      `SELECT s.section, SUM(p.amount) as total, COUNT(p.id) as count
       FROM payments p
       JOIN stalls s ON p.stall_id = s.id
       WHERE p.status = 'paid'
       GROUP BY s.section`
    );

    res.render("pages/admin/reports", {
      paymentsByMonth, vendorStats, stallStats, collectionByMethod, collectionBySection
    });
  } catch (error) {
    console.error('Reports error:', error);
    res.render("pages/admin/reports", {
      paymentsByMonth: [], vendorStats: [], stallStats: [],
      collectionByMethod: [], collectionBySection: []
    });
  }
};

module.exports = { showReports };
