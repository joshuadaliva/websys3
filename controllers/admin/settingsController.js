const { pool } = require('../../config/database');
const bcrypt = require('bcryptjs');

const showSettings = async (req, res) => {
  try {
    const [settings] = await pool.query("SELECT * FROM market_settings");
    const settingsMap = {};
    settings.forEach(s => { settingsMap[s.setting_key] = s.setting_value; });

    const [paymentMethods] = await pool.query("SELECT * FROM payment_methods ORDER BY name");
    const [feeRates] = await pool.query("SELECT * FROM fee_rates ORDER BY name");

    const [users] = await pool.query(
      "SELECT id, username, role, email, first_name, last_name, is_active, last_login FROM users ORDER BY role, username"
    );

    const [currentUser] = await pool.query(
      "SELECT * FROM users WHERE id = ?", [req.session.user.id]
    );

    const [preferences] = await pool.query(
      "SELECT * FROM user_preferences WHERE user_id = ?", [req.session.user.id]
    );

    res.render("pages/admin/settings", {
      settings: settingsMap, paymentMethods, feeRates, users,
      currentUser: currentUser[0], preferences: preferences[0] || {}
    });
  } catch (error) {
    console.error('Settings error:', error);
    res.render("pages/admin/settings", {
      settings: {}, paymentMethods: [], feeRates: [], users: [],
      currentUser: {}, preferences: {}
    });
  }
};

const updateMarketSettings = async (req, res) => {
  try {
    const updates = req.body;
    for (const [key, value] of Object.entries(updates)) {
      await pool.query(
        `INSERT INTO market_settings (setting_key, setting_value) VALUES (?, ?)
         ON DUPLICATE KEY UPDATE setting_value = ?`,
        [key, value, value]
      );
    }
    res.json({ ok: true, message: 'Settings updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update settings' });
  }
};

const updatePaymentMethods = async (req, res) => {
  try {
    const { methods } = req.body;
    if (Array.isArray(methods)) {
      for (const m of methods) {
        if (m.id) {
          await pool.query(
            "UPDATE payment_methods SET name = ?, is_active = ?, account_name = ?, account_number = ?, instructions = ? WHERE id = ?",
            [m.name, m.isActive ? 1 : 0, m.accountName || null, m.accountNumber || null, m.instructions || null, m.id]
          );
        }
      }
    }
    res.json({ ok: true, message: 'Payment methods updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update payment methods' });
  }
};

const updateFees = async (req, res) => {
  try {
    const { fees } = req.body;
    if (Array.isArray(fees)) {
      for (const f of fees) {
        if (f.id) {
          await pool.query(
            "UPDATE fee_rates SET name = ?, amount = ?, is_active = ? WHERE id = ?",
            [f.name, f.amount, f.isActive ? 1 : 0, f.id]
          );
        }
      }
    }
    res.json({ ok: true, message: 'Fee rates updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update fees' });
  }
};

const updateProfile = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile } = req.body;
    await pool.query(
      "UPDATE users SET first_name = ?, last_name = ?, email = ?, mobile = ? WHERE id = ?",
      [firstName, lastName, email, mobile, req.session.user.id]
    );
    req.session.user.firstName = firstName;
    req.session.user.lastName = lastName;
    req.session.user.email = email;
    res.json({ ok: true, message: 'Profile updated' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update profile' });
  }
};

const changePassword = async (req, res) => {
  try {
    const { currentPassword, newPassword } = req.body;
    const [users] = await pool.query("SELECT password FROM users WHERE id = ?", [req.session.user.id]);
    if (users.length === 0) return res.status(404).json({ ok: false, message: 'User not found' });

    const isMatch = await bcrypt.compare(currentPassword, users[0].password);
    if (!isMatch) return res.status(400).json({ ok: false, message: 'Current password is incorrect' });

    const hashed = await bcrypt.hash(newPassword, 12);
    await pool.query("UPDATE users SET password = ? WHERE id = ?", [hashed, req.session.user.id]);
    res.json({ ok: true, message: 'Password changed successfully' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to change password' });
  }
};

module.exports = {
  showSettings, updateMarketSettings, updatePaymentMethods,
  updateFees, updateProfile, changePassword
};
