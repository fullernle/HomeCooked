const express = require("express");
const router = express.Router();
const Cart = require("../../controllers/carts/carts");
const passport = require("passport");

router.get(
  "/:userId",
  passport.authenticate("jwt", { session: false }),
  Cart.getCart
);
router.patch(
  "/:userId/add",
  passport.authenticate("jwt", { session: false }),
  Cart.addToCart
);
router.patch(
  "/:userId/subtract",
  passport.authenticate("jwt", { session: false }),
  Cart.subtractFromCart
);
module.exports = router;



