

const express = require("express");
const router = express.Router();
const authController = require("../controllers/admin/authController")
const archivingController = require("../controllers/admin/archivingController")
const reportsController = require("../controllers/admin/reportsController")
const dashboardController = require("../controllers/admin/dashboardController")
const rcdReportsController = require("../controllers/admin/rcdReportsController")
const notificationController = require("../controllers/admin/notificationController")
const stallManagementController = require("../controllers/admin/stallManagementController")


router.get("/login", authController.showLoginPage)
router.get("/dashboard", dashboardController.showDashboard)
router.get("/archiving", archivingController.showArchivingPage)
router.get("/reports", reportsController.showReports)
router.get("/rcd-reports", rcdReportsController.showRcd)
router.get("/notification-management", notificationController.showNotificationManagement)



module.exports = router;