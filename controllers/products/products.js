const Product = require('../../models/Product');
// const Business = require('../../models/Business');

module.exports = {
    create : async (req, res) => {

        console.log(req.params);
        business = req.params;
        id = business.id;
        const { name, price, category, quantity} = req.body;
        const product = await Product.create({
            name,
            price,
            category,
            quantity,
            business:id
        });
        await product.save();

        const businessById = await Business.findById(id);

        businessById.products.push(product);
        await businessById.save();

        return res.send(businessById);
    },

    find : async (req, res) => {
      const products = await Product.find()
      return res.send(products)
    },

    businessByProduct : async (req,res)=>{
        const { id } = req.params;
        const businessByProduct = await Product.findById(id).populate('business');
        res.send(businessByProduct);
    }
}