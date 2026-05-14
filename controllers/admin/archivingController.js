const { pool } = require('../../config/database');

const showArchivingPage = async (req, res) => {
  try {
    const [archivedVendors] = await pool.query(
      `SELECT v.*, s.stall_number FROM vendors v
       LEFT JOIN stalls s ON v.stall_id = s.id
       WHERE v.is_archived = 1 ORDER BY v.updated_at DESC`
    );

    const [archivedDocuments] = await pool.query(
      `SELECT * FROM documents WHERE is_archived = 1 ORDER BY updated_at DESC`
    );

    res.render("pages/admin/archiving", { archivedVendors, archivedDocuments });
  } catch (error) {
    console.error('Archiving error:', error);
    res.render("pages/admin/archiving", { archivedVendors: [], archivedDocuments: [] });
  }
};

const restoreItem = async (req, res) => {
  try {
    const { type, id } = req.params;
    const table = type === 'vendor' ? 'vendors' : 'documents';
    await pool.query(`UPDATE ${table} SET is_archived = 0 WHERE id = ?`, [id]);
    res.json({ ok: true, message: `${type} restored successfully` });
  } catch (error) {
    res.status(500).json({ ok: false, message: 'Failed to restore item' });
  }
};

module.exports = { showArchivingPage, restoreItem };
