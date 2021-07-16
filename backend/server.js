if (process.env.NODE_ENV !== 'production') {
    require("dotenv").config();
  };
//The dotenv is a zero-dependency module that loads environment variables 
//from a .env file into process.env.


const express = require('express'); //create entrance to server on port
const connectDB = require("./config/db"); //create entrance to the db
const productRoutes = require('./routes/productRoutes'); //import route
const path = require(`path`);

connectDB();


const app = express();

//fetch data and individual products:
//use json data
app.use(express.json());
//give /api/products url access to route ./routes/productRoutes
app.use('/api/products', productRoutes)

//(for heroku) this is for our heroku server to serve our app

if(process.env.NODE_ENV === "production") {
  //first middleware: give express access to the build folder
  app.use(express.static(path.join(__dirname, "../client/build")));

  //2nd middleware: everytime we do a get on our server, we server the built index.html
  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, "client", "build", "index.html"))
  })
} else {
  app.get('/', (req, res) => {
    res.send('Api running; development')
  })
}

//get PORT env variable from .env
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`server running on port ${PORT}`))