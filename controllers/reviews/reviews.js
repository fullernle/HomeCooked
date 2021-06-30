// const Business = require('../../models/Business');
const Business = require('../../models/Business');
const Review = require('../../models/Review');

module.exports = {
  create : async (req, res) => {
    business = req.params;
    id = business.businessId;
    // console.log(business)
    let request = req.body;
    let username = request.username;
    let body = request.body;
    let rating = request.rating;
    // const { body } = req.body;
    // const { username } = req.body;
    // const { rating } = req.body;
    const review = await Review.create({
      body,
      business:id,
      username,
      rating
    });
    await review.save();
    

    const businessById = await Business.findById(id);

    businessById.reviews.push(review);
    await businessById.save();

    return res.send(review);
  },

  fetchAllReviews : async (req, res) => {
    business = req.params;
    id = business.businessId;
    // console.log(id)
    const businessById = await Business.findById(id);

    res.send(businessById.reviews);
  },
}