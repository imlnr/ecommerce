const express = require('express');
const { cartnwish } = require('../middlewares/cartnwish.middleware');
const { WishModel } = require('../models/wishlist.model');
// const { CartModel } = require('../models/cart.model');
const wishRouter = express.Router();

wishRouter.get('/', cartnwish, async (req, res) => {
    try {
        const wishData = await WishModel.find({ userID: req.body.userID })
        res.status(202).json(wishData);
    } catch (error) {
        res.status(505).send({ "message": error.message })
    }
})


wishRouter.post('/', cartnwish, async (req, res) => {
    try {
        const wish = new WishModel(req, body);
        await wish.save();
        res.status(201).send({ "message": "successfully added in wishlist" });
    } catch (error) {
        res.status(500).send({ "message": error.message })
    }
})

wishRouter.delete('/:id', cartnwish, async (req, res) => {
    const id = req.params.id;
    try {
        const wish = await WishModel.findOne({ _id: id });
        if (wish.userID === req.body.userID) {
            await WishModel.findByIdAndDelete({ _id: id });
            res.send({ "message": "the item has been removed successfully" });
        }
        else {
            res.status(403).send({ "message": "you are not authorized to remove this item" })
        }
    } catch (error) {
        res.status(500).send({ "error": error.message })

    }
})


module.exports = {
    wishRouter
}