const express = require('express');
const { ProductModel } = require('../models/products.model');
const { auth } = require('../middlewares/auth.middleware');
const prodRouter = express.Router();
prodRouter.get('/', async (req, res) => {
    try {
        const products = await ProductModel.find();
        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

prodRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductModel.findById({_id:id});
        if (!product) {
            return res.status(404).json({ error: 'product not found' });
        }
        res.json(product)
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error." })
    }
})



prodRouter.post('/', auth, async (req, res) => {
    const { title, price, description, category, image, rating } = req.body;
    try {
        const product = new ProductModel({
            title, price, description, category, image, rating
        });
        await product.save();
        res.status(201).json({ "message": "product added Successfully..." });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

prodRouter.patch('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const isthere = await ProductModel.findOne({ _id: id });
        if (!isthere) {
            return res.status(404).json({ "error": "product not found" });
        }
        await ProductModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
        // res.json(updatedProduct);
        res.status(202).send({ "message": "Product updated successfully" })
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


prodRouter.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const isthere = await ProductModel.findOne({ _id: id });
        if (!isthere) {
            return res.status(404).json({ "error": "Product not found" });
        }
        await ProductModel.findByIdAndDelete({_id:id});
        res.status(200).json({ "message": "Product deleted successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});


module.exports = prodRouter;
