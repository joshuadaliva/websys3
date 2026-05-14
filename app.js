require('dotenv').config();

const express = require("express");
const http = require("http");
const session = require("express-session");
const path = require("path");
const { Server } = require("socket.io");
const { pool, testConnection } = require("./config/database");
const MySQLSessionStore = require("./config/sessionStore");
const { attachUser } = require("./middlewares/auth");
const notFound = require("./middlewares/notFound");

const adminRoutes = require("./routes/adminRoutes");
const collectorRoutes = require("./routes/collectorRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const publicRoutes = require("./routes/publicRoutes");
const apiRoutes = require("./routes/apiRoutes");

const app = express();
const server = http.createServer(app);
const io = new Server(server);
app.set("io", io);

// View engine
app.set("view engine", "ejs");

// Static files
app.use(express.static("public"));

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Session
app.use(session({
  store: new MySQLSessionStore(),
  secret: process.env.SESSION_SECRET || 'arkipaisi-secret',
  resave: false,
  saveUninitialized: false,
  cookie: {
    maxAge: 24 * 60 * 60 * 1000, // 24 hours
    httpOnly: true,
    secure: false
  }
}));

// Make user available to all views
app.use(attachUser);

// Make db pool available
app.use((req, res, next) => {
  req.db = pool;
  next();
});

// Logging middleware
app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  next();
});

// Current route for sidebar active state
app.use((req, res, next) => {
  res.locals.currentRoute = req.path;
  next();
});

// Routes
app.use("/", publicRoutes);
app.use("/admin", adminRoutes);
app.use("/collector", collectorRoutes);
app.use("/vendor", vendorRoutes);
app.use("/api", apiRoutes);

// 404 handler
app.use(notFound);

// Socket.IO
io.on("connection", (socket) => {
  socket.emit("connected", { ok: true });
});

// Start server
const PORT = process.env.PORT || 5000;

async function startServer() {
  const dbConnected = await testConnection();
  if (!dbConnected) {
    console.warn('WARNING: MySQL not connected. Some features will not work.');
    console.warn('Run: node config/seed.js  to set up the database.');
  }

  server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
}

startServer();
