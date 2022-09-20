let count = 0;
exports.viewCount = (req, res, next) => {
  count++;
  console.log(count);
  next();
};
