const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
const Tour = require("./models/Tour");
const router = require("./routes/Tour.route");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("Route is working! YaY!");
});

//Posting to database
app.use("/api/v1/tour", router);

module.exports = app;
