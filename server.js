const express = require('express');
const app = express();
const cors = require("cors");
const productsRoute = require('./routes/products');

const connectDB = require('./db/connect');
require('dotenv').config();

const DB_URI = process.env.MONGO_URI;
const PORT = process.env.PORT || 5000; 

// middleware
app.use(express.json());
app.use(cors());

// router
app.use('/products', productsRoute);

const start = async () => {
    try {
        await connectDB(DB_URI);
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}...`);
        });
    } catch (error) {
        console.log(error);
    }
}
  
start();