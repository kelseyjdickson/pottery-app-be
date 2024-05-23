const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const RatingSchema = new Schema({
  rating: {
    type: Number,
    min: 1,
    max: 5,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

const ItemSchema = new Schema(
  {
    itemName: {
      type: String,
      required: true,
      unqiue: true,
      maxLength: 25,
    },
    price: {
      type: Number,
      required: true,
    },
    quantity: {
      type: Number,
      required: true,
    },
    itemDescription: {
      type: String,
      required: true,
      maxLength: 2000,
    },
    ratings: [RatingSchema],
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
