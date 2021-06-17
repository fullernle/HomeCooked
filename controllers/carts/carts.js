const Cart = require('../../models/Cart');
const mongoose = require('mongoose');
const ObjectId = mongoose.SchemaType.ObjectId



module.exports = {
  getCart : async (req, res) => {
    const { user } = req.body
    const { _id } = req.params;

    try {
      console.log(user)
      let cart = await Cart.findOne()
      if (cart) {
        return res.send(cart)
      } else {
        cart = await Cart.create({
          user
        })
        cart.save();
        return res.send(cart)
      }
    } catch (error) {
      return console.log("No user found")
    }
  },

};

// When user is logged in, if no cart exists, create cart for user
