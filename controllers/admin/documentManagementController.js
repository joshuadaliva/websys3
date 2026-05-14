const { pool } = require('../../config/database');

const showDocumentManagement = async (req, res) => {
  try {
    const [documents] = await pool.query(
      `SELECT d.*, u.username as uploaded_by_name
       FROM documents d
       LEFT JOIN users u ON d.uploaded_by = u.id
       WHERE d.is_archived = 0
       ORDER BY d.created_at DESC`
    );

    // Application documents
    const [appDocs] = await pool.query(
      `SELECT ad.*, a.application_number, a.first_name, a.last_name
       FROM application_documents ad
       JOIN applications a ON ad.application_id = a.id
       ORDER BY ad.uploaded_at DESC`
    );

    res.render("pages/admin/document-management", { documents, appDocs });
  } catch (error) {
    console.error('Document management error:', error);
    res.render("pages/admin/document-management", { documents: [], appDocs: [] });
  }
};

module.exports = { showDocumentManagement };
