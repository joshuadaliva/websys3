const { pool } = require('../../config/database');
const upload = require('../../config/upload');

const showStallManagement = async (req, res) => {
  try {
    const [stalls] = await pool.query(
      `SELECT s.*, v.first_name as vendor_first_name, v.last_name as vendor_last_name
       FROM stalls s LEFT JOIN vendors v ON s.vendor_id = v.id
       WHERE s.is_archived = 0 ORDER BY s.stall_number`
    );
    res.render("pages/admin/stall-management", { stalls });
  } catch (error) {
    console.error('Stall management error:', error);
    res.render("pages/admin/stall-management", { stalls: [] });
  }
};

const showCreateMapBuilder = async (req, res) => {
  try {
    const [stalls] = await pool.query("SELECT * FROM stalls WHERE is_archived = 0 ORDER BY stall_number");
    res.render("pages/admin/stall-map-builder", { stalls });
  } catch (error) {
    res.render("pages/admin/stall-map-builder", { stalls: [] });
  }
};

const createStall = async (req, res) => {
  try {
    const { stallNumber, floor, section, stallType, baseRate, size, description } = req.body;
    await pool.query(
      `INSERT INTO stalls (stall_number, floor, section, stall_type, base_rate, size, description, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, 'vacant')`,
      [stallNumber, floor || '1st Floor', section, stallType, baseRate || 0, size, description]
    );
    res.json({ ok: true, message: 'Stall created successfully' });
  } catch (error) {
    console.error('Create stall error:', error);
    res.status(500).json({ ok: false, message: error.code === 'ER_DUP_ENTRY' ? 'Stall number already exists' : 'Failed to create stall' });
  }
};

const updateStall = async (req, res) => {
  try {
    const { id } = req.params;
    const { stallNumber, floor, section, stallType, baseRate, size, description, status } = req.body;
    await pool.query(
      `UPDATE stalls SET stall_number = ?, floor = ?, section = ?, stall_type = ?,
       base_rate = ?, size = ?, description = ?, status = ? WHERE id = ?`,
      [stallNumber, floor, section, stallType, baseRate, size, description, status, id]
    );
    res.json({ ok: true, message: 'Stall updated successfully' });
  } catch (error) {
    console.error('Update stall error:', error);
    res.status(500).json({ ok: false, message: 'Failed to update stall' });
  }
};

const postStall = async (req, res) => {
  try {
    const { id } = req.params;
    const { applicationDeadline, description } = req.body;
    await pool.query(
      `UPDATE stalls SET status = 'posted', posted_at = NOW(), application_deadline = ?,
       description = COALESCE(?, description) WHERE id = ? AND status = 'vacant'`,
      [applicationDeadline || null, description, id]
    );
    res.json({ ok: true, message: 'Stall posted successfully' });
  } catch (error) {
    console.error('Post stall error:', error);
    res.status(500).json({ ok: false, message: 'Failed to post stall' });
  }
};

const deleteStall = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("UPDATE stalls SET is_archived = 1 WHERE id = ?", [id]);
    res.json({ ok: true, message: 'Stall archived successfully' });
  } catch (error) {
    console.error('Delete stall error:', error);
    res.status(500).json({ ok: false, message: 'Failed to archive stall' });
  }
};

module.exports = {
  showStallManagement, showCreateMapBuilder, createStall,
  updateStall, postStall, deleteStall
};
