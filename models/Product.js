const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
  business: {
    type: {
      type: Schema.Types.ObjectId,
      ref: "Business",
    },
  },

  name: {
    type: String,
    required: true,
  },

  price: {
    type: String,
    required: true,
  },

  photos: [{ type: String }]
});

module.exports = Product = mongoose.model("Product", ProductSchema);
