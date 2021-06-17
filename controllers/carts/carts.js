const Cart = require("../../models/Cart");
const User = require("../../models/User");
const mongoose = require("mongoose");

module.exports = {
  getCart: async (req, res) => {
    const { user } = req.body;
    const userId = req.params.userId;
    console.log(req.params.userId)
    let objectUserId = mongoose.Types.ObjectId(userId);
    console.log("this is your user ID!")
    console.log(objectUserId)
    console.log(userId)
    try {
      let cart = await Cart.findOne({ userId: objectUserId });
      console.log('does cart exist?')
      console.log(cart)
      if (cart) {
        console.log("cart does exist! Sending")
        return res.send(cart);
      } else {
        console.log("Cart doesn't exist! creating cart")
        cart = await Cart.create({
          userId: objectUserId,
        });
        await cart.save();
        console.log("here is your cart!")
        console.log(cart)

        const userById = await User.findOne({ _id: objectUserId });
        console.log("Here is the user it belongs to!")
        userById.cart = cart._id;
        userById.save();
        console.log(userById);
        return res.send(cart);
      };
    } catch (error) {
      return console.log("No user found");
    }
  },
};

// When user is logged in, if no cart exists, create cart for user
