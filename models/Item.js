const mongoose = require("mongoose");


const dataSchema = new mongoose.Schema({
  area: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    required: true,
  },
  numberOfUnits: {
    type: Number,
    required: true,
  },
  numberOfCode: {
    type: Number,
    required: true,
  },
});

const Item = mongoose.model("item", dataSchema);

module.exports = Item;
