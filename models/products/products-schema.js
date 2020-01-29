
'use strict';
const mongoose=require('mongoose');
const products=mongoose.Schema({
            price:{type:'number',required:true},
            weight:{type:'number',required:true},
            quantity_in_stock:{type:'number',required:true}    
})
module.exports=mongoose.model('products',products)