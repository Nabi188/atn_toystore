var express = require('express');
var router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

router.get('/', async (req, res) => {
  const productList = await ProductModel.find({});
  console.log(productList);
  res.render('index', {productList, title: 'ATN Store'});
});



module.exports = router;
