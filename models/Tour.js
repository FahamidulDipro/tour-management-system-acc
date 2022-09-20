const mongoose = require("mongoose");

//Schema design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tour"],
    },
    image: {
      type: String,
      required: [true, "Please provide a image for this tour"],
    },
    description: {
      type: String,
      required: [true, "Please provide a description for this tour"],
    },
    price: {
      type: Number,
      required: [true, "Please provide a price for this tour"],
      min: [0, "Price can't be negative"],
    },
    catagory: {
      type: String,
      required: [true, "Please provide a catagory for this tour"],
    },
  },
  { timestamps: true }
);

//Schema -> Model -> Query

//Making Model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
