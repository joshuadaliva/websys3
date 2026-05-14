const { pool } = require('../../config/database');

const showSettings = async (req, res) => {
  try {
    const [preferences] = await pool.query(
      "SELECT * FROM user_preferences WHERE user_id = ?",
      [req.session.user.id]
    );
    res.render("pages/collector/settings", { preferences: preferences[0] || {} });
  } catch (error) {
    res.render("pages/collector/settings", { preferences: {} });
  }
};

const updateSettings = async (req, res) => {
  try {
    const { theme, notificationsEnabled, defaultPaymentMethod, defaultMapView, showLabels } = req.body;
    await pool.query(
      `INSERT INTO user_preferences (user_id, theme, notifications_enabled, default_payment_method, default_map_view, show_labels)
       VALUES (?, ?, ?, ?, ?, ?)
       ON DUPLICATE KEY UPDATE theme = VALUES(theme), notifications_enabled = VALUES(notifications_enabled),
       default_payment_method = VALUES(default_payment_method), default_map_view = VALUES(default_map_view),
       show_labels = VALUES(show_labels)`,
      [req.session.user.id, theme || 'light', notificationsEnabled ? 1 : 0,
       defaultPaymentMethod || 'cash', defaultMapView || 'grid', showLabels ? 1 : 0]
    );
    res.json({ ok: true, message: 'Settings updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update settings' });
  }
};

module.exports = { showSettings, updateSettings };
