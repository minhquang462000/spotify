const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const logger = require("morgan");
const bodyParser = require("body-parser");
const path = require("path");
const adminService = require("./services/admin.service");
const privateRoute = require("./routes/index.admin.route");
const clientRouter = require("./routes/index.client.route");
// serve static
app.use(express.static(path.join(__dirname, "public")));
// Sử dụng bodyParser để phân tích nội dung của yêu cầu
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));
// middleware1

app.use(express.json());
app.use(logger("dev"));
app.use(
  cors({
    origin: ["http://localhost:3001"],
    credentials: true,
  })
);
// middleware2
app.use((req, res, next) => {
  console.log("request is comming");
  next();
});
// Routes
// router Admin
privateRoute(app);
// router Client
clientRouter(app);


// Response Error
app.use((req, res) => {
  res.status(404).send("404 not found");
});
// connect Mongo DB
mongoose.connect("mongodb://127.0.0.1:27017/spotify?directConnection=true", {
  autoIndex: true,
});
// Even connect\
mongoose.connection.once("open", async () => {
  await adminService.checkDefault();
  console.log("DB connected");

  // Listen Port 3000
  app.listen(3000, () => {
    console.log("Server is running on port 3000");
  });
});

// Even Erros Connect
mongoose.connection.on("error", () => {
  console.log("DB not connected");
});
