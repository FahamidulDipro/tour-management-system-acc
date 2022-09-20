const Tour = require("../models/Tour");

exports.getToursService = async (filters, queries) => {
  const tour = await Tour.find(filters)
    .skip(queries.skip)
    .limit(queries.limit)
    .select(queries.fieldsBy)
    .sort(queries.sortBy);

  const totalTours = await Tour.countDocuments(filters);
  const pageCount = Math.ceil(totalTours / queries.limit);
  return { totalTours, tour };
};

exports.createTourservice = async (data) => {
  const tour = await Tour.create(data);
  return tour;
};

exports.getTourDetailService = async (dataId) => {
  const detail = await Tour.findOne({ _id: dataId });
  return detail;
};

//Update Tour
exports.updateTourService = async (dataId, data) => {
  const tour = await Tour.updateOne(
    { _id: dataId },
    { $set: data },
    { runValidators: true }
  );
  return tour;
};

//Get tour with queries services
// exports.getToursServiceWithQueries = async (query) => {
//   const tour = await Tour.findOne(query);
//   return tour;
// };
