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

	updateCart: async(req, res) => {
		const userId = req.params.userId;
		let objectUserId = mongoose.Types.ObjectId(userId);

		try {
			let cart = await Cart.findOne({userId: objectUserId});

			let currCart = req.body;

			cart.products = currCart.products;
			cart.totalQuantity = currCart.totalQuantity;
			cart.totalPrice = currCart.totalPrice;
			cart.save();

			return res.send(cart);

		} catch (error) {
			return console.log(error)
		}
		
	},

  addToCart: async (req, res) => {
    // let cart = await Cart.findById(req.params.cartId);
    const userId = req.params.userId;
    let objectUserId = mongoose.Types.ObjectId(userId);
    let cart = await Cart.findOne({ userId: objectUserId });

    let product = req.body;
    let price = Number.parseInt(product.price);
    let currentTotal = cart.totalPrice;

    currentTotal += price;

    cart.products.push(product);
    cart.totalQuantity = cart.products.length;
    cart.totalPrice = currentTotal;
    cart.save();

    res.send(cart);
  },

  subtractFromCart: async (req, res) => {
    // let cart = await Cart.findById(req.params.cartId);
    const userId = req.params.userId;
    let objectUserId = mongoose.Types.ObjectId(userId);
    let cart = await Cart.findOne({ userId: objectUserId });

    let product = req.body;
    let price = Number.parseInt(product.price);
    let currentTotal = cart.totalPrice
		let i = cart.products.indexOf(product);
	

    currentTotal -= price;
    cart.products.splice(i, 1);
    cart.totalQuantity = cart.products.length;
    cart.totalPrice = currentTotal;
    cart.save();

    res.send(cart);
  },
};
