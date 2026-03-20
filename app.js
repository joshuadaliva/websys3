const express = require("express");
const app = express();
const notFound = require("./middlewares/notFound");
const adminRoutes = require("./routes/adminRoutes");
const collectorRoutes = require("./routes/collectorRoutes");
const vendorRoutes = require("./routes/vendorRoutes");

// View engine and static files configuration
app.set("view engine", "ejs");
app.use(express.static("public"));

// global logging
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  // Log response when sent
  console.log(
    `[${timestamp}] ${req.method} ${req.path} - Status: ${res.statusCode}`
  );

  next();
});

// Middleware to pass current route to all views
app.use((req, res, next) => {
  res.locals.currentRoute = req.path;
  next();
});

// Application routes
app.get("/", (req, res) => res.render("index"));
app.use("/admin", adminRoutes);
app.use("/collector", collectorRoutes);
app.use("/vendor", vendorRoutes);

// Catch-all for undefined routes
app.use(notFound);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
