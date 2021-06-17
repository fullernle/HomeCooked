const express = require("express");
const router = express.Router();
const Cart = require("../../controllers/carts/carts")
const passport = require("passport");

router.post("/", passport.authenticate("jwt", { session: false }), Cart.getCart )


module.exports = router;

