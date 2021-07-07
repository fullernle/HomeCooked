const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  business: {
    type: Schema.Types.ObjectId,
    ref: "Business",
  },
  body: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
	timestamps: true
});

module.exports = Review = mongoose.model("Review", ReviewSchema);
