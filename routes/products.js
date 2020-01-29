'use strict';
const express =require('express');
const product=require('../models/products/products-model.js');
const router =express.Router();
//Define our route
router.get('/products',getProducts);
router.post('/products',postProducts);
router.put('/products',putProducts);
router.delete('/products',deleteProducts);
function getProducts(req,res,next){
    product.get()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(next)
}
function postProducts(req,res,next){
    product.create(req.body)
    .then(data=>{
        res.status(201).json(data);
    })
    .catch(next)
}
function putProducts(req,res,next){
    product.update()
     .then(data=>{
         res.status(200).json(data)
     })
     .catch(next)
}
function deleteProducts(req,res,next){
    product.delete()
     .then(data=>{
         res.status(200).json(data)
     })
     .catch(next)
}
module.exports=router;