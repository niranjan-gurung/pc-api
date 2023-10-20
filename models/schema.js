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

const userSchema = new Schema({
    username: { 
        type: String,
        unique: true,
        required: true
    },
    password: { 
        type: String,
        minLength: 6,
        required: true
    },
    role: {
        type: String,
        default: 'Basic',
        required: true        
    }
});
  
const Product = model('Product', productSchema);
const User = model('User', userSchema);

// model export:
module.exports = { 
    Product, 
    User
};