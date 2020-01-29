'use strict';
//3rd party dependencies
require('dotenv').config();
const express= require('express');
const morgan=require('morgan');
const cors = require('cors');
//applications constants
const app=express();
// Import our Custom Routes
const categoriesRoute=require('../routes/categories.js')
const productsRoute=require('../routes/products.js')
// Use our custom routes
app.use('/api/v1/',categoriesRoute);
app.use('/api/v1/',productsRoute)
//3rd party middle-ware
app.use(cors());
app.use(morgan('dev'))
app.use(express.json())
//1st party middle-ware

module.exports={
    server:app,
    start:port=>{
        let PORT =port||process.env.PORT||3000;
        app.listen(PORT,()=>console.log(`listen on ${PORT}`))
    }
}
