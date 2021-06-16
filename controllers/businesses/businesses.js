// const Business = require('../../models/Business');

// module.exports = {
//     create : async (req, res) =>{
//         const { name, address, phone, rating, photo } = req.body;
//         const business = await Business.create({
//             name,
//             address,
//             phone,
//             rating,
//             photo
//         })

//         return res.send(business)
//     },

//     find : async (req, res) => {
//         const business = await Business.find()
//         return res.send(user)
//     },
//     productsByBusiness : async (req, res) => {
//        const { id } = req.params;
//        const business = await Business.findById(id).populate('products');

//         res.send(business.products);
//     }
// }
