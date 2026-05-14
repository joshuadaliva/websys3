const express = require("express");
const router = express.Router();
const { isAdmin } = require("../middlewares/auth");

const authController = require("../controllers/admin/authController");
const dashboardController = require("../controllers/admin/dashboardController");
const archivingController = require("../controllers/admin/archivingController");
const reportsController = require("../controllers/admin/reportsController");
const notificationController = require("../controllers/admin/notificationController");
const stallManagementController = require("../controllers/admin/stallManagementController");
const paymentManagementController = require("../controllers/admin/paymentManagementController");
const vendorManagementController = require("../controllers/admin/vendorManagementController");
const applicationManagementController = require("../controllers/admin/applicationManagementController");
const settingsController = require("../controllers/admin/settingsController");
const documentManagementController = require("../controllers/admin/documentManagementController");
const raffleController = require("../controllers/admin/raffleController");

// Auth routes (no middleware needed)
router.get("/login", authController.showLoginPage);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

// Protected routes
router.get("/dashboard", isAdmin, dashboardController.showDashboard);

// Stall management
router.get("/stall-management", isAdmin, stallManagementController.showStallManagement);
router.get("/stall-management/create-map", isAdmin, stallManagementController.showCreateMapBuilder);
router.post("/stall-management/create", isAdmin, stallManagementController.createStall);
router.put("/stall-management/:id", isAdmin, stallManagementController.updateStall);
router.post("/stall-management/:id/post", isAdmin, stallManagementController.postStall);
router.delete("/stall-management/:id", isAdmin, stallManagementController.deleteStall);

// Application management
router.get("/application-management", isAdmin, applicationManagementController.showApplicationManagement);
router.get("/application-validation", isAdmin, applicationManagementController.showApplicationValidation);
router.get("/application-management/document-submission", isAdmin, applicationManagementController.showDocumentSubmission);
router.put("/application/:id/pre-screening", isAdmin, applicationManagementController.updatePreScreening);
router.put("/application/:id/qualification", isAdmin, applicationManagementController.updateQualification);
router.put("/application/:id/selection", isAdmin, applicationManagementController.updateSelection);
router.post("/application/:id/send-upload-link", isAdmin, applicationManagementController.sendUploadLink);
router.put("/application/document/:docId/review", isAdmin, applicationManagementController.reviewDocument);

// Vendor management
router.get("/vendor-management", isAdmin, vendorManagementController.showVendorManagement);
router.get("/vendor-management/import-data", isAdmin, vendorManagementController.showImportVendorData);
router.post("/vendor-management/convert", isAdmin, vendorManagementController.convertToVendor);
router.put("/vendor-management/:id", isAdmin, vendorManagementController.updateVendor);
router.post("/vendor-management/:id/archive", isAdmin, vendorManagementController.archiveVendor);

// Payment management
router.get("/payment-management", isAdmin, paymentManagementController.showPaymentManagement);
router.post("/payment-management/record", isAdmin, paymentManagementController.recordPayment);
router.post("/payment-management/send-reminder", isAdmin, paymentManagementController.sendReminder);

// Document management
router.get("/document-management", isAdmin, documentManagementController.showDocumentManagement);

// Archiving
router.get("/archiving", isAdmin, archivingController.showArchivingPage);
router.post("/archiving/restore/:type/:id", isAdmin, archivingController.restoreItem);

// Notifications
router.get("/notification-management", isAdmin, notificationController.showNotificationManagement);
router.put("/notification/:id/read", isAdmin, notificationController.markAsRead);
router.post("/notification/send-message", isAdmin, notificationController.sendMessage);
router.put("/inquiry/:id/status", isAdmin, notificationController.updateInquiryStatus);
router.post("/inquiry/:id/reply", isAdmin, notificationController.replyToInquiry);
router.post("/message/:id/resend", isAdmin, notificationController.resendMessage);

// Reports
router.get("/reports", isAdmin, reportsController.showReports);

// Raffle
router.post("/raffle/schedule", isAdmin, raffleController.scheduleRaffle);
router.post("/raffle/start", isAdmin, raffleController.startRaffle);
router.get("/raffle/state", isAdmin, raffleController.getRaffleState);

// Settings
router.get("/settings", isAdmin, settingsController.showSettings);
router.put("/settings/market", isAdmin, settingsController.updateMarketSettings);
router.put("/settings/payment-methods", isAdmin, settingsController.updatePaymentMethods);
router.put("/settings/fees", isAdmin, settingsController.updateFees);
router.put("/settings/profile", isAdmin, settingsController.updateProfile);
router.put("/settings/password", isAdmin, settingsController.changePassword);

module.exports = router;
