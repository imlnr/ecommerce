// const express = require("express");
// const userRouter = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
// const { UserModel } = require("../models/user.model");


// userRouter.post('/register', async (req, res) => {
//     const { name, avatar, email, password } = req.body;
//     try {
//         const userexist = await UserModel.findOne({ email: email });
//         if (userexist) {
//             return res.status(400).json({ error: "User Already Register" });
//         }
//         bcrypt.hash(password, 8, async (err, hash) => {
//             if (hash) {
//                 const user = new UserModel({ name, email, avatar, password: hash });
//                 await user.save();
//                 res.status(201).send({ "msg": "New user has been registered successfully !" })
//             }
//             else {
//                 res.send({ "msg": "Error creating the hash", "error": err })
//             }
//         })
//     } catch (error) {
//         res.send({ "msg": error });
//     }
// });

// userRouter.post("/login", async (req, res) => {
//     const { email, password } = req.body;
//     try {
//         const user = await UserModel.findOne({ email });
//         if (!user) {
//             return res.status(402).json({ error: "User Does Not Exist" })
//         }
//         bcrypt.compare(password, user.password, (err, result) => {
//             if (result) {
//                 // , { expiresIn: '7d' }
//                 const token = jwt.sign({ userID: user._id, name: user.name }, "masai");
//                 res.json({ "msg": "Login successful!", token, user: { name: user.name, email: user.email, avatar: user.avatar } });
//             } else {
//                 console.log(err);
//                 res.status(403).send({ "error": "Wrong Credentials", err });
//             }
//         });
//     } catch (err) {
//         console.log(err);
//         res.status(500).send({ "error": err });
//     }
// });



// module.exports = {
//     userRouter
// }



/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operations related to user authentication
 */

const express = require("express");
const userRouter = express.Router();
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const { UserModel } = require("../models/user.model");

/**
 * @swagger
 * /users/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               avatar:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - name
 *               - email
 *               - password
 *     responses:
 *       '201':
 *         description: New user registered successfully
 *       '400':
 *         description: Bad request or user already exists
 *       '500':
 *         description: Internal server error
 */
userRouter.post('/register', async (req, res) => {
    const { name, avatar, email, password } = req.body;
    try {
        const userexist = await UserModel.findOne({ email: email });
        if (userexist) {
            return res.status(400).json({ error: "User Already Register" });
        }
        bcrypt.hash(password, 8, async (err, hash) => {
            if (hash) {
                const user = new UserModel({ name, email, avatar, password: hash });
                await user.save();
                res.status(201).send({ "msg": "New user has been registered successfully !" })
            }
            else {
                res.send({ "msg": "Error creating the hash", "error": err })
            }
        })
    } catch (error) {
        res.send({ "msg": error });
    }
});

/**
 * @swagger
 * /users/login:
 *   post:
 *     summary: Authenticate user and generate JWT token
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Login successful, returns JWT token
 *       '402':
 *         description: User does not exist
 *       '403':
 *         description: Wrong credentials
 *       '500':
 *         description: Internal server error
 */
userRouter.post("/login", async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UserModel.findOne({ email });
        if (!user) {
            return res.status(402).json({ error: "User Does Not Exist" })
        }
        bcrypt.compare(password, user.password, (err, result) => {
            if (result) {
                const token = jwt.sign({ userID: user._id, name: user.name }, "masai");
                res.json({ "msg": "Login successful!", token, user: { name: user.name, email: user.email, avatar: user.avatar } });
            } else {
                res.status(403).send({ "error": "Wrong Credentials", err });
            }
        });
    } catch (err) {
        res.status(500).send({ "error": err });
    }
});

module.exports = {
    userRouter
}
