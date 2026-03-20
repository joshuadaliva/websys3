const express = require("express");
const router = express.Router();

// Import vendor controllers
const authController = require("../controllers/vendor/authController")
const vendorPortalController = require("../controllers/vendor/vendorPortalController")

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
router.get("/dashboard", vendorPortalController.showDashboard)
router.get("/payments", vendorPortalController.showPayments)
router.get("/inquries", vendorPortalController.showInquiry)

// Profile and settings routes
router.get("/profile", vendorPortalController.showProfile)
router.get("/settings", vendorPortalController.showSettings)

module.exports = router;