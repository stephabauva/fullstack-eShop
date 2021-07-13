//Populate the MongoDB database:
//delete everything that is the databse currently and 
//insert what is in our model: product data

if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  };
//The dotenv is a zero-dependency module that loads environment variables 
//from a .env file into process.env.

const productData = require("./data/products");
const connectDB = require("./config/db");
const Product = require("./models/Product");

connectDB();

const importData = async () => {
  try {
    await Product.deleteMany({});

    await Product.insertMany(productData);

    console.log("Data Import Success");

    process.exit();
  } catch (error) {
    console.error("Error with data import", error);
    process.exit(1);
  }
};

importData();