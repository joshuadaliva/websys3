const express = require("express");
const router = express.Router();

// Import admin controllers
const authController = require("../controllers/admin/authController")
const dashboardController = require("../controllers/admin/dashboardController")
const archivingController = require("../controllers/admin/archivingController")
const reportsController = require("../controllers/admin/reportsController")
const notificationController = require("../controllers/admin/notificationController")
const stallManagementController = require("../controllers/admin/stallManagementController")
const paymentManagementController = require("../controllers/admin/paymentManagementController")
const vendorManagementController = require("../controllers/admin/vendorManagementController")
const applicationManagementController = require("../controllers/admin/applicationManagementController")
const settingsController = require("../controllers/admin/settingsController")
const documentManagementController = require("../controllers/admin/documentManagementController")
const raffleController = require("../controllers/admin/raffleController")

// Global logging middleware
router.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  
  // Log response when sent
  console.log(`[${timestamp}] ${req.method} ${req.path} - Status: ${res.statusCode}`);
  
  next();
});

// Authentication routes
router.get("/login", authController.showLoginPage)

// Dashboard and main routes
router.get("/dashboard", dashboardController.showDashboard)
router.get("/archiving", archivingController.showArchivingPage)
router.get("/reports", reportsController.showReports)

// Management routes
router.get("/document-management", documentManagementController.showDocumentManagement)
router.get("/notification-management", notificationController.showNotificationManagement)
router.get("/stall-management", stallManagementController.showStallManagement)
router.get("/stall-management/map-builder", stallManagementController.showMapBuilder)
router.get("/payment-management", paymentManagementController.showPaymentManagement)
router.get("/application-management", applicationManagementController.showApplicationManagement)
router.get("/application-validation", applicationManagementController.showApplicationValidation)
router.get("/vendor-management", vendorManagementController.showVendorManagement)
router.get("/vendor-management/import", vendorManagementController.showVendorImport)

// Settings route
router.get("/settings", settingsController.showSettings)

module.exports = router;
