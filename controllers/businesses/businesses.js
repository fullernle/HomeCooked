const Business = require('../../models/Business');



module.exports = {
  create: async (req, res) => {
    const { name, latitude, longitude } = req.body;
    // const { coordinates } = req.body[0].coordinates
    // const { latitude } = req.body[0].coordinates[0].latitude
    // const { longitude } = req.body[0].coordinates[0].longitude
    const business = await Business.create({
      name,
      latitude,
      longitude,
    });

    return res.send(business);
  },

  find: async (req, res) => {
    const business = await Business.find();
    return res.send(business);
  },
  findBusiness: async (req, res) => {
    const { id } = req.params;
    const business = await Business.findById(id);

    res.send(business);
  },

  productsByBusiness: async (req, res) => {
    const { id } = req.params;
    const business = await Business.findById(id).populate("products");

    res.send(business.products);
  },
};
