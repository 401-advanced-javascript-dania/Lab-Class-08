'use strict';
const express=require('express');
const categories=require('../models/categories/categories-model.js');
const router  =express.Router();
// Define our router
router.get('/categories',getCategories);
router.post('/categories',postCategories);
router.put('/categories',putCategories);
router.delete('/categories',deleteCategories);
 function getCategories(req,res,next){
     categories.get()
     .then(data=>{
         res.status(200).json(data);
     })
     .catch(next)
 }
 function postCategories(req,res,next){
     categories.create()
     .then(data=>{
         res.status(201).json(data);
     })
     .catch(next)
 }
 function putCategories(req,res,next){
    categories.update()
    .then(data=>{
        res.status(200).json(data)
    })
    .catch(next)
 }
 function deleteCategories(req,res,next){
     categories.delete()
      .then(data=>{
          res.status(200).json(data)
      })
      .catch(next)
 }
 module.exports=router;