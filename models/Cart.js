const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const CartSchema = new Schema({
  userId: {
    type: Schema.Types.ObjectId,
    ref: "User"
  },
  products: [
    {
      type: Schema.Types.Object,
      ref: "Product",
    }
  ],
  totalQuantity: {
    type: Number
  },
  totalPrice: {
    type: Number,
    default: 0
  }
}, 
  { timestamps: true }
);


const Cart = mongoose.model('Cart', CartSchema);

module.exports = Cart;