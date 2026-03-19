

const express = require("express");
const router = express.Router();
const authController = require("../controllers/vendor/authController")
const vendorPortalController = require("../controllers/vendor/vendorPortalController")



router.get("/login", authController.showLoginPage)
router.get("/dashboard", vendorPortalController.showDashboard)
router.get("/payments", vendorPortalController.showPayments)
router.get("/inquries", vendorPortalController.showInquiry)
router.get("/profile", vendorPortalController.showProfile)
router.get("/settings", vendorPortalController.showSettings)



module.exports = router;