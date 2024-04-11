const mongoose = require('mongoose')

const wishSchema = mongoose.Schema({
    userID: { type: String, required: true },
    productData: { type: mongoose.Schema.Types.ObjectId, ref: 'product', required: true },
    added_at: { type: Date, default: Date.now }
}, {
    versionKey: false
});

const WishModel = mongoose.model('wishlist', wishSchema);


module.exports = {
    WishModel
}