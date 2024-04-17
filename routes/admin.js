const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
    const productList = await ProductModel.find({});
    res.render('admin/index', {productList, title: 'ATN Store'});
});

//DELETE feature
router.get('/delete/:id', async (req, res) => {
    let id = req.params.id;
    await ProductModel.findByIdAndDelete(id);
    //console.log("Delete product succeed !");
    res.redirect('/admin');
})

//DELETE ALL feature
router.get('/delete-all', async (req, res) => {
    await ProductModel.deleteMany({});
    res.redirect('/admin');
})



//step1: render "Add student" form for user to input data
router.get('/add', async (req, res) => {
    var categories = await CategoryModel.find({});
    res.render('admin/add', {categories});
})

//step2: receive input data from "Add student" form and add to database
router.post('/add', async (req, res) => {
    //get input data from form
    var student = req.body;
    //add data to database
    await StudentModel.create(student);
    res.redirect('/student');
})

module.exports = router;