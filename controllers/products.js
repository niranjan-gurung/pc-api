const Product = require('../models/schema');

const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find({});
        res.status(200).json({ products });
    } catch (error) {
        res.status(500).json({ msg: error });
    }
}

// product test insert:
//const pc1 = Product.create({});

module.exports = {
    getAllProducts,
};