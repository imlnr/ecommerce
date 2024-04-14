const express = require('express');
const { CartModel } = require('../models/cart.model');
const { cartnwish } = require('../middlewares/cartnwish.middleware');
const cartRouter = express.Router();

cartRouter.get('/', cartnwish, async (req, res) => {
    try {
        const cartData = await CartModel.find({ userID: req.body.userID }).populate('productData');
        res.status(202).json(cartData);
    } catch (error) {
        res.status(505).send({ "msg": error.message })
    }
})

cartRouter.post('/', cartnwish, async (req, res) => {
    const { productData } = req.body;
    try {
        const existItem = await CartModel.findOne({ productData: productData });
        if (existItem) {
            return res.status(400).send({ "message": "Product is already in Cart" })
        }
        const cart = new CartModel(req.body);
        await cart.save();
        res.status(201).send({ "message": "sucessfully added to cart" })
    } catch (error) {
        res.status(500).send({ "message": error.message })
    }
})

cartRouter.delete('/:id', cartnwish, async (req, res) => {
    const id = req.params.id;
    try {
        const cart = await CartModel.findOne({ _id: id });
        if (cart.userID === req.body.userID) {
            await CartModel.findByIdAndDelete({ _id: id });
            res.send({ "message": "the item has been removed from cart" });
        }
        else {
            res.status(403).send({ "message": "you are not authorized to remove this item" });
        }
    } catch (error) {
        res.status(500).send({ "error": error.message })
    }
})

module.exports = {
    cartRouter
}