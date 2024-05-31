/**
 * @swagger
 * tags:
 *   name: Wishlist
 *   description: Operations related to the user's wishlist
 */

const express = require('express');
const { cartnwish } = require('../middlewares/cartnwish.middleware');
const { WishModel } = require('../models/wishlist.model');
const wishRouter = express.Router();

/**
 * @swagger
 * /wishlist:
 *   get:
 *     summary: Retrieve wishlist items for a user
 *     tags: [Wishlist]
 *     parameters:
 *       - in: query
 *         name: userID
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       '202':
 *         description: A list of wishlist items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/WishlistItem'
 *       '505':
 *         description: Internal server error
 */
wishRouter.get('/', cartnwish, async (req, res) => {
    try {
        const wishData = await WishModel.find({ userID: req.body.userID }).populate('productData');
        res.status(202).json(wishData);
    } catch (error) {
        res.status(505).send({ "message": error.message });
    }
});

/**
 * @swagger
 * /wishlist:
 *   post:
 *     summary: Add an item to the wishlist
 *     tags: [Wishlist]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/WishlistItem'
 *     responses:
 *       '201':
 *         description: Item added successfully to wishlist
 *       '500':
 *         description: Internal server error
 */
wishRouter.post('/', cartnwish, async (req, res) => {
    try {
        const wish = new WishModel(req.body);
        await wish.save();
        res.status(201).send({ "message": "successfully added in wishlist" });
    } catch (error) {
        res.status(500).send({ "message": error.message });
    }
});

/**
 * @swagger
 * /wishlist/{id}:
 *   delete:
 *     summary: Remove an item from the wishlist
 *     tags: [Wishlist]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the item to remove
 *     responses:
 *       '200':
 *         description: Item removed successfully from the wishlist
 *       '403':
 *         description: Unauthorized to remove the item
 *       '500':
 *         description: Internal server error
 */
wishRouter.delete('/:id', cartnwish, async (req, res) => {
    const id = req.params.id;
    try {
        const wish = await WishModel.findById(id);
        if (!wish) {
            return res.status(404).json({ "error": "Wishlist item not found" });
        }
        if (wish.userID === req.body.userID) {
            await WishModel.findByIdAndDelete(id);
            res.status(200).send({ "message": "the item has been removed successfully" });
        } else {
            res.status(403).send({ "message": "you are not authorized to remove this item" });
        }
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});

module.exports = {
    wishRouter
};
