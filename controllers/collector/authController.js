const { pool } = require('../../config/database');
const bcrypt = require('bcryptjs');

const showLoginPage = async (req, res) => {
  if (req.session && req.session.user && req.session.user.role === 'collector') {
    return res.redirect('/collector/dashboard');
  }
  res.render("pages/collector/login", { error: null });
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [users] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND role = 'collector' AND is_active = 1",
      [username]
    );
    if (users.length === 0) {
      return res.render("pages/collector/login", { error: 'Invalid username or password' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("pages/collector/login", { error: 'Invalid username or password' });
    }

    await pool.query("UPDATE users SET last_login = NOW() WHERE id = ?", [user.id]);

    const [collectors] = await pool.query("SELECT * FROM collectors WHERE user_id = ?", [user.id]);

    req.session.user = {
      id: user.id,
      username: user.username,
      role: user.role,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email,
      collectorId: collectors[0] ? collectors[0].id : null
    };

    res.redirect('/collector/dashboard');
  } catch (error) {
    console.error('Collector login error:', error);
    res.render("pages/collector/login", { error: 'Login failed' });
  }
};

const logout = async (req, res) => {
  req.session.destroy(() => { res.redirect('/collector/login'); });
};

module.exports = { showLoginPage, login, logout };
