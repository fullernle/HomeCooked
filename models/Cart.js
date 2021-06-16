const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User"
  },
  products: [
    {
      productId: Number,
      name: String,
      price: String,
      category: String,
      quantity: Number
    }
  ],

  active: {
    type: Boolean,
    default: true
  },

  modifiedOn: {
    type: Date,
    default: Date.now
  }
}, 
{ timestamps: true}
);


const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;