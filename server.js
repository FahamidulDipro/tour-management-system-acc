const dotenv = require("dotenv").config();
const colors = require("colors");
const mongoose = require("mongoose");

const app = require("./app");

const port = process.env.PORT || 8080;
mongoose.connect(process.env.DATABASE_LOCAL).then(() => {
  console.log(`Database connection is successfull!`.yellow.bold);
});
// server

app.listen(port, () => {
  console.log(`App is running on port ${port}`.yellow.bold);
});
