




const showApplicationManagement = async (req, res) => {
    res.render("pages/admin/application-management")
}

const showApplicationValidation = async (req, res) => {
    res.render("pages/admin/application-validation")
}

const showDocumentSubmission = async (req, res) => {
    res.render("pages/admin/document-submission")
}

module.exports = {
    showApplicationManagement,
    showApplicationValidation,
    showDocumentSubmission
}
