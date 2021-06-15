const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({

  business: {
    type: {
      type: Schema.Types.ObjectId,
      ref: 'Businesses'
    }
  },

  name: {
    type: String,
    required: true,
  },

  price: {
    type: String, 
    required: true 
  },

  category: {
    type: String,
    required: true
  },

  quantity: {
    type: Number,
    required: true 
  },

})

module.exports = Product = mongoose.model('Product', ProductSchema);