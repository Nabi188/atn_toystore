var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
  const products = await ProductModel.find({}).populate('categories');
  const categories = await CategoryModel.find({});
  console.log(products);
  console.log(categories)
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
  let keyword = req.body.keyword;
  let search_products = await ProductModel.find({name: new RegExp(keyword, 'i')});
  res.render('search', {products: search_products});
})

module.exports = router;
