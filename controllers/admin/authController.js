const { pool } = require('../../config/database');
const bcrypt = require('bcryptjs');

const showLoginPage = async (req, res) => {
  if (req.session && req.session.user && req.session.user.role === 'admin') {
    return res.redirect('/admin/dashboard');
  }
  res.render("pages/admin/login", { error: null });
};

const login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const [users] = await pool.query(
      "SELECT * FROM users WHERE username = ? AND role = 'admin' AND is_active = 1",
      [username]
    );

    if (users.length === 0) {
      return res.render("pages/admin/login", { error: 'Invalid username or password' });
    }

    const user = users[0];
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.render("pages/admin/login", { error: 'Invalid username or password' });
    }

    // Update last login
    await pool.query("UPDATE users SET last_login = NOW() WHERE id = ?", [user.id]);

    // Log activity
    await pool.query(
      "INSERT INTO activity_logs (user_id, action, description, category, ip_address) VALUES (?, ?, ?, 'auth', ?)",
      [user.id, 'login', 'Admin logged in', req.ip]
    );

    req.session.user = {
      id: user.id,
      username: user.username,
      role: user.role,
      firstName: user.first_name,
      lastName: user.last_name,
      email: user.email
    };

    res.redirect('/admin/dashboard');
  } catch (error) {
    console.error('Login error:', error);
    res.render("pages/admin/login", { error: 'Login failed. Please try again.' });
  }
};

const logout = async (req, res) => {
  if (req.session && req.session.user) {
    await pool.query(
      "INSERT INTO activity_logs (user_id, action, description, category) VALUES (?, 'logout', 'Admin logged out', 'auth')",
      [req.session.user.id]
    ).catch(() => {});
  }
  req.session.destroy(() => {
    res.redirect('/admin/login');
  });
};

module.exports = { showLoginPage, login, logout };
