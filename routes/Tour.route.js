const express = require("express");
const {
  getTours,
  createTours,
  tourDetails,
  updateTour,
  getThreeCheapestTours,
  getThreeTrendingTours,
} = require("../controllers/Tour.controller");
const { viewCount } = require("../middleware/viewCount");
const router = express.Router();

router.route("/").get(getTours).post(createTours);
router.route("/cheapest").get(getThreeCheapestTours);
router.route("/trending").get(viewCount, getThreeTrendingTours);
router.route("/:id").get(tourDetails);
router.route("/:id").patch(updateTour);

module.exports = router;
