const { pool } = require('../../config/database');

const showMyStalls = async (req, res) => {
  try {
    const collectorId = req.session.user.collectorId;
    const [stalls] = await pool.query(
      `SELECT s.*, v.first_name, v.last_name, v.business_name, ca.assigned_at
       FROM collector_assignments ca
       JOIN stalls s ON ca.stall_id = s.id
       LEFT JOIN vendors v ON s.vendor_id = v.id
       WHERE ca.collector_id = ? AND ca.is_active = 1
       ORDER BY s.stall_number`,
      [collectorId]
    );
    res.render("pages/collector/my-stalls", { stalls });
  } catch (error) {
    console.error('My stalls error:', error);
    res.render("pages/collector/my-stalls", { stalls: [] });
  }
};

module.exports = { showMyStalls };
