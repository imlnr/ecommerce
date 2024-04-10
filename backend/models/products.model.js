const mongoose = require("mongoose");


const productSchema = mongoose.Schema({
    title: { type: String, required: true },
    price: { type: Number, required: true },
    description: { type: String, required: true },
    category: { type: String, required: true },
    image: { type: String, required: true },
    rating: { type: { rate: { type: Number, default: 0 }, count: { type: Number, default: 0 } }, required: true }
}, {
    versionKey: false
})

const ProductModel = mongoose.model("product", productSchema);

module.exports = {
    ProductModel
}