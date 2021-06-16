// const express = require("express");
// const router = express.Router();
// const mongoose = require("mongoose");
// const passport = require("passport");

// const Business = require("../../models/Business");





// router.post(
//   "/",
//   passport.authenticate("jwt", { session: false }),

//   (req, res) => {
//     const newBusiness = new Business({
//       name: req.body.name,
//       address: req.body.address,
//       phone: req.body.phone,
//       rating: req.body.rating,
//     });

//     newBusiness.save().then((business) => res.json(business));
//   }
// );

// module.exports = router;
const express = require("express");
const router = express.Router();
const Business = require("../../controllers/businesses/businesses")

router.post('/', Business.create);
router.get('/', Business.find);
router.get('/:id', Business.productsByBusiness);

// router.get("/", (req, res) => {
//   Business.find()
//     .sort({ date: -1 })
//     .then((businesses) => res.json(businesses))
//     .catch((err) =>
//       res.status(404).json({ nobusinessesfound: "No businesses found" })
//     );
// });




module.exports = router;
