




const showApplicationManagement = async (req, res) => {
    res.render("pages/admin/application-management")
}

const showApplicationValidation = async (req, res) => {
    res.render("pages/admin/application-validation")
}



module.exports = {
    showApplicationManagement,
    showApplicationValidation
}
