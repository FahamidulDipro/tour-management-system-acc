const mongoose = require("mongoose");

//Schema design
const tourSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please provide a name for this tour"],
      trim: true,
      unique: [true, "Name must be unique!"],
      minLength: [3, "Name must be at least three characters"],
      maxLength: [100, "Too large name"],
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
    unit: {
      type: String,
      required: [true, "Please provide a unit for this tour"],
      enum: {
        values: ["kg", "liter", "pcs"],
        message: "Unit value can't be {VALUE}, must be kg/liter/pcs",
      },
    },
    quantity: {
      type: Number,
      required: [true, "Please provide a quantity for this tour"],
      min: [0, "Quantity can't be negative"],
      validate: {
        validator: (value) => {
          const isInteger = Number.isInteger(value);
          if (isInteger) {
            return true;
          } else {
            return false;
          }
        },
        message: "Quantity must be an integer",
      },
    },
    status: {
      type: String,
      enum: {
        values: ["In Stock", "Out Of Stock", "Dicontinued"],
        message: "Status can't be {VALUE}",
      },
    },
    // supplier: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Supplier",
    // },
    // catagories: [
    //   {
    //     name: {
    //       type: String,
    //       required: true,
    //     },
    //     _id: mongoose.Schema.Types.ObjectId,
    //   },
    // ],
  },
  { timestamps: true }
);

//Schema -> Model -> Query

//Making Model
const Tour = mongoose.model("Tour", tourSchema);

module.exports = Tour;
