// const express = require('express');
// const { CartModel } = require('../models/cart.model');
// const { cartnwish } = require('../middlewares/cartnwish.middleware');
// const cartRouter = express.Router();

// cartRouter.get('/', cartnwish, async (req, res) => {
//     try {
//         const cartData = await CartModel.find({ userID: req.body.userID }).populate('productData');
//         res.status(202).json(cartData);
//     } catch (error) {
//         res.status(505).send({ "msg": error.message })
//     }
// })

// cartRouter.post('/', cartnwish, async (req, res) => {
//     const { productData } = req.body;
//     try {
//         const existItem = await CartModel.findOne({ productData: productData });
//         if (existItem) {
//             return res.status(400).send({ "message": "Product is already in Cart" })
//         }
//         const cart = new CartModel(req.body);
//         await cart.save();
//         res.status(201).send({ "message": "sucessfully added to cart" })
//     } catch (error) {
//         res.status(500).send({ "message": error.message })
//     }
// })

// cartRouter.delete('/:id', cartnwish, async (req, res) => {
//     const id = req.params.id;
//     try {
//         const cart = await CartModel.findOne({ _id: id });
//         if (cart.userID === req.body.userID) {
//             await CartModel.findByIdAndDelete({ _id: id });
//             res.send({ "message": "the item has been removed from cart" });
//         }
//         else {
//             res.status(403).send({ "message": "you are not authorized to remove this item" });
//         }
//     } catch (error) {
//         res.status(500).send({ "error": error.message })
//     }
// })

// module.exports = {
//     cartRouter
// }




/**
 * @swagger
 * components:
 *   schemas:
 *     Cart:
 *       type: object
 *       properties:
 *         userID:
 *           type: string
 *         productData:
 *           type: object
 *       required:
 *         - userID
 *         - productData
 */

/**
 * @swagger
 * tags:
 *   name: Cart
 *   description: Operations related to the user's cart
 */

const express = require('express');
const { CartModel } = require('../models/cart.model');
const { cartnwish } = require('../middlewares/cartnwish.middleware');
const cartRouter = express.Router();

/**
 * @swagger
 * /cart:
 *   get:
 *     summary: Retrieve cart items for a user
 *     tags: [Cart]
 *     parameters:
 *       - in: query
 *         name: userID
 *         schema:
 *           type: string
 *         required: true
 *         description: The ID of the user
 *     responses:
 *       '202':
 *         description: A list of cart items
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Cart'
 *       '505':
 *         description: Internal server error
 */
cartRouter.get('/', cartnwish, async (req, res) => {
    try {
        const cartData = await CartModel.find({ userID: req.body.userID }).populate('productData');
        res.status(202).json(cartData);
    } catch (error) {
        res.status(505).send({ "msg": error.message })
    }
})

/**
 * @swagger
 * /cart:
 *   post:
 *     summary: Add an item to the cart
 *     tags: [Cart]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Cart'
 *     responses:
 *       '201':
 *         description: Item added successfully
 *       '400':
 *         description: Product is already in cart
 *       '500':
 *         description: Internal server error
 */
cartRouter.post('/', cartnwish, async (req, res) => {
    const { productData } = req.body;
    try {
        const existItem = await CartModel.findOne({ productData: productData });
        if (existItem) {
            return res.status(400).send({ "message": "Product is already in Cart" })
        }
        const cart = new CartModel(req.body);
        await cart.save();
        res.status(201).send({ "message": "successfully added to cart" })
    } catch (error) {
        res.status(500).send({ "message": error.message })
    }
})

/**
 * @swagger
 * /cart/deleteall:
 *   delete:
 *     summary: Clear all items in the cart for a user
 *     tags: [Cart]
 *     responses:
 *       '200':
 *         description: All cart items cleared
 *       '500':
 *         description: Internal server error
 */

cartRouter.delete('/deleteall', cartnwish, async (req, res) => {
    try {
        await CartModel.deleteMany({ userID: req.body.userID });
        res.status(200).send({ "message": "All the cart items are cleared" });
    } catch (error) {
        res.status(500).send({ "error": error.message });
    }
});

/**
 * @swagger
 * /cart/{id}:
 *   delete:
 *     summary: Remove an item from the cart
 *     tags: [Cart]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the item to remove
 *     responses:
 *       '200':
 *         description: Item removed successfully
 *       '403':
 *         description: Unauthorized to remove the item
 *       '500':
 *         description: Internal server error
 */
cartRouter.delete('/:id', cartnwish, async (req, res) => {
    const id = req.params.id;
    try {
        const cart = await CartModel.findOne({ _id: id });
        if (cart.userID === req.body.userID) {
            await CartModel.findByIdAndDelete({ _id: id });
            res.status(200).send({ "message": "the item has been removed from cart" });
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
