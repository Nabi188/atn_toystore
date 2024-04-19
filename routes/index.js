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



module.exports = router;
