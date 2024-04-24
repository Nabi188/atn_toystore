var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
  const products = await ProductModel.find({}).populate('category_id');
  const categories = await CategoryModel.find({});
  // console.log(products);
  // console.log(categories)
  res.render('index', {products, categories, title: 'ATN Store'});
});

router.get('/detail/:id', async (req, res) => {
  const id = req.params.id;
  const products = await ProductModel.findById(id);
  res.render('detail', {products});
})

router.get('/thankyou', (req, res) => {
    res.render('thankyou');
})

//search by name
router.post('/search', async (req, res) => {
  const keyword = req.body.keyword;
  const search_products = await ProductModel.find({name: new RegExp(keyword, 'i')});
  res.render('search', {products: search_products});
})

router.get('/sortprice/asc', async (req, res) => {
    const products = await ProductModel.find().sort({price: 1});
    console.log(products);
    res.render('index', {products});
})

router.get('/sortprice/dsc', async (req, res) => {
    const products = await ProductModel.find().sort({price: -1});
    console.log(products);
    res.render('index', {products});
})

module.exports = router;
