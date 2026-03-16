

const express = require("express");
const app = express();
const notFound = require("./middlewares/notFound")
const adminRoutes = require("./routes/adminRoutes")
// config
app.set("view engine", "ejs")
app.use(express.static("public"))


// routes
app.get("/", (req, res) => res.render("index"))
app.use("/admin", adminRoutes)


// 404 not found
app.use(notFound)

app.listen(5000)