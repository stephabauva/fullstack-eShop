//get env variables config file
require('dotenv').config();
//create entrance to server on port
const express = require('express');

const app = express();

//get PORT env variable from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))