const mongoose = require("mongoose");
const Schema = mongoose.Schema;

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
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Item", ItemSchema);
