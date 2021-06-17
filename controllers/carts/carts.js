const Cart = require('../../models/Cart');

module.exports = {
  // addToCart : async (req, res) => {
  //   const { productId, quantity, name, price } = req.body;

  //   const user = req.params.user.id 
  //   //need to figure out how to get logged in user id
  // }
    createCart : async (req, res) => {
      // console.log(req.params);
      const { hello } = req.body;
      const cart = Cart.create({
        hello,
      })

      return res.send(req.body)
    }
}