const express = require("express");
const router = express.Router();
const Business = require("../../controllers/businesses/businesses")

router.post('/', Business.create);
router.get('/', Business.find);
router.get('/:id', Business.findBusiness);
router.post('/:id', Business.findBusiness);
router.get('/:id/products', Business.productsByBusiness);



module.exports = router;
