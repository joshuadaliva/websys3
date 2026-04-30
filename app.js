const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const app = express();
const notFound = require("./middlewares/notFound");
const adminRoutes = require("./routes/adminRoutes");
const collectorRoutes = require("./routes/collectorRoutes");
const vendorRoutes = require("./routes/vendorRoutes");
const raffleController = require("./controllers/admin/raffleController");

const server = http.createServer(app);
const io = new Server(server);
app.set("io", io);

app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] ${req.method} ${req.path}`);
  console.log(`[${timestamp}] ${req.method} ${req.path} - Status: ${res.statusCode}`);
  next();
});

app.use((req, res, next) => {
  res.locals.currentRoute = req.path;
  next();
});

app.get("/", (req, res) => res.render("index"));
app.get("/raffle/live", raffleController.showPublicRaffle);
app.get("/api/raffle/state", raffleController.getRaffleState);

app.use("/admin", adminRoutes);
app.use("/collector", collectorRoutes);
app.use("/vendor", vendorRoutes);

app.use(notFound);

io.on("connection", (socket) => {
  socket.emit("connected", { ok: true });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
