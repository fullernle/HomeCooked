const Cart = require('../../models/Cart');

module.exports = {
  addToCart : async (req, res) => {
    const { productId, quantity, name, price } = req.body;

    const user = req.params.user_id
  }
}