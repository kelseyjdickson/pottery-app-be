const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ItemSchema = new Schema({
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
});
