const mongoose = require('mongoose')

const cartSchema = mongoose.Schema({
    userID: { type: String, required: true },
    productData: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true, unique: true },
    added_at: { type: Date, default: Date.now }
}, {
    versionKey: false
});

const CartModel = mongoose.model('cart', cartSchema);

module.exports = {
    CartModel
}