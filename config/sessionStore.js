const session = require('express-session');
const { pool } = require('./database');

class MySQLSessionStore extends session.Store {
  constructor() {
    super();
    this.clearExpiredInterval = setInterval(() => {
      this.clearExpired();
    }, 15 * 60 * 1000); // every 15 min
  }

  async get(sid, callback) {
    try {
      const [rows] = await pool.query(
        'SELECT data FROM sessions WHERE session_id = ? AND expires > ?',
        [sid, Math.floor(Date.now() / 1000)]
      );
      if (rows.length === 0) return callback(null, null);
      const data = typeof rows[0].data === 'string' ? JSON.parse(rows[0].data) : rows[0].data;
      callback(null, data);
    } catch (err) {
      callback(err);
    }
  }

  async set(sid, sessionData, callback) {
    try {
      const expires = sessionData.cookie && sessionData.cookie.expires
        ? Math.floor(new Date(sessionData.cookie.expires).getTime() / 1000)
        : Math.floor(Date.now() / 1000) + 86400;
      const data = JSON.stringify(sessionData);
      await pool.query(
        `INSERT INTO sessions (session_id, expires, data) VALUES (?, ?, ?)
         ON DUPLICATE KEY UPDATE expires = VALUES(expires), data = VALUES(data)`,
        [sid, expires, data]
      );
      callback(null);
    } catch (err) {
      callback(err);
    }
  }

  async destroy(sid, callback) {
    try {
      await pool.query('DELETE FROM sessions WHERE session_id = ?', [sid]);
      callback(null);
    } catch (err) {
      callback(err);
    }
  }

  async clearExpired() {
    try {
      await pool.query('DELETE FROM sessions WHERE expires < ?', [Math.floor(Date.now() / 1000)]);
    } catch (err) {
      // silently ignore
    }
  }

  close() {
    if (this.clearExpiredInterval) {
      clearInterval(this.clearExpiredInterval);
    }
  }
}

module.exports = MySQLSessionStore;
