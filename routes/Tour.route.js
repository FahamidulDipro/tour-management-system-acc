const express = require("express");
const {
  getTours,
  createTours,
  tourDetails,
  updateTour,
  getThreeCheapestTours,
} = require("../controllers/Tour.controller");
const router = express.Router();

router.route("/").get(getTours).post(createTours);
router.route("/cheapest").get(getThreeCheapestTours);
router.route("/:id").get(tourDetails);
router.route("/:id").patch(updateTour);

module.exports = router;
