
const express = require('express');
const categories = require('../models/categories/categories-model.js');
const router  = express.Router();
// Define our router
router.get('/categories',getCategories);
router.post('/categories',postCategories);
router.put('/categories/:id',putCategories);
router.delete('/categories/:id',deleteCategories);
function getCategories(req,res,next){
  categories.get()
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
function postCategories(req,res,next){
  categories.create(req.body)
    .then(data=>{
      res.status(201).json(data);
    })
    .catch(next);
}
function putCategories(req,res,next){
  categories.update(req.params.id,req.body)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
function deleteCategories(req,res,next){
  categories.delete(req.params.id)
    .then(data=>{
      res.status(200).json(data);
    })
    .catch(next);
}
module.exports = router;