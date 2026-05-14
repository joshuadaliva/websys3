const express = require("express");
const router = express.Router();
const { isCollector } = require("../middlewares/auth");

const authController = require("../controllers/collector/authController");
const dashboardController = require("../controllers/collector/dashboardController");
const myStallsController = require("../controllers/collector/myStallsController");
const paymentsController = require("../controllers/collector/paymentsController");
const monthlySummaryController = require("../controllers/collector/monthlySummaryController");
const notificationsController = require("../controllers/collector/notificationsController");
const profileController = require("../controllers/collector/profileController");
const settingsController = require("../controllers/collector/settingsController");

// Auth
router.get("/login", authController.showLoginPage);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// Protected routes
router.get("/dashboard", isCollector, dashboardController.showDashboard);
router.get("/my-stalls", isCollector, myStallsController.showMyStalls);

// Payments
router.get("/payments", isCollector, paymentsController.showPayments);
router.post("/payments/record-cash", isCollector, paymentsController.recordCashPayment);
router.post("/payments/assign-or", isCollector, paymentsController.assignOR);

// Monthly summary
router.get("/monthly-summary", isCollector, monthlySummaryController.showMonthlySummary);

// Notifications
router.get("/notifications", isCollector, notificationsController.showNotifications);
router.put("/notification/:id/read", isCollector, notificationsController.markAsRead);

// Profile & Settings
router.get("/profile", isCollector, profileController.showProfile);
router.get("/settings", isCollector, settingsController.showSettings);
router.put("/settings", isCollector, settingsController.updateSettings);

module.exports = router;
