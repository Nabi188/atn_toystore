const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
    const products = await ProductModel.find({}).populate('category_id');
    res.render('admin/index', {products, title: 'ATN Store'});
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



//step1: render "Add product" form for user to input data
router.get('/add', async (req, res) => {
    const categories = await CategoryModel.find({});
    res.render('admin/add', {categories});
})

//step2: receive input data from "Add product" form and add to database
router.post('/add', async (req, res) => {
    //get input data from form
    const product = req.body;
    //add data to database
    await ProductModel.create(product);
    res.redirect('/admin');
})

//step1: render "Edit product" form for user to input data
router.get('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const products = await ProductModel.findById(id);
    res.render('admin/edit', {products});
})

//step2: receive input data from "Edit product" form and update to database
router.post('/edit/:id', async (req, res) => {
    const id = req.params.id;
    const products = req.body;
    await ProductModel.findByIdAndUpdate(id, products);
    res.redirect('/admin');
})

router.get('/detail/:id', async (req, res) => {
    const id = req.params.id;
    const products = await ProductModel.findById(id).populate('category_id');
    res.render('detail', {products});
})

router.get('/sortprice/asc', async (req, res) => {
    const products = await ProductModel.find().sort({price: 1});
    console.log(products);
    res.render('admin/index', {products});
})

router.get('/sortprice/dsc', async (req, res) => {
    const products = await ProductModel.find().sort({price: -1});
    console.log(products);
    res.render('admin/index', {products});
})



module.exports = router;