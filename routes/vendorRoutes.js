const express = require("express");
const router = express.Router();
const { isVendor } = require("../middlewares/auth");

const authController = require("../controllers/vendor/authController");
const vendorPortal = require("../controllers/vendor/vendorPortalController");

// Auth
router.get("/login", authController.showLoginPage);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// Protected routes
router.get("/dashboard", isVendor, vendorPortal.showDashboard);

// Payments
router.get("/payments", isVendor, vendorPortal.showPayments);
router.post("/payments/submit", isVendor, vendorPortal.makePayment);

// Inquiries (note: misspelled route preserved from original)
router.get("/inquries", isVendor, vendorPortal.showInquiries);
router.post("/inquiries/create", isVendor, vendorPortal.createInquiry);
router.get("/inquiries/:ticketId/messages", isVendor, vendorPortal.getInquiryMessages);
router.post("/inquiries/:ticketId/reply", isVendor, vendorPortal.replyToInquiry);

// Profile
router.get("/profile", isVendor, vendorPortal.showProfile);

// Settings
router.get("/settings", isVendor, vendorPortal.showSettings);
router.put("/settings", isVendor, vendorPortal.updateSettings);
router.put("/settings/password", isVendor, vendorPortal.changePassword);

module.exports = router;
