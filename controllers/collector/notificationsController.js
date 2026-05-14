const { pool } = require('../../config/database');

const showNotifications = async (req, res) => {
  try {
    const [notifications] = await pool.query(
      "SELECT * FROM notifications WHERE recipient_id = ? ORDER BY created_at DESC LIMIT 50",
      [req.session.user.id]
    );
    res.render("pages/collector/notifications", { notifications });
  } catch (error) {
    res.render("pages/collector/notifications", { notifications: [] });
  }
};

const markAsRead = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("UPDATE notifications SET is_read = 1, read_at = NOW() WHERE id = ? AND recipient_id = ?",
      [id, req.session.user.id]);
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ ok: false });
  }
};

module.exports = { showNotifications, markAsRead };
