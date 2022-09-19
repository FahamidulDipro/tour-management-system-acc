const {
  getToursService,
  createTourservice,
} = require("../services/Tour.services");

exports.getTours = async (req, res, next) => {
  const product = await getToursService();
  try {
    res.status(200).json({ status: "Success!", data: product });
  } catch (error) {
    res.status(400).json({ status: "Failed", error: error.message });
  }
};

exports.createTours = async (req, res, next) => {
  try {
    //Save or Create
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
