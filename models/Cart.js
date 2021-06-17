const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  products: [
    {
      type: Schema.Types.ObjectId,
      ref: "Product",
      quantity: Number
    }
  ],
  totalQuantity: {
    type: Number
  },
  totalPrice: {
    type: Number
  }
}, 
  { timestamps: true }
);


const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;