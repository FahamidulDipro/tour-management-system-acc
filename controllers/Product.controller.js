const {
  getProductsService,
  createProductService,
} = require("../services/Product.services");

exports.getProducts = async (req, res, next) => {
  const product = await getProductsService();
  try {
    res.status(200).json({ status: "Success!", data: product });
  } catch (error) {
    res.status(400).json({ status: "Failed", error: error.message });
  }
};

exports.createProducts = async (req, res, next) => {
  try {
    //Save or Create
    const result = await createProductService(req.body);
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
