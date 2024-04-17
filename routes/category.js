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

module.exports = router;