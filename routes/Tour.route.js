const express = require("express");
const {
  getTours,
  createTours,
  tourDetails,
} = require("../controllers/Tour.controller");
const router = express.Router();

router.route("/").get(getTours).post(createTours);
router.route("/:id").get(tourDetails);

module.exports = router;
