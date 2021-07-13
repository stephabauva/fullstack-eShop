if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
  };
//The dotenv is a zero-dependency module that loads environment variables 
//from a .env file into process.env.

//create entrance to server on port
const express = require('express');
//create entrance to the db
const connectDB = require("./config/db");

connectDB();

const app = express();

//get PORT env variable from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))