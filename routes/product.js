const express = require('express');
const router = express.Router();
const ProductModel = require('../models/ProductModel');
const CategoryModel = require('../models/CategoryModel');

//READ feature
router.get('/', async (req, res) => {
    const productList = await ProductModel.find({});
    console.log(productList);
    res.render('store/index', {productList});
});


module.exports = router;