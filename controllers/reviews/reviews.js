// const Business = require('../../models/Business');
const Review = require('../../models/Review');

module.exports = {
  create : async (req, res) => {
    business = req.params;
    id = business.id;
    // console.log(req.params)
    const { body } = req.body;
    const review = await Review.create({
      body,
      business:id
    });
    await review.save();

    const businessById = await Business.findById(id);

    businessById.reviews.push(review);
    await businessById.save();

    return res.send(businessById);
  },

  fetchAllReviews : async (req, res) => {
    const reviews = await Review.find()
    return res.send(reviews)
  },
}