const {
  getToursService,
  createTourservice,
  getTourDetailService,
  updateTourService,
  getThreeCheapestToursService,
  getThreeTrendingToursService,
} = require("../services/Tour.services");

//Getting All Tours
exports.getTours = async (req, res, next) => {
  const queryFilter = { ...req.query };

  const excluedFields = ["limit", "sort", "page"];
  excluedFields.forEach((field) => delete queryFilter[field]);

  const queries = {};

  if (req.query.sort) {
    const sortBy = req.query.sort.split(",").join(" ");
    queries.sortBy = sortBy;
    console.log(sortBy);
  }
  if (req.query.fields) {
    const fieldsBy = req.query.fields.split(",").join(" ");
    queries.fieldsBy = fieldsBy;
    console.log(fieldsBy);
  }
  if (req.query.page) {
    const { page = 1, limit = 3 } = req.query;
    const skip = (page - 1) * parseInt(limit);
    queries.skip = skip;
    queries.limit = parseInt(limit);
  }
  const tours = await getToursService(queryFilter, queries);

  try {
    res.status(200).json({ status: "Success!", data: tours });
  } catch (error) {
    res.status(400).json({ status: "Failed", error: error.message });
  }
};

exports.createTours = async (req, res, next) => {
  try {
    //Save or Create Tours
    const result = await createTourservice(req.body);
    res.status(200).json({
      status: "Success",
      message: "Data inserted successfully!",
      data: result,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data is not inserted",
      error: error.message,
    });
  }
};

//Getting Tour Details
exports.tourDetails = async (req, res, next) => {
  const { id } = req.params;
  const detail = await getTourDetailService(id);
  try {
    res.status(200).json({ status: "Success!", data: detail });
  } catch (error) {
    res.status(400).json({ status: "Failed", error: error.message });
  }
};

//Updating Tour
exports.updateTour = async (req, res, next) => {
  try {
    const { id } = req.params;
    const updatedItem = await updateTourService(id, req.body);
    res.status(200).json({
      status: "Success",
      message: "Data updated into  successfully!",
      data: updatedItem,
    });
  } catch (error) {
    res.status(400).json({
      status: "Failed",
      message: "Data is not Updated",
      error: error.message,
    });
  }
};

//Getting Top 3 Cheapest Tours
exports.getThreeCheapestTours = async (req, res, next) => {
  const tours = await getThreeCheapestToursService(req.query);

  try {
    res.status(200).json({ status: "Success!", data: tours });
  } catch (error) {
    res.status(400).json({ status: "Failed", error: error.message });
  }
};
//Getting Top 3 Trending Tours
exports.getThreeTrendingTours = async (req, res, next) => {
  const tours = await getThreeTrendingToursService(req.query);

  try {
    res.status(200).json({ status: "Success!", data: tours });
  } catch (error) {
    res.status(400).json({ status: "Failed", error: error.message });
  }
};
