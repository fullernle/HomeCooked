const express = require("express");
const router = express.Router();
const Product = require("../../controllers/products/products")
const Business = require("../../controllers/businesses/businesses")

router.get("/test", (req, res) =>
  res.json({ msg: "This is the products route" })
);

router.post("/:id", Product.create);
// router.get("/:id/business", Product.businessByProduct);
router.get("/", Product.find);
router.patch("/:id/sub", Product.subtractQuantity);
router.patch("/:id/add", Product.addQuantity);

module.exports = router;
