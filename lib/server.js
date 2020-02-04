
//3rd party dependencies
require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
//applications constants
const app = express();
//1st party middle-ware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));
// Import our Custom Routes
const categoriesRoute = require('../routes/categories.js');
const productsRoute = require('../routes/products.js');
//errors
const error404 = require('../middleware/404.js');
const error500 = require('../middleware/500.js');
// Use our custom routes
app.use('/api/v1/',categoriesRoute);
app.use('/api/v1/',productsRoute);
app.use(error404);
app.use(error500);
//3rd party middle-ware

module.exports = {
  server:app,
  start:port=>{
    let PORT = port || process.env.PORT || 3000;
    app.listen(PORT,()=>console.log(`listen on ${PORT}`));
  },
};
