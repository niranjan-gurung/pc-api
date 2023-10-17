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
// const pc1 = Product.create({
//     title: 'Gaming PC 6',
//     price: 2100,
//     description: 'AMD Ryzen™ 7 5800X3D, NVIDIA® GeForce RTX™ 4070 Ti, 32 GB (2 x 16GB) DDR4 3600 MHz, B550 Motherboard, 1TB NVMe M.2 SSD, 750W Gold',
//     category: 'Gaming PCs'
// });

module.exports = {
    getAllProducts,
};