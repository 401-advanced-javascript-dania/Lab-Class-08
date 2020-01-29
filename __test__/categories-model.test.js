'use strict';
const supergoose=require('@code-fellows/supergoose');
const categories =require('../models/categories/categories-model.js');
let testObj={name:'test'};
describe('Categories Model',()=>{
    it('can create() a new categories',()=>{
return categories.create(testObj)
.then(record=>{
    Object.keys(testObj).forEach(key=>{
        expect(record[key]).toEqual(testObj[key])
    })
})
    })
    it ('can get() categories',()=>{
        return categories.get()
        .then(record=>{
            Object.keys(testObj).forEach(key=>{
                expect(record[0][key]).toEqual(testObj[key])
            })
        })
    })
})