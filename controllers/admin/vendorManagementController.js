const { pool } = require('../../config/database');
const bcrypt = require('bcryptjs');

const showVendorManagement = async (req, res) => {
  try {
    const [vendors] = await pool.query(
      `SELECT v.*, s.stall_number, s.section, u.username, u.last_login
       FROM vendors v
       LEFT JOIN stalls s ON v.stall_id = s.id
       LEFT JOIN users u ON v.user_id = u.id
       WHERE v.is_archived = 0
       ORDER BY v.created_at DESC`
    );

    const [statusCounts] = await pool.query(
      `SELECT status, COUNT(*) as count FROM vendors WHERE is_archived = 0 GROUP BY status`
    );

    res.render("pages/admin/vendor-management", { vendors, statusCounts });
  } catch (error) {
    console.error('Vendor management error:', error);
    res.render("pages/admin/vendor-management", { vendors: [], statusCounts: [] });
  }
};

const showImportVendorData = async (req, res) => {
  res.render("pages/admin/vendor-import-data");
};

const convertToVendor = async (req, res) => {
  try {
    const {
      applicationId, stallId, contractStart, contractEnd,
      monthlyRate, username, password
    } = req.body;

    // Get the application
    const [apps] = await pool.query("SELECT * FROM applications WHERE id = ?", [applicationId]);
    if (apps.length === 0) {
      return res.status(404).json({ ok: false, message: 'Application not found' });
    }
    const app = apps[0];

    // Create user account
    const hashedPassword = await bcrypt.hash(password, 12);
    const [userResult] = await pool.query(
      `INSERT INTO users (username, password, role, email, first_name, last_name, mobile, is_active)
       VALUES (?, ?, 'vendor', ?, ?, ?, ?, 1)`,
      [username, hashedPassword, app.email, app.first_name, app.last_name, app.mobile]
    );

    // Create vendor record
    const [vendorResult] = await pool.query(
      `INSERT INTO vendors (user_id, application_id, first_name, last_name, mobile, email, address,
       business_name, business_type, stall_id, contract_start, contract_end, monthly_rate, status)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, 'active')`,
      [userResult.insertId, applicationId, app.first_name, app.last_name, app.mobile, app.email,
       app.address, app.intended_business, app.intended_business, stallId, contractStart, contractEnd, monthlyRate]
    );

    // Update stall status
    await pool.query(
      "UPDATE stalls SET status = 'occupied', vendor_id = ? WHERE id = ?",
      [vendorResult.insertId, stallId]
    );

    // Update application status
    await pool.query(
      "UPDATE applications SET selection_status = 'selected' WHERE id = ?",
      [applicationId]
    );

    // Log credentials in message_logs
    await pool.query(
      `INSERT INTO message_logs (type, recipient, recipient_name, subject, message, status, related_type, related_id, sent_by)
       VALUES ('email', ?, ?, 'Portal Login Credentials', ?, 'sent', 'vendor', ?, ?)`,
      [app.email, `${app.first_name} ${app.last_name}`,
       `Your vendor portal credentials - Username: ${username}, Password: ${password}`,
       vendorResult.insertId, req.session.user.id]
    );

    // Create notification
    await pool.query(
      `INSERT INTO notifications (title, message, type, recipient_id, recipient_role)
       VALUES ('Account Created', 'Your vendor account has been created. You can now log in.', 'system', ?, 'vendor')`,
      [userResult.insertId]
    );

    res.json({ ok: true, message: 'Vendor created successfully', vendorId: vendorResult.insertId });
  } catch (error) {
    console.error('Convert to vendor error:', error);
    res.status(500).json({ ok: false, message: error.code === 'ER_DUP_ENTRY' ? 'Username already exists' : 'Failed to create vendor' });
  }
};

const updateVendor = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, mobile, email, businessName, status, monthlyRate, contractEnd } = req.body;
    await pool.query(
      `UPDATE vendors SET first_name = COALESCE(?, first_name), last_name = COALESCE(?, last_name),
       mobile = COALESCE(?, mobile), email = COALESCE(?, email), business_name = COALESCE(?, business_name),
       status = COALESCE(?, status), monthly_rate = COALESCE(?, monthly_rate),
       contract_end = COALESCE(?, contract_end) WHERE id = ?`,
      [firstName, lastName, mobile, email, businessName, status, monthlyRate, contractEnd, id]
    );
    res.json({ ok: true, message: 'Vendor updated successfully' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to update vendor' });
  }
};

const archiveVendor = async (req, res) => {
  try {
    const { id } = req.params;
    await pool.query("UPDATE vendors SET is_archived = 1 WHERE id = ?", [id]);
    // Free up the stall
    await pool.query(
      "UPDATE stalls SET status = 'vacant', vendor_id = NULL WHERE vendor_id = ?",
      [id]
    );
    res.json({ ok: true, message: 'Vendor archived successfully' });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to archive vendor' });
  }
};

module.exports = {
  showVendorManagement, showImportVendorData,
  convertToVendor, updateVendor, archiveVendor
};
