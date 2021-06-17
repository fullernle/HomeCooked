const express = require("express");
const router = express.Router();
const Cart = require("../../controllers/carts/carts")
const passport = require("passport");

router.get("/", passport.authenticate("jwt", { session: false }), Cart.getCart )
router.get("/:userId", passport.authenticate("jwt", { session: false }), Cart.getCart )

module.exports = router;

