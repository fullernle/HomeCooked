const Cart = require('../../models/Cart');

module.exports = {
  addToCart : async (req, res) => {
    const { user, products } = req.body

    try {
      let cart = await Cart.findBy(user)
      if (cart) {
        return res.send(cart)
      } else {
        cart = await Cart.create({
          products
        })
        cart.save();
        return res.send(cart)
      }
    } catch {
      //where we return an error if above fails
    }
  },

};

// When user is logged in, if no cart exists, create cart for user
