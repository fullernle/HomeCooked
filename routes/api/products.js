const express = require("express");
const router = express.Router();
const Product = require("../../controllers/products/products")
const Business = require("../../controllers/businesses/businesses")

router.get("/test", (req, res) =>
  res.json({ msg: "This is the products route" })
);

router.post("/create/:id", Product.create);
router.post("/populate/:id", Product.businessByProduct)

module.exports = router;
