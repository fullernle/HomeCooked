const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ReviewSchema = new Schema({
  business: {
    type: {
      type: Schema.Types.ObjectId,
      ref: "Business"
    }
  },
  body: {
    type: String,
    required: true,
  },
});


module.exports = Review = mongoose.model("Review", ReviewSchema);