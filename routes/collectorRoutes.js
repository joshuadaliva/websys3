

const express = require("express");
const router = express.Router();
const authController = require("../controllers/collector/authController")
const dashboardController = require("../controllers/collector/dashboardController")
const myStallsController = require("../controllers/collector/myStallsController")
const notificationsController = require("../controllers/collector/notificationsController")
const paymentsController = require("../controllers/collector/paymentsController")
const profileController = require("../controllers/collector/profileController")
const settingsController = require("../controllers/collector/settingsController")
const monthlySummaryController = require("../controllers/collector/monthlySummaryController")



router.get("/login", authController.showLoginPage)
router.get("/dashboard", dashboardController.showDashboard)
router.get("/my-stalls", myStallsController.showMyStalls)
router.get("/notifications", notificationsController.showNotifications)
router.get("/payments", paymentsController.showPayments)
router.get("/profile", profileController.showProfile)
router.get("/settings", settingsController.showSettings)
router.get("/monthly-summary", monthlySummaryController.showMonthlySummary)


module.exports = router;