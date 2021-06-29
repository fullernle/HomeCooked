const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const BusinessSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  coordinates: {
    latitude: {
      type: Number,
      required: true,
    },
    longitude: {
      type: Number,
      required: true,
    },
  },
  categories: [{ type: Object }],
  display_phone: {
    type: String,
  },
  hours: [
    {
      is_open_now: {
        type: Boolean,
      },
      open: [
        {
          is_overnight: {
            type: Boolean,
          },
          start: {
            type: String,
          },
          end: {
            type: String,
          },
          day: {
            type: Number,
          },
        },
      ],
    },
  ],
  location: {
    address1: {
      type: String,
    },
    address2: {
      type: String,
    },
    address3: {
      type: String,
    },
    city: {
      type: String,
    },
    country: {
      type: String,
    },
    display_address: [{ type: String }],
    state: {
      type: String,
    },
    zip_code: {
      type: String,
    },
  },
  phone: {
    type: String,
  },
  price: {
    type: String,
  },
  rating: {
    type: Number,
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
    },
  ],
  reviews: [
    {
      type: Schema.Types.Object,
      ref: "Review",
    },
  ],
});

module.exports = Business = mongoose.model("Business", BusinessSchema);
