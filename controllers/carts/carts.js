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

  addToCart: async (req, res) => {
    console.log("---------------------------");
    console.log(req.params);
    console.log(req.body);

    let cart = await Cart.findById(req.params.cartId);

    let product = req.body.product;
    let price = Number.parseInt(product.price);
    let currentTotal = cart.totalPrice;

    currentTotal += price;

    cart.products.push(product);
    cart.totalQuantity = cart.products.length;
    cart.totalPrice = currentTotal;
    cart.save();
    console.log(cart);

    res.send(cart);
  },
  subtractFromCart: async (req, res) => {
    console.log("---------------------------");
    console.log(req.params);
    console.log(req.body);

    let cart = await Cart.findById(req.params.cartId);

    let product = req.body.product;
    let price = Number.parseInt(product.price);
    let currentTotal = cart.totalPrice;

    currentTotal -= price;

    cart.products.pop(product);
    cart.totalQuantity = cart.products.length;
    cart.totalPrice = currentTotal;
    cart.save();
    console.log(cart);

    res.send(cart);
  },
};
