// const express = require('express');
// const { ProductModel } = require('../models/products.model');
// const { auth } = require('../middlewares/auth.middleware');
// const prodRouter = express.Router();
// // prodRouter.get('/', async (req, res) => {
// //     try {
// //         const products = await ProductModel.find();
// //         res.json(products);
// //     } catch (error) {
// //         res.status(500).json({ message: error.message });
// //     }
// // });


// prodRouter.get('/', async (req, res) => {
//     try {
//         const { category, sortBy, sortOrder } = req.query;
//         let sortCriteria = {};
//         let sortOrderValue = 1;

//         if (sortOrder && sortOrder.toLowerCase() === 'desc') {
//             sortOrderValue = -1;
//         }

//         if (sortBy === 'price') {
//             sortCriteria = { price: sortOrderValue };
//         } else if (sortBy === 'rating') {
//             sortCriteria = { 'rating.rate': sortOrderValue };
//         }

//         let query = category ? { category } : {};

//         const products = await ProductModel.find(query).sort(sortCriteria);

//         res.json(products);
//     } catch (error) {
//         res.status(500).json({ message: error.message });
//     }
// });


// prodRouter.get('/:id', async (req, res) => {
//     const id = req.params.id;
//     try {
//         const product = await ProductModel.findById({ _id: id });
//         if (!product) {
//             return res.status(404).json({ error: 'product not found' });
//         }
//         res.json(product)
//     } catch (error) {
//         console.error(error);
//         res.status(500).json({ error: "Internal Server Error." })
//     }
// })



// prodRouter.post('/', auth, async (req, res) => {
//     const { title, price, description, category, image, rating } = req.body;
//     try {
//         const product = new ProductModel({
//             title, price, description, category, image, rating
//         });
//         await product.save();
//         res.status(201).json({ "message": "product added Successfully..." });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });

// prodRouter.patch('/:id', auth, async (req, res) => {
//     const id = req.params.id;
//     try {
//         const isthere = await ProductModel.findOne({ _id: id });
//         if (!isthere) {
//             return res.status(404).json({ "error": "product not found" });
//         }
//         await ProductModel.findByIdAndUpdate({ _id: id }, req.body, { new: true });
//         // res.json(updatedProduct);
//         res.status(202).send({ "message": "Product updated successfully" })
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });


// prodRouter.delete('/:id', auth, async (req, res) => {
//     const id = req.params.id;
//     try {
//         const isthere = await ProductModel.findOne({ _id: id });
//         if (!isthere) {
//             return res.status(404).json({ "error": "Product not found" });
//         }
//         await ProductModel.findByIdAndDelete({ _id: id });
//         res.status(200).json({ "message": "Product deleted successfully" });
//     } catch (error) {
//         res.status(400).json({ message: error.message });
//     }
// });


// module.exports = prodRouter;



/**
 * @swagger
 * components:
 *   schemas:
 *     Product:
 *       type: object
 *       properties:
 *         title:
 *           type: string
 *         price:
 *           type: number
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         image:
 *           type: string
 *         rating:
 *           type: object
 *           properties:
 *             rate:
 *               type: number
 *             count:
 *               type: integer
 *       required:
 *         - title
 *         - price
 *         - description
 *         - category
 *         - image
 *         - rating
 */

/**
 * @swagger
 * tags:
 *   name: Products
 *   description: Operations related to products
 */

const express = require('express');
const { ProductModel } = require('../models/products.model');
const { auth } = require('../middlewares/auth.middleware');
const prodRouter = express.Router();

/**
 * @swagger
 * /products:
 *   get:
 *     summary: Retrieve all products
 *     tags: [Products]
 *     parameters:
 *       - in: query
 *         name: category
 *         schema:
 *           type: string
 *         description: Filter by category
 *       - in: query
 *         name: sortBy
 *         schema:
 *           type: string
 *         description: Sort by field (e.g., 'price' or 'rating')
 *       - in: query
 *         name: sortOrder
 *         schema:
 *           type: string
 *         description: Sort order ('asc' or 'desc')
 *     responses:
 *       '200':
 *         description: A list of products
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Product'
 *       '500':
 *         description: Internal server error
 */
prodRouter.get('/', async (req, res) => {
    try {
        const { category, sortBy, sortOrder } = req.query;
        let sortCriteria = {};
        let sortOrderValue = 1;

        if (sortOrder && sortOrder.toLowerCase() === 'desc') {
            sortOrderValue = -1;
        }

        if (sortBy === 'price') {
            sortCriteria = { price: sortOrderValue };
        } else if (sortBy === 'rating') {
            sortCriteria = { 'rating.rate': sortOrderValue };
        }

        let query = category ? { category } : {};

        const products = await ProductModel.find(query).sort(sortCriteria);

        res.json(products);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

/**
 * @swagger
 * /products/{id}:
 *   get:
 *     summary: Retrieve a single product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to retrieve
 *     responses:
 *       '200':
 *         description: A product object
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Product'
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */
prodRouter.get('/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ error: 'Product not found' });
        }
        res.json(product);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Internal Server Error." });
    }
});

/**
 * @swagger
 * /products:
 *   post:
 *     summary: Add a new product
 *     tags: [Products]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '201':
 *         description: Product added successfully
 *       '400':
 *         description: Bad request
 *       '500':
 *         description: Internal server error
 */
prodRouter.post('/', auth, async (req, res) => {
    const { title, price, description, category, image, rating } = req.body;
    try {
        const product = new ProductModel({ title, price, description, category, image, rating });
        await product.save();
        res.status(201).json({ "message": "Product added successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /products/{id}:
 *   patch:
 *     summary: Update a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to update
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Product'
 *     responses:
 *       '202':
 *         description: Product updated successfully
 *       '400':
 *         description: Bad request
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */
prodRouter.patch('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ "error": "Product not found" });
        }
        await ProductModel.findByIdAndUpdate(id, req.body, { new: true });
        res.status(202).json({ "message": "Product updated successfully" });
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});

/**
 * @swagger
 * /products/{id}:
 *   delete:
 *     summary: Delete a product by ID
 *     tags: [Products]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID of the product to delete
 *     responses:
 *       '200':
 *         description: Product deleted successfully
 *       '404':
 *         description: Product not found
 *       '500':
 *         description: Internal server error
 */
prodRouter.delete('/:id', auth, async (req, res) => {
    const id = req.params.id;
    try {
        const product = await ProductModel.findById(id);
        if (!product) {
            return res.status(404).json({ "error": "Product not found" });
        }
        await ProductModel.findByIdAndDelete(id);
        res.status(200).json({ "message": "Product deleted successfully" });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = prodRouter;
