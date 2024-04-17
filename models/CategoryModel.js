const mongoose = require('mongoose');
const CategorySchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        image: {
            type: String,
            required: true
        }
    }
);

const CategoryModel = mongoose.model('categories', CategorySchema);
module.exports = CategoryModel;