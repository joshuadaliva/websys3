

const express = require("express");
const router = express.Router();
const authController = require("../controllers/collector/authController")
const dashboardController = require("../controllers/collector/dashboardController")



router.get("/login", authController.showLoginPage)
router.get("/dashboard", dashboardController.showDashboard)


module.exports = router;