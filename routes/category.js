var express = require('express');
var router = express.Router();
const CategoryModel = require('../models/CategoryModel');

//READ feature
router.get('/', async (req, res) => {
    var categoryList = await CategoryModel.find({});
    res.render('category/index', {categoryList});
});

router.get('/delete/:id', async (req, res) => {
    let id = req.params.id;
    await CategoryModel.findByIdAndDelete(id);
    res.redirect('/category');
});

//DELETE ALL feature
router.get('/delete-all', async (req, res) => {
    await CategoryModel.deleteMany({});
    res.redirect('/category');
})

//step1: render "Add category" form for user to input data
router.get('/add', async (req, res) => {
    res.render('category/add');
})

//step2: receive input data from "Add product" form and add to database
router.post('/add', async (req, res) => {
    //get input data from form
    const category = req.body;
    //add data to database
    await CategoryModel.create(category);
    res.redirect('/category');
})

//step1: render "Edit product" form for user to input data
router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const categories = await CategoryModel.findById(id);
    res.render('category/edit', {categories});
})

//step2: receive input data from "Edit product" form and update to database
router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const categories = req.body;
    await CategoryModel.findByIdAndUpdate(id, categories)
    res.redirect('/category');
})


module.exports = router;