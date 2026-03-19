

const express = require("express");
const app = express();
const notFound = require("./middlewares/notFound")
const adminRoutes = require("./routes/adminRoutes")
const collectorRoutes = require("./routes/collectorRoutes")
const vendorRoutes = require("./routes/vendorRoutes")


// config
app.set("view engine", "ejs")
app.use(express.static("public"))
app.use((req, res, next) => {
  res.locals.currentRoute = req.path;
  next();
});


// routes
app.get("/", (req, res) => res.render("index"))
app.use("/admin", adminRoutes)
app.use("/collector", collectorRoutes)
app.use("/vendor", vendorRoutes)


// 404 not found
app.use(notFound)

app.listen(5000)