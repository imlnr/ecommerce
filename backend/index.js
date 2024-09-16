const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { userRouter } = require("./routes/user.routes");
const prodRouter = require("./routes/products.routes");
const { connection } = require("./config/db");
const { cartRouter } = require("./routes/cart.routes");
const { wishRouter } = require("./routes/wish.routes");
const swaggerJsdoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');
const { linkedinRouter } = require("./routes/linkedin.routes");
const PORT = process.env.PORT || 4500;
const app = express();

app.use(cors())
app.use(express.json())

app.use('/user', userRouter);
app.use('/products', prodRouter);
app.use('/cart', cartRouter);
app.use('/wishlist', wishRouter);
app.use('/linkedin', linkedinRouter);


const options = {
    definition: {
        openapi: '3.0.0',
        info: {
            title: 'User Management System',
            version: '1.0.0',
        },
        servers: [
            {
                url: 'https://ecommerce-eb1o.onrender.com'
            },
            {
                url: 'https://localhost:4500'
            }
        ]
    },
    apis: ['./routes/*.js'],
};

const openapiSpecification = swaggerJsdoc(options);

app.use("/apidocs", swaggerUi.serve, swaggerUi.setup(openapiSpecification))


app.listen(PORT, async () => {
    try {
        await connection
        console.log("Connected to db...")
        console.log("your server is running at http://localhost:4500")
    } catch (error) {
        console.log(error)
    }
})
