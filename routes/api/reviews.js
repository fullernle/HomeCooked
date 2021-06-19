const express = require("express");
const router = express.Router();
const Review = require("../../controllers/reviews/reviews");
const passport = require("passport");

router.get("/test", (req, res) =>
res.json({msg: "This is the reviews route"}));

router.post("/:id", passport.authenticate("jwt", { session: false }), Review.create);

module.exports = router;

