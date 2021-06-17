const Cart = require("../../models/Cart");
const User = require("../../models/User");
const mongoose = require("mongoose");

module.exports = {
  getCart: async (req, res) => {
    const userId = req.params.userId;
    let objectUserId = mongoose.Types.ObjectId(userId);

    try {
      let cart = await Cart.findOne({ userId: objectUserId });

      if (cart) {
        return res.send(cart);
      } else {
        cart = await Cart.create({
          userId: objectUserId,
        });
        await cart.save();

        const userById = await User.findOne({ _id: objectUserId });

        userById.cart = cart._id;
        userById.save();

        return res.send(cart);
      }
    } catch (error) {
      return console.log("No user found");
    }
  },

  updateCart: async (req, res) => {
    console.log(req.params);
    console.log(req.body);

    let cart = await Cart.findById(req.params.cartId);

    let product = req.body.product;
    let price = product.price;
    let quantity = product.quantity;

    if (req.body.action === "add") {
      console.log("ADD THIS ISH MOTHA EFFA");
      console.log(price);
      console.log(quantity);
      console.log(cart);
      cart.products.push(product);
      console.log("---------------------------");
      cart.totalQuantity = cart.products.length;
      cart.totalPrice = 0;
			cart.save();
      console.log(cart);
    }

    res.send("HELLOOOO");
  },
};
