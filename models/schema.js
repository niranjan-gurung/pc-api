const mongoose = require('mongoose');
const { Schema, model } = mongoose;

// data model/structure
// schema:
const productSchema = new Schema({
    title: { 
        type: String,
        required: [true, 'cannot pass empty product..'],
    },
    price: Number,
    description: String,
    category: String,
});
  
// model export:
module.exports = model('Product', productSchema);