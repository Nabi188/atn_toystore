const mongoose = require('mongoose');
const ProductSchema = mongoose.Schema(
    {
        sku: {
            type: String,
        },
        name: {
            type: String,
        },
        description: {
            type: String,
        },
        image: {
            type: String,
        },
        price: {
            type: Number,
            min: 1
        },
        category_id: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'categories'
        }
    }
)
const ProductModel = mongoose.model('products', ProductSchema);
module.exports = ProductModel;
