'use strict';
const schema= require('./categories-schema.js')
const Model =require('../models.js')
class Categories extends Model{
    constructor(){
        super(schema);
    }
}
module.exports= new Categories();