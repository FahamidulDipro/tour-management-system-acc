const Tour = require("../models/Tour");

exports.getToursService = async () => {
  const tour = await Tour.find();
  return tour;
};

exports.createTourservice = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourDetailService = async (dataId) => {
  const detail = await Tour.findOne({ _id: dataId });
  return detail;
};
