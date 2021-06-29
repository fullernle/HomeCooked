// const Business = require('../../models/Business');
const Review = require('../../models/Review');

module.exports = {
  create : async (req, res) => {
    business = req.params;
    id = business.businessId;
    console.log(id)
    // console.log(business)
    // console.log(req.params)
    const { body } = req.body;
    const review = await Review.create({
      body,
      business:id
    });
    await review.save();

    const businessById = await Business.findById(id);
    console.log(businessById);

    businessById.reviews.push(review);
    await businessById.save();

    return res.send(review);
  },

  fetchAllReviews : async (req, res) => {
    const reviews = await Review.find()
    return res.send(reviews)
  },
}