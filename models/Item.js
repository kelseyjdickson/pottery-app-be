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
    image: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);
// Pre and Post hooks
ItemSchema.pre("save", function (next) {
  this.itemName = this.itemName.toUpperCase();
  next();
});

ItemSchema.post("save", function (next) {
  this.itemName = this.itemName.toLowerCase();
});

module.exports = mongoose.model("Item", ItemSchema);
