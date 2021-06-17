const express = require("express");
const router = express.Router();
const Cart = require("../../controllers/carts/carts")

router.post("/:userId", Cart.createCart )


module.exports = router;