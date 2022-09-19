const express = require("express");
const {
  getTours,
  createTours,
} = require("../controllers/Tour.controller");
const router = express.Router();

router.route("/").get(getTours).post(createTours);

module.exports = router;
