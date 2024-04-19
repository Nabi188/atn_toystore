var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
  const products = await ProductModel.find({});
  const categories = await CategoryModel.find({});
  console.log(products);
  console.log(categories)
  res.render('index', {products, categories, title: 'ATN Store'});
});

router.get('/detail/:id', async (req, res) => {
  var id = req.params.id;
  var products = await ProductModel.findById(id);
  res.render('detail', {products});
})

router.get('/thankyou', (req, res) => {
    res.render('thankyou');
})

module.exports = router;
